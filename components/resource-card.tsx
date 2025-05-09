import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  category: string
  tags: string[]
  downloadUrl: string
}

export function ResourceCard({ title, description, category, tags, downloadUrl }: ResourceCardProps) {
  return (
    <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>{category}</Badge>
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button size="sm" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardContent>
    </Card>
  )
}
