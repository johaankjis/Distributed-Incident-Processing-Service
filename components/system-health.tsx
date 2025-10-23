import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Server, Database, MessageSquare } from "lucide-react"

const services = [
  {
    name: "Node.js Microservice",
    status: "healthy",
    uptime: "99.98%",
    instances: 12,
    icon: Server,
  },
  {
    name: "C++ Telemetry Parser",
    status: "healthy",
    uptime: "99.99%",
    instances: 8,
    icon: Database,
  },
  {
    name: "Pub/Sub Queue",
    status: "healthy",
    uptime: "100%",
    instances: 6,
    icon: MessageSquare,
  },
  {
    name: "Dead Letter Queue",
    status: "warning",
    uptime: "99.95%",
    instances: 4,
    icon: AlertCircle,
  },
]

export function SystemHealth() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-card-foreground">System Health</h2>
        <p className="text-sm text-muted-foreground">Real-time service status</p>
      </div>
      <div className="space-y-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-secondary p-2">
                  <Icon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">{service.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {service.instances} instances • {service.uptime} uptime
                  </p>
                </div>
              </div>
              <Badge
                variant={service.status === "healthy" ? "default" : "destructive"}
                className={
                  service.status === "healthy"
                    ? "bg-accent/20 text-accent-foreground hover:bg-accent/30"
                    : "bg-destructive/20 text-destructive-foreground hover:bg-destructive/30"
                }
              >
                {service.status === "healthy" ? (
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                ) : (
                  <AlertCircle className="mr-1 h-3 w-3" />
                )}
                {service.status}
              </Badge>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
