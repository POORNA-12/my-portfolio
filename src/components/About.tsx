import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div ref={titleRef} className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn more about my educational background and achievements
          </p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-card group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Bachelor of Technology - Computer Science and Engineering
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Krishna University College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">Machilipatnam, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all hover:shadow-card group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-accent group-hover:shadow-glow transition-all">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Academic Performance</h3>
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    8.53 GPA
                  </p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div ref={achievementsRef} className={`transition-all duration-700 ${achievementsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card/50 backdrop-blur border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-accent">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">Key Achievements</h3>
              </div>
              <ul className="space-y-3 ml-16">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">
                    <a
                      href="https://www.linkedin.com/posts/purna-ajay-0a351428b_innovation-startup-engineering-activity-7311610945066135554-PB7O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZgmHsBS-rMf9OPIALXSIK9sCUn2WreCkU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/50 hover:text-primary hover:shadow-glow transition-all"
                    >
                      2nd Place
                    </a>{" "}
                    at Project Idea Expo, VR Siddhartha College, Vijayawada
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">
                    Published research paper:
                    <a
                      href="https://www.researchgate.net/profile/Ali-Mahmood-5/publication/389634834_BE-Abhaya_A_Next_Gen_safety_Application_for_Emergency_Response_and_Risk_Mitigation/links/67ca8485d75970006506a089/BE-Abhaya-A-Next-Gen-safety-Application-for-Emergency-Response-and-Risk-Mitigation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/50 hover:text-primary hover:shadow-glow transition-all ml-1"
                    >
                      "BE-Abhaya": A Next Gen Safety Application
                    </a>{" "}
                    in HBRP Journal (Vol. 08, Issue 02, 2025)
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">
                    Published research paper:
                    <a
                      href="https://www.researchgate.net/profile/Ali-Mahmood-5/publication/395810450_Advancement_of_Computer_Technology_and_its_Applications_Resalex_where_Deals_meets_with_Needs/links/68d4e505d221a404b2a279b2/Advancement-of-Computer-Technology-and-its-Applications-Resalex-where-Deals-meets-with-Needs.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/50 hover:text-primary hover:shadow-glow transition-all ml-1"
                    >
                      "Resalex: Where Deals Meets with Needs"
                    </a>{" "}
                    in HBRP Journal (Vol. 09, Issue 01, 2026)
                  </span>
                </li>
              </ul>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
