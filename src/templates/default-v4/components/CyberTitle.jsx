const CyberTitle = ({ profile }) => {
  const name = profile?.name || "Unknown User";
  const title = Array.isArray(profile?.title)
    ? profile.title.filter(Boolean).join(" | ")
    : profile?.title || "Systems Architect";

  return (
    <div className="cyber-card p-8 md:p-12 shadow-2xl">
      <div className="flex flex-col gap-3">
        <span className="font-cyber-mono text-[9px] text-cyan-500/60 tracking-widest uppercase">
          // IDENTITY_RECORD_
        </span>
        <h1 className="font-cyber-header text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          {name}
        </h1>
        <p className="font-cyber-mono text-sm text-pink-400 tracking-wide">
          [{title}]
        </p>
      </div>
    </div>
  );
};

export default CyberTitle;
