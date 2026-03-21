function Nav({ active }: { active: string }) {
  const getNavLinkClass = (section: string) =>
    `font-['Manrope'] font-medium tracking-tight uppercase text-[0.75rem] pb-1 border-b-2 transition-colors duration-300 ${
      active === section
        ? "text-[#000000] dark:text-[#ffffff] border-black dark:border-white"
        : "text-[#474747] dark:text-[#a3a3a3] hover:text-[#000000] dark:hover:text-[#ffffff] border-transparent"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f9] dark:bg-[#000000]">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-8 py-10">
        <a
          className="text-xl font-extrabold tracking-tighter text-[#000000] dark:text-[#ffffff]"
          href="/"
        >
          TOBEE.DEV
        </a>
        <div className="hidden md:flex items-center gap-12">
          <a className={getNavLinkClass("home")} href="#home">
            Home
          </a>
          <a className={getNavLinkClass("experience")} href="#experience">
            Experience
          </a>
          <a className={getNavLinkClass("contact")} href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="font-['Manrope'] font-medium tracking-tight uppercase text-[0.75rem] text-[#000000] dark:text-[#ffffff] border border-primary px-6 py-2 hover:bg-primary hover:text-on-primary transition-all duration-300"
            href="https://resume.io/r/hCF6clbUL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
