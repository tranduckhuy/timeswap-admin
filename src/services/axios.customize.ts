import axios from 'axios'
import { API_CONFIG } from './api/config'

const axiosInstance = axios.create({
  baseURL: API_CONFIG.API_AUTH_URL
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined' && window && window.localStorage && window.localStorage.getItem('authToken')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
