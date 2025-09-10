"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Wrench, Eye, Users, FileText, Download } from "lucide-react"

interface CADProject {
  id: string
  title: string
  description: string
  category: string
  tools: string[]
  date: string
  image: string
  detailedDescription: string | string[]
  features: string[]
  challenges: string[]
  outcomes: string[]
  projectFiles?: {
    name: string
    type: string
    url: string
    size?: string
  }[]
  credits?: {
    role: string
    name: string
    organization?: string
    url?: string
  }[]
}

const cadProjects: CADProject[] = [
  {
    id: "1",
    title: "Assistive Bottle Opener",
    description: "A 3D Printed Assistive Bottle Opener",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    image: "/Bottle_opener_thumbnail.jpg",
    detailedDescription: [
      "This project involved designing a sleek and ergonomic housing for a next-generation smart device that addresses both aesthetic appeal and thermal management challenges. The design process began with extensive user research and ergonomic studies to ensure the device would be comfortable to hold for extended periods.",
      "Material selection was critical to balance durability, weight, and thermal properties. After evaluating several options, we selected a composite material that offers excellent heat dissipation while maintaining structural integrity during impact tests. The housing features strategically placed ventilation channels that maximize airflow without compromising the device's sleek appearance.",
      "The manufacturing process was carefully considered from the early design stages. We worked closely with production engineers to ensure that the complex geometries could be efficiently manufactured at scale while maintaining tight tolerances. This collaboration resulted in several innovative solutions that reduced production costs without sacrificing quality.",
      "Environmental sustainability was another key consideration in this project. The housing is designed for easy disassembly and recycling at end-of-life, with clearly marked material types and minimal use of adhesives. We also optimized the design to reduce material waste during manufacturing."
    ],
    features: ["Ergonomic grip", "Easy to use", "Printable in one piece"],
    challenges: [],
    outcomes: [],
    credits: [
      {
        role: "Designer",
        name: "Neil Squire",
        url: "https://github.com/makersmakingchange/Bottle-Opener",
      },
    ],
  },
  {
    id: "2",
    title: "Torture Toaster",
    description: "A 3D Printed Toaster to Test Printer Capabilities",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    image: "/Torture_toaster_thumbnail.jpg",
    detailedDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    features: ["Tests Bed Adhesion", "Tests Elephant footing", "Tests Stringing"],
    challenges: [],
    outcomes: [],
    credits: [
      {
        role: "Designer",
        name: "Clockspring 3D",
        url: "https://www.patreon.com/posts/torture-toaster-49091228",
      },
    ],
  },
  {
    id: "3",
    title: "Nametag",
    description: "A 3D Printed Custom Nametag",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    image: "/Nametag_thumbnail.jpg",
    detailedDescription:
      "This was my first 3D print (at least for the past 7+ years)! Here, I took a nametag .3mf file (attached) and loaded it into Prusa Slicer. To get a sense of how to edit the 3D design and print it, I first browsed the software and read through the Prusa MINI+ 3D Printing Handbook. For this project, I first switched into expert mode (as beginner mode will not let you edit the objects), then I edited the nametag text of the .3mf file and ordered it to be inline. To ensure the color switch between the base and the text, I sliced the model, then inserted a color switch using the vertical slide bar (slide the bar to the level you need the color switch, then click the slider). After downloading the .gcode file to a USB, I ran the .gcode file on a Prusa MINI+ printer. To perform the filament switch in the middle of the run, I pulled out the old filament, loaded my new color, then fed it into the gear. After all that, I had my nametag 👍",
    features: [],
    challenges: [],
    outcomes: [],
    projectFiles: [
      {
        name: "Nametag",
        type: "3MF",
        url: "/keychain - first name last name.3mf",
      },
    ],
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
                  {typeof selectedProject.detailedDescription === 'string' ? (
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {selectedProject.detailedDescription}
                    </p>
                  ) : (
                    Array.isArray(selectedProject.detailedDescription) && 
                    selectedProject.detailedDescription.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed text-base mb-4">
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>


                {selectedProject.projectFiles && selectedProject.projectFiles.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Project Files
                    </h4>
                    <div className="grid gap-3">
                      {selectedProject.projectFiles.map((file, index) => (
                        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <FileText className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{file.name}</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>{file.type}</span>
                                  {file.size && (
                                    <>
                                      <span>•</span>
                                      <span>{file.size}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2 bg-transparent"
                              onClick={() => window.open(file.url, "_blank")}
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.credits && selectedProject.credits.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Credits
                    </h4>
                    <div className="grid gap-3">
                      {selectedProject.credits.map((credit, index) =>
                        credit.url ? (
                          <a key={index} href={credit.url} target="_blank" rel="noopener noreferrer" className="block">
                            <Card className="p-4 hover:shadow-md transition-all hover:bg-card/80 cursor-pointer">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Users className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-foreground hover:text-primary transition-colors">
                                    {credit.name}
                                  </p>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>{credit.role}</span>
                                    {credit.organization && (
                                      <>
                                        <span>•</span>
                                        <span>{credit.organization}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                              </div>
                            </Card>
                          </a>
                        ) : (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Users className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{credit.name}</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>{credit.role}</span>
                                  {credit.organization && (
                                    <>
                                      <span>•</span>
                                      <span>{credit.organization}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Card>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
