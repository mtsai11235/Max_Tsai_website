"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Plus,
  Edit,
  Save,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  current: boolean
}

interface Skill {
  id: string
  name: string
  category: string
}

export default function ResumePage() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      title: "Senior CAD Designer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "",
      description:
        "Led design team in developing complex mechanical systems and product prototypes. Collaborated with engineering teams to optimize designs for manufacturability.",
      current: true,
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      location: "Remote",
      startDate: "2020-06",
      endDate: "2021-12",
      description:
        "Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented responsive designs and optimized application performance.",
      current: false,
    },
  ])

  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "SolidWorks", category: "CAD" },
    { id: "2", name: "AutoCAD", category: "CAD" },
    { id: "3", name: "Fusion 360", category: "CAD" },
    { id: "4", name: "JavaScript", category: "Programming" },
    { id: "5", name: "React", category: "Programming" },
    { id: "6", name: "Python", category: "Programming" },
    { id: "7", name: "Node.js", category: "Programming" },
    { id: "8", name: "Figma", category: "Design" },
    { id: "9", name: "TypeScript", category: "Programming" },
    { id: "10", name: "Blender", category: "Design" },
    { id: "11", name: "CATIA", category: "CAD" },
    { id: "12", name: "Adobe Creative Suite", category: "Design" },
  ])

  const [editingExperience, setEditingExperience] = useState<string | null>(null)
  const [editingSkill, setEditingSkill] = useState<string | null>(null)

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

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: "New Position",
      company: "Company Name",
      location: "Location",
      startDate: new Date().toISOString().slice(0, 7),
      endDate: "",
      description: "Job description...",
      current: true,
    }
    setExperiences([newExperience, ...experiences])
    setEditingExperience(newExperience.id)
  }

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)))
  }

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "New Skill",
      category: "Other",
    }
    setSkills([...skills, newSkill])
    setEditingSkill(newSkill.id)
  }

  const updateSkill = (id: string, updates: Partial<Skill>) => {
    setSkills(skills.map((skill) => (skill.id === id ? { ...skill, ...updates } : skill)))
  }

  const deleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const skillCategories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-card to-background py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center animate-on-scroll">
            <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">JD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">John Doe</h1>
            <p className="text-xl text-muted-foreground mb-6">CAD Designer & Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
            <Button size="lg" className="animate-pulse">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Innovative CAD Designer and Full Stack Developer with 5+ years of experience creating cutting-edge
                  designs and digital solutions. Proven track record of delivering complex projects from concept to
                  completion, combining technical expertise with creative problem-solving skills.
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Professional Experience
                  </CardTitle>
                  <Button onClick={addExperience} size="sm" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((experience, index) => (
                  <div key={experience.id}>
                    {editingExperience === experience.id ? (
                      <div className="space-y-4 p-4 border border-border rounded-lg bg-card">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            value={experience.title}
                            onChange={(e) => updateExperience(experience.id, { title: e.target.value })}
                            placeholder="Job Title"
                          />
                          <Input
                            value={experience.company}
                            onChange={(e) => updateExperience(experience.id, { company: e.target.value })}
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Input
                            value={experience.location}
                            onChange={(e) => updateExperience(experience.id, { location: e.target.value })}
                            placeholder="Location"
                          />
                          <Input
                            type="month"
                            value={experience.startDate}
                            onChange={(e) => updateExperience(experience.id, { startDate: e.target.value })}
                          />
                          <Input
                            type="month"
                            value={experience.endDate}
                            onChange={(e) => updateExperience(experience.id, { endDate: e.target.value })}
                            placeholder="End Date (leave empty if current)"
                          />
                        </div>
                        <Textarea
                          value={experience.description}
                          onChange={(e) => updateExperience(experience.id, { description: e.target.value })}
                          placeholder="Job description and achievements..."
                          rows={4}
                        />
                        <div className="flex gap-2">
                          <Button onClick={() => setEditingExperience(null)} size="sm">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button onClick={() => deleteExperience(experience.id)} size="sm" variant="destructive">
                            <X className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="group">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                            <p className="text-primary font-medium">{experience.company}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {experience.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(experience.startDate).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                })}{" "}
                                -{" "}
                                {experience.endDate
                                  ? new Date(experience.endDate).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                    })
                                  : "Present"}
                              </span>
                            </div>
                          </div>
                          <Button
                            onClick={() => setEditingExperience(experience.id)}
                            size="sm"
                            variant="ghost"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                      </div>
                    )}
                    {index < experiences.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Science in Mechanical Engineering
                  </h3>
                  <p className="text-primary font-medium">University of California, Berkeley</p>
                  <p className="text-sm text-muted-foreground">2016 - 2020 • GPA: 3.8/4.0</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Certificate in Full Stack Web Development</h3>
                  <p className="text-primary font-medium">Stanford Continuing Studies</p>
                  <p className="text-sm text-muted-foreground">2020 • Completed with Distinction</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills Section */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Skills</CardTitle>
                  <Button onClick={addSkill} size="sm" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <div key={skill.id} className="group">
                            {editingSkill === skill.id ? (
                              <div className="space-y-2 p-3 border border-border rounded-lg bg-background">
                                <Input
                                  value={skill.name}
                                  onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                                  placeholder="Skill name"
                                />
                                <Input
                                  value={skill.category}
                                  onChange={(e) => updateSkill(skill.id, { category: e.target.value })}
                                  placeholder="Category"
                                />
                                <div className="flex gap-2">
                                  <Button onClick={() => setEditingSkill(null)} size="sm">
                                    <Save className="w-4 h-4" />
                                  </Button>
                                  <Button onClick={() => deleteSkill(skill.id)} size="sm" variant="destructive">
                                    <X className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className="relative p-3 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50 cursor-pointer">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                  <Button
                                    onClick={() => setEditingSkill(skill.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <Edit className="w-3 h-3" />
                                  </Button>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Certified SolidWorks Professional</p>
                    <p className="text-sm text-muted-foreground">Dassault Systèmes • 2022</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">AWS Certified Developer</p>
                    <p className="text-sm text-muted-foreground">Amazon Web Services • 2021</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Google UX Design Certificate</p>
                    <p className="text-sm text-muted-foreground">Google • 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">English</span>
                  <Badge variant="secondary">Native</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Spanish</span>
                  <Badge variant="outline">Conversational</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">French</span>
                  <Badge variant="outline">Basic</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
