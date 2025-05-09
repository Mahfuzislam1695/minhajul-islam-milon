import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface ActivityCardProps {
  title: string
  description: string
  imageUrl: string
  date: string
}

export function ActivityCard({ title, description, imageUrl, date }: ActivityCardProps) {
  return (
    <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}
