import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--primary-glow) / 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Madhan Kumar
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 animate-fade-in [animation-delay:0.2s]">
            AI & Data Science Student
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.4s]">
            Passionate AI & Data Science student at Christ The King Engineering College, Karamadai. 
            Exploring artificial intelligence and data science to create innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in [animation-delay:0.6s]">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </section>
  );
};

export default Hero;