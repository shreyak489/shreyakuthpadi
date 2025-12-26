import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              About Me
            </h1>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  I'm <span className="text-foreground font-medium">Alex Rivera</span>, a freshman at{" "}
                  <span className="text-foreground">Rutgers Business School–New Brunswick</span>{" "}
                  where I'm pursuing a double major in Finance and Computer Science with a minor in Mathematics.
                </p>

                <p>
                  My fascination with markets started in high school when I first opened a paper trading account and realized that behind every price movement was a story told in data. That curiosity has evolved into a focused pursuit of{" "}
                  <span className="text-primary">quantitative finance</span>—the intersection where mathematical models meet market reality.
                </p>
              </div>

              {/* Why This Path */}
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Why Finance + CS + Math?
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    I chose this unconventional combination because I believe the future of finance is computational. The skills that will matter most aren't just about reading financial statements or writing code in isolation—they're about{" "}
                    <span className="text-foreground">synthesizing data, building models, and making decisions under uncertainty</span>.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Finance</span> teaches me how markets work, how value is created and measured, and how risk and return are balanced.{" "}
                    <span className="text-foreground font-medium">Computer Science</span> gives me the tools to process vast amounts of data and automate complex analyses.{" "}
                    <span className="text-foreground font-medium">Mathematics</span> provides the rigorous foundation for quantitative modeling and statistical inference.
                  </p>
                </div>
              </div>

              {/* What I'm Exploring */}
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Current Interests
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-border bg-card/50">
                    <h3 className="font-semibold text-foreground mb-2">Quantitative Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Building models to understand market behavior, from simple moving averages to Monte Carlo simulations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card/50">
                    <h3 className="font-semibold text-foreground mb-2">Fintech Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Exploring how technology is reshaping financial services, from algorithmic trading to decentralized finance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card/50">
                    <h3 className="font-semibold text-foreground mb-2">Data-Driven Investing</h3>
                    <p className="text-sm text-muted-foreground">
                      Learning to extract insights from alternative data sources and build systematic investment strategies.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card/50">
                    <h3 className="font-semibold text-foreground mb-2">Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Beginning to explore ML applications in finance, from prediction models to pattern recognition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  My Approach
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    I believe in <span className="text-foreground">learning by building</span>. Every project on this site represents not just code, but questions I've asked and attempted to answer. Some answers were right, some were wrong, but each project taught me something valuable.
                  </p>
                  <p>
                    I also believe in <span className="text-foreground">intellectual honesty</span>. I'm a freshman with no formal internship experience yet—but I have genuine curiosity, technical skills I'm actively developing, and a clear vision of where I want to go.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground mb-6">
                  I'm always eager to learn from professionals in quantitative finance, fintech, and related fields. Whether you have advice, feedback on my projects, or just want to chat about markets and technology, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" asChild>
                    <a href="mailto:contact@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Get in Touch
                    </a>
                  </Button>
                  <Button variant="hero-outline" asChild>
                    <Link to="/projects">
                      View My Work
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
