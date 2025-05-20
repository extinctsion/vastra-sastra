"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    // For demo purposes, we'll just show the success message
    setIsSubmitted(true)
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Have a question about our fashion services? Contact us today and our team will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">contact@vastrasastra.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Fashion Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="mt-4 text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="b2b">B2B Partnership</SelectItem>
                      <SelectItem value="b2c">B2C Order</SelectItem>
                      <SelectItem value="custom">Custom Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
