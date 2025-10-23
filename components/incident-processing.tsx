import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"

const incidents = [
  {
    id: "INC-2847",
    type: "Telemetry Ingestion",
    status: "completed",
    duration: "142ms",
    retries: 0,
    timestamp: "2025-01-22 14:32:18",
  },
  {
    id: "INC-2846",
    type: "Message Processing",
    status: "completed",
    duration: "89ms",
    retries: 1,
    timestamp: "2025-01-22 14:32:15",
  },
  {
    id: "INC-2845",
    type: "Protobuf Parsing",
    status: "processing",
    duration: "—",
    retries: 0,
    timestamp: "2025-01-22 14:32:12",
  },
  {
    id: "INC-2844",
    type: "Telemetry Ingestion",
    status: "completed",
    duration: "156ms",
    retries: 0,
    timestamp: "2025-01-22 14:32:09",
  },
  {
    id: "INC-2843",
    type: "Message Processing",
    status: "failed",
    duration: "—",
    retries: 3,
    timestamp: "2025-01-22 14:32:06",
  },
  {
    id: "INC-2842",
    type: "Protobuf Parsing",
    status: "completed",
    duration: "67ms",
    retries: 0,
    timestamp: "2025-01-22 14:32:03",
  },
]

export function IncidentProcessing() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-card-foreground">Recent Incident Processing</h2>
        <p className="text-sm text-muted-foreground">Real-time processing status</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Incident ID</th>
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Type</th>
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Duration</th>
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Retries</th>
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id} className="border-b border-border/50">
                <td className="py-4 text-sm font-mono text-card-foreground">{incident.id}</td>
                <td className="py-4 text-sm text-card-foreground">{incident.type}</td>
                <td className="py-4">
                  <Badge
                    variant="outline"
                    className={
                      incident.status === "completed"
                        ? "bg-accent/20 text-accent-foreground"
                        : incident.status === "processing"
                          ? "bg-primary/20 text-primary-foreground"
                          : "bg-destructive/20 text-destructive-foreground"
                    }
                  >
                    {incident.status === "completed" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                    {incident.status === "processing" && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
                    {incident.status === "failed" && <XCircle className="mr-1 h-3 w-3" />}
                    {incident.status}
                  </Badge>
                </td>
                <td className="py-4 text-sm font-mono text-muted-foreground">{incident.duration}</td>
                <td className="py-4 text-sm text-muted-foreground">{incident.retries}</td>
                <td className="py-4 text-sm font-mono text-muted-foreground">{incident.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
