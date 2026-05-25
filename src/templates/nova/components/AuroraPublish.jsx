const AuroraPublish = ({ stage, certifications }) => {
  if (!stage.enabled || !certifications.length) return null;

  return (
    <section className="aurora-section pb-16">
      <div className="aurora-section-heading">
        <div className="aurora-label">{stage.title}</div>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
        {certifications.map((item, idx) => (
          <div
            key={idx}
            className="aurora-card"
            style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#e7e5e4", marginBottom: "4px" }}>
                {item.name}
              </div>
              <div className="aurora-mono" style={{ fontSize: "10px", color: "#78716c" }}>
                {item.provider}
                {item.year && ` · ${item.year}`}
              </div>
            </div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  flexShrink: 0,
                  marginLeft: "12px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  border: "1px solid rgba(245,158,11,0.25)",
                  background: "rgba(245,158,11,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f59e0b",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                ↗
              </a>
            ) : (
              <div
                style={{
                  flexShrink: 0,
                  marginLeft: "12px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "rgba(245,158,11,0.4)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuroraPublish;
