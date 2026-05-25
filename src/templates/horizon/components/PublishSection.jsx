import { motion } from "framer-motion";

const PublishSection = ({ stage, certifications }) => {
  if (!stage.enabled || certifications.length === 0) return null;

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
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
      className="mb-16 border-t border-slate-900 pt-12 relative z-10"
    >
      <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-8">
        {stage.title}
      </h2>
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            variants={itemVariants}
            whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.25)" }}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-900/30 p-4 hover:bg-slate-900/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-1 relative z-10">
              <h3 className="font-bold text-xs text-white line-clamp-2 group-hover:text-emerald-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-[10px] font-semibold text-slate-400">{item.provider}</p>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-[10px] font-mono font-bold text-emerald-400 hover:text-emerald-300 relative z-10 transition-colors"
              >
                Verify <span className="ml-1 text-[8px] transform group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PublishSection;
