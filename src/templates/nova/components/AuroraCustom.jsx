const AuroraCustom = ({ customStages }) => {
  if (!customStages.length) return null;

  return (
    <>
      {customStages.map((stage) => (
        <section key={stage.id} className="aurora-section pb-16">
          <div className="aurora-section-heading">
            <div className="aurora-label">{stage.title || "More"}</div>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          {stage.kind === "cards" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
              {stage.cards.map((card, idx) => (
                <div key={idx} className="aurora-card" style={{ padding: "22px", position: "relative" }}>
                  <span className="aurora-number">{String(idx + 1).padStart(2, "0")}</span>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#e7e5e4", marginBottom: "6px", paddingRight: "44px" }}>
                    {card.title}
                  </div>
                  {card.subtitle && (
                    <div className="aurora-mono" style={{ fontSize: "10px", color: "#78716c", marginBottom: "8px" }}>
                      {card.subtitle}
                    </div>
                  )}
                  {card.description && (
                    <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.7 }}>{card.description}</p>
                  )}
                  {card.link && (
                    <a href={card.link} target="_blank" rel="noreferrer" className="aurora-link" style={{ marginTop: "12px", display: "inline-flex" }}>
                      Explore →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: "14px", color: "#a8a29e", lineHeight: 1.9, maxWidth: "640px" }}>
              {stage.paragraph}
            </p>
          )}
        </section>
      ))}
    </>
  );
};

export default AuroraCustom;
