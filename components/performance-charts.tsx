"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const latencyData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  p50: Math.floor(Math.random() * 10 + 15),
  p95: Math.floor(Math.random() * 20 + 30),
  p99: Math.floor(Math.random() * 15 + 40),
}))

const throughputData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  ingestion: Math.floor(Math.random() * 3000 + 12000),
  processing: Math.floor(Math.random() * 2800 + 11500),
}))

export function PerformanceCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6 bg-card border-border">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-card-foreground">Latency Distribution</h2>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </div>
        <ChartContainer
          config={{
            p50: {
              label: "P50",
              color: "hsl(var(--chart-1))",
            },
            p95: {
              label: "P95",
              color: "hsl(var(--chart-2))",
            },
            p99: {
              label: "P99",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value}ms`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="p50"
                stackId="1"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="p95"
                stackId="2"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="p99"
                stackId="3"
                stroke="hsl(var(--chart-3))"
                fill="hsl(var(--chart-3))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-card-foreground">Throughput</h2>
          <p className="text-sm text-muted-foreground">Messages per second</p>
        </div>
        <ChartContainer
          config={{
            ingestion: {
              label: "Ingestion",
              color: "hsl(var(--primary))",
            },
            processing: {
              label: "Processing",
              color: "hsl(var(--accent))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={throughputData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="ingestion"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="processing"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
    </div>
  )
}
