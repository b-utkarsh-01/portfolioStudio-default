const AuroraSocial = ({ stage, services, testimonials }) => {
  if (!stage.enabled) return null;
  const hasServices = services.length > 0;
  const hasTestimonials = testimonials.length > 0;
  if (!hasServices && !hasTestimonials) return null;

  return (
    <section className="aurora-section pb-16">
      <div className="aurora-section-heading">
        <div className="aurora-label">{stage.title}</div>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Services */}
      {hasServices && (
        <div style={{ marginBottom: "40px" }}>
          <h3
            className="aurora-serif"
            style={{ fontSize: "1rem", fontWeight: 600, color: "#e7e5e4", marginBottom: "20px" }}
          >
            Services
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
            {services.map((item, idx) => (
              <div key={idx} className="aurora-card" style={{ padding: "20px", position: "relative" }}>
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "linear-gradient(90deg, #f59e0b, transparent)",
                    marginBottom: "14px",
                  }}
                />
                <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#e7e5e4", marginBottom: "8px" }}>
                  {item.name}
                </h4>
                {item.description && (
                  <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.7 }}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {hasTestimonials && (
        <div>
          <h3
            className="aurora-serif"
            style={{ fontSize: "1rem", fontWeight: 600, color: "#e7e5e4", marginBottom: "20px" }}
          >
            Kind Words
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {testimonials.map((item, idx) => (
              <blockquote
                key={idx}
                className="aurora-card"
                style={{ padding: "24px 28px", position: "relative" }}
              >
                {/* Large quote mark */}
                <div
                  className="aurora-serif"
                  style={{
                    fontSize: "5rem",
                    color: "rgba(245,158,11,0.15)",
                    lineHeight: 0.6,
                    marginBottom: "16px",
                    fontWeight: 900,
                  }}
                >
                  "
                </div>
                <p
                  className="aurora-serif"
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "#d6d3d1",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  {item.quote}
                </p>
                <footer>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#f59e0b" }}>{item.name}</div>
                  {item.role && (
                    <div className="aurora-mono" style={{ fontSize: "10px", color: "#78716c", marginTop: "2px" }}>
                      {item.role}
                    </div>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AuroraSocial;
