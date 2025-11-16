import { Code, Wrench, Package, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "SQL", "PHP", "HTML", "CSS", "Java", "PostegerSQL"],
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    title: "Frameworks",
    icon: Package,
    skills: ["React.js", "Tailwind CSS", "Django"],
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "MySQL", "XAMPP", "Postman"],
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    title: "Platforms",
    icon: Cpu,
    skills: ["Web", "Windows", "Netlify", "PyCharm", "Jupyter Notebook", "VS Code", "Notepad++"],
    color: "bg-gradient-to-br from-cyan-500 to-purple-500",
  },
];

const softSkills = [
  "Leadership",
  "Event Management",
  "Public Speaking",
  "Time Management",
];

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: softSkillsRef, isVisible: softSkillsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div ref={titleRef} className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technical skills and soft skills I've developed through education and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${(index % 2) * 0.1}s` }}
              >
                <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-card group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color} group-hover:shadow-glow transition-all`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            );
          })}
        </div>

        <div ref={softSkillsRef} className={`transition-all duration-700 ${softSkillsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;