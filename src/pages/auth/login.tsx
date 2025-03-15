import LoginForm from '@/components/login/login-form'
import { Toaster } from 'sonner'

const LoginPage = () => {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <div className='flex items-center gap-2 self-center font-medium'>
          <img src='logo-1.png' alt='Timeswap Logo' className='h-14' />
        </div>
        <LoginForm />
      </div>
      <Toaster />
    </div>
  )
}

export default LoginPage
