import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube, Facebook, ImageIcon, Calendar, ArrowRight } from "lucide-react"
import { HeroPattern } from "@/components/hero-pattern"

export default function MediaPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Media Gallery</h1>
            <p className="mt-4 text-xl text-muted-foreground">Videos, photos, and social media highlights</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="videos">YouTube Videos</TabsTrigger>
              <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="mt-6">
              <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <Badge className="mb-2">Videos</Badge>
                  <h2 className="text-2xl font-bold md:text-3xl">Educational Content</h2>
                  <p className="mt-2 text-muted-foreground">Watch my latest educational videos and tutorials</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-4 w-4 text-red-500" />
                    Visit YouTube Channel
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                          <Youtube className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="mb-2">Video</Badge>
                        <h3 className="text-lg font-semibold text-white">Innovative Teaching Method {i}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Published: March 15, 2023</span>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        A demonstration of interactive teaching techniques for primary school students.
                      </p>
                      <Button size="sm" className="w-full" asChild>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                          Watch Video
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="photos" className="mt-6">
              <div className="mb-8">
                <Badge className="mb-2">Photos</Badge>
                <h2 className="text-2xl font-bold md:text-3xl">Event Gallery</h2>
                <p className="mt-2 text-muted-foreground">Photos from workshops, events, and classroom activities</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Photo+${i + 1}`}
                      alt={`Gallery photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
                        <ImageIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" size="lg">
                  Load More Photos
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-6">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge className="mb-2">Social Media</Badge>
                  <h2 className="text-2xl font-bold md:text-3xl">Social Highlights</h2>
                  <p className="mt-2 text-muted-foreground">Featured posts from my social media accounts</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4 text-red-500" />
                      YouTube
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4 text-blue-500" />
                      Facebook
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card
                    key={i}
                    className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50"
                  >
                    <div className="relative h-64 bg-muted">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Post+${i}`}
                        alt={`Social media post ${i}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-blue-500 text-white">
                          <Facebook className="mr-1 h-3 w-3" />
                          Facebook
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 font-semibold">Workshop on Digital Learning Tools</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Conducted a workshop for teachers on using digital tools in the classroom.
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>March 15, 2023</span>
                        <span>124 likes • 45 comments</span>
                      </div>
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
