import { useEffect, useRef } from "react";

const AuroraBackground = ({ scrollContainerRef }) => {
  const glowRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleScroll = () => {
      const scrollEl = scrollContainerRef?.current;
      if (!scrollEl) return;
      if (progressBarRef.current) {
        const totalHeight = scrollEl.scrollHeight - scrollEl.clientHeight;
        if (totalHeight > 0) {
          const progress = (scrollEl.scrollTop / totalHeight) * 100;
          progressBarRef.current.style.width = `${progress}%`;
        } else {
          progressBarRef.current.style.width = "0%";
        }
      }
    };

    const scrollEl = scrollContainerRef?.current;
    window.addEventListener("mousemove", handleMouseMove);
    scrollEl?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      scrollEl?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

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
      { threshold: 0.1, root: scrollContainerRef?.current || null, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [scrollContainerRef]);

  return (
    <>
      {/* Scroll progress bar */}
      <div ref={progressBarRef} className="chronicle-progress-bar" />

      {/* Mouse glow spotlight */}
      <div ref={glowRef} className="aurora-mouse-glow" />

      {/* Soft bronze background lights */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          top: "-10%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,168,128,0.035) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          bottom: "10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,168,128,0.02) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Subtle layout lines */}
      <div
        className="pointer-events-none fixed inset-y-0 left-[15%] w-[1px] bg-white/[0.01] hidden lg:block"
        style={{ zIndex: 0 }}
      />
      <div
        className="pointer-events-none fixed inset-y-0 right-[15%] w-[1px] bg-white/[0.01] hidden lg:block"
        style={{ zIndex: 0 }}
      />
    </>
  );
};

export default AuroraBackground;
