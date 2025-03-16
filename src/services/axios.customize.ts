import axios, { AxiosError } from 'axios'
import { API_CONFIG } from './api/config'
import { IRequestResponse } from '@/types/api'
import { useAuthStore } from '@/store/auth-store'

const axiosInstance = axios.create({
  baseURL: API_CONFIG.API_AUTH_URL,
  headers: { 'Content-Type': 'application/json' }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const { statusCode, message } = response.data

    // Successful response
    if (statusCode >= 1000 && statusCode < 2000) {
      return response
    }

    return Promise.reject(message || 'Request failed')
  },
  (error: AxiosError<IRequestResponse>) => {
    const { response } = error
    if (response?.status === 401) {
      useAuthStore.getState().clearToken()
      return Promise.reject(new Error('Session expired. Please log in again.'))
    }
    return Promise.reject(new Error(error.response?.data?.message || 'An unexpected error occurred'))
  }
)

export default axiosInstance
