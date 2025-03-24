import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './context/theme-provider'
import { router } from './routes'
import { useEffect } from 'react'
import { useAuthStore } from './store/auth-store'

const queryClient = new QueryClient()

const AuthInit = () => {
  const { token, user, fetchUserProfile } = useAuthStore()

  useEffect(() => {
    if (token && !user) {
      fetchUserProfile()
    }
  }, [token, user, fetchUserProfile])

  return null
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <AuthInit />
        <RouterProvider router={router} />
        <Toaster position='top-right' richColors />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
