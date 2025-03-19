import { IRequestResponse } from '@/types/api'
import axiosInstance from '../axios.customize'

export interface IVisitorData {
  id: number
  month: number
  year: number
  visitCount: number
}

export interface IVisitorRequest {
  startYear: number
  startMonth: number
  endYear: number
  endMonth: number
}

export const getMonthlyVisitors = async (data: IVisitorRequest): Promise<IRequestResponse<IVisitorData[]>> => {
  try {
    const response = await axiosInstance.get<IRequestResponse<IVisitorData[]>>('/visitors', { params: data })

    if (response.status === 200) {
      return response.data
    }

    throw new Error('Failed to get monthly visitors')
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An unexpected error occurred')
  }
}
