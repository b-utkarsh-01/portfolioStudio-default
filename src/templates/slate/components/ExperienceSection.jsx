const ExperienceSection = ({ title, experiences }) => {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="space-y-4 pt-2 lg:pt-0">
      <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">{title}</h2>
      <div className="border-t border-white/30" />
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white rounded-none mt-6">
        {experiences.map((item, idx) => (
          <div key={`${item.company}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[220px]">
            <div className="font-mono-brutalist space-y-3">
              <span className="text-[10px] text-slate-400 block tracking-wider uppercase">{item.period || "2020-Present"}</span>
              <h3 className="text-xs font-bold text-white uppercase leading-snug">[{item.title || "Role"} @ {item.company || "Company"}]</h3>
              {item.description && <p className="text-[11px] text-slate-400 leading-relaxed mt-2">{item.description}</p>}
            </div>
            <div className="font-mono-brutalist mt-6">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">{item.tech ? `[${item.tech.toUpperCase()}]` : "[TAGS]"}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
