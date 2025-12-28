import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FileText, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import headshot from "@/assets/headshot.jpg";
const Index = () => {
  return <Layout>
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
                    <img src={headshot} alt="Shreya Kuthpadi" className="w-full h-full object-cover" />
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
                  <p className="text-secondary-foreground">
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
                    {[{
                    title: "Quantitative Analysis",
                    desc: "Building models to understand market behavior and financial data"
                  }, {
                    title: "Machine Learning",
                    desc: "Exploring ML applications in finance and predictive modeling"
                  }, {
                    title: "Fintech Innovation",
                    desc: "Exploring how technology is reshaping financial services"
                  }, {
                    title: "Data-Driven Investing",
                    desc: "Learning to extract insights and build systematic strategies"
                  }].map((item, i) => <div key={i} className="p-5 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1">
                        <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>)}
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
                  {["NumPy", "pandas", "matplotlib", "Statistics"].map(tool => <span key={tool} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tool}
                    </span>)}
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
                  {["scikit-learn", "pandas", "NumPy", "Data Analysis"].map(tool => <span key={tool} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tool}
                    </span>)}
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
                          {["Java", "Python"].map(skill => <span key={skill} className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground">
                              {skill}
                            </span>)}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-3">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {["Multivariable Calculus", "Linear Algebra", "Discrete Math", "Differential Equations"].map(skill => <span key={skill} className="px-3 py-1.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                              {skill}
                            </span>)}
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
              <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                <a href="https://www.linkedin.com/in/shreya-kuthpadi-44a443263" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-foreground">LinkedIn</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    Connect <ExternalLink className="h-3 w-3" />
                  </span>
                </a>

                <a href="https://github.com/shreyak489" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-foreground">GitHub</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    shreyak489 <ExternalLink className="h-3 w-3" />
                  </span>
                </a>

                <a href="mailto:shreyakuthpadi@gmail.com" className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    shreyakuthpadi@gmail.com
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;