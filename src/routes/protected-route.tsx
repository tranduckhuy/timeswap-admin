import { useAuthStore } from '@/store/auth-store'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.token)

  return token ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoute
