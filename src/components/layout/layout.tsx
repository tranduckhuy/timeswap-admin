import AppSidebar from './sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '../ui/sidebar'
import Header from './header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className='min-h-screen w-full mx-auto px-4 py-8'>
          <Outlet />
          <Toaster />
        </main>
        <footer className='border-t backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <div className='container mx-auto px-4 py-8 text-center text-gray-500'>
            <p className='font-bold'>Made with ❤️ by tranduckhuy</p>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
