const AuroraPublish = ({ stage, certifications }) => {
  if (!stage.enabled || !certifications.length) return null;

  return (
    <section className="aurora-section pb-16">
      <div className="aurora-section-heading">
        <div className="aurora-label">{stage.title}</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(197, 168, 128, 0.2), transparent)" }} />
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
                  width: "28px",
                  height: "28px",
                  borderRadius: "4px",
                  border: "1px solid rgba(197,168,128,0.25)",
                  background: "rgba(197,168,128,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c5a880",
                  fontSize: "12px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                ↗
              </a>
            ) : (
              <div
                style={{
                  flexShrink: 0,
                  marginLeft: "12px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(197,168,128,0.4)",
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
