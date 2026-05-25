const CyberTopHeader = ({ badgeName, badgeTitle }) => (
  <div className="flex items-center justify-between mb-4 font-cyber-mono text-[9px] text-slate-600">
    <span className="text-cyan-500/60 tracking-widest uppercase">
      // {(badgeName || "PORTFOLIO.SYS").toUpperCase()} {badgeTitle ? `| ${badgeTitle.toUpperCase()}` : "v2.0"} //
    </span>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
      <span className="text-slate-600 tracking-wider uppercase">ONLINE</span>
    </div>
  </div>
);

export default CyberTopHeader;
