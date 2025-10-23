import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, AlertCircle } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "DLQ Backlog Increasing",
    message: "Dead letter queue has 142 messages",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "info",
    title: "Auto-scaling Triggered",
    message: "Added 2 new parser instances",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "critical",
    title: "Latency Spike Detected",
    message: "P99 latency reached 85ms briefly",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "info",
    title: "Deployment Complete",
    message: "Version 2.4.1 deployed successfully",
    time: "3 hours ago",
  },
]

export function AlertsPanel() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-card-foreground">Recent Alerts</h2>
        <p className="text-sm text-muted-foreground">System notifications and events</p>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.type === "critical" ? AlertCircle : alert.type === "warning" ? AlertTriangle : Info
          const colorClass =
            alert.type === "critical" ? "text-destructive" : alert.type === "warning" ? "text-chart-3" : "text-primary"

          return (
            <div key={alert.id} className="flex gap-3 rounded-lg border border-border bg-secondary/50 p-4">
              <Icon className={`h-5 w-5 flex-shrink-0 ${colorClass}`} />
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-card-foreground">{alert.title}</p>
                  <Badge
                    variant="outline"
                    className={
                      alert.type === "critical"
                        ? "bg-destructive/20 text-destructive-foreground"
                        : alert.type === "warning"
                          ? "bg-chart-3/20 text-chart-3"
                          : "bg-primary/20 text-primary-foreground"
                    }
                  >
                    {alert.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
