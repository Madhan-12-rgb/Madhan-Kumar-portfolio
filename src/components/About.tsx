import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Current Year', value: '3rd' },
    { icon: Award, label: 'Projects Completed', value: '8+' },
    { icon: Briefcase, label: 'Internships', value: '2+' },
    { icon: User, label: 'Study Groups', value: '5+' },
  ];

  const highlights = [
    'Machine Learning & AI',
    'Data Analysis & Visualization',
    'Python Programming',
    'Problem-solving mindset',
    'Continuous learning approach',
    'Research & Innovation',
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

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-elegant bg-gradient-subtle">
                <img 
                  src="/lovable-uploads/03c45186-0b1f-49ce-b7ea-c7470e4c7ff1.png" 
                  alt="Madhan Kumar - AI & Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              AI & Data Science Enthusiast
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently pursuing AI & Data Science at Christ The King Engineering College, Karamadai. 
              My journey in technology is driven by curiosity about artificial intelligence and its 
              potential to solve real-world problems. I'm passionate about machine learning, 
              data analysis, and creating intelligent solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe in continuous learning and staying updated with the latest developments 
              in AI and data science. Through academic projects and personal exploration, 
              I strive to build solutions that make a meaningful impact.
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

          {/* Stats Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
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
      </div>
    </section>
  );
};

export default About;