const SocialSection = ({ title, services, testimonials }) => {
  if (services.length === 0 && testimonials.length === 0) return null;

  return (
    <section id="services" className="space-y-12">
      {services.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">{title}</h2>
          <div className="border-t border-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white rounded-none mt-6">
            {services.map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[180px]">
                <div className="font-mono-brutalist space-y-2">
                  <h3 className="text-xs font-bold text-white uppercase">[{item.name.toUpperCase()}]</h3>
                  {item.description && <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {testimonials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-normal font-serif-brutalist tracking-wider uppercase text-white">Client Feedback</h3>
          <div className="border-t border-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white rounded-none mt-6">
            {testimonials.map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[160px]">
                <blockquote className="font-mono-brutalist text-[11px] text-slate-300 italic leading-relaxed mb-4">&quot;{item.quote}&quot;</blockquote>
                <footer className="font-mono-brutalist text-[9px] text-slate-500 uppercase tracking-wider">[{item.name.toUpperCase()} / {item.role?.toUpperCase() || "CLIENT"}]</footer>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialSection;
