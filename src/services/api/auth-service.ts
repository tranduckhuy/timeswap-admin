import axios, { AxiosError } from 'axios'
import { API_CONFIG } from './config'
import { IRequestResponse } from '@/types/api'
import axiosInstance from '../axios.customize'
import { IUserProfile } from '@/types/user'

interface LoginResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export const login = async (email: string, password: string): Promise<IRequestResponse<LoginResponse>> => {
  try {
    const response = await axios.post<IRequestResponse<LoginResponse>>(`${API_CONFIG.API_AUTH_URL}/auth/login`, {
      email,
      password
    })

    if (response.data.data) {
      return response.data
    }
    throw new Error(response.data.message || 'Login failed')
  } catch (error) {
    const axiosError = error as AxiosError<IRequestResponse>
    throw new Error(axiosError.response?.data?.message || 'An unexpected error occurred')
  }
}

export const getProfile = async (): Promise<IRequestResponse<IUserProfile>> => {
  const { data } = await axiosInstance.get<IRequestResponse<IUserProfile>>('/users/profile')
  return data
}

export const logout = async (): Promise<IRequestResponse> => {
  const { data } = await axiosInstance.delete<IRequestResponse>('/auth/logout')
  return data
}
