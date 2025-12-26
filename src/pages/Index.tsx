import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, Github, Linkedin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container-tight relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Rutgers Business School '28
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Alex <span className="text-gradient">Rivera</span>
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
      <section className="section-spacing bg-card/30 border-y border-border">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              About Snapshot
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a freshman at <span className="text-foreground">Rutgers Business School–New Brunswick</span> pursuing a double major in{" "}
                <span className="text-foreground">Finance</span> and{" "}
                <span className="text-foreground">Computer Science</span> with a minor in Mathematics.
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
      <section className="section-spacing">
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
    </Layout>
  );
};

export default Index;
