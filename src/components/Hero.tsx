import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  // ⭐ Slow Scroll Function
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1300; // 👈 Slower scroll (1200–1600 best)
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * percent);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-mesh animate-gradient"
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-glow" />
            <img
              src={profilePhoto}
              alt="Purna Ajay Gadde"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl animate-float"
            />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Purna Ajay Gadde
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Full Stack Developer & AI Enthusiast
            </p>

            <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-xl">
              Computer Science Engineering student passionate about building innovative web applications
              and exploring AI technologies. Experienced in Python, Django, React, and modern web development.
            </p>

            {/* Socials */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/POORNA-12/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/purna-ajay-0a351428b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:poornapoorna39@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              
              {/* Resume Download Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:opacity-90"
                asChild
              >
                <a
                  href="/src/assets/purna-resume.pdf"
                  download="Purna-Ajay-Resume.pdf"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Arrow – moved DOWN */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer select-none mt-16"
          onClick={() => scrollToSection("about")}
        >
          <div className="relative group flex items-center justify-center">

            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                opacity-30 blur-xl group-hover:opacity-60 transition-all duration-300"></div>

            <div
              className="w-14 h-14 flex items-center justify-center rounded-full border border-primary/40 
              backdrop-blur bg-primary/5 shadow-lg shadow-primary/20 
              group-hover:scale-110 transition-transform duration-300 animate-float"
            >
              <ArrowDown
                className="h-6 w-6 text-primary group-hover:text-primary group-hover:translate-y-1 
                  transition-all duration-300"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
