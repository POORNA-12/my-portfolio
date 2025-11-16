import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Backend Development Internship",
    company: "Blue Cloud Softech Solutions Ltd.",
    period: "2-month Internship",
    highlights: [
      "Worked on BluhwakScan.com, a real-time cyber security application",
      "Contributed to backend architecture and functionality using Python and Django",
      "Utilized Postman for testing and validating RESTful APIs",
      "Collaborated with Cyber Security Team to build secure backend systems",
    ],
  },
  {
    title: "AI Development Internship",
    company: "TechSaksham – Edunet Foundation (Microsoft & SAP Initiative)",
    period: "Internship Program",
    highlights: [
      "Completed AI: Transformative Learning program by Microsoft and SAP",
      "Gained foundational knowledge in Artificial Intelligence applications",
      "Participated in hands-on sessions on emerging technologies",
      "Strengthened understanding of ethical AI and intelligent systems",
    ],
  },
  {
    title: "Full Stack Development Internship",
    company: "Blackbuck Engineers Pvt. Ltd. – APSCHE Initiative",
    period: "240-hour Long-term Internship",
    highlights: [
      "Completed comprehensive training in frontend and backend technologies",
      "Worked on real-time coding tasks and full-stack project modules",
      "Improved proficiency in modern development tools and frameworks",
      "Strengthened deployment skills and industry best practices",
    ],
  },
];

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div ref={titleRef} className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Internships and hands-on experience in backend, AI, and full-stack development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            return (
            <div 
              key={index}
              ref={ref}
              className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-card group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all self-start">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-foreground/80 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Experience;