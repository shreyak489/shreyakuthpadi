import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  tools: string[];
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  problem,
  tools,
  skills,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-border bg-card/50 p-6 hover-lift transition-all duration-300 ${
        featured ? "md:col-span-2 bg-gradient-to-br from-card to-card/80" : ""
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {featured && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {problem}
        </p>

        <p className="text-secondary-foreground text-sm mb-6">{description}</p>

        {/* Tools */}
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
            Skills Demonstrated
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Read More
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
