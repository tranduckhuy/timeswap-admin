import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../ui/breadcrumb'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <header className='sticky top-0 z-50 pt-2 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'>
      <div className='mx-auto flex justify-between items-center px-8 h-16'>
        <div className='flex items-center space-x-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='w-px h-6 bg-border' />

          <Link to='/'>
            <img src='logo-1.png' alt='Timeswap Logo' className='h-10' />
          </Link>

          <Separator orientation='vertical' className='w-px h-6 bg-border' />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          {/* Search */}
          <div
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center transition-transform duration-500 cursor-pointer
            ${isDark ? 'rotate-180' : 'rotate-0'}`}
          >
            {isDark ? (
              <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' />
            ) : (
              <Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all' />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
