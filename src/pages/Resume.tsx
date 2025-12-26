import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <section className="section-spacing relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container-tight relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Resume
                </h1>
                <p className="text-lg text-muted-foreground">
                  A summary of my education, skills, and projects.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="hero" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="mb-12 p-6 rounded-xl border border-primary/30 bg-primary/5">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                What I'm Currently Building
              </h3>
              <p className="text-foreground">
                Deepening my Python skills through quantitative finance projects, learning SQL for data management, and exploring machine learning fundamentals for predictive modeling applications.
              </p>
            </div>

            {/* Resume Preview */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Education */}
                <section className="mb-12">
                  <h2 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                    Education
                  </h2>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Rutgers Business School–New Brunswick
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      B.S. Finance & B.S. Computer Science | Minor in Mathematics
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected Graduation: May 2029
                    </p>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Relevant Coursework:</span>{" "}
                        Introduction to Financial Accounting, Calculus I & II, Introduction to Computer Science, Linear Algebra
                      </p>
                    </div>
                  </div>
                </section>

                {/* Skills */}
                <section className="mb-12">
                  <h2 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                    Technical Skills
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        Programming & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "pandas", "NumPy", "matplotlib", "Git", "Excel", "SQL (learning)"].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        Finance & Analysis
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Financial Modeling",
                          "Data Analysis",
                          "Valuation",
                          "Risk Assessment",
                          "Statistical Analysis",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Projects Summary */}
                <section className="mb-12">
                  <h2 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                    Featured Projects
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        Portfolio Risk & Return Analyzer
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Python tool analyzing portfolio metrics including Sharpe ratio, volatility, and CAGR with benchmark comparisons
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        Monte Carlo Stock Simulator
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Stochastic simulation projecting stock prices using geometric Brownian motion
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">
                        DCF Valuation Model
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Automated discounted cash flow analysis with sensitivity testing
                      </p>
                    </div>
                  </div>
                </section>

                {/* Interests */}
                <section>
                  <h2 className="text-xs font-medium text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border">
                    Interests
                  </h2>
                  <p className="text-muted-foreground">
                    Quantitative Finance • Algorithmic Trading • Machine Learning • Financial Technology • Chess • Running
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
