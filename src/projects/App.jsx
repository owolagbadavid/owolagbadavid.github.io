import React from "react";
import "./styles.css";

const projects = [
  {
    name: "iVerify",
    summary:
      "Government-backed verification platform used to validate civil servant records at scale.",
    details: [
      "Built backend services for identity data capture and matching workflows.",
      "Implemented validation logic to flag inconsistencies and support auditability.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/owolagbadavid" },
    ],
  },
  {
    name: "Adashe",
    summary:
      "Multi-tenant cooperative finance platform for onboarding, savings, and lending flows.",
    details: [
      "Designed authentication flows for users with multiple organization memberships.",
      "Supported role-aware access control and organization context switching.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/owolagbadavid" },
    ],
  },
  {
    name: "Flopay",
    summary:
      "Fintech product focused on digital payments and operational efficiency.",
    details: [
      "Contributed to backend services and integrations that support core payment flows.",
      "Collaborated with cross-functional teams to ship stable APIs.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/owolagbadavid" },
    ],
  },
  {
    name: "SaaS Communication Module",
    summary:
      "Messaging and calling experiences integrated into a multi-module SaaS product.",
    details: [
      "Delivered personal and group chat scenarios with calling features.",
      "Ensured backend services aligned with real-time collaboration needs.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/owolagbadavid" },
    ],
  },
];

const ProjectsApp = () => {
  return (
    <div className="page">
      <header className="header">
        <nav className="nav">
          <a className="nav-pill" href="/">
            ← Back home
          </a>
          <div className="nav-links">
            <a
              className="nav-pill"
              href="https://www.linkedin.com/in/owolagbadavid/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="nav-pill"
              href="mailto:owolagbadavid@gmail.com"
            >
              Contact
            </a>
          </div>
        </nav>

        <div className="title-block">
          <h1>Projects</h1>
          <p>
            A curated selection of systems I&apos;ve contributed to. Full technical
            depth is available on request.
          </p>
        </div>
      </header>

      <section className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-header">
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="link-row">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className="link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>Want more details? Reach out anytime.</span>
        <span>© 2025 David Owolagba</span>
      </footer>
    </div>
  );
};

export default ProjectsApp;
