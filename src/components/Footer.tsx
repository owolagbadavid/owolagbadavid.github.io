function Footer() {
  return (
    <footer className="bg-[#f3f3f3] dark:bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mx-auto px-8 py-12 gap-6">
        <div className="text-lg font-bold text-[#000000] dark:text-[#ffffff]">TOBEE.DEV</div>
        <div className="flex gap-8">
          <a
            className="font-['Inter'] text-[0.875rem] text-[#474747] dark:text-[#a3a3a3] hover:text-[#000000] dark:hover:text-[#ffffff] hover:underline decoration-1 underline-offset-4 transition-all duration-200"
            href="https://github.com/owolagbadavid"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-['Inter'] text-[0.875rem] text-[#474747] dark:text-[#a3a3a3] hover:text-[#000000] dark:hover:text-[#ffffff] hover:underline decoration-1 underline-offset-4 transition-all duration-200"
            href="https://www.linkedin.com/in/owolagbadavid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-['Inter'] text-[0.875rem] text-[#474747] dark:text-[#a3a3a3] hover:text-[#000000] dark:hover:text-[#ffffff] hover:underline decoration-1 underline-offset-4 transition-all duration-200"
            href="https://x.com/oreosinit"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
        <div className="font-['Inter'] text-[0.875rem] leading-relaxed text-[#474747] dark:text-[#a3a3a3]">
          © {new Date().getFullYear()} TOBEE.DEV
        </div>
      </div>
    </footer>
  );
}

export default Footer;
