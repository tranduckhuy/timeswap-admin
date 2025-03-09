import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './context/theme-provider'
import Dashboard from './pages/dashboard'
import User from './pages/user'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<User />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
