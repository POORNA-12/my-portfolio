import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "poornapoorna39@gmail.com",
    href: "mailto:poornapoorna39@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9133159867",
    href: "tel:+919133159867",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "POORNA-12",
    href: "https://github.com/POORNA-12/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Purna Ajay",
    href: "https://www.linkedin.com/in/purna-ajay-0a351428b/",
  },
];

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl">
        <div ref={titleRef} className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div ref={cardRef} className={`transition-all duration-700 ${cardVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all">
                      <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10 text-center">
              <p className="text-muted-foreground mb-4">
                Interested in working together? Let's connect!
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
                asChild
              >
                <a href="mailto:poornapoorna39@gmail.com">Send Me an Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;