import React from "react";
import "./styles.css";

const highlights = [
  {
    title: "Backend-first mindset",
    description:
      "I design APIs and services that stay reliable under real-world pressure, with a focus on security, observability, and clean data flow.",
  },
  {
    title: "Multi-tenant experience",
    description:
      "I’ve built systems where users belong to multiple organizations with role-aware access control and context switching.",
  },
  {
    title: "Verification & compliance",
    description:
      "I’ve worked on identity verification pipelines that validate sensitive data at government scale.",
  },
];

const focusAreas = [
  "API design & service architecture",
  "Authentication & authorization",
  "Scalable data access",
  "Secure identity integrations",
  "Real-time communication",
  "Pagination & filtering utilities",
  "Observability & troubleshooting",
  "Team collaboration",
];

const experience = [
  "Contributed to a SaaS product’s communication module, delivering messaging and calling experiences across user scenarios.",
  "Built backend services for a civil servant verification system used to validate 60,000+ staff records.",
  "Designed authentication flows for a multi-tenant cooperative finance platform supporting multiple memberships.",
];

const App = () => {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <span className="eyebrow">Backend engineering • Platform systems</span>
          <div className="nav-links">
            <a className="nav-pill" href="/projects">
              Projects
            </a>
            <a
              className="nav-pill"
              href="https://github.com/owolagbadavid"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="nav-pill"
              href="https://www.linkedin.com/in/owolagbadavid/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-card">
            <div className="hero-title">
              <h1>David Owolagba</h1>
              <p className="role">Software Engineer</p>
            </div>
            <p className="hero-copy">
              I’m a backend-focused software engineer who enjoys building secure,
              scalable systems and turning complex workflows into reliable
              products. I care about thoughtful architecture, clear data models,
              and delivering features that teams can grow confidently.
            </p>
            <p className="hero-copy">
              Recently, I’ve been learning React to broaden my skill set and
              collaborate more effectively across frontend and backend teams.
            </p>
            <div className="cta-row">
              <a className="button primary" href="mailto:owolagbadavid@gmail.com">
                Let&apos;s collaborate
              </a>
              <a className="button ghost" href="/projects">
                View projects
              </a>
            </div>
          </div>

          <div className="hero-card secondary">
            <h2>Focus Areas</h2>
            <p className="hero-copy">
              I focus on backend systems that are secure, maintainable, and ready
              to scale in fast-moving product environments.
            </p>
            <div className="badge-grid">
              {focusAreas.map((skill) => (
                <span className="badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-title">
          <h2>Highlights</h2>
          <p>
            A quick snapshot of the kind of engineering work I enjoy and the
            systems I build.
          </p>
        </div>
        <div className="card-grid">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Experience Snapshot</h2>
          <p>
            Selected experiences that shaped how I design and deliver backend
            platforms.
          </p>
        </div>
        <div className="list">
          {experience.map((item) => (
            <div className="list-item" key={item}>
              <span className="dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Looking Ahead</h2>
          <p>
            I’m excited about opportunities where backend quality, security, and
            thoughtful engineering make a visible impact.
          </p>
        </div>
        <article className="card wide">
          <p>
            Whether it’s fintech, public sector platforms, or SaaS products, I
            like working with teams that value clean architecture and dependable
            delivery.
          </p>
        </article>
      </section>

      <footer className="footer">
        <span>Open to backend &amp; platform roles</span>
        <span>© 2025 David Owolagba</span>
      </footer>
    </div>
  );
};

export default App;
