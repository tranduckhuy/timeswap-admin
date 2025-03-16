const TOKEN_KEY = 'access_token'

export const storage = {
  getToken: () => (typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null),
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  removeToken: () => localStorage.removeItem(TOKEN_KEY)
}
