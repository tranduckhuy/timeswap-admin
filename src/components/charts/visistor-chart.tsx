import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getMonthlyVisitors } from '@/services/api/dashboard-service'
import * as React from 'react'
import { Label, Pie, PieChart, Sector } from 'recharts'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

interface VisitorData {
  month: string
  visistor: number
  fill: string
}

const chartConfig: ChartConfig = {
  visitors: {
    label: 'Visitors'
  },
  january: {
    label: 'January',
    color: 'hsl(var(--chart-1))'
  },
  february: {
    label: 'February',
    color: 'hsl(var(--chart-2))'
  },
  march: {
    label: 'March',
    color: 'hsl(var(--chart-3))'
  },
  april: {
    label: 'April',
    color: 'hsl(var(--chart-4))'
  },
  may: {
    label: 'May',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const VisitorChart = () => {
  const id = 'pie-interactive'
  const [visitorData, setVisitorData] = React.useState<VisitorData[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toLowerCase()
  const [activeMonth, setActiveMonth] = React.useState<string>(currentMonth)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          startYear: 2025,
          startMonth: 1,
          endYear: 2025,
          endMonth: 6
        }
        const response = await getMonthlyVisitors(requestData)
        const formattedData: VisitorData[] = response.data!.map((item) => {
          const monthName = monthNames[item.month - 1] || 'Unknown'
          const month = monthName.toLowerCase()

          return {
            month: month,
            visistor: item.visitCount,
            fill: `var(--color-${month})`
          }
        })
        setVisitorData(formattedData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const activeIndex = React.useMemo(
    () => visitorData.findIndex((item) => item.month === activeMonth),
    [visitorData, activeMonth]
  )

  const months = React.useMemo(() => visitorData.map((item) => item.month), [visitorData])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <Card data-chart={id} className='flex flex-col'>
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className='flex-row items-start space-y-0 pb-0'>
        <div className='grid gap-1'>
          <CardTitle>Monthly Visitor </CardTitle>
          <CardDescription>January - June 2025</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger className='ml-auto h-7 w-[130px] rounded-lg pl-2.5' aria-label='Select a value'>
            <SelectValue placeholder='Select month' />
          </SelectTrigger>
          <SelectContent align='end' className='rounded-xl'>
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]
              if (!config) {
                return null
              }
              return (
                <SelectItem key={key} value={key} className='rounded-lg [&_span]:flex'>
                  <div className='flex items-center gap-2 text-xs'>
                    <span
                      className='flex h-3 w-3 shrink-0 rounded-sm'
                      style={{
                        backgroundColor: `var(--color-${key})`
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex flex-1 justify-center pb-0'>
        <ChartContainer id={id} config={chartConfig} className='mx-auto aspect-square w-full max-w-[300px]'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={visitorData}
              dataKey='visistor'
              nameKey='month'
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-3xl font-bold'>
                          {visitorData[activeIndex].visistor.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default VisitorChart
