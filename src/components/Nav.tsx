import { useState, type MouseEvent } from "react";

function Nav({ active }: { active: string }) {
  const NAV_SCROLL_OFFSET = 140;
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  const getNavLinkClass = (section: string) =>
    `font-['Manrope'] font-medium tracking-tight uppercase text-[0.75rem] pb-1 border-b-2 transition-colors duration-300 ${
      active === section
        ? "text-[#000000] dark:text-[#ffffff] border-black dark:border-white"
        : "text-[#474747] dark:text-[#a3a3a3] hover:text-[#000000] dark:hover:text-[#ffffff] border-transparent"
    }`;

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    const target = document.getElementById(section);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
    window.history.replaceState(null, "", `#${section}`);
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };

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
          <a className={getNavLinkClass("home")} href="#home" onClick={(event) => handleSectionClick(event, "home")}>
            Home
          </a>
          <a
            className={getNavLinkClass("experience")}
            href="#experience"
            onClick={(event) => handleSectionClick(event, "experience")}
          >
            Experience
          </a>
          <a
            className={getNavLinkClass("contact")}
            href="#contact"
            onClick={(event) => handleSectionClick(event, "contact")}
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggleTheme}
            className="font-['Manrope'] font-medium tracking-tight uppercase text-[0.75rem] text-[#000000] dark:text-[#ffffff] border border-primary dark:border-[#ffffff] px-4 py-2 hover:bg-primary dark:hover:bg-[#ffffff] hover:text-on-primary dark:hover:text-[#000000] transition-all duration-300"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <a
            className="font-['Manrope'] font-medium tracking-tight uppercase text-[0.75rem] text-[#000000] dark:text-[#ffffff] border border-primary dark:border-[#ffffff] px-6 py-2 hover:bg-primary dark:hover:bg-[#ffffff] hover:text-on-primary dark:hover:text-[#000000] transition-all duration-300"
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
