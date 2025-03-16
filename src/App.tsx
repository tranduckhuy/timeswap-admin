import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/theme-provider'
import { router } from './routes'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <RouterProvider router={router} />
        <Toaster position='top-right' richColors />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
