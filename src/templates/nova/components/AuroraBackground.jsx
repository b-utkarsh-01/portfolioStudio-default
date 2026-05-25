import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".aurora-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mouse glow */}
      <div ref={glowRef} className="aurora-mouse-glow" />

      {/* Aurora orbs */}
      <div
        className="aurora-orb-1 pointer-events-none fixed z-0"
        style={{
          top: "5%",
          left: "10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(251,146,60,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="aurora-orb-2 pointer-events-none fixed z-0"
        style={{
          bottom: "10%",
          right: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.09) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="aurora-orb-3 pointer-events-none fixed z-0"
        style={{
          top: "40%",
          left: "40%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Subtle horizontal lines */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 98%, rgba(245,158,11,0.03) 100%)",
          backgroundSize: "100% 80px",
        }}
      />
    </>
  );
};

export default AuroraBackground;
