import Layout from '@/components/layout/layout'
import Login from '@/pages/auth/login'
import Dashboard from '@/pages/dashboard'
import ErrorPage from '@/pages/error/error-page'
import JobPost from '@/pages/jobpost/jobpost'
import User from '@/pages/user/user'
import ProtectedRoute from '@/routes/protected-route'
import { createBrowserRouter } from 'react-router-dom'

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path='/login' element={<Login />} />

//       <Route element={<ProtectedRoute />}>
//         <Route element={<Layout />}>
//           <Route path='/' element={<Dashboard />} />
//           <Route path='/users' element={<User />} />
//           <Route path='/jobpost' element={<JobPost />} />
//         </Route>
//       </Route>

//       {/* Error Page */}
//       <Route path='*' element={<ErrorPage />} />
//     </Routes>
//   )
// }

// export default AppRoutes

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
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
