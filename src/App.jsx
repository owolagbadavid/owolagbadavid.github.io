import React from "react";
import "./styles.css";

const impactHighlights = [
  {
    title: "SaaS Communication Platform",
    summary:
      "Delivered personal and group messaging, plus one-on-one and group audio/video calling flows across a multi-module SaaS product to support real-time collaboration.",
  },
  {
    title: "iVerify (Adamawa State)",
    summary:
      "Built backend services that verified 60,000+ civil servants with facial capture, BVN, and NIN matching. Implemented validation logic to flag inconsistencies and strengthen payroll integrity.",
  },
  {
    title: "Adashe Multi-Tenancy",
    summary:
      "Architected authentication and organization switching for cooperative societies, enabling users to access multiple memberships with context-aware permissions.",
  },
];

const backendFocus = [
  "Backend architecture & API design",
  "Identity verification pipelines",
  "Multi-tenant authorization",
  "Real-time communication services",
  "Scalable pagination & filtering",
  "Secure data handling",
  "Query optimization & performance",
  "System documentation & reliability",
];

const stories = [
  {
    title: "Reusable Pagination & Filtering",
    detail:
      "Adapted the Java JPA Specification concept into a TypeORM utility with decorator-driven metadata, enabling consistent filtered queries across entities and parameterized protection against SQL injection.",
  },
  {
    title: "Authorization Lessons in Multi-Tenancy",
    detail:
      "Learned that fetching roles per request can slow authorization. The next iteration would embed organization context and roles into tokens after a two-step login flow.",
  },
  {
    title: "Growing Into Fullstack",
    detail:
      "Learning React to pair backend depth with frontend delivery, contributing to full feature ownership while keeping systems clean and scalable.",
  },
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/owolagbadavid" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/owolagbadavid/" },
  { label: "Resume", href: "https://resume.io/r/hCF6clbUL" },
];

const App = () => {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <span className="eyebrow">Backend systems & product delivery</span>
          <div className="nav-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="nav-pill"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-card">
            <p className="role">Asohoudlmbe Software Engineer</p>
            <h1>
              Building backend systems that stay secure, resilient, and easy to
              scale.
            </h1>
            <p className="hero-copy">
              I focus on backend engineering for fintech, public sector
              verification, and multi-tenant platforms. My work blends clean API
              design, data integrity, and scalable architecture that keeps
              products dependable under real-world pressure.
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
            <h2>Backend Focus</h2>
            <p className="hero-copy">
              I specialize in building backend features that enable real-time
              collaboration, identity verification, and multi-tenant financial
              services. Here are the capabilities I bring to every engagement.
            </p>
            <div className="badge-grid">
              {backendFocus.map((skill) => (
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
          <h2>Impact Highlights</h2>
          <p>
            Recent backend work that blends technical depth with measurable
            outcomes.
          </p>
        </div>
        <div className="card-grid">
          {impactHighlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Backend Engineering Stories</h2>
          <p>
            Approaches and lessons that shaped how I design robust backend
            systems.
          </p>
        </div>
        <div className="story-list">
          {stories.map((story) => (
            <article className="story" key={story.title}>
              <h4>{story.title}</h4>
              <p>{story.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Why Fintech & Platform Teams</h2>
          <p>
            My background spans cooperative finance, government identity
            verification, and multi-module SaaS. I thrive where the stakes are
            high and backend reliability matters most.
          </p>
        </div>
        <article className="card wide">
          <p>
            I&apos;m driven by building systems that protect financial integrity and
            improve user trust. I&apos;m excited to partner with teams that value
            strong backend foundations and thoughtful security trade-offs.
          </p>
        </article>
      </section>

      <footer className="footer">
        <span>Open to backend &amp; platform roles</span>
        <span>© 2025 Asohoudlmbe</span>
      </footer>
    </div>
  );
};

export default App;
