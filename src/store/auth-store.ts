import { create } from 'zustand'
import { storage } from '@/utils/storage'
import { IUserProfile } from '@/types/user'
import { getProfile } from '@/services/api/auth-service'

interface AuthState {
  token: string | null
  user: IUserProfile | null
  setToken: (token: string) => void
  clearToken: () => void
  fetchUserProfile: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  token: storage.getToken(),
  user: null,
  setToken: (token) => {
    storage.setToken(token)
    set({ token })
  },
  clearToken: () => {
    storage.removeToken()
    set({ token: null, user: null })
  },
  fetchUserProfile: async () => {
    try {
      const response = await getProfile()
      if (response.data) {
        set({ user: response.data })
      } else {
        console.error('Failed to fetch user profile:', response.message)
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }
}))
