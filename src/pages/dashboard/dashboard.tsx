import AppliedChart from '@/components/charts/applied-chart'
import RevenueChart from '@/components/charts/revenue-chart'
import AppliedJobPostChart from '@/components/charts/jobpost-applied-chart'
import VisitorChart from '@/components/charts/visistor-chart'
import UserGrowthChart from '@/components/charts/user-chart'

const Dashboard = () => {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='aspect-video rounded-xl bg-muted/50'>
          <AppliedChart />
        </div>
        <div className='aspect-video rounded-xl bg-muted/50'>
          <VisitorChart />
        </div>
        <div className='aspect-video rounded-xl bg-muted/50'>
          <UserGrowthChart />
        </div>
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min'>
        <AppliedJobPostChart />
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min'>
        <RevenueChart />
      </div>
    </div>
  )
}

export default Dashboard
