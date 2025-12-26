import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "What I Learned Building My First Finance Project in Python",
    excerpt:
      "Reflections on building a portfolio analyzer from scratch—the technical challenges, the 'aha' moments, and why pandas is now my best friend.",
    date: "December 2024",
    readTime: "5 min read",
    slug: "first-finance-project",
    tags: ["Python", "Finance", "Learning"],
  },
  {
    title: "How Math and CS Intersect in Quantitative Investing",
    excerpt:
      "Exploring the mathematical foundations of quantitative finance and why learning linear algebra and probability theory is essential for aspiring quants.",
    date: "December 2024",
    readTime: "8 min read",
    slug: "math-cs-quant",
    tags: ["Mathematics", "Quantitative Finance", "Education"],
  },
  {
    title: "Monte Carlo Simulations: From Theory to Python Code",
    excerpt:
      "A beginner-friendly walkthrough of implementing Monte Carlo simulations for stock price prediction, including the math behind geometric Brownian motion.",
    date: "November 2024",
    readTime: "10 min read",
    slug: "monte-carlo-python",
    tags: ["Python", "Simulation", "Tutorial"],
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog & Notes
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Thoughts on finance, coding, and lessons learned while building projects and studying quantitative methods.
              </p>
            </div>

            {/* Posts */}
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer hover-lift"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-16 p-8 rounded-xl border border-dashed border-border bg-card/30 text-center">
              <p className="text-muted-foreground">
                More posts coming soon. I'm currently writing about{" "}
                <span className="text-foreground">backtesting strategies</span> and{" "}
                <span className="text-foreground">options pricing fundamentals</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
