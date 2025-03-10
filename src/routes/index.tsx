import Layout from '@/components/layout/layout'
import Dashboard from '@/pages/dashboard'
import User from '@/pages/user'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
