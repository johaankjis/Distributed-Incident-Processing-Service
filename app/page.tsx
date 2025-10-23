import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { SystemHealth } from "@/components/system-health"
import { IncidentProcessing } from "@/components/incident-processing"
import { AlertsPanel } from "@/components/alerts-panel"
import { PerformanceCharts } from "@/components/performance-charts"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <MetricsOverview />
        <div className="grid gap-6 lg:grid-cols-2">
          <SystemHealth />
          <AlertsPanel />
        </div>
        <PerformanceCharts />
        <IncidentProcessing />
      </main>
    </div>
  )
}
