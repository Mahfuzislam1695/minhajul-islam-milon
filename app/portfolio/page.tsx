import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Video, ArrowRight } from "lucide-react"
import { HeroPattern } from "@/components/hero-pattern"

export default function PortfolioPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Portfolio</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Showcasing my educational projects, workshops, and achievements
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-6">
              <div className="mb-8">
                <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image src="/images/team-trophy.png" alt="Girls Football Team" fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2">Featured Project</Badge>
                      <h3 className="mb-2 text-xl font-semibold">Girls Football Championship</h3>
                      <p className="mb-4 text-muted-foreground">
                        Coached and mentored the girls' football team that won the district championship. The team
                        demonstrated exceptional teamwork, perseverance, and sportsmanship throughout the tournament.
                      </p>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Project+${i}`}
                        alt={`Project ${i}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="mb-2">Education</Badge>
                        <h3 className="text-lg font-semibold text-white">Digital Classroom Initiative {i}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="mb-4 text-sm text-muted-foreground">
                        A project to integrate digital tools and resources into traditional classroom teaching.
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge variant="outline">ICT</Badge>
                        <Badge variant="outline">Innovation</Badge>
                      </div>
                      <Button size="sm" className="w-full">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Workshop+${i}`}
                        alt={`Workshop ${i}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="mb-2">Workshop</Badge>
                        <h3 className="text-lg font-semibold text-white">Teacher Training Workshop {i}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">25 Participants</p>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Conducted a workshop on innovative teaching methods for primary school teachers.
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">March 15, 2023</p>
                        <Button size="sm" variant="outline">
                          View Gallery
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="awards" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "সেরা উদ্ভাবক ২০২০",
                    organization: "a2i (Access to Information)",
                    description:
                      "Awarded for innovative teaching methods and digital content creation for primary education.",
                    date: "December 2020",
                  },
                  {
                    title: "জেলা শ্রেষ্ঠ সহকারী শিক্ষক ২০১৯",
                    organization: "District Education Office",
                    description:
                      "Recognized as the best assistant teacher in the district for outstanding contribution to education.",
                    date: "November 2019",
                  },
                  {
                    title: "ICT4E Ambassador",
                    organization: "Ministry of Education",
                    description:
                      "Selected as an ambassador for promoting ICT in Education initiatives across the region.",
                    date: "July 2018",
                  },
                  {
                    title: "Best Digital Content Creator",
                    organization: "Educational Technology Conference",
                    description: "Awarded for creating innovative digital learning materials for primary students.",
                    date: "August 2021",
                  },
                  {
                    title: "Excellence in Teaching Award",
                    organization: "Teachers' Association",
                    description: "Recognized for implementing innovative teaching methodologies in the classroom.",
                    date: "February 2022",
                  },
                ].map((award, i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <Badge className="mb-1">{award.date.split(" ")[1]}</Badge>
                          <h3 className="text-lg font-semibold">{award.title}</h3>
                        </div>
                      </div>
                      <p className="mb-2 text-sm font-medium">{award.organization}</p>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                          <Video className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="mb-2">Video</Badge>
                        <h3 className="text-lg font-semibold text-white">Teaching Methodology {i}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="mb-4 text-sm text-muted-foreground">
                        A demonstration of interactive teaching techniques for primary school students.
                      </p>
                      <Button size="sm" className="w-full" asChild>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                          Watch on YouTube
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
