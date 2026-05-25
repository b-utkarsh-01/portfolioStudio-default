import { useState } from "react";

const AuroraHero = ({ profile, contactLinks, getContactIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const name = profile?.name || "Creative Professional";
  const title = Array.isArray(profile?.title)
    ? profile.title.filter(Boolean).join(" • ")
    : profile?.title || "MERN Stack Engineer";
  const bio = profile?.summary || profile?.bio || "";
  
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "CR";


  return (
    <section className="relative pt-12 pb-16 aurora-anim-2">
      {/* Top thin rule */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(197,168,128,0.2), transparent)",
          marginBottom: "40px",
        }}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left: Name + Bio */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <div className="aurora-label mb-4">Chronicle Index · {new Date().getFullYear()}</div>

          {/* Name */}
          <h1 className="aurora-serif aurora-anim-1" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 300, lineHeight: 1.05, color: "#fafaf9", marginBottom: "12px", letterSpacing: "-0.01em" }}>
            {name}
          </h1>

          {/* Title */}
          <div className="aurora-anim-2" style={{ marginBottom: "24px" }}>
            <span
              className="aurora-serif"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#c5a880",
              }}
            >
              {title}
            </span>
          </div>

          {/* Divider */}
          <div className="aurora-divider aurora-anim-3" style={{ marginBottom: "24px" }} />

          {/* Bio */}
          {bio && (
            <p
              className="aurora-anim-3"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#a8a29e",
                maxWidth: "540px",
                fontWeight: 300,
              }}
            >
              {bio}
            </p>
          )}

          {/* Contact Links */}
          {contactLinks.length > 0 && (
            <div className="aurora-anim-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
              {contactLinks.slice(0, 5).map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="aurora-contact-item"
                >
                  <span style={{ fontSize: "14px", color: "#c5a880" }}>{getContactIcon(item.type)}</span>
                  <span style={{ fontSize: "11px", color: "#d6d3d1", fontWeight: 400 }}>{item.text}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: Text-Only Monogram Badge (Completely replaces user avatars) */}
        <div className="aurora-anim-3 flex-shrink-0">
          <div
            className={`chronicle-flip-card ${isFlipped ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="chronicle-flip-card-inner">
              {/* Front Side */}
              <div className="chronicle-flip-card-front">
                {/* Elegant Double borders */}
                <div
                  style={{
                    position: "absolute",
                    inset: "8px",
                    border: "1px dashed rgba(197,168,128,0.06)",
                    borderRadius: "8px",
                    pointerEvents: "none",
                  }}
                />

                {/* Initials display */}
                <span
                  className="aurora-serif"
                  style={{
                    fontSize: "4rem",
                    fontWeight: 200,
                    color: "#e6dfd3",
                    letterSpacing: "4px",
                    lineHeight: 1,
                    textShadow: "0 0 20px rgba(197,168,128,0.1)",
                  }}
                >
                  {initials}
                </span>

                <div className="aurora-divider" style={{ width: "24px", background: "rgba(197,168,128,0.3)" }} />

                <span className="aurora-mono" style={{ fontSize: "8px", color: "#78716c", letterSpacing: "2px" }}>
                  SIGNATURE
                </span>

                {/* Corner accents */}
                <div style={{ position: "absolute", top: 12, left: 12, width: 12, height: 12, borderTop: "1px solid rgba(197,168,128,0.3)", borderLeft: "1px solid rgba(197,168,128,0.3)" }} />
                <div style={{ position: "absolute", bottom: 12, right: 12, width: 12, height: 12, borderBottom: "1px solid rgba(197,168,128,0.3)", borderRight: "1px solid rgba(197,168,128,0.3)" }} />
              </div>

              {/* Back Side */}
              <div className="chronicle-flip-card-back">
                {/* Decorative border layout */}
                <div
                  style={{
                    position: "absolute",
                    inset: "8px",
                    border: "1px solid rgba(197,168,128,0.08)",
                    borderRadius: "8px",
                    pointerEvents: "none",
                  }}
                />
                
                <span className="aurora-serif" style={{ fontSize: "1.6rem", fontStyle: "italic", color: "#c5a880", marginTop:"5px"}}>
                  Greetings
                </span>
                
                <p
                  style={{
                    fontSize: "11px",
                    color: "#d6d3d1",
                    lineHeight: 1.6,
                    margin: "0 4px 10px",
                    fontWeight: 400,
                    textAlign: "center",
                    textShadow: "0 1px 0 rgba(0,0,0,0.25)",
                  }}
                >
                  Welcome to my portfolio. Thank you for visiting. Let's connect to share ideas, collaborate on projects, or explore opportunities.
                </p>

                <div className="aurora-divider" style={{ width: "16px", background: "rgba(197,168,128,0.2)", marginBottom: "4px" }} />

                <span className="aurora-mono" style={{ fontSize: "7px", color: "#78716c", letterSpacing: "1.5px", marginBottom:"9px" }}>
                  EST. 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuroraHero;
