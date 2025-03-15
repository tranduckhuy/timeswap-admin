import {
  Bell,
  Briefcase,
  FileText,
  Frame,
  LucideLayoutDashboard,
  Map,
  MessageSquare,
  PieChart,
  Settings,
  ShieldCheck,
  User
} from 'lucide-react'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'
import { NavMain, NavOthers, NavUser } from './nav'
import { useAuthStore } from '@/store/auth-store'

const data = {
  navMain: [
    {
      title: 'Users',
      url: '#',
      icon: User,
      isActive: true,
      items: [
        {
          title: 'User List',
          url: '/users'
        },
        {
          title: 'Payment History',
          url: '/users/payments'
        },
        {
          title: 'Reviews & Ratings',
          url: '/users/reviews'
        }
      ]
    },
    {
      title: 'Job Posts',
      url: '#',
      icon: Briefcase,
      items: [
        {
          title: 'Job Post List',
          url: '/jobs'
        },
        {
          title: 'Applications',
          url: '/applications',
          icon: MessageSquare
        },
        {
          title: 'Job Categories',
          url: '/jobs/categories',
          icon: FileText
        }
      ]
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'General',
          url: '/settings/general',
          icon: Settings
        },
        {
          title: 'Security',
          url: '/settings/security',
          icon: ShieldCheck
        }
      ]
    }
  ],
  others: [
    {
      name: 'Notifications',
      url: '/notifications',
      icon: Bell
    },
    {
      name: 'Software Engineering',
      url: '#',
      icon: Frame
    },
    {
      name: 'AI & Machine Learning',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Cloud Computing',
      url: '#',
      icon: Map
    }
  ]
}

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { user, clearToken } = useAuthStore()

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='/'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <LucideLayoutDashboard className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-semibold'>Timeswap</span>
                  <span>Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavOthers others={data.others} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} clearToken={clearToken} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
