import { Activity, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-card-foreground">Incident Processing Service</h1>
          <Badge variant="outline" className="ml-2 bg-accent/20 text-accent-foreground">
            Production
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
