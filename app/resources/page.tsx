import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Calendar, Search, Filter } from "lucide-react"
import { HeroPattern } from "@/components/hero-pattern"

export default function ResourcesPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Educational Resources</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Download free educational materials for teachers and students
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl rounded-2xl border bg-card/50 p-4 backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-8">
              <div className="relative md:col-span-5">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search resources..." className="pl-9" />
              </div>
              <div className="md:col-span-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="ict">ICT</SelectItem>
                    <SelectItem value="pe">Physical Education</SelectItem>
                    <SelectItem value="lesson">Lesson Plans</SelectItem>
                    <SelectItem value="worksheet">Worksheets</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-1">
                <Button className="w-full">Search</Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ICT Lesson Plan for Grade 3",
                description: "A comprehensive lesson plan for teaching basic computer skills to Grade 3 students.",
                category: "ICT",
                tags: ["Lesson Plan", "Grade 3"],
                date: "January 15, 2023",
                fileType: "PDF",
                fileSize: "2.4 MB",
              },
              {
                title: "Physical Education Activities",
                description: "Collection of physical activities and games suitable for primary school students.",
                category: "Physical Education",
                tags: ["Activities", "Games"],
                date: "March 22, 2023",
                fileType: "PDF",
                fileSize: "3.1 MB",
              },
              {
                title: "Mathematics Worksheets",
                description: "Printable worksheets for practicing basic arithmetic operations.",
                category: "Mathematics",
                tags: ["Worksheet", "Practice"],
                date: "February 10, 2023",
                fileType: "PDF",
                fileSize: "1.8 MB",
              },
              {
                title: "Science Experiment Guide",
                description: "Simple science experiments that can be conducted with easily available materials.",
                category: "Science",
                tags: ["Experiments", "Hands-on"],
                date: "April 5, 2023",
                fileType: "PDF",
                fileSize: "4.2 MB",
              },
              {
                title: "Digital Learning Tools Guide",
                description: "A guide to free digital tools that can enhance classroom teaching.",
                category: "ICT",
                tags: ["Digital Tools", "EdTech"],
                date: "May 18, 2023",
                fileType: "PDF",
                fileSize: "2.9 MB",
              },
              {
                title: "Classroom Management Techniques",
                description: "Effective strategies for managing primary school classrooms.",
                category: "Teaching",
                tags: ["Management", "Strategies"],
                date: "June 7, 2023",
                fileType: "DOCX",
                fileSize: "1.5 MB",
              },
              {
                title: "Bengali Language Activities",
                description: "Creative activities to improve Bengali language skills for primary students.",
                category: "Language",
                tags: ["Bengali", "Activities"],
                date: "July 12, 2023",
                fileType: "PDF",
                fileSize: "2.2 MB",
              },
              {
                title: "Assessment Tools for Teachers",
                description: "Various assessment methods and tools for primary education.",
                category: "Assessment",
                tags: ["Evaluation", "Tools"],
                date: "August 25, 2023",
                fileType: "PDF",
                fileSize: "3.5 MB",
              },
              {
                title: "Interactive Teaching Slides",
                description: "PowerPoint slides for interactive classroom teaching on various subjects.",
                category: "Teaching",
                tags: ["Slides", "Interactive"],
                date: "September 14, 2023",
                fileType: "PPTX",
                fileSize: "5.7 MB",
              },
            ].map((resource, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{resource.title}</h3>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{resource.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge>{resource.category}</Badge>
                    {resource.tags.map((tag, j) => (
                      <Badge key={j} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Uploaded: {resource.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {resource.fileType} • {resource.fileSize}
                    </span>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
