import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/theme-provider'
import { router } from './routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
