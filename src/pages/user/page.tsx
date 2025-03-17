import * as React from 'react'

import { Badge } from '@/components/ui/badge'
import { columns } from '@/components/user/columns'
import { DataTable } from '@/components/user/data-table'
import { getUserList } from '@/services/api/user-service'
import { IUserProfile } from '@/types/user'
import { toast } from 'sonner'

const UserPage = () => {
  const [data, setData] = React.useState<IUserProfile[]>([])

  // pagination
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await getUserList({ currentPage, pageSize })

        if (response.data?.count !== total) {
          setTotal(response.data!.count)
        }

        if (response.data?.pageIndex !== currentPage) {
          setCurrentPage(response.data!.pageIndex)
        }

        if (response.data!.pageSize !== pageSize) {
          setPageSize(response.data!.pageSize)
        }

        setData(response.data!.data)
      } catch (error) {
        toast.error(error.message)
      }
    }

    fetchUserList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        currentPage={currentPage}
        pageSize={pageSize}
        total={total}
        onPageChange={handlePageChange}
      />

      <div>
        <Badge variant='outline' className='text-sm font-semibold text-blue-600 bg-blue-50 border-blue-200'>
          Total: {total} user(s)
        </Badge>
      </div>
    </div>
  )
}

export default UserPage
