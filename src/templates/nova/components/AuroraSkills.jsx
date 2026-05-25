const AuroraSkills = ({ stage, topSkills }) => {
  if (!stage.enabled || !topSkills.length) return null;

  return (
    <section className="aurora-section pb-16">
      <div className="aurora-section-heading">
        <div className="aurora-label">{stage.title}</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(197,168,128,0.2), transparent)" }} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {topSkills.map((skill, idx) => (
          <span key={idx} className="aurora-skill" style={{ animationDelay: `${idx * 0.04}s` }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AuroraSkills;
