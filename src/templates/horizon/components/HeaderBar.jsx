const HeaderBar = ({ firstName, contactLink, badgeName, badgeTitle }) => (
  <header className="flex justify-between items-center mb-16 pb-6 border-b border-slate-900">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
      <span className="font-mono text-sm tracking-wider text-slate-400 font-semibold uppercase">
        {badgeName || firstName} {badgeTitle ? `| ${badgeTitle}` : ""}
      </span>
    </div>
    {contactLink && (
      <a
        href={contactLink.href}
        target={contactLink.external ? "_blank" : undefined}
        rel={contactLink.external ? "noreferrer" : undefined}
        className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-xs font-bold tracking-wide text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300"
      >
        Get In Touch
      </a>
    )}
  </header>
);

export default HeaderBar;
