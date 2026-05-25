import { motion } from "framer-motion";

const HeroSection = ({ profile, contactLinks, getContactIcon }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid gap-12 lg:grid-cols-3 lg:items-start mb-16 relative z-10"
    >
      <div className="lg:col-span-2 space-y-6">
        <motion.div variants={itemVariants} className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-emerald-400 shadow-sm relative overflow-hidden">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {profile?.name || "Your Name"}
          </h1>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg sm:text-xl font-medium text-emerald-400/90 tracking-wide">
          {(profile?.title || []).filter(Boolean).join("  •  ") || "Your Role"}
        </motion.p>
        <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-slate-400">
          {profile?.summary || "Write a crisp summary focused on your strengths, impact, and goals."}
        </motion.p>
      </div>

      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-slate-900 bg-slate-900/30 p-6 backdrop-blur-md relative overflow-hidden group/card hover:border-emerald-500/20 transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-800 pb-2">
          Contact Details
        </h3>
        <div className="space-y-3 relative z-10">
          {contactLinks.length > 0 ? (
            contactLinks.map((item, idx) => (
              <motion.a
                key={`${item.type}-${idx}`}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center gap-3.5 group rounded-xl border border-slate-900/80 bg-slate-950/40 p-3 hover:border-emerald-500/30 hover:bg-slate-900/40 transition-all duration-300 shadow-sm"
              >
                <div className="text-slate-400 group-hover:text-emerald-400 transition-colors transform group-hover:scale-110 duration-300">
                  {getContactIcon(item.type)}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{item.type}</span>
                  <span className="text-xs font-semibold text-slate-300 truncate mt-0.5 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              </motion.a>
            ))
          ) : (
            <p className="text-center py-6 text-xs text-slate-500 italic">No contact details available.</p>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
