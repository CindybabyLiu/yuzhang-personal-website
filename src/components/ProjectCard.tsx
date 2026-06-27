import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-row" aria-label="Technology stack">
        {project.stack.slice(0, 4).map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        View case study <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
