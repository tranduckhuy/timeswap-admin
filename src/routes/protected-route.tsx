import { useAuthStore } from '@/store/auth-store'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)

  if (!token) {
    return <Navigate to='/login' />
  }

  return user ? <Outlet /> : null
}

export default ProtectedRoute
