import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <div className="container nav-shell">
          <Link className="brand" href="/" aria-label={`${profile.name} home`}>
            <span>{profile.initials}</span>
          </Link>
          <Link className="back-link" href="/#projects">
            ← Back to projects
          </Link>
          <Link className="nav-resume" href="/resume">
            Resume ↗
          </Link>
        </div>
      </header>

      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">CASE STUDY · {project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="detail-summary">{project.summary}</p>
          </div>
          <div className="detail-stack">
            <p>Technology stack</p>
            <div className="tag-row">
              {project.stack.map((item) => (
                <span className="tag tag-light" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-content">
        <div className="container detail-layout">
          <aside className="detail-sidebar">
            <span>01</span>
            <p>Problem</p>
          </aside>
          <div className="detail-block">
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
          </div>

          <aside className="detail-sidebar">
            <span>02</span>
            <p>Method</p>
          </aside>
          <div className="detail-block">
            <h2>Technical approach</h2>
            <ol className="detail-list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <aside className="detail-sidebar">
            <span>03</span>
            <p>Outcome</p>
          </aside>
          <div className="detail-block">
            <h2>Impact</h2>
            <ul className="impact-list">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="container next-project-card">
          <p>Next case study</p>
          <Link href={`/projects/${nextProject.slug}`}>
            {nextProject.title} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <span>© 2026 {profile.name}</span>
          <Link href="/">Return home</Link>
        </div>
      </footer>
    </main>
  );
}
