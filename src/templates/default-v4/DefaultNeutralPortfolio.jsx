import { useMemo } from "react";

const getStage = (stages, id, fallbackTitle) => {
  const match = (Array.isArray(stages) ? stages : []).find((stage) => stage?.id === id);
  return {
    enabled: match?.enabled !== false,
    title: match?.title?.trim() || fallbackTitle,
  };
};

const DefaultNeutralPortfolio = ({ data }) => {
  const stages = data.layout?.stages || [];

  const profileStage = getStage(stages, "profile", "Profile");
  const skillsStage = getStage(stages, "skills", "Skills");
  const workStage = getStage(stages, "work", "Work & Education");
  const socialStage = getStage(stages, "social", "Services & Reviews");
  const publishStage = getStage(stages, "publish", "Publish");

  const customStages = useMemo(
    () =>
      (Array.isArray(data.customStages) ? data.customStages : []).filter((item) =>
        item?.kind === "cards" ? Array.isArray(item.cards) && item.cards.length : `${item?.paragraph || ""}`.trim()
      ),
    [data.customStages]
  );

  const topSkills = Object.values(data.skills || {}).flat().filter(Boolean).slice(0, 12);
  const contactLinks = (data.profile?.contacts || []).slice(0, 4);
  const projects = (data.projects || []).slice(0, 6);
  const experiences = (data.experiences || []).slice(0, 6);
  const services = (data.services || []).slice(0, 6);
  const certifications = (data.certifications || []).slice(0, 8);
  const testimonials = (data.testimonials || []).slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      <div className="mx-auto max-w-6xl p-4 pb-24 sm:p-6 lg:p-8">
        
        {/* --- HERO / HEADER SECTION --- */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/15 bg-slate-900/70 p-6 backdrop-blur-md sm:p-10 shadow-xl">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center rounded-md bg-emerald-950/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-800/30">
                Professional Portfolio
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
                {data.profile?.name || "Your Name"}
              </h1>
              <p className="text-xl font-semibold text-emerald-400 sm:text-2xl">
                {(data.profile?.title || []).filter(Boolean).join("  •  ") || "Your Role"}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 font-medium">
                {data.profile?.summary || "Write a crisp summary focused on your strengths, impact, and goals."}
              </p>
            </div>

            {/* Quick Contact Sidebar */}
            <aside className="w-full shrink-0 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:w-80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Contact</h3>
              <div className="mt-4 space-y-2.5">
                {contactLinks.length ? (
                  contactLinks.map((item) => (
                    <a
                      key={`${item.type}-${item.href}`}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/50 px-3.5 py-2.5 text-sm transition-all duration-200 hover:border-emerald-500/30 hover:bg-slate-900"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-400/90 group-hover:text-amber-400">{item.type}</span>
                        <span className="font-semibold text-slate-200 mt-0.5">{item.text}</span>
                      </div>
                      <span className="text-emerald-500/60 transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  ))
                ) : (
                  <p className="rounded-xl border border-dashed border-slate-800 py-4 text-center text-xs font-medium text-slate-500">
                    Add contact details from dashboard.
                  </p>
                )}
              </div>
            </aside>
          </div>

          {/* Featured Skills Grid */}
          {topSkills.length ? (
            <div className="mt-8 border-t border-slate-800 pt-6">
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        {/* --- PROFILE SUMMARY SECTION --- */}
        {profileStage.enabled ? (
          <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">{profileStage.title} Overview</h2>
            <div className="mt-4 max-w-4xl space-y-2">
              <h3 className="text-xl font-bold text-slate-100">{data.profile?.name || "Your Name"}</h3>
              <p className="text-sm font-semibold text-amber-400">{(data.profile?.title || []).join(" | ")}</p>
              <p className="text-base leading-relaxed text-slate-400">{data.profile?.summary}</p>
            </div>
          </section>
        ) : null}

        {/* --- ALL SKILLS SECTION --- */}
        {skillsStage.enabled ? (
          <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-lg font-bold tracking-tight text-slate-100">{skillsStage.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {topSkills.map((skill) => (
                <span key={skill} className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-300 hover:border-emerald-500/30 hover:text-emerald-400 border transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        {/* --- EXPERIENCE & PROJECTS GRID --- */}
        {workStage.enabled ? (
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Work Experience */}
            <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
              <h2 className="text-lg font-bold tracking-tight text-slate-100">{workStage.title}</h2>
              <div className="mt-5 space-y-4">
                {experiences.map((item) => (
                  <div key={`${item.title}-${item.company}`} className="group relative rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 transition-all hover:bg-slate-900/30">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                        <p className="text-sm font-medium text-slate-400">{item.company}</p>
                      </div>
                      <span className="inline-block shrink-0 rounded-md bg-amber-950/60 px-2 py-0.5 text-xs font-bold text-amber-400 border border-amber-900/40">
                        {item.period}
                      </span>
                    </div>
                    {item.description ? <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p> : null}
                  </div>
                ))}
                {!experiences.length ? (
                  <p className="rounded-2xl border border-dashed border-slate-800 py-8 text-center text-sm font-medium text-slate-500">
                    Add experience entries from dashboard.
                  </p>
                ) : null}
              </div>
            </article>

            {/* Projects */}
            <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
              <h2 className="text-lg font-bold tracking-tight text-slate-100">Projects</h2>
              <div className="mt-5 grid gap-4">
                {projects.map((item) => (
                  <div key={item.name} className="group rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 transition-all hover:bg-slate-900/30">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                      <p className="text-xs font-mono font-medium text-emerald-500/80">{item.tech}</p>
                    </div>
                    {item.description ? <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p> : null}
                  </div>
                ))}
                {!projects.length ? (
                  <p className="rounded-2xl border border-dashed border-slate-800 py-8 text-center text-sm font-medium text-slate-500">
                    Add project entries from dashboard.
                  </p>
                ) : null}
              </div>
            </article>
          </section>
        ) : null}

        {/* --- SERVICES & TESTIMONIALS SECTION --- */}
        {socialStage.enabled ? (
          <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-lg font-bold tracking-tight text-slate-100">{socialStage.title}</h2>
            
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {services.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <h3 className="font-bold text-slate-200">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              ))}
              {!services.length ? (
                <p className="col-span-full rounded-2xl border border-dashed border-slate-800 py-6 text-center text-sm font-medium text-slate-500">
                  Add services from dashboard.
                </p>
              ) : null}
            </div>

            {/* Testimonials Sub-section */}
            {testimonials.length ? (
              <div className="mt-8 border-t border-slate-800 pt-6">
                <h3 className="text-base font-bold tracking-tight text-slate-100">Testimonials</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  {testimonials.map((item, index) => (
                    <blockquote key={`${item.name}-${index}`} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/20 p-5">
                      <p className="text-sm italic leading-relaxed text-slate-400">&quot;{item.quote}&quot;</p>
                      <footer className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-3">
                        <div className="text-xs">
                          <cite className="not-italic font-bold text-slate-200">{item.name}</cite>
                          <span className="text-emerald-500/80 font-medium"> • {item.role}</span>
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {/* --- CERTIFICATIONS SECTION --- */}
        {publishStage.enabled ? (
          <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-lg font-bold tracking-tight text-slate-100">{publishStage.title}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item) => (
                <div key={item.name} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-4 transition-all hover:bg-slate-900/30">
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-200 line-clamp-2">{item.name}</h3>
                    <p className="text-xs font-semibold text-amber-400/80">{item.provider}</p>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
                    >
                      View Credential <span className="ml-0.5 text-[10px]">↗</span>
                    </a>
                  ) : null}
                </div>
              ))}
              {!certifications.length ? (
                <p className="col-span-full rounded-2xl border border-dashed border-slate-800 py-6 text-center text-sm font-medium text-slate-500">
                  Add certifications from dashboard.
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* --- CUSTOM SECTIONS --- */}
        {customStages.length ? (
          <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-lg font-bold tracking-tight text-slate-100">Custom Sections</h2>
            <div className="mt-5 space-y-6">
              {customStages.map((stage) =>
                stage.kind === "cards" ? (
                  <div key={stage.id} className="grid gap-4 lg:grid-cols-2">
                    {stage.cards.map((card, idx) => (
                      <article key={`${stage.id}-${idx}`} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                        <div className="space-y-1">
                          <h3 className="font-bold text-slate-200">{card.title}</h3>
                          {card.subtitle ? <p className="text-xs font-bold text-amber-400">{card.subtitle}</p> : null}
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>
                        </div>
                        {card.link ? (
                          <a href={card.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline">
                            Open Link <span className="ml-0.5 text-[10px]">↗</span>
                          </a>
                        ) : null}
                      </article>
                    ))}
                  </div>
                ) : (
                  <p key={stage.id} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 text-sm leading-relaxed text-slate-400">
                    {stage.paragraph}
                  </p>
                )
              )}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default DefaultNeutralPortfolio;