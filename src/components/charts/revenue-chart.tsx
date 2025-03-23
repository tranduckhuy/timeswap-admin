import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
const chartData = [
  { date: '2024-01-01', revenue: 0 },
  { date: '2024-01-02', revenue: 0 },
  { date: '2024-01-03', revenue: 0 },
  { date: '2024-01-04', revenue: 0 },
  { date: '2024-01-05', revenue: 0 },
  { date: '2024-01-06', revenue: 0 },
  { date: '2024-01-07', revenue: 0 },
  { date: '2024-01-08', revenue: 0 },
  { date: '2024-01-09', revenue: 0 },
  { date: '2024-01-10', revenue: 0 },
  { date: '2024-01-11', revenue: 0 },
  { date: '2024-01-12', revenue: 0 },
  { date: '2024-01-13', revenue: 0 },
  { date: '2024-01-14', revenue: 0 },
  { date: '2024-01-15', revenue: 50000 },
  { date: '2024-01-16', revenue: 60000 },
  { date: '2024-01-17', revenue: 0 },
  { date: '2024-01-18', revenue: 70000 },
  { date: '2024-01-19', revenue: 80000 },
  { date: '2024-01-20', revenue: 0 },
  { date: '2024-01-21', revenue: 50000 },
  { date: '2024-01-22', revenue: 8000 },
  { date: '2024-01-23', revenue: 80000 },
  { date: '2024-01-24', revenue: 0 },
  { date: '2024-01-25', revenue: 0 },
  { date: '2024-01-26', revenue: 50000 },
  { date: '2024-01-27', revenue: 60000 },
  { date: '2024-01-28', revenue: 0 },
  { date: '2024-01-29', revenue: 10000 },
  { date: '2024-01-30', revenue: 50000 },
  { date: '2024-01-31', revenue: 0 },
  { date: '2024-02-01', revenue: 0 },
  { date: '2024-02-02', revenue: 50000 },
  { date: '2024-02-03', revenue: 90000 },
  { date: '2024-02-04', revenue: 0 },
  { date: '2024-02-05', revenue: 0 },
  { date: '2024-02-06', revenue: 40000 },
  { date: '2024-02-07', revenue: 70000 },
  { date: '2024-02-08', revenue: 80000 },
  { date: '2024-02-09', revenue: 2000 },
  { date: '2024-02-10', revenue: 0 },
  { date: '2024-02-11', revenue: 60000 },
  { date: '2024-02-12', revenue: 90000 },
  { date: '2024-02-13', revenue: 20000 },
  { date: '2024-02-14', revenue: 0 },
  { date: '2024-02-15', revenue: 0 },
  { date: '2024-02-16', revenue: 0 },
  { date: '2024-02-17', revenue: 70000 },
  { date: '2024-02-18', revenue: 60000 },
  { date: '2024-02-19', revenue: 20000 },
  { date: '2024-02-20', revenue: 0 },
  { date: '2024-02-21', revenue: 0 },
  { date: '2024-02-22', revenue: 60000 },
  { date: '2024-02-23', revenue: 70000 },
  { date: '2024-02-24', revenue: 40000 },
  { date: '2024-02-25', revenue: 80000 },
  { date: '2024-02-26', revenue: 0 },
  { date: '2024-02-27', revenue: 10000 },
  { date: '2024-02-28', revenue: 50000 },
  { date: '2024-03-01', revenue: 0 },
  { date: '2024-03-02', revenue: 10000 },
  { date: '2024-03-03', revenue: 50000 },
  { date: '2024-03-04', revenue: 0 },
  { date: '2024-03-05', revenue: 70000 },
  { date: '2024-03-06', revenue: 30000 },
  { date: '2024-03-07', revenue: 0 },
  { date: '2024-03-08', revenue: 0 },
  { date: '2024-03-09', revenue: 50000 },
  { date: '2024-03-10', revenue: 60000 },
  { date: '2024-03-11', revenue: 0 },
  { date: '2024-03-12', revenue: 50000 },
  { date: '2024-03-13', revenue: 60000 },
  { date: '2024-03-14', revenue: 0 },
  { date: '2024-03-15', revenue: 80000 },
  { date: '2024-03-16', revenue: 0 },
  { date: '2024-03-17', revenue: 30000 },
  { date: '2024-03-18', revenue: 10000 },
  { date: '2024-03-19', revenue: 0 },
  { date: '2024-03-20', revenue: 50000 },
  { date: '2024-03-21', revenue: 80000 },
  { date: '2024-03-22', revenue: 70000 },
  { date: '2024-03-23', revenue: 3000 },
  { date: '2024-03-24', revenue: 0 },
  { date: '2024-03-25', revenue: 0 },
  { date: '2024-03-26', revenue: 0 },
  { date: '2024-03-27', revenue: 7000 },
  { date: '2024-03-28', revenue: 0 },
  { date: '2024-03-29', revenue: 0 },
  { date: '2024-03-30', revenue: 0 },
  { date: '2024-03-31', revenue: 0 }
]

const chartConfig = {
  views: {
    label: 'Page Views'
  },
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

const RevenueChart = () => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('revenue')

  const total = React.useMemo(
    () => ({
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0)
    }),
    []
  )

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Revenue from Transactions</CardTitle>
          <CardDescription>Revenue generated from transactions</CardDescription>
        </div>
        <div className='flex'>
          {['revenue'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-xs text-muted-foreground'>{chartConfig[chart].label}</span>
                <span className='text-lg font-bold leading-none sm:text-3xl'>
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
