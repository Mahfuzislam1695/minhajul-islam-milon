import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
  description: string
}

export function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-bold">{value}</h3>
            </div>
            <p className="font-medium">{label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
