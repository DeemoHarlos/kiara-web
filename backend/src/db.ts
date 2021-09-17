import { getSheetData } from './spreadsheet'

const SPREADSHEETID = '10Sc7SZIQTJmL2P8bKWC7qLY5CBIfKH0Y979_XCyUCdk'

export enum SHEET {
  COVERFANARTS = 'COVERFANARTS',
  ARCHIEVE = 'ARCHIEVE',
  MUSIC = 'MUSIC',
}

type KEY = string | number
type VALUE = string | number

const arrayToObject = (keys: KEY[], arr: VALUE[]) =>
  arr.reduce((acc, value, index) => ({
    ...acc,
    [keys[index]]: value,
  }), {} as Record<KEY, VALUE>)

export const getData = async (sheet: SHEET): Promise<Record<KEY, VALUE>[]> => {
  const data = await getSheetData(SPREADSHEETID, sheet)
  const keys = data[0] as KEY[]
  const valueArrays = data.slice(3) as VALUE[][]
  const values = valueArrays.map(arr => arrayToObject(keys, arr))
  return values
}