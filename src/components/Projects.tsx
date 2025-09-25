import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Unauthorized Construction of Drone',
      description: 'Custom-built autonomous drone with advanced flight controls, real-time video streaming, and precision navigation systems.',
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'Python', 'OpenCV', 'RaspberryPi'],
      category: 'Hardware/IoT',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Application',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      category: 'Productivity',
      featured: true,
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics dashboard with real-time data processing and customizable chart components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Analytics',
      featured: false,
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for fitness tracking with workout plans and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      category: 'Mobile App',
      featured: false,
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'Intelligent customer service chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      category: 'AI/ML',
      featured: false,
    },
    {
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Maps API'],
      category: 'Web Platform',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the impact I've made through innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))
                  }
                </div>
              </CardContent>
            </Card>
          ))
          }
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background text-xs"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              
              <CardHeader className="p-4">
                <Badge variant="secondary" className="text-xs w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-base group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-primary/5 border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))
                  }
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-muted">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
          }
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
