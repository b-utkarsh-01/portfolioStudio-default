const CustomStagesSection = ({ customStages }) => {
  if (customStages.length === 0) return null;

  return (
    <section className="space-y-8">
      {customStages.map((stage) => (
        <div key={stage.id} className="space-y-4">
          {stage.title && <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">{stage.title}</h2>}
          <div className="border-t border-white/30" />
          {stage.kind === "cards" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white rounded-none mt-6">
              {stage.cards.map((card, idx) => (
                <div key={`${stage.id}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[180px]">
                  <div className="font-mono-brutalist space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase">[{card.title.toUpperCase()}]</h4>
                    {card.subtitle && <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{card.subtitle}</p>}
                    {card.description && <p className="text-[11px] text-slate-400 leading-relaxed mt-2">{card.description}</p>}
                  </div>
                  {card.link && (
                    <a href={card.link} target="_blank" rel="noreferrer" className="mt-4 font-mono-brutalist text-[9px] font-bold text-white hover:underline uppercase tracking-wider block">
                      Explore Link ?
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-white p-6 sm:p-8 bg-neutral-900/10 rounded-none font-mono-brutalist text-xs text-slate-400 leading-relaxed mt-6">
              {stage.paragraph}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default CustomStagesSection;
