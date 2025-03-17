import { create } from 'zustand'
import { storage } from '@/utils/storage'
import { IUserProfile } from '@/types/user'
import { getProfile } from '@/services/api/auth-service'
import { toast } from 'sonner'

interface AuthState {
  token: string | null
  user: IUserProfile | null
  isLoading: boolean
  setToken: (token: string) => void
  clearToken: () => void
  fetchUserProfile: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  token: storage.getToken(),
  user: null,
  isLoading: false,
  setToken: (token) => {
    storage.setToken(token)
    set({ token })
  },
  clearToken: () => {
    storage.removeToken()
    set({ token: null, user: null })
  },
  fetchUserProfile: async () => {
    set({ isLoading: true })
    try {
      const response = await getProfile()
      if (response.data) {
        set({ user: response.data })
      } else {
        toast.error(response.message || 'Failed to get user profile')
      }
    } catch (error) {
      set({ user: null })
      toast.error(error.message || 'An unexpected error occurred')
    } finally {
      set({ isLoading: false })
    }
  }
}))
