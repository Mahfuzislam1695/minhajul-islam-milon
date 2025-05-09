"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Mail, MapPin, Phone, Youtube, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { HeroPattern } from "@/components/hero-pattern"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <HeroPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Contact Me</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Get in touch for collaborations, workshops, or educational resources
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
              <CardContent className="p-6">
                <Badge className="mb-4">Message</Badge>
                <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

                {isSubmitted ? (
                  <div className="rounded-xl bg-primary/10 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium">Message Sent!</h3>
                    <p className="mb-6 text-muted-foreground">
                      Thank you for your message. I will get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                <CardContent className="p-6">
                  <Badge className="mb-4">Info</Badge>
                  <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">School Address</h3>
                        <p className="text-muted-foreground">
                          Government Primary School
                          <br />
                          Example District, Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">minhajul.islam@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                <CardContent className="p-6">
                  <Badge className="mb-4">Social</Badge>
                  <h2 className="mb-6 text-2xl font-semibold">Connect on Social Media</h2>

                  <div className="grid gap-4">
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <Youtube className="h-4 w-4" />
                        </div>
                        <span className="ml-2">YouTube Channel</span>
                      </Link>
                    </Button>

                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                          <Facebook className="h-4 w-4" />
                        </div>
                        <span className="ml-2">Facebook Profile</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:border-primary hover:shadow-md dark:border-primary/20 dark:hover:border-primary/50">
                <CardContent className="p-6">
                  <Badge className="mb-4">Availability</Badge>
                  <h2 className="mb-4 text-2xl font-semibold">Available For</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Workshops</Badge>
                    <Badge variant="secondary">Training Sessions</Badge>
                    <Badge variant="secondary">Educational Consultations</Badge>
                    <Badge variant="secondary">Speaking Engagements</Badge>
                    <Badge variant="secondary">Curriculum Development</Badge>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Please contact me with your requirements and I will get back to you as soon as possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
