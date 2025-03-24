import { create } from 'zustand'
import { storage } from '@/utils/storage'
import { IUserProfile } from '@/types/user'
import { getProfile } from '@/services/api/auth-service'
import { toast } from 'sonner'

interface AuthState {
  token: string | null
  expiresAt: number | null
  user: IUserProfile | null
  isLoading: boolean
  setToken: (token: string, expiresIn: number) => void
  clearToken: () => void
  fetchUserProfile: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  token: storage.getToken(),
  expiresAt: storage.getExpiresAt(),
  user: null,
  isLoading: false,
  setToken: (token, expiresIn) => {
    const expiresAt = Date.now() + expiresIn * 1000
    storage.setToken(token)
    storage.setExpiresAt(expiresAt)
    set({ token, expiresAt })
  },
  clearToken: () => {
    storage.removeToken()
    storage.removeExpiresAt()
    set({ token: null, user: null, expiresAt: null })
  },
  fetchUserProfile: async () => {
    set({ isLoading: true })
    try {
      const expiresAt = storage.getExpiresAt()
      if (expiresAt && Date.now() >= expiresAt) {
        toast.error('Session expired. Please login again')
        set({ token: null, user: null, expiresAt: null })
        return
      }

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
