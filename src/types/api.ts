import { AxiosError } from 'axios'

export interface IRequestResponse<T = null> {
  statusCode: number
  data?: T
  message?: string
  errors?: string[]
}

export interface PagingData<T> {
  pageIndex: number
  pageSize: number
  count: number
  data: T[]
}

export type TRequestResponseError<T = null> = AxiosError<IRequestResponse<T>> | null
