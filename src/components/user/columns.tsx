import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Copy, CreditCardIcon, Lock, MoreHorizontal, Unlock, User2Icon } from 'lucide-react'

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
import { Ward } from '@/types/ward'
import { toast } from 'sonner'
import { lockUserAccount, unlockUserAccount } from '@/services/api/user-service'

const subscriptionPlanLabels = ['Basic', 'Standard', 'Premium']

export const columns = ({
  setData
}: {
  setData: React.Dispatch<React.SetStateAction<IUserProfile[]>>
}): ColumnDef<IUserProfile>[] => [
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
    accessorKey: 'ward',
    header: 'Full location',
    cell: ({ row }) => <div className='capitalize'>{row.getValue<Ward>('ward')?.fullLocation || 'N/A'}</div>
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
    accessorKey: 'currentSubscription',
    header: 'Subscription plan',
    cell: ({ row }) => (
      <div className='capitalize'>{subscriptionPlanLabels[row.original.currentSubscription] || 'N/A'}</div>
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

      const handleLockUnlock = async () => {
        try {
          if (user.isLocked) {
            await unlockUserAccount({ userId: user.id })
            toast.success('Account unlocked successfully')
          } else {
            await lockUserAccount({ userId: user.id })
            toast.success('Account locked successfully')
          }

          setData((prevData) => prevData.map((u) => (u.id === user.id ? { ...u, isLocked: !u.isLocked } : u)))
        } catch (error) {
          toast.error(error.message)
        }
      }

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
            <DropdownMenuItem onClick={handleLockUnlock}>
              {user.isLocked ? <Unlock /> : <Lock />}
              {user.isLocked ? 'Unlock Account' : 'Lock Account'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
