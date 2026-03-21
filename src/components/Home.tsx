function Home() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-48 flex flex-col items-start" id="home">
      <div className="max-w-4xl">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">
          BACKEND ENGINEER
        </span>
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-[-0.04em] leading-[0.9] text-primary mb-12">
          CRAFTING SCALABLE <br />
          SYSTEMS.
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body max-w-2xl">
          Specializing in distributed architectures, API design, and high-performance cloud
          infrastructure. Building the invisible logic that powers the world's most demanding
          applications.
        </p>
        <div className="mt-16 flex flex-wrap gap-4">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest">
            Typescript / C#
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest">
            Distributed Systems
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest">
            Docker
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest">
            PostgreSQL
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
