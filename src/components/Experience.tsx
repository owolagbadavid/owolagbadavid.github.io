function Experience() {
  const experiences: {
    period: string;
    role: string;
    company: string;
    description: string;
    points?: string[];
  }[] = [
    {
      period: "2024 - PRESENT",
      role: "Backend Egineer",
      company: "I-Tech Platform Limited",
      description: `Implemented APIs for secure identity verification, transaction processing, revenue management, workflow automation, and analytics, improving operational efficiency and visibility.`,
      points: [
        `Developed the API for iVerify, a platform that enables organizations to verify employee information efficiently and accurately.`,
        `Developing Adashe, a system that streamlines cooperative society operations such as member onboarding, revenue management, and more.`,
      ],
    },
    {
      period: "2025",
      role: "Software Engineer",
      company: "Map Systems Inc.",
      description: ` Developed communication infrastructure for a SaaS platform, providing messaging, calling, and other live interaction capabilities.`,
    },
    {
      period: "2023",
      role: "Backend Developer - Intern",
      company: "PHIS3",
      description: ` Designed and implemented a backend system for an in-house project that streamlined the financial and administrative processes within the organisation.`,
    },
  ];
  return (
    <section className="py-32 bg-background" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary"></div>
        </div>
        <div className="space-y-24">
          {experiences.map((e) => (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <span className="text-on-surface-variant font-label font-bold text-sm tracking-widest uppercase">
                  {e.period}
                </span>
              </div>
              <div className="md:col-span-9 flex flex-col gap-6">
                <div className="flex justify-between items-baseline flex-wrap gap-4">
                  <h3 className="text-3xl font-bold">{e.role}</h3>
                  <span className="text-lg font-medium italic opacity-60">{e.company}</span>
                </div>
                <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl font-body">
                  {e.description}
                </p>
                <ul className="space-y-4">
                  {e.points?.map((p) => (
                    <li className="flex gap-4 items-start">
                      <span className="mt-1 material-symbols-outlined text-sm">terminal</span>
                      <span className="text-on-surface-variant text-sm font-body">{p}</span>
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
