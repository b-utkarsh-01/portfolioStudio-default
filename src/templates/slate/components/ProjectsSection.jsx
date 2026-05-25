const ProjectsSection = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">Featured Projects</h2>
      <div className="border-t border-white/30" />
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white rounded-none mt-6">
        {projects.map((item, idx) => {
          const techList = item.tech ? item.tech.split(",").map((t) => t.trim()) : [];
          return (
            <div key={`${item.name}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[220px]">
              <div className="font-mono-brutalist space-y-3">
                <h3 className="text-xs font-bold text-white uppercase leading-snug">[{`0${idx + 1}`} / {item.name.toUpperCase()}]</h3>
                {item.description && <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>}
              </div>
              {techList.length > 0 && (
                <div className="font-mono-brutalist mt-6 space-y-1">
                  {techList.map((techItem, tIdx) => (
                    <span key={tIdx} className="text-[11px] text-slate-300 block">{techItem}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
