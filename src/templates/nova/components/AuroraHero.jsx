const AuroraHero = ({ profile, contactLinks, getContactIcon }) => {
  const name = profile?.name || "Your Name";
  const title = Array.isArray(profile?.title)
    ? profile.title.filter(Boolean).join(" • ")
    : profile?.title || "Creative Professional";
  const bio = profile?.summary || profile?.bio || "";
  const avatar = profile?.avatar;

  return (
    <section className="relative pt-16 pb-20 aurora-anim-2">
      {/* Top rule */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
          marginBottom: "48px",
        }}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left: Name + Bio */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <div className="aurora-label mb-5">Portfolio · {new Date().getFullYear()}</div>

          {/* Name */}
          <h1 className="aurora-serif aurora-anim-1" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 900, lineHeight: 1.0, color: "#fafaf9", marginBottom: "8px", letterSpacing: "-0.02em" }}>
            {name}
          </h1>

          {/* Title with gradient */}
          <div className="aurora-anim-2" style={{ marginBottom: "28px" }}>
            <span
              className="aurora-serif"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                fontStyle: "italic",
                background: "linear-gradient(135deg, #fbbf24, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </span>
          </div>

          {/* Divider */}
          <div className="aurora-divider aurora-anim-3" style={{ marginBottom: "28px" }} />

          {/* Bio */}
          {bio && (
            <p
              className="aurora-anim-3"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#a8a29e",
                maxWidth: "560px",
                fontWeight: 300,
              }}
            >
              {bio}
            </p>
          )}

          {/* Contact Links */}
          {contactLinks.length > 0 && (
            <div className="aurora-anim-4" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "32px" }}>
              {contactLinks.slice(0, 5).map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="aurora-contact-item"
                >
                  <span style={{ fontSize: "16px", color: "#f59e0b" }}>{getContactIcon(item.type)}</span>
                  <span style={{ fontSize: "12px", color: "#d6d3d1", fontWeight: 500 }}>{item.text}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: Avatar or decorative element */}
        <div className="aurora-anim-3 flex-shrink-0">
          {avatar ? (
            <div
              style={{
                width: "240px",
                height: "300px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(245,158,11,0.2)",
                boxShadow: "0 0 80px rgba(245,158,11,0.1), 0 40px 80px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 60%, rgba(10,9,8,0.7))",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: "200px",
                height: "240px",
                borderRadius: "24px",
                border: "1px solid rgba(245,158,11,0.15)",
                background: "rgba(245,158,11,0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative initials */}
              <span
                className="aurora-serif"
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, rgba(245,158,11,0.4), rgba(251,146,60,0.2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                {name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
              </span>
              <div className="aurora-divider" />
              {/* Corner accents */}
              <div style={{ position: "absolute", top: 16, left: 16, width: 20, height: 20, borderTop: "2px solid rgba(245,158,11,0.4)", borderLeft: "2px solid rgba(245,158,11,0.4)" }} />
              <div style={{ position: "absolute", bottom: 16, right: 16, width: 20, height: 20, borderBottom: "2px solid rgba(245,158,11,0.4)", borderRight: "2px solid rgba(245,158,11,0.4)" }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuroraHero;
