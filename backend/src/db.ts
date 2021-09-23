import moment from 'moment'

import { getSheetData } from './spreadsheet'

const SPREADSHEETID = '10Sc7SZIQTJmL2P8bKWC7qLY5CBIfKH0Y979_XCyUCdk'

export enum SHEET {
  COVERFANARTS = 'COVERFANARTS',
  ARCHIEVE = 'ARCHIEVE',
  MUSIC = 'MUSIC',
}

type KEY = string | number
type VALUE = string | number
type TYPE = string
type FORMAT = string
type DATA = string | number | Date | boolean | null | DATA[]
type KeyInfo = {
  name: KEY
  type?: TYPE
  format?: FORMAT
}

type arrayToObjectFunc = (keys: KeyInfo[], arr: VALUE[]) => Record<KEY, VALUE>
const arrayToObject: arrayToObjectFunc = (keys, arr) =>
  arr.reduce(
    (acc, value, index) => ({
      ...acc,
      [keys[index].name]: typeConvert(
        value,
        keys[index].type,
        keys[index].format,
      ),
    }),
    {},
  )

type typeConvertFunc = (v: VALUE, vtype?: TYPE, format?: FORMAT) => DATA
const typeConvert: typeConvertFunc = (v, vtype = 'string', format?) => {
  if (v === '') return null
  if (vtype.endsWith('[]')) {
    const valueType = vtype.slice(0, -2)
    return String(v)
      .split('\n')
      .map((value) => typeConvert(value, valueType, format))
  }
  switch (vtype) {
  case 'string':
    return String(v)
  case 'number':
    return Number(v)
  case 'boolean':
    if (typeof v === 'string')
      return ['FALSE', 'X', 'N', '?', '-'].includes(v)
    return !!v
  case 'Date':
    return moment(v, format).toDate()
  default:
    return v
  }
}

export const getData = async (sheet: SHEET): Promise<Record<KEY, VALUE>[]> => {
  const data = await getSheetData(SPREADSHEETID, sheet)
  const types = data[1] as TYPE[]
  const formats = data[2] as FORMAT[]
  const keys: KeyInfo[] = data[0].map((key, i) => ({
    name: key,
    type: types[i],
    format: formats[i],
  }))
  const valueArrays = data.slice(3) as VALUE[][]
  const values = valueArrays.map((arr) => arrayToObject(keys, arr))
  return values
}
