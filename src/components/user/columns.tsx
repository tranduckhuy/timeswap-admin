import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Copy, CreditCardIcon, Lock, MoreHorizontal, User2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IUserProfile } from '@/types/user'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'

const subscriptionPlanLabels = ['Free', 'Basic', 'Premium']

export const columns: ColumnDef<IUserProfile>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>
  },
  {
    accessorKey: 'fullName',
    header: 'Full name',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('fullName')}</div>
  },
  {
    accessorKey: 'fullLocation',
    header: 'Full location',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('fullLocation') || 'N/A'}</div>
  },
  {
    accessorKey: 'educationHistory',
    header: 'Education history',
    cell: ({ row }) => {
      const history = row.getValue<string[]>('educationHistory')
      return <div className='capitalize'>{history?.join(', ') || 'N/A'}</div>
    }
  },
  {
    accessorKey: 'subscriptionPlan',
    header: 'Subscription plan',
    cell: ({ row }) => (
      <div className='capitalize'>{subscriptionPlanLabels[row.original.subscriptionPlan] || 'N/A'}</div>
    )
  },
  {
    accessorKey: 'subscriptionExpiryDate',
    header: 'Subscription expiry date',
    cell: ({ row }) => {
      const rawDate = row.getValue<string>('subscriptionExpiryDate')
      const formattedDate = rawDate ? format(new Date(rawDate), 'dd/MM/yyyy HH:mm', { locale: vi }) : 'N/A'

      return <div className='capitalize'>{formattedDate}</div>
    }
  },
  {
    accessorKey: 'balance',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('balance'))

      const formatted = new Intl.NumberFormat('vn', {
        style: 'currency',
        currency: 'VND'
      }).format(amount)

      return <div className='text-right font-medium'>{formatted}</div>
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
              <Copy /> Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User2Icon /> View user
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon /> View payment details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Lock /> Lock Account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
