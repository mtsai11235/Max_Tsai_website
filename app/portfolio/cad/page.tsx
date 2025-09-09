"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Wrench, Eye, Github } from "lucide-react"

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
    title: "Robotic Arm Assembly",
    description: "Complete 6-DOF robotic arm design with precision joints and servo integration.",
    category: "Mechanical Design",
    tools: ["SolidWorks", "KeyShot", "ANSYS"],
    date: "2024-01",
    image: "/robotic-arm-cad-design.jpg",
    detailedDescription:
      "Designed a fully functional 6-degree-of-freedom robotic arm for industrial automation applications. The project involved complex kinematic analysis, material selection, and manufacturing considerations.",
    features: ["6-DOF movement", "Payload capacity: 5kg", "Precision servo control", "Modular joint design"],
    challenges: ["Weight optimization", "Joint backlash minimization", "Cable management"],
    outcomes: ["30% weight reduction", "Improved accuracy by 15%", "Reduced manufacturing cost by 20%"],
  },
  {
    id: "2",
    title: "Automotive Engine Block",
    description: "High-performance engine block design with optimized cooling channels and mounting points.",
    category: "Automotive",
    tools: ["Fusion 360", "CFD Analysis", "CAM"],
    date: "2023-11",
    image: "/automotive-engine-block-cad.jpg",
    detailedDescription:
      "Developed a lightweight aluminum engine block for a high-performance racing application with integrated cooling channels and optimized material distribution.",
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
    date: "2023-09",
    image: "/consumer-electronics-housing-design.jpg",
    detailedDescription:
      "Created an innovative housing design for a consumer smart device focusing on aesthetics, ergonomics, and thermal performance.",
    features: ["Ergonomic grip", "Passive cooling", "Drop-test certified", "Sustainable materials"],
    challenges: ["Size constraints", "Heat dissipation", "Manufacturing scalability"],
    outcomes: ["Patent pending design", "40% better cooling", "Award-winning aesthetics"],
  },
  {
    id: "4",
    title: "Precision Gear System",
    description: "High-precision planetary gear system for aerospace applications with minimal backlash.",
    category: "Aerospace",
    tools: ["SolidWorks", "GearTrax", "ANSYS"],
    date: "2023-07",
    image: "/precision-planetary-gear-system.jpg",
    detailedDescription:
      "Engineered a high-precision planetary gear system for satellite positioning mechanisms requiring extreme accuracy and reliability.",
    features: ["Planetary configuration", "Minimal backlash", "Space-grade materials", "Self-lubricating"],
    challenges: ["Zero-backlash requirement", "Space environment", "Long-term reliability"],
    outcomes: ["<0.1° backlash achieved", "Space qualified", "20-year service life"],
  },
  {
    id: "5",
    title: "Medical Device Component",
    description: "Biocompatible surgical instrument component with ergonomic design and sterilization compatibility.",
    category: "Medical",
    tools: ["SolidWorks", "FDA Validation", "FEA"],
    date: "2023-05",
    image: "/medical-surgical-instrument-design.jpg",
    detailedDescription:
      "Developed a critical component for minimally invasive surgical instruments with focus on biocompatibility and surgeon ergonomics.",
    features: ["Biocompatible materials", "Ergonomic design", "Sterilization ready", "Minimal invasive"],
    challenges: ["FDA compliance", "Biocompatibility", "Precision requirements"],
    outcomes: ["FDA approved", "Surgeon endorsed", "Patent filed"],
  },
  {
    id: "6",
    title: "Architectural Facade System",
    description: "Modular building facade system with integrated solar panels and climate control features.",
    category: "Architecture",
    tools: ["Revit", "Rhino", "Grasshopper"],
    date: "2023-03",
    image: "/architectural-facade-system-with-solar-panels.jpg",
    detailedDescription:
      "Designed a revolutionary modular facade system that integrates renewable energy generation with advanced climate control for sustainable buildings.",
    features: ["Solar integration", "Modular design", "Climate control", "Sustainable materials"],
    challenges: ["Weather resistance", "Energy efficiency", "Installation complexity"],
    outcomes: ["LEED certified", "40% energy savings", "Industry recognition"],
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
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="w-full" onClick={() => setSelectedProject(project)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                    </div>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{selectedProject.detailedDescription}</p>

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
                    <h5 className="font-medium text-foreground mb-2">Tools Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="flex items-center gap-1">
                          <Wrench className="w-3 h-3" />
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Key Features</h5>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-foreground mb-2">Challenges</h5>
                    <ul className="space-y-1">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-foreground mb-2">Outcomes</h5>
                    <ul className="space-y-1">
                      {selectedProject.outcomes.map((outcome, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <Button className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Project
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  View Files
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
