import { Button } from '@/components/ui/button';
import citySkyline from '@/assets/city-skyline.jpg';
import profileImage from '/lovable-uploads/03c45186-0b1f-49ce-b7ea-c7470e4c7ff1.png';

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${citySkyline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Madhan Kumar</div>
          <div className="hidden md:flex items-center space-x-8">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm tracking-wider"
              >
                {item}
              </button>
            ))}
            <span className="text-foreground/80 text-sm tracking-wider">🔒 RESUME</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-foreground overflow-hidden">
              <img 
                src={profileImage}
                alt="Madhan Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            Madhan Kumar
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-foreground/60 mb-16 animate-fade-in [animation-delay:0.4s] italic">
            Developing
          </p>
          
          {/* Enter Portfolio Button */}
          <div className="animate-fade-in [animation-delay:0.6s]">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Enter Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* AI Companion mockup (bottom left) */}
      <div className="absolute bottom-6 left-6 bg-background/10 backdrop-blur-md rounded-lg p-4 text-foreground/70 text-sm border border-foreground/20">
        ⚙️ 🤖 Ask My AI Companion!
      </div>

      {/* Scroll up button (bottom right) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300"
      >
        ↑
      </button>
    </section>
  );
};

export default Hero;