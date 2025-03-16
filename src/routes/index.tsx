import Layout from '@/components/layout/layout'
import LoginPage from '@/pages/auth/login'
import Dashboard from '@/pages/dashboard/dashboard'
import ErrorPage from '@/pages/error/error-page'
import JobPost from '@/pages/jobpost/jobpost'
import User from '@/pages/user/user'
import ProtectedRoute from '@/routes/protected-route'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'users', element: <User /> },
          { path: 'jobpost', element: <JobPost /> }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])
