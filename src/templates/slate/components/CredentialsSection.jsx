const CredentialsSection = ({ title, certifications }) => {
  if (certifications.length === 0) return null;

  return (
    <section id="credentials" className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-normal font-serif-brutalist tracking-wider uppercase text-white">{title}</h2>
      <div className="border-t border-white/30" />
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white rounded-none mt-6">
        {certifications.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="p-6 border-r border-b border-white bg-neutral-900/10 flex flex-col justify-between min-h-[160px]">
            <div className="font-mono-brutalist space-y-2">
              <h3 className="text-[11px] font-bold text-white uppercase leading-snug">[{item.name.toUpperCase()}]</h3>
              <p className="text-[9px] text-slate-500 uppercase font-semibold">{item.provider}</p>
            </div>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 font-mono-brutalist text-[9px] font-bold text-white hover:underline uppercase block tracking-wider">
                Verify ?
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredentialsSection;
