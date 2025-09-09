"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center dynamic-bg interactive-bg"
      >
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll relative z-10">
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-4 animate-pulse">
              Available for new opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Creative
              <span className="text-primary block">Designer</span>& Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting innovative solutions through CAD design and programming. Bringing ideas to life with precision
              and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/portfolio/cad">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Get In Touch
                  <Mail className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate designer and developer with expertise in both CAD design and software development. My
                unique blend of technical skills allows me to bridge the gap between physical and digital design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With years of experience in creating innovative solutions, I specialize in turning complex ideas into
                elegant, functional designs that make a real impact.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Link href="/about">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    See More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">P</span>
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set spanning design, development, and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "CAD Design", skills: ["SolidWorks", "AutoCAD", "Fusion 360", "3D Modeling"] },
              { category: "Programming", skills: ["JavaScript", "Python", "React", "Node.js"] },
              { category: "Design Tools", skills: ["Figma", "Adobe Creative Suite", "Blender", "KeyShot"] },
            ].map((skillGroup, index) => (
              <Card key={index} className="animate-on-scroll hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my best work across CAD design and programming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-on-scroll hover:shadow-lg transition-all group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-muted-foreground">CAD Project Preview</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mechanical Assembly Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Complex mechanical system designed for optimal performance and manufacturability.
                  </p>
                  <Link href="/portfolio/cad">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      View CAD Projects
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll hover:shadow-lg transition-all group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Code Preview</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Full-Stack Web Application</h3>
                  <p className="text-muted-foreground mb-4">
                    Modern web application built with React, Node.js, and advanced features.
                  </p>
                  <Link href="/portfolio/programming">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      View Programming Projects
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
