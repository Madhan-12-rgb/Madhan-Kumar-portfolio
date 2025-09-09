import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: User, label: 'Happy Clients', value: '25+' },
    { icon: GraduationCap, label: 'Certifications', value: '10+' },
  ];

  const highlights = [
    'Full-stack development expertise',
    'Modern framework proficiency',
    'Problem-solving mindset',
    'Collaborative team player',
    'Continuous learning approach',
    'User-centered design focus',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 5 years of experience in software development, I specialize in creating 
              innovative digital solutions that drive business growth. My journey began with a 
              curiosity for technology and has evolved into a passion for crafting exceptional 
              user experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe in the power of clean code, thoughtful design, and collaborative teamwork. 
              Whether working on complex backend systems or intuitive frontend interfaces, 
              I strive to deliver solutions that exceed expectations.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Key Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;