"use client"

import { Textarea } from "@/components/ui/textarea"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Eye, Download, Clock, Plus, Pencil, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroPattern } from "@/components/hero-pattern"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-md overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Admin Dashboard</h1>
            <p className="mt-4 text-xl text-muted-foreground">Manage your content, resources, and website settings</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold">24</h2>
                <p className="text-sm text-muted-foreground">Total Resources</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Download className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold">156</h2>
                <p className="text-sm text-muted-foreground">Total Downloads</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold">1,245</h2>
                <p className="text-sm text-muted-foreground">Page Views</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="resources">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="resources" className="mt-6">
                <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                  <CardHeader className="bg-primary/5 flex flex-row items-center justify-between pb-4">
                    <CardTitle>Manage Resources</CardTitle>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Resource
                    </Button>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-2 text-left font-medium">Title</th>
                            <th className="px-4 py-2 text-left font-medium">Category</th>
                            <th className="px-4 py-2 text-left font-medium">Uploaded</th>
                            <th className="px-4 py-2 text-left font-medium">Downloads</th>
                            <th className="px-4 py-2 text-left font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              title: "ICT Lesson Plan for Grade 3",
                              category: "ICT",
                              date: "Jan 15, 2023",
                              downloads: 45,
                            },
                            {
                              title: "Physical Education Activities",
                              category: "Physical Education",
                              date: "Mar 22, 2023",
                              downloads: 32,
                            },
                            {
                              title: "Mathematics Worksheets",
                              category: "Mathematics",
                              date: "Feb 10, 2023",
                              downloads: 67,
                            },
                            {
                              title: "Science Experiment Guide",
                              category: "Science",
                              date: "Apr 5, 2023",
                              downloads: 28,
                            },
                            {
                              title: "Digital Learning Tools Guide",
                              category: "ICT",
                              date: "May 18, 2023",
                              downloads: 53,
                            },
                          ].map((resource, i) => (
                            <tr key={i} className="border-b">
                              <td className="px-4 py-3">{resource.title}</td>
                              <td className="px-4 py-3">
                                <Badge variant="outline">{resource.category}</Badge>
                              </td>
                              <td className="px-4 py-3 text-muted-foreground">{resource.date}</td>
                              <td className="px-4 py-3">{resource.downloads}</td>
                              <td className="px-4 py-3">
                                <div className="flex gap-2">
                                  <Button size="icon" variant="ghost" className="h-8 w-8">
                                    <Pencil className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                  <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activities" className="mt-6">
                <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                  <CardHeader className="bg-primary/5 flex flex-row items-center justify-between pb-4">
                    <CardTitle>Recent Activities</CardTitle>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Activity
                    </Button>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          action: "Resource Uploaded",
                          item: "ICT Lesson Plan for Grade 4",
                          time: "2 hours ago",
                        },
                        {
                          action: "Profile Updated",
                          item: "Updated bio information",
                          time: "Yesterday",
                        },
                        {
                          action: "Resource Downloaded",
                          item: "Mathematics Worksheets",
                          time: "3 days ago",
                        },
                        {
                          action: "New Workshop Added",
                          item: "Teacher Training Workshop",
                          time: "1 week ago",
                        },
                        {
                          action: "Award Added",
                          item: "Excellence in Teaching Award",
                          time: "2 weeks ago",
                        },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.item}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="mt-6">
                <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                  <CardHeader className="bg-primary/5 pb-4">
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Minhajul Islam Milon" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="minhajul.islam@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Biography</Label>
                        <Textarea
                          id="bio"
                          rows={5}
                          defaultValue="Assistant Teacher at Government Primary School with over 17 years of teaching experience..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="youtube">YouTube Channel URL</Label>
                        <Input id="youtube" defaultValue="https://youtube.com/channel/example" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="facebook">Facebook Profile URL</Label>
                        <Input id="facebook" defaultValue="https://facebook.com/example" />
                      </div>
                      <Button type="submit">Save Changes</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
