function Project() {
  const projects: {
    name: string;
    description: string;
    tools: string[];
    link: string;
  }[] = [
    {
      name: "Relay",
      description: `A microservice-based URL shortener leveraging a document-store backend and a standalone encoding service to achieve sub-millisecond lookups for custom and auto-generated links.`,
      tools: ["Typescript/NestJS", "MongoDB", "Redis", "PostgreSQL"],
      link: "https://github.com/owolagbadavid/relay",
    },
    {
      name: "Heimdall",
      description: `A highly concurrent microservice rate limiter, preventing API overload and race conditions by combining the Spring Reactive framework with atomic Redis Lua scripting over gRPC`,
      tools: ["Java/SpingBoot", "Redis", "PostgreSQL"],
      link: "https://github.com/owolagbadavid/heimdall",
    },
    {
      name: "IAM",
      description: `A high-granularity IAM service utilizing a custom RBAC/ReBAC hybrid model, achieving 100% resource isolation by intercepting global permissions with context-aware scoping logic.`,
      tools: ["Java/SpingBoot", "PostgreSQL"],
      link: "https://github.com/owolagbadavid/i-am",
    },
    {
      name: "Qarth",
      description: `A comprehensive e-commerce API supporting fixed-price and auction-based listings, with integrated end-to-end payment processing.`,
      tools: ["Typescript/NestJS", "PostgreSQL"],
      link: "https://github.com/owolagbadavid/Qarth",
    },
  ];
  return (
    <section className="bg-surface-container-low dark:bg-[#0a0a0a] py-32" id="work">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#000000] dark:text-[#ffffff] mb-4 uppercase">
              Selected Projects
            </h2>
            <p className="text-on-surface-variant dark:text-[#a3a3a3] max-w-md font-body">
              A focus on performance-critical engineering and clean architectural patterns.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#474747] dark:text-[#7d7d7d]">
              01 - 0{projects.length}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div
              className="bg-surface-container-lowest dark:bg-[#111111] p-10 flex flex-col justify-between min-h-[500px] group cursor-pointer hover:bg-primary dark:hover:bg-[#1c1c1c] transition-colors duration-500"
              key={p.name}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="font-label text-xs font-bold tracking-widest text-[#474747] dark:text-[#8f8f8f] group-hover:text-on-primary">
                    {"PROJECT_" + `0${i + 1}`}
                  </span>
                  <a
                    href={p.link}
                    className="material-symbols-outlined text-4xl text-[#000000] dark:text-[#ffffff] group-hover:text-on-primary transition-transform group-hover:rotate-45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    arrow_outward
                  </a>
                </div>
                <h3 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-6 group-hover:text-on-primary">
                  {p.name}
                </h3>
                <p className="text-on-surface-variant dark:text-[#a3a3a3] leading-relaxed mb-8 group-hover:text-on-primary/80">
                  {p.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    className="border border-outline dark:border-[#3a3a3a] px-3 py-1 text-[0.65rem] uppercase font-bold group-hover:border-on-primary group-hover:text-on-primary"
                    key={`${p.name}-${t}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
