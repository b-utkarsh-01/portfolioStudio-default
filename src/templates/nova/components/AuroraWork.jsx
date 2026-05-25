const AuroraWork = ({ stage, experiences, projects }) => {
  if (!stage.enabled) return null;
  const hasExp = experiences.length > 0;
  const hasProj = projects.length > 0;
  if (!hasExp && !hasProj) return null;

  return (
    <section className="aurora-section pb-16">
      <div className="aurora-section-heading">
        <div className="aurora-label">{stage.title}</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(197, 168, 128, 0.2), transparent)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px" }}>
        {/* Experience */}
        {hasExp && (
          <div>
            <h3
              className="aurora-serif"
              style={{ fontSize: "1.1rem", fontWeight: 400, color: "#e6dfd3", marginBottom: "24px", letterSpacing: "0.01em" }}
            >
              Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {experiences.map((item, idx) => (
                <div
                  key={idx}
                  style={{ display: "flex", gap: "16px" }}
                  className="group"
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", paddingTop: "4px" }}>
                    <div className="aurora-dot" />
                    {idx < experiences.length - 1 && (
                      <div style={{ flex: 1, width: "1px", background: "rgba(197,168,128,0.15)", minHeight: "40px" }} />
                    )}
                  </div>
                  <div style={{ flex: 1, paddingBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#e7e5e4", marginBottom: "2px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#c5a880", marginBottom: "4px", fontWeight: 500 }}>
                      {item.company}
                    </div>
                    <div className="aurora-mono" style={{ fontSize: "10px", color: "#78716c", marginBottom: "8px" }}>
                      {item.period}
                    </div>
                    {item.description && (
                      <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {hasProj && (
          <div>
            <h3
              className="aurora-serif"
              style={{ fontSize: "1.1rem", fontWeight: 400, color: "#e6dfd3", marginBottom: "24px", letterSpacing: "0.01em" }}
            >
              Projects
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {projects.map((item, idx) => (
                <div key={idx} className="aurora-project-card" style={{ position: "relative" }}>
                  <span className="aurora-number">{String(idx + 1).padStart(2, "0")}</span>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#e7e5e4", marginBottom: "6px", paddingRight: "40px" }}>
                    {item.title || item.name}
                  </div>
                  {(item.role || item.tech) && (
                    <div style={{ fontSize: "10px", color: "#c5a880", marginBottom: "8px", fontWeight: 500 }}>
                      {item.role || item.tech}
                    </div>
                  )}
                  {item.description && (
                    <p style={{ fontSize: "11px", color: "#a8a29e", lineHeight: 1.7 }}>{item.description}</p>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="aurora-link" style={{ marginTop: "10px" }}>
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuroraWork;
