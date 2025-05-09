import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  BookOpen,
  FileText,
  Youtube,
  Facebook,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  CheckCircle2,
} from "lucide-react"
import { HeroPattern } from "@/components/hero-pattern"
import { ResourceCard } from "@/components/resource-card"
import { ActivityCard } from "@/components/activity-card"
import { StatCard } from "@/components/stat-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Badge className="rounded-md px-3 py-1 text-sm">Educator & Innovator</Badge>
                  <Badge variant="outline" className="rounded-md px-3 py-1 text-sm">
                    <Sparkles className="mr-1 h-3 w-3" /> Award Winner
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Minhajul Islam <span className="text-primary">Milon</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transforming education through innovation and technology. Assistant Teacher at Government Primary
                  School with a passion for creating engaging learning experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/portfolio">
                      View Portfolio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Youtube className="h-4 w-4 text-red-500" />
                    YouTube
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Facebook className="h-4 w-4 text-blue-500" />
                    Facebook
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                  <div className="h-full w-full overflow-hidden rounded-[22px] bg-background">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/profile.png"
                        alt="Minhajul Islam Milon"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary p-2 text-primary-foreground">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-medium">Experience</span>
                    <span className="text-xl font-bold">17+</span>
                    <span className="text-xs">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Users className="h-8 w-8" />}
              value="500+"
              label="Students Taught"
              description="Impacted the lives of over 500 primary school students"
            />
            <StatCard
              icon={<FileText className="h-8 w-8" />}
              value="50+"
              label="Educational Resources"
              description="Created and shared over 50 educational resources"
            />
            <StatCard
              icon={<Award className="h-8 w-8" />}
              value="12+"
              label="Awards & Recognitions"
              description="Received multiple awards for teaching excellence"
            />
            <StatCard
              icon={<Calendar className="h-8 w-8" />}
              value="25+"
              label="Workshops Conducted"
              description="Conducted workshops for teachers and students"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Achievements</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Award-Winning Educator</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Recognized for excellence in education innovation and teaching methodologies
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">সেরা উদ্ভাবক ২০২০</h3>
                <p className="text-center text-sm text-muted-foreground">Awarded by a2i for innovation in education</p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">জেলা শ্রেষ্ঠ শিক্ষক ২০১৯</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Recognized as the best assistant teacher in the district
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">British Council</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Served as coordinator for British Council programs (2018)
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">ICT4E Ambassador</h3>
                <p className="text-center text-sm text-muted-foreground">
                  ICT for Education Ambassador & Physical Education Trainer (2018)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative overflow-hidden py-20 bg-muted/30">
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Featured Work</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Student Success Stories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Empowering students to achieve their full potential through innovative teaching methods
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border">
              <Image
                src="/images/team-trophy.png"
                alt="Students with trophy"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Girls Football Championship</h3>
              <p className="text-muted-foreground">
                Coached and mentored the girls' football team that won the district championship. The team demonstrated
                exceptional teamwork, perseverance, and sportsmanship throughout the tournament.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Team Building</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Physical Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Confidence Building</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/portfolio">
                  View More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Philosophy</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">My Teaching Approach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Creating engaging and effective learning environments for all students
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Student-Centered Learning</h3>
                </div>
                <p className="text-muted-foreground">
                  I believe in placing students at the center of the learning process, recognizing and nurturing each
                  child's unique abilities and learning styles.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Technology Integration</h3>
                </div>
                <p className="text-muted-foreground">
                  Integrating appropriate technology into classroom activities creates more interactive and engaging
                  learning experiences for students.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">Holistic Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Education should focus on the whole child, developing not just academic skills but also social,
                  emotional, and physical capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <Badge className="mb-2">Resources</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Educational Materials</h2>
              <p className="mt-2 text-muted-foreground">Free resources for teachers and students</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/resources">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              title="ICT Lesson Plan"
              description="A comprehensive lesson plan for teaching ICT skills to primary school students."
              category="ICT"
              tags={["Lesson Plan", "Grade 3-5"]}
              downloadUrl="#"
            />
            <ResourceCard
              title="Physical Education Activities"
              description="Collection of physical activities and games suitable for primary school students."
              category="Physical Education"
              tags={["Activities", "Games"]}
              downloadUrl="#"
            />
            <ResourceCard
              title="Mathematics Worksheets"
              description="Printable worksheets for practicing basic arithmetic operations."
              category="Mathematics"
              tags={["Worksheet", "Practice"]}
              downloadUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Testimonials</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">What People Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Feedback from colleagues, students, and parents
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Minhajul sir's innovative teaching methods have transformed our school's approach to education. His dedication to students is truly inspiring."
              author="Rahima Begum"
              role="Headmistress, Government Primary School"
            />
            <TestimonialCard
              quote="My daughter has shown remarkable improvement in her studies since Mr. Milon became her teacher. His approach makes learning fun and engaging."
              author="Abdul Karim"
              role="Parent"
            />
            <TestimonialCard
              quote="The ICT resources developed by Minhajul have been invaluable for our district's teachers. His contribution to education technology is exceptional."
              author="Nasreen Ahmed"
              role="District Education Officer"
            />
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Activities</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Recent Workshops & Events</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sharing knowledge and best practices with the educational community
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ActivityCard
              title="ICT Workshop for Teachers"
              description="Conducted a workshop on integrating technology in classroom teaching."
              imageUrl="/placeholder.svg?height=200&width=400&text=Workshop+1"
              date="March 15, 2023"
            />
            <ActivityCard
              title="Science Fair Judging"
              description="Served as a judge for the district-level science fair competition."
              imageUrl="/placeholder.svg?height=200&width=400&text=Workshop+2"
              date="April 22, 2023"
            />
            <ActivityCard
              title="Educational Conference"
              description="Presented research on innovative teaching methodologies at the national conference."
              imageUrl="/placeholder.svg?height=200&width=400&text=Workshop+3"
              date="May 10, 2023"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0 bg-primary/10" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-1">
            <div className="rounded-[calc(1.5rem-1px)] bg-background p-8 text-center sm:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let's Connect</h2>
              <p className="mb-8 mx-auto max-w-2xl text-muted-foreground">
                Interested in collaborating or learning more about my educational resources? Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/resources">Browse Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
