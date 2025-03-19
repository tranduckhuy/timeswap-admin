import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
const chartData = [
  { month: 'January', applied: 13 },
  { month: 'February', applied: 23 },
  { month: 'March', applied: 31 },
  { month: 'April', applied: 0 },
  { month: 'May', applied: 0 },
  { month: 'June', applied: 0 }
]

const chartConfig = {
  applied: {
    label: 'Applied',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

const AppliedChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Job Applications</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
            <Bar dataKey='applied' fill='var(--color-applied)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 34.7% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>Showing total applications for the last 6 months</div>
      </CardFooter>
    </Card>
  )
}

export default AppliedChart
