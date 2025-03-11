'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
const chartData = [
  { date: '2024-04-01', applied: 222, jobposts: 150 },
  { date: '2024-04-02', applied: 97, jobposts: 180 },
  { date: '2024-04-03', applied: 167, jobposts: 120 },
  { date: '2024-04-04', applied: 242, jobposts: 260 },
  { date: '2024-04-05', applied: 373, jobposts: 290 },
  { date: '2024-04-06', applied: 301, jobposts: 340 },
  { date: '2024-04-07', applied: 245, jobposts: 180 },
  { date: '2024-04-08', applied: 409, jobposts: 320 },
  { date: '2024-04-09', applied: 59, jobposts: 110 },
  { date: '2024-04-10', applied: 261, jobposts: 190 },
  { date: '2024-04-11', applied: 327, jobposts: 350 },
  { date: '2024-04-12', applied: 292, jobposts: 210 },
  { date: '2024-04-13', applied: 342, jobposts: 380 },
  { date: '2024-04-14', applied: 137, jobposts: 220 },
  { date: '2024-04-15', applied: 120, jobposts: 170 },
  { date: '2024-04-16', applied: 138, jobposts: 190 },
  { date: '2024-04-17', applied: 446, jobposts: 360 },
  { date: '2024-04-18', applied: 364, jobposts: 410 },
  { date: '2024-04-19', applied: 243, jobposts: 180 },
  { date: '2024-04-20', applied: 89, jobposts: 150 },
  { date: '2024-04-21', applied: 137, jobposts: 200 },
  { date: '2024-04-22', applied: 224, jobposts: 170 },
  { date: '2024-04-23', applied: 138, jobposts: 230 },
  { date: '2024-04-24', applied: 387, jobposts: 290 },
  { date: '2024-04-25', applied: 215, jobposts: 250 },
  { date: '2024-04-26', applied: 75, jobposts: 130 },
  { date: '2024-04-27', applied: 383, jobposts: 420 },
  { date: '2024-04-28', applied: 122, jobposts: 180 },
  { date: '2024-04-29', applied: 315, jobposts: 240 },
  { date: '2024-04-30', applied: 454, jobposts: 380 },
  { date: '2024-05-01', applied: 165, jobposts: 220 },
  { date: '2024-05-02', applied: 293, jobposts: 310 },
  { date: '2024-05-03', applied: 247, jobposts: 190 },
  { date: '2024-05-04', applied: 385, jobposts: 420 },
  { date: '2024-05-05', applied: 481, jobposts: 390 },
  { date: '2024-05-06', applied: 498, jobposts: 520 },
  { date: '2024-05-07', applied: 388, jobposts: 300 },
  { date: '2024-05-08', applied: 149, jobposts: 210 },
  { date: '2024-05-09', applied: 227, jobposts: 180 },
  { date: '2024-05-10', applied: 293, jobposts: 330 },
  { date: '2024-05-11', applied: 335, jobposts: 270 },
  { date: '2024-05-12', applied: 197, jobposts: 240 },
  { date: '2024-05-13', applied: 197, jobposts: 160 },
  { date: '2024-05-14', applied: 448, jobposts: 490 },
  { date: '2024-05-15', applied: 473, jobposts: 380 },
  { date: '2024-05-16', applied: 338, jobposts: 400 },
  { date: '2024-05-17', applied: 499, jobposts: 420 },
  { date: '2024-05-18', applied: 315, jobposts: 350 },
  { date: '2024-05-19', applied: 235, jobposts: 180 },
  { date: '2024-05-20', applied: 177, jobposts: 230 },
  { date: '2024-05-21', applied: 82, jobposts: 140 },
  { date: '2024-05-22', applied: 81, jobposts: 120 },
  { date: '2024-05-23', applied: 252, jobposts: 290 },
  { date: '2024-05-24', applied: 294, jobposts: 220 },
  { date: '2024-05-25', applied: 201, jobposts: 250 },
  { date: '2024-05-26', applied: 213, jobposts: 170 },
  { date: '2024-05-27', applied: 420, jobposts: 460 },
  { date: '2024-05-28', applied: 233, jobposts: 190 },
  { date: '2024-05-29', applied: 78, jobposts: 130 },
  { date: '2024-05-30', applied: 340, jobposts: 280 },
  { date: '2024-05-31', applied: 178, jobposts: 230 },
  { date: '2024-06-01', applied: 178, jobposts: 200 },
  { date: '2024-06-02', applied: 470, jobposts: 410 },
  { date: '2024-06-03', applied: 103, jobposts: 160 },
  { date: '2024-06-04', applied: 439, jobposts: 380 },
  { date: '2024-06-05', applied: 88, jobposts: 140 },
  { date: '2024-06-06', applied: 294, jobposts: 250 },
  { date: '2024-06-07', applied: 323, jobposts: 370 },
  { date: '2024-06-08', applied: 385, jobposts: 320 },
  { date: '2024-06-09', applied: 438, jobposts: 480 },
  { date: '2024-06-10', applied: 155, jobposts: 200 },
  { date: '2024-06-11', applied: 92, jobposts: 150 },
  { date: '2024-06-12', applied: 492, jobposts: 420 },
  { date: '2024-06-13', applied: 81, jobposts: 130 },
  { date: '2024-06-14', applied: 426, jobposts: 380 },
  { date: '2024-06-15', applied: 307, jobposts: 350 },
  { date: '2024-06-16', applied: 371, jobposts: 310 },
  { date: '2024-06-17', applied: 475, jobposts: 520 },
  { date: '2024-06-18', applied: 107, jobposts: 170 },
  { date: '2024-06-19', applied: 341, jobposts: 290 },
  { date: '2024-06-20', applied: 408, jobposts: 450 },
  { date: '2024-06-21', applied: 169, jobposts: 210 },
  { date: '2024-06-22', applied: 317, jobposts: 270 },
  { date: '2024-06-23', applied: 480, jobposts: 530 },
  { date: '2024-06-24', applied: 132, jobposts: 180 },
  { date: '2024-06-25', applied: 141, jobposts: 190 },
  { date: '2024-06-26', applied: 434, jobposts: 380 },
  { date: '2024-06-27', applied: 448, jobposts: 490 },
  { date: '2024-06-28', applied: 149, jobposts: 200 },
  { date: '2024-06-29', applied: 103, jobposts: 160 },
  { date: '2024-06-30', applied: 446, jobposts: 400 }
]

const chartConfig = {
  applied: {
    label: 'Applied',
    color: 'hsl(var(--chart-1))'
  },
  jobposts: {
    label: 'Job Posts',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

const AppliedJobPostChart = () => {
  const [timeRange, setTimeRange] = React.useState('90d')

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date('2024-06-30')
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 text-center sm:text-left'>
          <CardTitle>Applied Job Posts</CardTitle>
          <CardDescription>Showing total applications and job posts</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className='w-[160px] rounded-lg sm:ml-auto' aria-label='Select a value'>
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillapplied' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-applied)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-applied)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='filljobposts' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-jobposts)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-jobposts)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })
                  }}
                  indicator='dot'
                />
              }
            />
            <Area
              dataKey='jobposts'
              type='natural'
              fill='url(#filljobposts)'
              stroke='var(--color-jobposts)'
              stackId='a'
            />
            <Area dataKey='applied' type='natural' fill='url(#fillapplied)' stroke='var(--color-applied)' stackId='a' />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AppliedJobPostChart
