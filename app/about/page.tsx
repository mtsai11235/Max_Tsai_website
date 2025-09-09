"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const galleryImages = [
  {
    src: "/modern-workspace-with-cad-design-setup.jpg",
    alt: "Modern workspace with dual monitors showing CAD designs",
    description:
      "My daily workspace where creativity meets precision. Dual monitor setup optimized for CAD design and development work.",
  },
  {
    src: "/3d-printed-prototypes-and-mechanical-parts.jpg",
    alt: "Collection of 3D printed prototypes",
    description: "Various prototypes and mechanical parts I've designed and 3D printed for testing and validation.",
  },
  {
    src: "/team-collaboration-in-design-meeting.jpg",
    alt: "Team collaboration session",
    description: "Collaborating with cross-functional teams to bring innovative ideas from concept to reality.",
  },
  {
    src: "/technical-drawings-and-blueprints-on-desk.jpg",
    alt: "Technical drawings and blueprints",
    description: "Traditional sketching and technical drawings remain an essential part of my design process.",
  },
  {
    src: "/programming-code-on-multiple-screens.jpg",
    alt: "Programming setup with code",
    description: "Full-stack development environment where I build web applications and software solutions.",
  },
  {
    src: "/engineering-conference-presentation.jpg",
    alt: "Conference presentation",
    description: "Presenting innovative design solutions at engineering conferences and industry events.",
  },
]

export default function AboutPage() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

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
              About Me
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Journey in
              <span className="text-primary block">Design & Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the story behind my passion for creating innovative solutions that bridge the physical and
              digital worlds.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About Text Section */}
        <section className="mb-16">
          <Card className="animate-on-scroll">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  My journey began with a fascination for how things work and a desire to create solutions that make a
                  difference. With a background spanning both mechanical engineering and software development, I've
                  cultivated a unique perspective that allows me to approach problems from multiple angles.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Over the years, I've had the privilege of working on diverse projects ranging from complex mechanical
                  assemblies to cutting-edge web applications. This dual expertise has taught me that the best solutions
                  often emerge when physical and digital design principles work in harmony.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  My approach to design is rooted in understanding user needs, iterating rapidly, and maintaining a
                  focus on both functionality and aesthetics. Whether I'm designing a mechanical component that needs to
                  withstand specific stresses or building a user interface that needs to be intuitive and accessible, I
                  believe that great design starts with empathy and attention to detail.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  When I'm not designing or coding, you'll find me exploring new technologies, attending industry
                  conferences, or mentoring aspiring designers and developers. I'm passionate about sharing knowledge
                  and contributing to the communities that have helped shape my career.
                </p>

                <p className="text-lg leading-relaxed">
                  I'm always excited to take on new challenges and collaborate with teams that share my passion for
                  innovation. Let's create something amazing together.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Behind the Scenes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my workspace, projects, and the creative process that drives my work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group animate-on-scroll cursor-pointer"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className={`w-full h-64 object-cover transition-all duration-300 ${
                      hoveredImage === index ? "blur-sm scale-105" : "blur-0 scale-100"
                    }`}
                  />

                  {/* Overlay with description */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center p-4 transition-opacity duration-300 ${
                      hoveredImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-white text-center text-sm leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
