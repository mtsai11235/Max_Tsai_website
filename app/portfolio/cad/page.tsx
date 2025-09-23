"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Wrench, Eye, Users, FileText, Download } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"


interface CADProject {
  id: string
  title: string
  description: string
  category: string
  tools: string[]
  date: string
  images: string[]
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
    title: "Triple Cube Spinner Remix",
    description: "A 3D Printed Triple Cube Spinner Remix",
    category: "3D Printing",
    tools: ["Tinkercad", "Fusion 360", "Prusa Slicer"],
    date: "2025-10",
    images: ["/Failed_cube_spinner_thumbnail.jpg", "/Fusion_cube_spinner_remix.png", "/PrusaSlicer_Cube_spinner.png"],
    detailedDescription:
      ["In this project, I took a publicly available cube spinner model and remixed it in Fusion 360. My vision was to design a new stand that could hold 3 cubes at once. I used some aspects of their stand designs (mainly the dimensions and divots where the cubes could be inserted) in my new stand. However, this project overall failed in a few ways (many of which were expected, and many others of which should have been expected). Starting with the design process, as I’d only recently learn Fusion, remixing an existing design proved much more difficult than just creating a design from a sketch. The main difficulty was working between meshes, surfaces, and solids, all of which behave differently and are subject to different types of manipulation. When importing the 3D designs, they started as meshes, but these are not easy to manipulate. Thus, I converted them to surfaces. However, editing the existing faces and trying to incorporate them into my design became quite difficult as deleting certain parts resulted in connected parts becoming just sets of 2D faces. In the end, I converted them back to solids using the “thicken” operation, but the experience was overall quite painstakingly difficult.",
      "Going into what failed in this design, first and foremost, I should not have downscaled the design to the degree that I did. In order to print everything on one plate, I scaled everything to 25% which messed up 1) the amount of built-in tolerance, as shrinking it left less room for absolute inaccuracy (this maters especially because this is a functional design that is dependant on well-fitting parts), 2) the ratio of supports to structure, because shrinking resulted in dense support material that could not be easily separated from the real structure. Additionally, due to the way that the stand is printed, there was significant stringing between the two parallel poles, which didn’t matter to the functionality of it, but would require some significant cleanup. In the future, I would probably print the design in its original size, though this would mean printing the stand lying down since the 3D printers are not tall enough for the stand’s height. Furthermore, I would consider separating the stand into the poles and the base, which could then be assembled after printing. This would allow it to be more easily printed."
      ],
    features: [],
    challenges: [],
    outcomes: [],
    credits: [
      {
        role: "Original Designer",
        name: "NateT_Bird",
        url: "https://thangs.com/designer/NateT_Bird",
      },
    ],
  },
  {
    id: "2",
    title: "Horned Ghost Remix",
    description: "A 3D Printed Horned Ghost Remix",
    category: "3D Printing",
    tools: ["Tinkercad", "Fusion 360", "Prusa Slicer"],
    date: "2025-10",
    images: ["/Horned_ghost_thumbnail.jpg", "/Tinkercad_horned_ghost_remix.png", "/PrusaSlicer_Horned_ghost.png"],
    detailedDescription:
      "For this project, I found a publicly available ghost model to remix in Tinkercad. Due to a time crunch, I mostly kept it simple, just adding a horn and feet to the original design. Overall, the design functioned as I expected (although I forgot to consider the forward/backward placement of the feet to allow the ghost to stand). However, one thing I noticed was that Tinkerkad makes it somewhat difficult to apply irregular manipulations to shapes; thus, I couldn’t reduce the portion of the horn and legs that jut into the inner cavity of the ghost. To ensure everything would print properly, my main focus was to try to ensure all the parts overlapped in the design and there weren’t any issues that I couldn’t solve by adding supports. If I were to reprint it, though, I would likely make the walls and legs thicker, as the legs were quite brittle, and parts of the face around the eyes were very thin to the point that holes appeared during printing.",
    features: [],
    challenges: [],
    outcomes: [],
    credits: [
      {
        role: "Original Designer",
        name: "Kraken.Decor",
        url: "https://thangs.com/designer/Kraken.Decor",
      },
    ],
  },
  {
  id: "3",
  title: "Conical Tube Holder",
  description: "CAD Designs for a Conical Tube Holder",
  category: "3D Printing",
  tools: ["Tinkercad", "Fusion 360", "Prusa Slicer"],
  date: "2025-10",
  images: ["/Tinkerkad_conical_tube_holder.png","/Fusion_conical_tube_holder.png"],
  detailedDescription:
    "Here, I designed tube holders for 50mL conical tubes in both Tinkercad and Fusion to see what are the similarities and differences in their approaches to creating a design. My overall conclusion is that the two CAD software are very different in how they expect you to go about creating 3D structures and manipulating them. Tinkercad, which seems more beginner-friendly, focuses mainly on composing simple shapes together, which they provide in their library of geometries. Therefore, to make designs, Tinkercad mostly requires dragging shapes on top of one another and joining them together, or using these shapes to make holes. However, when designing in Fusion, you start with a 2D sketch, then you extrude from that 2D sketch to create a 3D solid. For this project, I was leveraging simple geometries, so it was easy to use both software to design the tube holder. One thing I ran into with Tinkercad was the inability to align certain parts in unexpected locations for the software (e.g., center a hole ¼ of the way along the rectangular surface), resulting in me just eyeballing it. But, in Fusion, due to the sketch feature, I could first design the 2D bird's-eye schematic with the correct alignments, then extrude, making this process quite easy.",
  features: [],
  challenges: [],
  outcomes: [],
  credits: [],
},
  {
    id: "4",
    title: "Assistive Bottle Opener",
    description: "A 3D Printed Assistive Bottle Opener",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    images: ["/Bottle_opener_thumbnail.jpg"],
    detailedDescription:
      "This print is an ergonomic bottle opener for people with arthritis or other hand dexterity issues. The original design comes from Makers Making Change, a Neil Squire non-profit program to empower people with disabilities, and has a few different sized models. Overall, the documentation was quite clear and thorough, detailing the different sizes of bottles that are compatible with the different sizes of bottle openers. Furthermore, they also provide documents showing how to use the bottle opener, how much the expected cost is to print, and even a printable document to reference the size of cap each bottle opener can be used on. Overall, the design was simple and effective and the documentation was well written and thought-out.",
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
    id: "5",
    title: "Torture Toaster",
    description: "A 3D Printed Toaster to Test Printer Capabilities",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    images: ["/Torture_toaster_thumbnail.jpg"],
    detailedDescription:
      "For this project, I tried printing a 3D torture toaster file from Clockword 3D in order to test the limitations of the Prusa Mini+ printer. As this was a torture test, I purposefully did not include any supports, printing the model as is. From the beginning, the print began to fail do to low bed adhesion. This can happen when there’s too little surface area of the print against the printing bed. This happened to me on a later print as well and I’ve come to learn a few techniques to address it, but overall this suggests that, when designing a 3D model for printing, you have to consider the limitations of the printing machine and account for the surface area against the bed, overhangs, and other factors that may compromise the print. Whether it means rotating the orientation of the print or re-evaluating the design itself, it’s important to consider the model’s printability without relying immediately on supports and a skirt/brim.",
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
    id: "6",
    title: "Nametag",
    description: "A 3D Printed Custom Nametag",
    category: "3D Printing",
    tools: ["Prusa Slicer"],
    date: "2025-10",
    images: ["/Nametag_thumbnail.jpg"],
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
                    <ImageCarousel
                      images={project.images}
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
              <ImageCarousel
                images={selectedProject.images}
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
