import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Shield } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "May 05, 2025",
      validUntil: "May 05, 2027",
      id: "101530986OCI25AICFA",
      category: "AI & Cloud",
      icon: Shield,
    },
    {
      title: "Solutions Architecture Job Simulation",
      issuer: "AWS Forage",
      date: "February 25, 2025",
      description: "Completed practical tasks in designing simple, scalable, hosting architecture",
      verificationCode: "mvDXpqs9xj2QTsTgX",
      category: "Architecture",
      icon: Award,
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud computing, AI, and solutions architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {cert.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight mb-2">
                        {cert.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    
                    {cert.validUntil && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    )}
                    
                    {cert.description && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {cert.description}
                      </p>
                    )}
                    
                    {cert.id && (
                      <div className="mt-4 pt-3 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                          Certificate ID: <span className="font-mono">{cert.id}</span>
                        </p>
                      </div>
                    )}
                    
                    {cert.verificationCode && (
                      <div className="mt-4 pt-3 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                          Verification Code: <span className="font-mono">{cert.verificationCode}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;