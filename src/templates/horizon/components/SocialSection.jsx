import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const SocialSection = ({ stage, services, testimonials }) => {
  if (!stage.enabled || (services.length === 0 && testimonials.length === 0)) return null;

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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

      {services.length > 0 && (
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 mb-10"
        >
          {services.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.25)" }}
              className="group relative rounded-xl border border-slate-900 bg-slate-900/10 p-5 hover:bg-slate-900/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover:border-emerald-500/30 transition-all duration-300">
                <Zap className="w-4 h-4 text-emerald-400 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-xs leading-relaxed text-slate-400 mt-2">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {testimonials.length > 0 && (
        <div className="border-t border-slate-900/60 pt-8 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Client Feedback
          </h3>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {testimonials.map((item, idx) => (
              <motion.blockquote
                key={`${item.name}-${idx}`}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.2)" }}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-900/20 p-5 hover:bg-slate-900/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <p className="text-xs italic leading-relaxed text-slate-400 relative z-10">
                  &quot;{item.quote}&quot;
                </p>
                <footer className="mt-4 border-t border-slate-800/80 pt-3 flex items-center gap-2 relative z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <div className="text-[10px]">
                    <cite className="not-italic font-bold text-slate-300">{item.name}</cite>
                    <span className="text-slate-500">   {item.role}</span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default SocialSection;
