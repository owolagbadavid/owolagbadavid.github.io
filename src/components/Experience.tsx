function Experience() {
  const experiences: {
    period: string;
    role: string;
    company: string;
    description: string;
    points?: string[];
  }[] = [
    {
      period: "Dec 2024 - PRESENT",
      role: "Backend Engineer",
      company: "I-Tech Platform Limited",
      description: `Implemented APIs for secure identity verification, transaction processing, revenue management, workflow automation, and analytics, improving operational efficiency and visibility.`,
      points: [
        `Refactored the data access layer of legacy services, cutting average query times by ~50% and eliminating multiple N+1 query patterns across core workflows.`,
        `Built the core service layer for iVerify, an employee verification platform that has processed over 60,000 employee verifications across client organizations.`,
        `Built the engine powering Adashe, a cooperative society management platform that has onboarded over 2,000 members across its operations.`,
      ],
    },
    {
      period: "May 2025 - Sep 2025",
      role: "Software Engineer",
      company: "Map Systems Inc.",
      description: `Developed the communication module for a medical SaaS platform using WebSockets, covering real-time chat, one-on-one and group audio and video call for internal staff coordination and doctor-patient interaction`,
    },
    {
      period: "Mar 2023 - Sept 2023",
      role: "Backend Developer - Intern",
      company: "PHIS3",
      description: `Designed and implemented a backend system to streamline internal financial and administrative processes for a health informatics organization.
                    Contributed to medical terminology standardization using OCL, mapping health terminologies and their relationships into a structured, queryable format for cross-entity use.`,
    },
  ];
  return (
    <section className="py-32 bg-background dark:bg-[#000000]" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#000000] dark:text-[#ffffff] mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary dark:bg-[#ffffff]"></div>
        </div>
        <div className="space-y-24">
          {experiences.map((e) => (
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              key={`${e.company}-${e.period}`}
            >
              <div className="md:col-span-3">
                <span className="text-on-surface-variant dark:text-[#a3a3a3] font-label font-bold text-sm tracking-widest uppercase">
                  {e.period}
                </span>
              </div>
              <div className="md:col-span-9 flex flex-col gap-6">
                <div className="flex justify-between items-baseline flex-wrap gap-4">
                  <h3 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff]">
                    {e.role}
                  </h3>
                  <span className="text-lg font-medium italic text-[#474747] dark:text-[#a3a3a3]">
                    {e.company}
                  </span>
                </div>
                <p className="text-lg text-on-surface-variant dark:text-[#a3a3a3] leading-relaxed max-w-3xl font-body">
                  {e.description}
                </p>
                <ul className="space-y-4">
                  {e.points?.map((p) => (
                    <li className="flex gap-4 items-start" key={p}>
                      <span className="mt-1 material-symbols-outlined text-sm">terminal</span>
                      <span className="text-on-surface-variant dark:text-[#a3a3a3] text-sm font-body">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
