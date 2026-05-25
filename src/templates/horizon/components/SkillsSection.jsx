import { motion } from "framer-motion";

const SkillsSection = ({ stage, topSkills }) => {
  if (!stage.enabled || topSkills.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
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
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            {stage.title}
          </h2>
        </div>
        <div className="md:col-span-3">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2.5"
          >
            {topSkills.map((skill, idx) => (
              <motion.span
                key={`${skill}-${idx}`}
                variants={badgeVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.08)",
                }}
                className="px-3.5 py-1.5 rounded-lg border border-slate-900 bg-slate-900/30 text-xs font-mono font-medium text-slate-300 hover:border-emerald-500/30 hover:bg-emerald-950/10 hover:text-emerald-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
