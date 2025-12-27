import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, Github, Linkedin, ChevronDown, Mail, ExternalLink, Download } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EmailModal } from "@/components/ui/EmailModal";
import { useState } from "react";
import headshot from "@/assets/headshot.jpg";

const Index = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
            {[...Array(64)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-primary" />)}
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
              Shreya Kuthpadi
            </h1>

            {/* Positioning Statement */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Finance and Computer Science student at Rutgers Business School–New Brunswick
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")} className="transition-transform duration-200 hover:scale-105">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollToSection("resume")} className="transition-transform duration-200 hover:scale-105">
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </Button>
              <Button variant="ghost" size="lg" asChild className="transition-transform duration-200 hover:scale-110">
                <a href="https://www.linkedin.com/in/shreya-kuthpadi-44a443263" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="transition-transform duration-200 hover:scale-110">
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

      {/* About Section */}
      <section id="about" className="section-spacing relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
        
        <div className="container-tight relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
                About Me
              </h2>
            </AnimatedSection>
            
            {/* Header with Photo */}
            <AnimatedSection delay={100}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                {/* Headshot */}
                <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
                    <img
                      src={headshot}
                      alt="Shreya Kuthpadi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">SK</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center md:text-left">
                    Shreya Kuthpadi
                  </h3>
                  <p className="text-lg text-muted-foreground text-center md:text-left">
                    Finance & Computer Science | Rutgers Business School–New Brunswick | Class of 2029
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <div className="space-y-8">
              <AnimatedSection delay={200}>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    I'm a freshman at <span className="text-foreground">Rutgers Business School–New Brunswick</span> pursuing a double major in Finance and Computer Science with a minor in Mathematics.
                  </p>
                  <p>
                    Fascinated by the intersection of quantitative analysis and technology, I'm building a foundation in <span className="text-foreground">data-driven decision making</span> and <span className="text-foreground">algorithmic thinking</span> to tackle complex financial problems.
                  </p>
                </div>
              </AnimatedSection>

              {/* Current Interests */}
              <AnimatedSection delay={300}>
                <div className="pt-8 border-t border-border">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-6">
                    Current Interests
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Quantitative Analysis", desc: "Building models to understand market behavior and financial data" },
                      { title: "Machine Learning", desc: "Exploring ML applications in finance and predictive modeling" },
                      { title: "Fintech Innovation", desc: "Exploring how technology is reshaping financial services" },
                      { title: "Data-Driven Investing", desc: "Learning to extract insights and build systematic strategies" },
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1">
                        <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-background" />
        <div className="absolute inset-0 border-y border-border" />
        
        <div className="container-tight relative z-10">
          <AnimatedSection>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Projects
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I'm Building
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Hands-on projects exploring quantitative finance, data analysis, and computational methods.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={100}>
              <div className="group p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                    Python
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                    In Progress
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Monte Carlo Simulation
                </h4>
                <p className="text-muted-foreground mb-4">
                  Stochastic simulation for stock price projections using geometric Brownian motion and probability distributions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["NumPy", "pandas", "matplotlib", "Statistics"].map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                    Python
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                    In Progress
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Linear Regression Modeling
                </h4>
                <p className="text-muted-foreground mb-4">
                  Predictive modeling using linear regression techniques to analyze financial data and identify trends.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["scikit-learn", "pandas", "NumPy", "Data Analysis"].map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section-spacing relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container-tight relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                    Resume
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Experience & Education
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    A summary of my education, skills, and experience.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" asChild className="transition-transform duration-200 hover:scale-105">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="p-8 md:p-12">
                  {/* Education */}
                  <section className="mb-10">
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                      Education
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-semibold text-foreground">
                          Rutgers Business School–New Brunswick
                        </h5>
                        <p className="text-muted-foreground">Finance and Computer Science Major</p>
                        <p className="text-sm text-muted-foreground">Expected 2029</p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-foreground">
                          Middlesex College
                        </h5>
                        <p className="text-muted-foreground">Associate's Degree in Mathematics</p>
                        <p className="text-sm text-muted-foreground">2023-2025</p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-foreground">
                          Edison Academy Magnet School
                        </h5>
                        <p className="text-muted-foreground">Major in Mechanical Engineering</p>
                        <p className="text-sm text-muted-foreground">2021-2025</p>
                      </div>
                    </div>
                  </section>

                  {/* Skills */}
                  <section className="mb-10">
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                      Skills
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-3">
                          Programming Languages
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {["Java", "Python"].map((skill) => (
                            <span key={skill} className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-3">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {["Multivariable Calculus", "Linear Algebra", "Discrete Math", "Differential Equations"].map((skill) => (
                            <span key={skill} className="px-3 py-1.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-10">
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                      Experience
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-base font-semibold text-foreground">
                          Grotto Engineering Mentorship
                        </h5>
                        <p className="text-sm text-muted-foreground mb-1">April 2025 – May 2025</p>
                        <p className="text-sm text-muted-foreground">
                          Used AutoCAD to create pipeline networks and Excel for tracking measurements.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-foreground">
                          Work Truck Solutions Internship
                        </h5>
                        <p className="text-sm text-muted-foreground mb-1">June 2023 – August 2023</p>
                        <p className="text-sm text-muted-foreground">
                          Data gathering and analysis for Comvoy marketplace; researched electric and alternative fuel vehicles.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-base font-semibold text-foreground">
                          Volunteer Tutor – Learn To Be
                        </h5>
                        <p className="text-sm text-muted-foreground mb-1">2022 – 2025</p>
                        <p className="text-sm text-muted-foreground">
                          Mathematics tutoring for students from low-income families.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Interests */}
                  <section>
                    <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                      Interests
                    </h4>
                    <p className="text-muted-foreground">
                      Generative AI • Quantitative Analysis • Bharatanatyam Dance • Financial Technology
                    </p>
                  </section>
                </div>
              </div>
            </AnimatedSection>
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
            <AnimatedSection>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact Me
              </h3>
              <p className="text-lg text-muted-foreground mb-12">
                I'm always open to connecting about internships, projects, or learning opportunities.
              </p>
            </AnimatedSection>

            {/* Contact Cards */}
            <AnimatedSection delay={100}>
              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <a href="https://www.linkedin.com/in/shreya-kuthpadi-44a443263" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-foreground">LinkedIn</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    Connect <ExternalLink className="h-3 w-3" />
                  </span>
                </a>

                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Send a message
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <EmailModal open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen} />
    </Layout>
  );
};

export default Index;
