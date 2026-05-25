const AuroraFooter = ({ profileName }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="aurora-section"
      style={{
        paddingTop: "48px",
        paddingBottom: "40px",
        borderTop: "1px solid rgba(197, 168, 128, 0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <span className="aurora-serif" style={{ fontSize: "1.2rem", color: "#78716c", fontStyle: "italic" }}>
        {profileName || "Portfolio"}
      </span>
      <span className="aurora-mono" style={{ fontSize: "10px", color: "#57534e", letterSpacing: "0.1em" }}>
        © {year} · Built with Portfolio Studio
      </span>
    </footer>
  );
};

export default AuroraFooter;
