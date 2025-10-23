import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Activity, Zap, CheckCircle2, Clock } from "lucide-react"

const metrics = [
  {
    label: "Success Rate",
    value: "99.95%",
    change: "+0.02%",
    trend: "up",
    icon: CheckCircle2,
    target: "≥99.95%",
  },
  {
    label: "P99 Latency",
    value: "48ms",
    change: "-52%",
    trend: "down",
    icon: Zap,
    target: "52% reduction",
  },
  {
    label: "Throughput",
    value: "15.2K/s",
    change: "+3.1×",
    trend: "up",
    icon: Activity,
    target: "≥3× improvement",
  },
  {
    label: "MTTR",
    value: "12.4min",
    change: "-30%",
    trend: "down",
    icon: Clock,
    target: "30% reduction",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive =
          metric.trend === "up"
            ? metric.label !== "P99 Latency" && metric.label !== "MTTR"
            : metric.label === "P99 Latency" || metric.label === "MTTR"

        return (
          <Card key={metric.label} className="p-6 bg-card border-border">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-card-foreground">{metric.value}</p>
              </div>
              <div className={`rounded-lg p-2 ${isPositive ? "bg-accent/20" : "bg-destructive/20"}`}>
                <Icon className={`h-5 w-5 ${isPositive ? "text-accent" : "text-destructive"}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {isPositive ? (
                  <ArrowUp className="h-4 w-4 text-accent" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-accent" />
                )}
                <span className={`text-sm font-medium ${isPositive ? "text-accent" : "text-accent"}`}>
                  {metric.change}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Target: {metric.target}</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
