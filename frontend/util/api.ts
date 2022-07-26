import axios from 'axios'

const API_ROOT =
  process.env.NODE_ENV === 'production'
    ? 'http://cloud.harlos.me:2434/'
    : 'http://localhost:2434/'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getApiData = async <T>(resource: string, pagination?: { page: number, per: number }, filter?: any) => {
  const paginationQuery = pagination || {}
  const filterString = filter ? JSON.stringify(filter) : '{}'
  const queryString = new URLSearchParams({ ...paginationQuery, filter: filterString })
  const response = await axios.get(`${API_ROOT}${resource}?${queryString.toString()}`)
  return response.data as Array<T>
}
