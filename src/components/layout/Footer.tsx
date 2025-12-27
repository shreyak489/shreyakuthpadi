import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:shreya.kuthpadi@rutgers.edu", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-kuthpadi-44a443263", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-tight py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shreya Kuthpadi. Built with curiosity and code.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
