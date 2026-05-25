const ConnectSection = ({ contactLinks }) => {
  if (contactLinks.length === 0) return null;

  return (
    <section id="connect" className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">Connect</h2>
      <div className="border-t border-white/30" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-white rounded-none mt-6">
        {contactLinks.map((item, idx) => (
          <a
            key={`${item.type}-${idx}`}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[120px] hover:bg-neutral-900/30 transition-colors"
          >
            <span className="font-mono-brutalist text-[9px] text-slate-500 uppercase tracking-widest block mb-4">{item.type}</span>
            <span className="font-mono-brutalist text-xs text-white font-semibold truncate leading-none">{item.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;
