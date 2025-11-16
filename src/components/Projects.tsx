import { useState } from "react";
import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// --------------------------------------
// PROJECT DATA
// --------------------------------------
const projects = [
  {
    title: "AI-Powered Resume Screening System",
    description:
      "Built an AI-based system to automatically analyze and rank resumes based on job requirements. Developed as part of the AICTE TechSaksham Internship by Microsoft and SAP.",
    technologies: ["Python", "AI", "NLP", "Machine Learning"],
    color: "from-cyan-500 to-blue-500",
    github:
      "https://github.com/POORNA-12/AI-powered-Resume-Screening-and-Ranking-System",
    category: "AI",
  },
  {
    title: "StreamSnatcher",
    description:
      "Full-stack web app to download videos and audio from YouTube, Instagram, Facebook, and X (Twitter). Features real-time progress, dark/light mode, media previews, and error handling.",
    technologies: ["Python", "Django", "React", "Vite", "Tailwind CSS", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/POORNA-12/Videos-Downloader",
    category: "Backend",
  },
  {
    title: "Abhaya - Public Safety Portal",
    description:
      "Public safety website providing emergency contact services and real-time SMS alerts via Twilio integration for enhanced user safety and emergency response.",
    technologies: ["HTML", "CSS", "JavaScript", "XAMPP", "SQL", "Twilio", "PHP"],
    color: "from-pink-500 to-rose-500",
    github: "https://github.com/POORNA-12/Abhaya--public-safety-portal",
    category: "Full Stack",
  },
  {
    title: "Resale X - Student Marketplace",
    description:
      "Marketplace platform for students to buy and sell textbooks and student-related materials. Features secure listings, transactions, and user profile management.",
    technologies: ["HTML", "CSS", "JavaScript", "XAMPP", "SQL"," PHP"],
    color: "from-cyan-500 to-purple-500",
    github: "https://github.com/POORNA-12/Deal-Zone",
    category: "Full Stack",
  },
];

const filterOptions = [
  { label: "All", gradient: "from-cyan-400 to-purple-400" },
  { label: "Full Stack", gradient: "from-pink-500 to-red-500" },
  { label: "AI", gradient: "from-blue-500 to-cyan-500" },
  { label: "Backend", gradient: "from-purple-500 to-pink-500" },
];

// --------------------------------------
// PROJECT CARD (safe hook usage)
// --------------------------------------
const ProjectCard = ({ project, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${(index % 2) * 0.1}s` }}
    >
      <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-card group overflow-hidden h-full">

        <div className={`h-2 bg-gradient-to-r ${project.color}`} />

        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-muted/50 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// --------------------------------------
// MAIN PROJECTS COMPONENT
// --------------------------------------
const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl">

        <div
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            A showcase of my recent projects spanning AI, backend, and full-stack development
          </p>
        </div>

        {/* ANIMATED FILTER BUTTONS */}
        <div
          className="flex justify-center gap-4 mb-12"
          onMouseLeave={() => setSelectedFilter("All")}  // Reset when hover ends
        >
          {filterOptions.map((btn) => (
            <button
              key={btn.label}
              onMouseEnter={() => setSelectedFilter(btn.label)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r ${btn.gradient}
                text-white shadow-lg shadow-primary/10
                hover:scale-105 hover:shadow-xl hover:shadow-primary/20
                transition-all duration-300
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
