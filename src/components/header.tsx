import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <header className='sticky top-0 z-50 pt-2 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'>
      <div className='container mx-auto flex justify-between items-center px-4 h-16'>
        <Link to='/'>
          <img src={isDark ? 'vite.svg' : '/logo-light.svg'} alt='Timeswap Logo' className='h-14' />
        </Link>

        <div>
          {/* Search */}
          {/* Theme toggle */}
          <div
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center transition-transform duration-500 cursor-pointer
              ${isDark ? 'rotate-180' : 'rotate-0'}
              `}
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
