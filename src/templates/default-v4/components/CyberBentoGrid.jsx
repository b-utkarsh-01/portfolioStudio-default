import { ArrowRight, Award, Briefcase, Cpu, ExternalLink, Layers, Terminal, User } from "lucide-react";

const CyberBentoGrid = ({
  profileStage,
  skillsStage,
  workStage,
  socialStage,
  publishStage,
  profile,
  topSkills,
  contactLinks,
  projects,
  experiences,
  services,
  certifications,
  testimonials,
  customStages,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

    {/* Profile / Bio */}
    {profileStage.enabled && (profile?.summary || profile?.bio || profile?.title) && (
      <div className="cyber-card p-8 md:col-span-7 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <User className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            {profileStage.title.toUpperCase()} // PROFILE_
          </span>
        </div>
        {(profile?.summary || profile?.bio) && (
          <p className="text-sm leading-relaxed text-slate-300 font-light">{profile.summary || profile.bio}</p>
        )}
      </div>
    )}

    {/* Projects */}
    {workStage.enabled && projects.length > 0 && (
      <div className="cyber-card p-8 md:col-span-5 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            PROJECTS // BUILD_LOG_
          </span>
        </div>
        <div className="space-y-4">
          {projects.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="group flex items-start gap-3">
              <span className="font-cyber-mono text-[8px] text-cyan-500/50 font-bold mt-1 flex-shrink-0">
                [{String(idx + 1).padStart(2, "0")}]
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-xs text-white truncate group-hover:text-cyan-400 transition-colors">
                    {item.title || item.name}
                  </h3>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-3 h-3 text-slate-600 hover:text-cyan-400 transition-colors flex-shrink-0" />
                    </a>
                  )}
                </div>
                {item.description && (
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1 line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Experience */}
    {workStage.enabled && experiences.length > 0 && (
      <div className="cyber-card p-8 md:col-span-6 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            {workStage.title.toUpperCase()} // HISTORY_
          </span>
        </div>
        <div className="space-y-6 pl-4 border-l border-white/10 relative">
          {experiences.map((item, idx) => (
            <div key={`${item.company}-${idx}`} className="relative group space-y-1">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-white/30 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
              <div className="flex flex-col gap-0.5">
                <h3 className="font-bold text-xs text-white group-hover:text-cyan-400 transition-colors">
                  {item.title?.toUpperCase()}
                </h3>
                <span className="font-cyber-mono text-[8px] text-slate-500 font-bold">{item.period}</span>
              </div>
              <p className="text-[9px] font-cyber-mono text-pink-500 uppercase tracking-wide">{item.company}</p>
              {item.description && (
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Contact */}
    {contactLinks.length > 0 && (
      <div className="cyber-card p-8 md:col-span-6 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
              CONTACT // DIRECT_LINK_
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </div>
        <div className="space-y-3 font-cyber-mono text-xs">
          {contactLinks.map((item, idx) => (
            <a
              key={`${item.type}-${idx}`}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:border-cyan-500/40 hover:bg-cyan-950/20 text-slate-400 hover:text-white transition-all duration-300"
            >
              <span className="uppercase text-[9px] text-slate-500 font-bold tracking-wider">{item.type}:</span>
              <span className="font-bold text-cyan-300 truncate max-w-[180px] sm:max-w-xs">[{item.text}]</span>
            </a>
          ))}
        </div>
      </div>
    )}

    {/* Certifications */}
    {publishStage.enabled && certifications.length > 0 && (
      <div className="cyber-card p-8 md:col-span-6 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Award className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            {publishStage.title.toUpperCase()} // REGISTRY_
          </span>
        </div>
        <div className="space-y-3">
          {certifications.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 transition-colors flex justify-between items-center"
            >
              <div className="space-y-0.5">
                <h4 className="font-bold font-cyber-header text-xs text-white">{item.name}</h4>
                <p className="text-[9px] font-cyber-mono text-slate-400">{item.provider}</p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-cyber-mono text-[9px] font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 uppercase"
                >
                  Verify ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Skills */}
    {skillsStage.enabled && topSkills.length > 0 && (
      <div className="cyber-card p-8 md:col-span-12 flex flex-col shadow-2xl">
        <span className="font-cyber-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold mb-4">
          // CORE SKILLS DATA MODULES_
        </span>
        <div className="flex flex-wrap gap-2">
          {topSkills.map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="px-2.5 py-1.5 rounded-lg border border-fuchsia-500/20 bg-fuchsia-950/15 font-cyber-mono text-[10px] text-fuchsia-400 font-bold uppercase tracking-wider"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
    )}

    {/* Services */}
    {socialStage.enabled && services.length > 0 && (
      <div className="cyber-card p-8 md:col-span-6 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            {socialStage.title.toUpperCase()} // CAPABILITIES_
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
              <h4 className="font-bold text-xs text-white font-cyber-header">{item.name}</h4>
              {item.description && (
                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Testimonials */}
    {socialStage.enabled && testimonials.length > 0 && (
      <div className="cyber-card p-8 md:col-span-6 flex flex-col shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            CLIENT FEEDBACK // RATINGS_
          </span>
        </div>
        <div className="space-y-3">
          {testimonials.map((item, idx) => (
            <blockquote
              key={`${item.name}-${idx}`}
              className="p-4 rounded-2xl bg-white/[0.01] border border-white/5"
            >
              <p className="text-xs italic leading-relaxed text-slate-400">&quot;{item.quote}&quot;</p>
              <footer className="mt-3 text-[9px] font-cyber-mono text-slate-500 uppercase">
                // {item.name} -- {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    )}

    {/* Custom Stages */}
    {customStages.map((stage) => (
      <div key={stage.id} className="cyber-card p-8 md:col-span-12 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-cyber-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
            {stage.title?.toUpperCase() || "LOG // CUSTOM_"}
          </span>
        </div>
        {stage.kind === "cards" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {stage.cards.map((card, idx) => (
              <div
                key={`${stage.id}-${idx}`}
                className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-white font-cyber-header">{card.title}</h4>
                  {card.subtitle && <p className="text-[9px] font-cyber-mono text-slate-500">{card.subtitle}</p>}
                  {card.description && (
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{card.description}</p>
                  )}
                </div>
                {card.link && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 font-cyber-mono text-[9px] font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 uppercase"
                  >
                    Explore <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs leading-relaxed text-slate-300 font-cyber-mono">{stage.paragraph}</p>
        )}
      </div>
    ))}
  </div>
);

export default CyberBentoGrid;
