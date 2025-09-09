"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-card to-background py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work
              <span className="text-primary block">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Whether you need CAD design, web development, or technical
              consultation, I'm here to help turn your vision into reality.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:john.doe@email.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      john.doe@email.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      San Francisco, CA
                      <br />
                      Available for remote work
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div>
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">
                      Professional network
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">
                      Code repositories
                    </p>
                  </div>
                </a>
                <a
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">Latest updates</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
