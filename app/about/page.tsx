import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroPattern } from "@/components/hero-pattern"

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">About Me</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Educator, innovator, and advocate for modern teaching methodologies
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-background">
                    <div className="relative h-full w-full">
                      <Image src="/images/profile.png" alt="Minhajul Islam Milon" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold">Minhajul Islam Milon</h2>
                  <p className="text-primary">Assistant Teacher</p>
                  <p className="mt-2 text-muted-foreground">Government Primary School</p>
                  <p className="text-muted-foreground">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="english" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="english">English</TabsTrigger>
                  <TabsTrigger value="bangla">বাংলা</TabsTrigger>
                </TabsList>
                <TabsContent value="english" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 text-2xl font-semibold">Biography</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          I am Minhajul Islam Milon, an Assistant Teacher at a Government Primary School in Bangladesh.
                          With over 10 years of teaching experience, I have dedicated my career to improving education
                          through innovative teaching methods and technology integration. I believe in creating engaging
                          learning environments that inspire students to explore, question, and grow.
                        </p>
                        <p>
                          My passion for educational innovation has led me to develop numerous teaching resources,
                          conduct workshops for fellow educators, and participate in national and international
                          educational programs. I am committed to continuous professional development and sharing
                          knowledge with the broader educational community.
                        </p>
                        <p>
                          Throughout my career, I have focused on bridging the gap between traditional teaching methods
                          and modern educational technologies. By integrating ICT tools into classroom activities, I
                          have been able to create more interactive and engaging learning experiences for my students.
                        </p>
                        <p>
                          My teaching philosophy centers around student-centered learning, where each child's unique
                          abilities and learning styles are recognized and nurtured. I believe that every student has
                          the potential to excel when provided with the right guidance and resources.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bangla" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 text-2xl font-semibold">জীবনী</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          আমি মিনহাজুল ইসলাম মিলন, বাংলাদেশের একটি সরকারি প্রাথমিক বিদ্যালয়ের সহকারী শিক্ষক। ১৭ বছরেরও বেশি শিক্ষকতার
                          অভিজ্ঞতা নিয়ে, আমি উদ্ভাবনী শিক্ষণ পদ্ধতি এবং প্রযুক্তি সংযোজনের মাধ্যমে শিক্ষার উন্নয়নে আমার কর্মজীবন উৎসর্গ
                          করেছি। আমি এমন শিক্ষণীয় পরিবেশ তৈরি করতে বিশ্বাস করি যা শিক্ষার্থীদের অন্বেষণ, প্রশ্ন করতে এবং বৃদ্ধি পেতে
                          অনুপ্রাণিত করে।
                        </p>
                        <p>
                          শিক্ষা উদ্ভাবনের প্রতি আমার আবেগ আমাকে বহু শিক্ষণ সম্পদ বিকাশ করতে, সহকর্মী শিক্ষকদের জন্য কর্মশালা পরিচালনা করতে
                          এবং জাতীয় ও আন্তর্জাতিক শিক্ষা কর্মসূচিতে অংশগ্রহণ করতে পরিচালিত করেছে। আমি ক্রমাগত পেশাগত উন্নয়ন এবং বৃহত্তর
                          শিক্ষা সম্প্রদায়ের সাথে জ্ঞান ভাগ করে নেওয়ার প্রতি প্রতিশ্রুতিবদ্ধ।
                        </p>
                        <p>
                          আমার কর্মজীবন জুড়ে, আমি ঐতিহ্যবাহী শিক্ষণ পদ্ধতি এবং আধুনিক শিক্ষা প্রযুক্তির মধ্যে সেতুবন্ধন তৈরি করার উপর
                          মনোনিবেশ করেছি। শ্রেণীকক্ষের কার্যক্রমে আইসিটি টুল সংযুক্ত করে, আমি আমার শিক্ষার্থীদের জন্য আরও ইন্টারেক্টিভ
                          এবং আকর্ষণীয় শিক্ষার অভিজ্ঞতা তৈরি করতে সক্ষম হয়েছি।
                        </p>
                        <p>
                          আমার শিক্ষণ দর্শন শিক্ষার্থী-কেন্দ্রিক শিক্ষার উপর কেন্দ্রীভূত, যেখানে প্রতিটি শিশুর অনন্য ক্ষমতা এবং শিক্ষার ধরণ
                          স্বীকৃত এবং লালিত হয়। আমি বিশ্বাস করি যে সঠিক নির্দেশনা এবং সংস্থান প্রদান করা হলে প্রতিটি শিক্ষার্থীর উৎকর্ষ
                          লাভের সম্ভাবনা রয়েছে।
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="mt-8">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-semibold">Key Accomplishments</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2020</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">সেরা উদ্ভাবক</h3>
                        <p className="text-muted-foreground">
                          Awarded by a2i (Access to Information) for innovative teaching methods
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2019</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">জেলা শ্রেষ্ঠ সহকারী শিক্ষক</h3>
                        <p className="text-muted-foreground">
                          Recognized as the best assistant teacher in the district
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2018</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Co-ordinator: British Council</h3>
                        <p className="text-muted-foreground">
                          Coordinated educational programs in partnership with the British Council
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2018</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">ICT4E Ambassador</h3>
                        <p className="text-muted-foreground">
                          Selected as an ambassador for ICT in Education initiatives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2018</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Physical Education Trainer</h3>
                        <p className="text-muted-foreground">
                          Certified as a Physical Education Trainer for primary schools
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-semibold">Education & Training</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2015</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Bachelor of Education (B.Ed)</h3>
                        <p className="text-muted-foreground">National University of Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2013</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Diploma in Primary Education</h3>
                        <p className="text-muted-foreground">Primary Teacher Training Institute</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2018</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">ICT in Education Training</h3>
                        <p className="text-muted-foreground">a2i Program, Government of Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Badge className="h-10 w-10 rounded-full p-1.5">2019</Badge>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Innovative Teaching Methods</h3>
                        <p className="text-muted-foreground">British Council Training Program</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
