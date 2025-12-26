import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, Github, Linkedin, ChevronDown, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.04]" />
        
        {/* Abstract line graph decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path d="M0,400 Q200,350 400,380 T800,320 T1200,360" stroke="hsl(185 60% 50%)" strokeWidth="2" fill="none" />
          <path d="M0,500 Q300,450 600,480 T1200,420" stroke="hsl(185 60% 50%)" strokeWidth="1.5" fill="none" />
          <path d="M0,300 Q150,280 300,300 T600,260 T900,290 T1200,250" stroke="hsl(200 70% 45%)" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Dot matrix pattern */}
        <div className="absolute top-20 right-20 w-40 h-40 opacity-[0.08]">
          <div className="grid grid-cols-8 gap-3">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary" />
            ))}
          </div>
        </div>

        <div className="container-tight relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Rutgers Business School '29
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Shreya <span className="text-gradient">Kuthpadi</span>
            </h1>

            {/* Positioning Statement */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Aspiring quant bridging{" "}
              <span className="text-foreground font-medium">finance</span>,{" "}
              <span className="text-foreground font-medium">computer science</span>, and{" "}
              <span className="text-foreground font-medium">mathematics</span>{" "}
              to decode market complexity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/resume">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-spacing relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-background" />
        <div className="absolute inset-0 border-y border-border" />
        
        <div className="container-tight relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              About Snapshot
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a freshman at <span className="text-foreground">Rutgers Business School–New Brunswick</span> pursuing a double major in{" "}
                <span className="text-foreground">Finance</span> and{" "}
                <span className="text-foreground">Computer Science</span> with a minor in Mathematics, Class of 2029.
              </p>
              <p>
                Fascinated by the intersection of quantitative analysis and technology, I'm building a foundation in{" "}
                <span className="text-foreground">data-driven decision making</span> and{" "}
                <span className="text-foreground">algorithmic thinking</span> to tackle complex financial problems.
              </p>
              <p>
                Currently sharpening my skills in Python, financial modeling, and statistical analysis through personal projects and coursework.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-gradient">3</p>
                  <p className="text-sm text-muted-foreground mt-1">Active Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">2</p>
                  <p className="text-sm text-muted-foreground mt-1">Majors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">∞</p>
                  <p className="text-sm text-muted-foreground mt-1">Curiosity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-spacing relative">
        {/* Geometric overlay */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/projects"
              className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Projects
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Explore my finance and data analysis projects built with Python, pandas, and more.
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/about"
              className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                About Me
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn more about my academic journey, interests, and career aspirations.
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/blog"
              className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Blog & Notes
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Thoughts on finance, coding, and lessons learned along the way.
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                Read posts <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-card/30 to-transparent" />
        <div className="absolute inset-0 border-t border-border" />
        
        {/* Abstract decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container-tight relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Me
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always open to connecting about internships, projects, or learning opportunities.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="https://linkedin.com/in/shreyakuthpadi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">LinkedIn</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  Connect <ExternalLink className="h-3 w-3" />
                </span>
              </a>

              <a
                href="mailto:shreya.kuthpadi@gmail.com"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">Email</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Gmail
                </span>
              </a>

              <a
                href="https://rutgers.joinhandshake.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <span className="font-medium text-foreground">Handshake</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  View Profile <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
