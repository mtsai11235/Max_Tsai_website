"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Calendar, Code, Eye, Github, Globe, Star, GitBranch } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"


interface ProgrammingProject {
  id: string
  title: string
  description: string
  category: string
  techStack: string[]
  date: string
  image: string
  detailedDescription: string
  features: string[]
  challenges: string[]
  outcomes: string[]
  githubUrl: string
  liveUrl: string
  codeSnippet: string
  stars: number
  forks: number
}

const programmingProjects: ProgrammingProject[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    category: "Web Application",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    date: "2024-02",
    image: "/placeholder.svg?key=ecommerce",
    detailedDescription:
      "A comprehensive e-commerce platform built with modern web technologies, featuring real-time inventory management, secure payment processing, and a powerful admin dashboard for store management.",
    features: ["Real-time inventory", "Stripe integration", "Admin dashboard", "Order tracking", "User authentication"],
    challenges: ["Payment security", "Real-time updates", "Scalable architecture"],
    outcomes: ["99.9% uptime", "50% faster load times", "PCI compliant"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    codeSnippet: `// Payment processing with Stripe
const processPayment = async (paymentData) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'usd',
      metadata: { orderId: paymentData.orderId }
    });
    return { success: true, clientSecret: paymentIntent.client_secret };
  } catch (error) {
    return { success: false, error: error.message };
  }
};`,
    stars: 127,
    forks: 34,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    category: "Web Application",
    techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
    date: "2023-12",
    image: "/placeholder.svg?key=taskapp",
    detailedDescription:
      "A modern task management application that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
    features: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Team management",
      "Progress tracking",
      "File attachments",
    ],
    challenges: ["Real-time synchronization", "Offline functionality", "Performance optimization"],
    outcomes: ["500+ active users", "95% user satisfaction", "Featured on Product Hunt"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://taskmanager-pro.vercel.app",
    codeSnippet: `// Real-time task updates with Socket.io
useEffect(() => {
  socket.on('taskUpdated', (updatedTask) => {
    setTasks(prev => prev.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  });
  
  return () => socket.off('taskUpdated');
}, []);`,
    stars: 89,
    forks: 23,
  },
  {
    id: "3",
    title: "Weather Analytics API",
    description: "RESTful API providing weather data analytics with machine learning predictions and historical data.",
    category: "API/Backend",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    date: "2023-10",
    image: "/placeholder.svg?key=weatherapi",
    detailedDescription:
      "A robust weather analytics API that processes meteorological data and provides accurate predictions using machine learning algorithms, serving thousands of requests daily.",
    features: ["ML predictions", "Historical data", "Rate limiting", "Caching layer", "API documentation"],
    challenges: ["Data accuracy", "High availability", "Scalable architecture"],
    outcomes: ["99.95% uptime", "10k+ daily requests", "Sub-100ms response time"],
    githubUrl: "https://github.com/username/weather-api",
    liveUrl: "https://weather-api-docs.herokuapp.com",
    codeSnippet: `# Weather prediction endpoint
@app.get("/predict/{location}")
async def predict_weather(location: str, days: int = 7):
    try:
        historical_data = await get_historical_data(location)
        prediction = ml_model.predict(historical_data, days)
        return {"location": location, "forecast": prediction}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))`,
    stars: 156,
    forks: 42,
  },
  {
    id: "4",
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans and progress analytics.",
    category: "Mobile Application",
    techStack: ["React Native", "Expo", "Firebase", "Redux", "Chart.js"],
    date: "2023-08",
    image: "/placeholder.svg?key=fitnessapp",
    detailedDescription:
      "A comprehensive fitness tracking mobile application that helps users monitor their workouts, track progress, and achieve their fitness goals with personalized workout plans.",
    features: ["Workout tracking", "Progress analytics", "Custom plans", "Social sharing", "Offline mode"],
    challenges: ["Cross-platform compatibility", "Battery optimization", "Data synchronization"],
    outcomes: ["10k+ downloads", "4.8 app store rating", "Featured by Apple"],
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://apps.apple.com/fitness-tracker",
    codeSnippet: `// Workout tracking with React Native
const trackWorkout = async (workoutData) => {
  try {
    await AsyncStorage.setItem('currentWorkout', JSON.stringify(workoutData));
    dispatch(updateWorkoutProgress(workoutData));
    await syncWithFirebase(workoutData);
  } catch (error) {
    console.error('Failed to track workout:', error);
  }
};`,
    stars: 203,
    forks: 67,
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API with custom templates and batch processing.",
    category: "AI/ML",
    techStack: ["Python", "OpenAI API", "Streamlit", "MongoDB", "Celery"],
    date: "2023-06",
    image: "/placeholder.svg?key=aicontentgen",
    detailedDescription:
      "An intelligent content generation platform that leverages AI to create high-quality content for various use cases, from blog posts to marketing copy, with customizable templates.",
    features: [
      "AI content generation",
      "Custom templates",
      "Batch processing",
      "Content optimization",
      "Export options",
    ],
    challenges: ["API rate limiting", "Content quality", "User experience"],
    outcomes: ["1000+ content pieces generated", "85% user retention", "B2B partnerships"],
    githubUrl: "https://github.com/username/ai-content-generator",
    liveUrl: "https://ai-content-gen.streamlit.app",
    codeSnippet: `# AI content generation with OpenAI
async def generate_content(prompt, template):
    response = await openai.ChatCompletion.acreate(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": template},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1000
    )
    return response.choices[0].message.content`,
    stars: 312,
    forks: 89,
  },
  {
    id: "6",
    title: "Real-time Chat Application",
    description: "Scalable real-time chat application with rooms, file sharing, and video calling capabilities.",
    category: "Web Application",
    techStack: ["Vue.js", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    date: "2023-04",
    image: "/placeholder.svg?key=chatapp",
    detailedDescription:
      "A feature-rich real-time chat application supporting multiple chat rooms, file sharing, emoji reactions, and integrated video calling using WebRTC technology.",
    features: ["Real-time messaging", "File sharing", "Video calls", "Chat rooms", "Message encryption"],
    challenges: ["Real-time scalability", "WebRTC implementation", "Message encryption"],
    outcomes: ["5k+ concurrent users", "End-to-end encryption", "Zero message loss"],
    githubUrl: "https://github.com/username/realtime-chat",
    liveUrl: "https://realtime-chat-app.netlify.app",
    codeSnippet: `// Real-time messaging with Socket.io
socket.on('message', (data) => {
  const encryptedMessage = encrypt(data.message, data.roomKey);
  io.to(data.room).emit('newMessage', {
    ...data,
    message: encryptedMessage,
    timestamp: new Date()
  });
});`,
    stars: 178,
    forks: 45,
  },
]

export default function ProgrammingPortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProgrammingProject | null>(null)

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
              Programming Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Programming
              <span className="text-primary block">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover my collection of software development projects spanning web applications, mobile apps, APIs, and
              AI solutions. Each project demonstrates modern development practices and innovative problem-solving
              approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingProjects.map((project, index) => (
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
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="flex-1" onClick={() => setSelectedProject(project)}>
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranch className="w-3 h-3" />
                          {project.forks}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                            onClick={() => setSelectedProject(project)}
                          >
                            <Code className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
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
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                {selectedProject.title}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4" />
                  {selectedProject.stars}
                  <GitBranch className="w-4 h-4" />
                  {selectedProject.forks}
                </div>
              </DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
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
                      <h5 className="font-medium text-foreground mb-2">Tech Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                            <Code className="w-3 h-3" />
                            {tech}
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
              </TabsContent>

              <TabsContent value="code" className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Code Snippet</h4>
                  <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-muted-foreground">
                      <code>{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Project Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">GitHub Stars</span>
                        <span className="font-medium">{selectedProject.stars}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Forks</span>
                        <span className="font-medium">{selectedProject.forks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Technologies</span>
                        <span className="font-medium">{selectedProject.techStack.length}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
