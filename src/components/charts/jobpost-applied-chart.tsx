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
  { date: '2024-01-01', applied: 0, jobposts: 3 },
  { date: '2024-01-02', applied: 0, jobposts: 0 },
  { date: '2024-01-03', applied: 0, jobposts: 5 },
  { date: '2024-01-04', applied: 0, jobposts: 2 },
  { date: '2024-01-05', applied: 0, jobposts: 6 },
  { date: '2024-01-06', applied: 0, jobposts: 4 },
  { date: '2024-01-07', applied: 6, jobposts: 0 },
  { date: '2024-01-08', applied: 5, jobposts: 7 },
  { date: '2024-01-09', applied: 5, jobposts: 1 },
  { date: '2024-01-10', applied: 0, jobposts: 3 },
  { date: '2024-01-11', applied: 8, jobposts: 0 },
  { date: '2024-01-12', applied: 0, jobposts: 4 },
  { date: '2024-01-13', applied: 7, jobposts: 2 },
  { date: '2024-01-14', applied: 9, jobposts: 5 },
  { date: '2024-01-15', applied: 0, jobposts: 0 },
  { date: '2024-01-16', applied: 6, jobposts: 3 },
  { date: '2024-01-17', applied: 7, jobposts: 6 },
  { date: '2024-01-18', applied: 8, jobposts: 1 },
  { date: '2024-01-19', applied: 0, jobposts: 4 },
  { date: '2024-01-20', applied: 7, jobposts: 0 },
  { date: '2024-01-21', applied: 9, jobposts: 2 },
  { date: '2024-01-22', applied: 0, jobposts: 5 },
  { date: '2024-01-23', applied: 6, jobposts: 0 },
  { date: '2024-01-24', applied: 5, jobposts: 3 },
  { date: '2024-01-25', applied: 8, jobposts: 4 },
  { date: '2024-01-26', applied: 0, jobposts: 0 },
  { date: '2024-01-27', applied: 7, jobposts: 2 },
  { date: '2024-01-28', applied: 9, jobposts: 5 },
  { date: '2024-01-29', applied: 12, jobposts: 0 },
  { date: '2024-01-30', applied: 6, jobposts: 3 },
  { date: '2024-01-31', applied: 5, jobposts: 6 },
  { date: '2024-02-01', applied: 8, jobposts: 1 },
  { date: '2024-02-02', applied: 6, jobposts: 4 },
  { date: '2024-02-03', applied: 7, jobposts: 0 },
  { date: '2024-02-04', applied: 9, jobposts: 2 },
  { date: '2024-02-05', applied: 0, jobposts: 0 },
  { date: '2024-02-06', applied: 6, jobposts: 0 },
  { date: '2024-02-07', applied: 5, jobposts: 3 },
  { date: '2024-02-08', applied: 8, jobposts: 4 },
  { date: '2024-02-09', applied: 10, jobposts: 0 },
  { date: '2024-02-10', applied: 7, jobposts: 2 },
  { date: '2024-02-11', applied: 0, jobposts: 0 },
  { date: '2024-02-12', applied: 12, jobposts: 0 },
  { date: '2024-02-13', applied: 6, jobposts: 3 },
  { date: '2024-02-14', applied: 7, jobposts: 6 },
  { date: '2024-02-15', applied: 8, jobposts: 1 },
  { date: '2024-02-16', applied: 4, jobposts: 4 },
  { date: '2024-02-17', applied: 0, jobposts: 0 },
  { date: '2024-02-18', applied: 9, jobposts: 2 },
  { date: '2024-02-19', applied: 2, jobposts: 5 },
  { date: '2024-02-20', applied: 6, jobposts: 0 },
  { date: '2024-02-21', applied: 11, jobposts: 3 },
  { date: '2024-02-22', applied: 8, jobposts: 4 },
  { date: '2024-02-23', applied: 1, jobposts: 0 },
  { date: '2024-02-24', applied: 7, jobposts: 2 },
  { date: '2024-02-25', applied: 0, jobposts: 0 },
  { date: '2024-02-26', applied: 12, jobposts: 0 },
  { date: '2024-02-27', applied: 6, jobposts: 3 },
  { date: '2024-02-28', applied: 3, jobposts: 6 },
  { date: '2024-02-29', applied: 8, jobposts: 1 },
  { date: '2024-03-01', applied: 10, jobposts: 4 },
  { date: '2024-03-02', applied: 7, jobposts: 0 },
  { date: '2024-03-03', applied: 0, jobposts: 0 },
  { date: '2024-03-04', applied: 0, jobposts: 5 },
  { date: '2024-03-05', applied: 6, jobposts: 0 },
  { date: '2024-03-06', applied: 11, jobposts: 3 },
  { date: '2024-03-07', applied: 8, jobposts: 4 },
  { date: '2024-03-08', applied: 10, jobposts: 0 },
  { date: '2024-03-09', applied: 7, jobposts: 2 },
  { date: '2024-03-10', applied: 9, jobposts: 5 },
  { date: '2024-03-11', applied: 0, jobposts: 0 },
  { date: '2024-03-12', applied: 6, jobposts: 3 },
  { date: '2024-03-13', applied: 0, jobposts: 6 },
  { date: '2024-03-14', applied: 8, jobposts: 1 },
  { date: '2024-03-15', applied: 0, jobposts: 4 },
  { date: '2024-03-16', applied: 7, jobposts: 0 },
  { date: '2024-03-17', applied: 9, jobposts: 2 },
  { date: '2024-03-18', applied: 8, jobposts: 5 },
  { date: '2024-03-19', applied: 6, jobposts: 0 },
  { date: '2024-03-20', applied: 0, jobposts: 0 },
  { date: '2024-03-21', applied: 0, jobposts: 0 },
  { date: '2024-03-22', applied: 0, jobposts: 0 },
  { date: '2024-03-23', applied: 0, jobposts: 0 },
  { date: '2024-03-24', applied: 0, jobposts: 0 },
  { date: '2024-03-25', applied: 0, jobposts: 0 },
  { date: '2024-03-26', applied: 0, jobposts: 0 },
  { date: '2024-03-27', applied: 0, jobposts: 0 },
  { date: '2024-03-28', applied: 0, jobposts: 0 },
  { date: '2024-03-29', applied: 0, jobposts: 0 },
  { date: '2024-03-30', applied: 0, jobposts: 0 }
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
    const referenceDate = new Date('2024-03-30')
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
