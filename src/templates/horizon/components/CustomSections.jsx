import { motion } from "framer-motion";

const CustomSections = ({ customStages }) => {
  if (customStages.length === 0) return null;

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 border-t border-slate-900 pt-12 space-y-8 relative z-10"
    >
      <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
        Additional Details
      </h2>
      <div className="space-y-8">
        {customStages.map((stage) => (
          <div key={stage.id} className="space-y-4">
            {stage.title && (
              <h3 className="text-sm font-bold text-white border-l-2 border-emerald-500 pl-3">
                {stage.title}
              </h3>
            )}
            
            {stage.kind === "cards" ? (
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 md:grid-cols-2"
              >
                {stage.cards.map((card, idx) => (
                  <motion.div
                    key={`${stage.id}-${idx}`}
                    variants={itemVariants}
                    whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.25)" }}
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-900/10 p-5 hover:bg-slate-900/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="space-y-1 relative z-10">
                      <h4 className="font-bold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                        {card.title}
                      </h4>
                      {card.subtitle && (
                        <p className="text-[10px] font-semibold text-slate-400">{card.subtitle}</p>
                      )}
                      {card.description && (
                        <p className="mt-2 text-xs leading-relaxed text-slate-400">
                          {card.description}
                        </p>
                      )}
                    </div>
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center text-[10px] font-mono font-bold text-emerald-400 hover:text-emerald-300 relative z-10 transition-colors"
                      >
                        Explore Link <span className="ml-1 text-[8px] transform group-hover:translate-x-0.5 transition-transform">→</span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-xl border border-slate-900 bg-slate-900/10 p-5 text-sm leading-relaxed text-slate-400 hover:border-slate-800 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="relative z-10">{stage.paragraph}</span>
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default CustomSections;
