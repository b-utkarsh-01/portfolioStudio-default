const LeftSidebar = ({ profile, workEnabled, experiencesCount, projectsCount, socialEnabled, socialCount, publishEnabled, certCount, contactCount, badgeName, badgeTitle, highlights = [] }) => (
  <aside className="w-full lg:w-[45%] xl:w-[40%] shrink-0 flex flex-col pb-8 lg:pb-0 lg:h-full justify-between">
    <div className="border border-white p-6 sm:p-10 bg-neutral-900/20 rounded-none flex flex-col justify-between min-h-[340px] lg:h-full">
      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-start sm:items-center lg:items-start xl:items-center gap-4 border-b border-white/20 pb-6">
        <h2 className="text-2xl font-normal font-serif-brutalist tracking-wider text-white uppercase leading-none">
          {profile?.name || "ALEXA CARTER"}
        </h2>
        <nav className="flex flex-wrap gap-x-3 gap-y-1 font-mono-brutalist text-[9px] text-slate-400 uppercase tracking-widest">
          {workEnabled && experiencesCount > 0 && <a href="#experience" className="hover:text-white transition-colors">[EXPERIENCE]</a>}
          {projectsCount > 0 && <a href="#projects" className="hover:text-white transition-colors">[PROJECTS]</a>}
          {socialEnabled && socialCount > 0 && <a href="#services" className="hover:text-white transition-colors">[SERVICES]</a>}
          {publishEnabled && certCount > 0 && <a href="#credentials" className="hover:text-white transition-colors">[CREDENTIALS]</a>}
          {contactCount > 0 && <a href="#connect" className="hover:text-white transition-colors">[CONTACT]</a>}
        </nav>
      </div>

      <div className="my-8">
        {(badgeName || badgeTitle) ? (
          <p className="mb-4 font-mono-brutalist text-[10px] text-slate-500 uppercase tracking-widest">
            [{badgeName || "PORTFOLIO"}{badgeTitle ? ` | ${badgeTitle}` : ""}]
          </p>
        ) : null}
        <h1 className="text-4xl sm:text-5xl lg:text-[40px] xl:text-[48px] font-normal font-serif-brutalist tracking-wide text-white uppercase leading-[1.1] select-none">
          {profile?.summary || "PRODUCT-FOCUSED DEVELOPER WITH EXPERIENCE BUILDING SCALABLE WEB APPS, CLEAN APIS, AND MODERN UI SYSTEMS."}
        </h1>
      </div>

      <div className="border-t border-white/20 pt-6">
        <p className="font-mono-brutalist text-xs text-slate-300 tracking-wider">
          {(profile?.title || []).filter(Boolean).map((t) => `[${t.toUpperCase()}]`).join(" / ") || "[FULL STACK DEVELOPER] / [MERN ENGINEER]"}
        </p>
        {highlights.length > 0 ? (
          <p className="mt-3 font-mono-brutalist text-[10px] text-slate-500 tracking-wider">
            {highlights.slice(0, 4).map((item) => `#${item}`).join("  ")}
          </p>
        ) : null}
      </div>
    </div>
  </aside>
);

export default LeftSidebar;
