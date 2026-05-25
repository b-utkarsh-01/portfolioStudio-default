import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const WorkSection = ({ stage, experiences, projects }) => {
  if (!stage.enabled || (experiences.length === 0 && projects.length === 0)) return null;

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
      className="mb-16 border-t border-slate-900 pt-12 relative z-10"
    >
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Experience Timeline */}
        <div className="lg:col-span-3 space-y-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-6">
            {stage.title}
          </h2>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative pl-6 border-l border-slate-900 space-y-8"
          >
            {experiences.map((item, idx) => (
              <motion.div
                key={`${item.company}-${idx}`}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-block shrink-0 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-900 border border-slate-800 text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{item.company}</p>
                  {item.description && (
                    <p className="text-sm leading-relaxed text-slate-500 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
            {experiences.length === 0 && (
              <p className="text-slate-500 text-sm italic py-4">No experience entries recorded.</p>
            )}
          </motion.div>
        </div>

        {/* Featured Projects */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Featured Projects
          </h2>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mt-6"
          >
            {projects.map((item, idx) => (
              <motion.div
                key={`${item.name}-${idx}`}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.25)" }}
                className="group relative rounded-xl border border-slate-900 bg-slate-900/20 p-5 hover:bg-slate-900/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle border glow on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-1">
                    <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.tech && (
                      <p className="text-[10px] font-mono font-semibold text-emerald-500/80 uppercase">
                        {item.tech}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                {item.description && (
                  <p className="text-xs leading-relaxed text-slate-400 mt-3 relative z-10">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
            {projects.length === 0 && (
              <p className="text-slate-500 text-sm italic py-4">No projects listed.</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkSection;
