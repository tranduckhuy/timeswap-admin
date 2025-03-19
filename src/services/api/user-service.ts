import { IRequestResponse, PagingData } from '@/types/api'
import { IUserProfile, ILockUnlockUserAccountRequest } from '@/types/user'
import axiosInstance from '../axios.customize'

export const getUserList = async ({
  currentPage,
  pageSize
}: {
  currentPage: number
  pageSize: number
}): Promise<IRequestResponse<PagingData<IUserProfile>>> => {
  try {
    const response = await axiosInstance.get<IRequestResponse<PagingData<IUserProfile>>>('/users', {
      params: {
        pageIndex: currentPage,
        pageSize: pageSize
      }
    })

    if (response.data) {
      return response.data
    }

    throw new Error('Failed to get user list')
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An unexpected error occurred')
  }
}

export const lockUserAccount = async (data: ILockUnlockUserAccountRequest): Promise<IRequestResponse<null>> => {
  try {
    const response = await axiosInstance.post<IRequestResponse<null>>('/auth/lock-account', data)

    if (response.data) {
      return response.data
    }

    throw new Error('Failed to lock user account')
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An unexpected error occurred')
  }
}

export const unlockUserAccount = async (data: ILockUnlockUserAccountRequest): Promise<IRequestResponse<null>> => {
  try {
    const response = await axiosInstance.post<IRequestResponse<null>>('/auth/unlock-account', data)

    if (response.data) {
      return response.data
    }

    throw new Error('Failed to unlock user account')
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An unexpected error occurred')
  }
}
