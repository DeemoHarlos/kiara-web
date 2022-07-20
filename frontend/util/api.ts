import axios from 'axios'

const API_ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://cloud.harlos.me:2434/'
    : 'http://localhost:2434/'

type getApiDataFunc = <T>(resource: string) => Promise<Array<T>>
export const getApiData: getApiDataFunc = async <T>(resource: string) => {
  const response = await axios.get(`${API_ROOT}${resource}`)
  return response.data as Array<T>
}
