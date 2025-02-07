"use client"

import { useState } from "react"
import { TrendingUp, Lock } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "./ui/button"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 160 },
  { month: "July", desktop: 214, mobile: 180 },
  { month: "August", desktop: 214, mobile: 140 },
  { month: "September", desktop: 114, mobile: 140 },
  { month: "October", desktop: 114, mobile: 110 },
  { month: "November", desktop: 234, mobile: 190 },
  { month: "December", desktop: 284, mobile: 40 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  const [isLocked, setIsLocked] = useState(true);

  const Lock = () => (
    <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
      <path d="M10.75 13.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 0 0 1.5 0v-.45Z"></path>
      <path fillRule="evenodd" d="M6.25 7.095v-.345a3.75 3.75 0 1 1 7.5 0v.345a3.001 3.001 0 0 1 2.25 2.905v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.25-2.905Zm1.5-.345a2.25 2.25 0 0 1 4.5 0v.25h-4.5v-.25Zm-2.25 3.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4Z"></path>
    </svg>
  )

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Event Chart</CardTitle>
      </CardHeader>

      <CardContent className="relative">
        {isLocked && (
          <div className="absolute w-auto h-[28px] top-1/2 inset-0 flex items-center justify-center bg-opacity-90 z-10">
            <button
              className="flex w-auto h-full items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border rounded-lg shadow-md"
              onClick={() => setIsLocked(false)}
            >
              <Lock />
              <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Contact to free unlock</p>
            </button>
          </div>
        )}

        <div className={isLocked ? "opacity-40 pointer-events-none" : ""}>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{ left: -20, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={3}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-5 justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#aad9d3]"></span>
            <span className="text-sm text-muted-foreground">Mobile Users</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#f5c5b9]"></span>
            <span className="text-sm text-muted-foreground">Desktop Users</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
