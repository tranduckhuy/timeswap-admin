import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-black'>
      <h1 className='text-6xl font-semibold text-black dark:text-white'>404</h1>
      <p className='text-lg text-gray-700 dark:text-gray-300'>This page could not be found.</p>
      <Link to='/' className='mt-4'>
        <Button className=' bg-blue-500 hover:bg-blue-600 text-white'>Go Home</Button>
      </Link>
    </div>
  )
}

export default ErrorPage
