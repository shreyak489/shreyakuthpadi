import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Portfolio Risk & Return Analyzer",
    problem:
      "Investors often struggle to understand the risk-return tradeoff of their portfolios. How can we visualize and quantify portfolio performance?",
    description:
      "Built a Python tool that analyzes historical stock data, calculates portfolio metrics (Sharpe ratio, volatility, CAGR), and visualizes performance against benchmarks.",
    tools: ["Python", "pandas", "NumPy", "matplotlib", "yfinance"],
    skills: ["Financial Analysis", "Data Visualization", "Risk Modeling"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Monte Carlo Stock Simulator",
    problem:
      "Predicting future stock prices is inherently uncertain. Can we use probability distributions to model potential outcomes?",
    description:
      "Implemented Monte Carlo simulations to project future stock prices using geometric Brownian motion and historical volatility patterns.",
    tools: ["Python", "NumPy", "scipy", "plotly"],
    skills: ["Stochastic Modeling", "Statistical Analysis", "Programming"],
    githubUrl: "https://github.com",
  },
  {
    title: "S&P 500 Sector Analysis Dashboard",
    problem:
      "Understanding sector rotation and correlations is crucial for diversification. How do different sectors perform relative to each other?",
    description:
      "Analyzed sector ETFs to identify correlations, momentum trends, and relative strength patterns over different market cycles.",
    tools: ["Python", "pandas", "seaborn", "yfinance"],
    skills: ["Market Analysis", "Correlation Analysis", "Data Wrangling"],
    githubUrl: "https://github.com",
  },
  {
    title: "DCF Valuation Model",
    problem:
      "How can we estimate the intrinsic value of a company using fundamental analysis?",
    description:
      "Built a discounted cash flow model in Python that pulls financial data, projects future cash flows, and calculates fair value with sensitivity analysis.",
    tools: ["Python", "Excel", "pandas", "Financial APIs"],
    skills: ["Valuation", "Financial Modeling", "Fundamental Analysis"],
    githubUrl: "https://github.com",
  },
  {
    title: "Options Pricing Calculator",
    problem:
      "Options pricing involves complex mathematics. Can we build an intuitive tool that calculates option values and Greeks?",
    description:
      "Implemented Black-Scholes and binomial tree models to price European and American options, with visualizations of Greeks sensitivity.",
    tools: ["Python", "NumPy", "scipy", "streamlit"],
    skills: ["Derivatives", "Mathematical Modeling", "Quantitative Finance"],
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="section-spacing relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container-tight relative z-10">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of finance and data analysis projects that demonstrate my technical skills and analytical thinking. Each project represents a step in my learning journey.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Currently Building */}
          <div className="mt-20 p-8 rounded-xl border border-dashed border-border bg-card/30">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              🚧 Currently Building
            </h3>
            <p className="text-muted-foreground">
              Working on an algorithmic trading backtester that will simulate different trading strategies on historical data with transaction costs and slippage modeling. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
