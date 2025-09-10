"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Wrench, Eye } from "lucide-react"

interface CADProject {
  id: string
  title: string
  description: string
  category: string
  tools: string[]
  date: string
  image: string
  detailedDescription: string
  features: string[]
  challenges: string[]
  outcomes: string[]
}

const cadProjects: CADProject[] = [
  {
    id: "1",
    title: "Nametag",
    description: "A Custom Nametag",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    image: "/nametag_thumbnail.jpg",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: [],
    challenges: [],
    outcomes: [],
  },
  {
    id: "2",
    title: "Torture Toaster",
    description: "A 3D Printed Toaster",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    image: "/torture_toaster_thumbnail.jpg",
    detailedDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    features: ["Aluminum construction", "Integrated cooling", "Weight optimized", "Racing specification"],
    challenges: ["Thermal management", "Vibration analysis", "Manufacturing constraints"],
    outcomes: ["25% lighter than standard", "Improved heat dissipation", "FIA approved design"],
  },
  {
    id: "3",
    title: "Consumer Electronics Housing",
    description: "Sleek and ergonomic housing design for next-generation smart device with thermal management.",
    category: "Product Design",
    tools: ["Rhino", "KeyShot", "Solidworks"],
    date: "2023-10",
    image: "/consumer-electronics-housing-design.jpg",
    detailedDescription:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    features: ["Ergonomic grip", "Passive cooling", "Drop-test certified", "Sustainable materials"],
    challenges: ["Size constraints", "Heat dissipation", "Manufacturing scalability"],
    outcomes: ["Patent pending design", "40% better cooling", "Award-winning aesthetics"],
  },
]

export default function CADPortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<CADProject | null>(null)

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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <Badge variant="secondary" className="mb-4">
              CAD Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              CAD Design
              <span className="text-primary block">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my collection of CAD designs spanning mechanical engineering, product development, aerospace, and
              architectural applications. Each project showcases precision, innovation, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cadProjects.map((project, index) => (
              <Card
                key={project.id}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                          onClick={() => setSelectedProject(project)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedProject.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </div>
                  <Badge variant="outline">{selectedProject.category}</Badge>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="flex items-center gap-1">
                        <Wrench className="w-3 h-3" />
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedProject.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
