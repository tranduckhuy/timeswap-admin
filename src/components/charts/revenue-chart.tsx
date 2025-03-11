import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
const chartData = [
  { date: '2024-04-01', revenue: 222, mobile: 150 },
  { date: '2024-04-02', revenue: 97, mobile: 180 },
  { date: '2024-04-03', revenue: 167, mobile: 120 },
  { date: '2024-04-04', revenue: 242, mobile: 260 },
  { date: '2024-04-05', revenue: 373, mobile: 290 },
  { date: '2024-04-06', revenue: 301, mobile: 340 },
  { date: '2024-04-07', revenue: 245, mobile: 180 },
  { date: '2024-04-08', revenue: 409, mobile: 320 },
  { date: '2024-04-09', revenue: 59, mobile: 110 },
  { date: '2024-04-10', revenue: 261, mobile: 190 },
  { date: '2024-04-11', revenue: 327, mobile: 350 },
  { date: '2024-04-12', revenue: 292, mobile: 210 },
  { date: '2024-04-13', revenue: 342, mobile: 380 },
  { date: '2024-04-14', revenue: 137, mobile: 220 },
  { date: '2024-04-15', revenue: 120, mobile: 170 },
  { date: '2024-04-16', revenue: 138, mobile: 190 },
  { date: '2024-04-17', revenue: 446, mobile: 360 },
  { date: '2024-04-18', revenue: 364, mobile: 410 },
  { date: '2024-04-19', revenue: 243, mobile: 180 },
  { date: '2024-04-20', revenue: 89, mobile: 150 },
  { date: '2024-04-21', revenue: 137, mobile: 200 },
  { date: '2024-04-22', revenue: 224, mobile: 170 },
  { date: '2024-04-23', revenue: 138, mobile: 230 },
  { date: '2024-04-24', revenue: 387, mobile: 290 },
  { date: '2024-04-25', revenue: 215, mobile: 250 },
  { date: '2024-04-26', revenue: 75, mobile: 130 },
  { date: '2024-04-27', revenue: 383, mobile: 420 },
  { date: '2024-04-28', revenue: 122, mobile: 180 },
  { date: '2024-04-29', revenue: 315, mobile: 240 },
  { date: '2024-04-30', revenue: 454, mobile: 380 },
  { date: '2024-05-01', revenue: 165, mobile: 220 },
  { date: '2024-05-02', revenue: 293, mobile: 310 },
  { date: '2024-05-03', revenue: 247, mobile: 190 },
  { date: '2024-05-04', revenue: 385, mobile: 420 },
  { date: '2024-05-05', revenue: 481, mobile: 390 },
  { date: '2024-05-06', revenue: 498, mobile: 520 },
  { date: '2024-05-07', revenue: 388, mobile: 300 },
  { date: '2024-05-08', revenue: 149, mobile: 210 },
  { date: '2024-05-09', revenue: 227, mobile: 180 },
  { date: '2024-05-10', revenue: 293, mobile: 330 },
  { date: '2024-05-11', revenue: 335, mobile: 270 },
  { date: '2024-05-12', revenue: 197, mobile: 240 },
  { date: '2024-05-13', revenue: 197, mobile: 160 },
  { date: '2024-05-14', revenue: 448, mobile: 490 },
  { date: '2024-05-15', revenue: 473, mobile: 380 },
  { date: '2024-05-16', revenue: 338, mobile: 400 },
  { date: '2024-05-17', revenue: 499, mobile: 420 },
  { date: '2024-05-18', revenue: 315, mobile: 350 },
  { date: '2024-05-19', revenue: 235, mobile: 180 },
  { date: '2024-05-20', revenue: 177, mobile: 230 },
  { date: '2024-05-21', revenue: 82, mobile: 140 },
  { date: '2024-05-22', revenue: 81, mobile: 120 },
  { date: '2024-05-23', revenue: 252, mobile: 290 },
  { date: '2024-05-24', revenue: 294, mobile: 220 },
  { date: '2024-05-25', revenue: 201, mobile: 250 },
  { date: '2024-05-26', revenue: 213, mobile: 170 },
  { date: '2024-05-27', revenue: 420, mobile: 460 },
  { date: '2024-05-28', revenue: 233, mobile: 190 },
  { date: '2024-05-29', revenue: 78, mobile: 130 },
  { date: '2024-05-30', revenue: 340, mobile: 280 },
  { date: '2024-05-31', revenue: 178, mobile: 230 },
  { date: '2024-06-01', revenue: 178, mobile: 200 },
  { date: '2024-06-02', revenue: 470, mobile: 410 },
  { date: '2024-06-03', revenue: 103, mobile: 160 },
  { date: '2024-06-04', revenue: 439, mobile: 380 },
  { date: '2024-06-05', revenue: 88, mobile: 140 },
  { date: '2024-06-06', revenue: 294, mobile: 250 },
  { date: '2024-06-07', revenue: 323, mobile: 370 },
  { date: '2024-06-08', revenue: 385, mobile: 320 },
  { date: '2024-06-09', revenue: 438, mobile: 480 },
  { date: '2024-06-10', revenue: 155, mobile: 200 },
  { date: '2024-06-11', revenue: 92, mobile: 150 },
  { date: '2024-06-12', revenue: 492, mobile: 420 },
  { date: '2024-06-13', revenue: 81, mobile: 130 },
  { date: '2024-06-14', revenue: 426, mobile: 380 },
  { date: '2024-06-15', revenue: 307, mobile: 350 },
  { date: '2024-06-16', revenue: 371, mobile: 310 },
  { date: '2024-06-17', revenue: 475, mobile: 520 },
  { date: '2024-06-18', revenue: 107, mobile: 170 },
  { date: '2024-06-19', revenue: 341, mobile: 290 },
  { date: '2024-06-20', revenue: 408, mobile: 450 },
  { date: '2024-06-21', revenue: 169, mobile: 210 },
  { date: '2024-06-22', revenue: 317, mobile: 270 },
  { date: '2024-06-23', revenue: 480, mobile: 530 },
  { date: '2024-06-24', revenue: 132, mobile: 180 },
  { date: '2024-06-25', revenue: 141, mobile: 190 },
  { date: '2024-06-26', revenue: 434, mobile: 380 },
  { date: '2024-06-27', revenue: 448, mobile: 490 },
  { date: '2024-06-28', revenue: 149, mobile: 200 },
  { date: '2024-06-29', revenue: 103, mobile: 160 },
  { date: '2024-06-30', revenue: 446, mobile: 400 }
]

const chartConfig = {
  views: {
    label: 'Page Views'
  },
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

const RevenueChart = () => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('revenue')

  const total = React.useMemo(
    () => ({
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0)
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
          {['revenue', 'mobile'].map((key) => {
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
