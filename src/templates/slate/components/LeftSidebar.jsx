import { useState, useEffect, useRef } from "react";

const TypewriterText = ({ text, onCharTyped }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextText = prev + text.charAt(index);
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
        if (onCharTyped) {
          onCharTyped();
        }
        return nextText;
      });
    }, 12);
    return () => clearInterval(interval);
  }, [text, onCharTyped]);

  return (
    <span className="font-serif-brutalist text-2xl sm:text-3xl text-neutral-100 uppercase tracking-wide leading-relaxed">
      {displayedText}
      <span className="animate-pulse bg-orange-500 inline-block w-2.5 h-6 ml-2 align-middle"></span>
    </span>
  );
};

const LeftSidebar = ({ 
  profile, 
  workEnabled, 
  experiencesCount, 
  projectsCount, 
  socialEnabled, 
  socialCount, 
  publishEnabled, 
  certCount, 
  contactCount, 
  badgeName, 
  badgeTitle, 
  highlights = [] 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const summaryText = profile?.summary || "PRODUCT-FOCUSED DEVELOPER WITH EXPERIENCE BUILDING SCALABLE WEB APPS, CLEAN APIS, AND MODERN UI SYSTEMS.";

  const handleCharTyped = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setHasOverflow(
          containerRef.current.scrollHeight > containerRef.current.clientHeight + 2
        );
      }
    };
    
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    
    const timeout = setTimeout(checkOverflow, 100);

    return () => {
      window.removeEventListener("resize", checkOverflow);
      clearTimeout(timeout);
    };
  }, [summaryText]);

  return (
    <aside className="w-full lg:w-[45%] xl:w-[40%] shrink-0 flex flex-col pb-8 lg:pb-0 lg:h-full justify-between">
      <div className="border border-white p-6 sm:p-10 bg-neutral-900/20 rounded-none flex flex-col justify-between min-h-[340px] lg:h-full relative">
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-start sm:items-center lg:items-start xl:items-center gap-4 border-b border-white/20 pb-6">
          <h2 className="text-2xl font-normal font-serif-brutalist tracking-wider text-white uppercase leading-none">
            {profile?.name || "ALEXA CARTER"}
          </h2>
          <nav className="flex flex-wrap gap-x-3 gap-y-1 font-mono-brutalist text-[9px] text-slate-400 uppercase tracking-widest">
            {workEnabled && experiencesCount > 0 && <a href="#experience" className="hover:text-white transition-colors">[EXPERIENCE]</a>}
            {projectsCount > 0 && <a href="#projects" className="hover:text-white transition-colors">[PROJECTS]</a>}
            {socialEnabled && socialCount > 0 && <a href="#services" className="hover:text-white transition-colors">[SERVICES]</a>}
            {publishEnabled && certCount > 0 && <a href="#credentials" className="hover:text-white transition-colors">[CREDENTIALS]</a>}
            {contactCount > 0 && <a href="#connect" className="hover:text-white transition-colors">[CONTACT]</a>}
          </nav>
        </div>

        <div 
          ref={containerRef}
          onClick={hasOverflow ? () => setIsModalOpen(true) : undefined}
          className={`my-8 min-h-0 overflow-y-auto pr-1 no-scrollbar transition-all duration-200 ${
            hasOverflow ? "cursor-pointer hover:bg-white/5 active:bg-white/10 p-2 -m-2 border border-dashed border-transparent hover:border-white/10" : ""
          }`}
        >
          {(badgeName || badgeTitle) ? (
            <p className="mb-4 font-mono-brutalist text-[10px] text-slate-500 uppercase tracking-widest">
              [{badgeName || "PORTFOLIO"}{badgeTitle ? ` | ${badgeTitle}` : ""}]
            </p>
          ) : null}
          <h1 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[40px] font-normal font-serif-brutalist tracking-wide text-white uppercase leading-[1.1] break-words [overflow-wrap:anywhere] select-none">
            {summaryText}
          </h1>
          
          {hasOverflow && (
            <div className="mt-3 flex items-center gap-2 text-orange-400 font-mono-brutalist text-[9px] tracking-wider uppercase animate-pulse">
              <span>[READ FULL SUMMARY]</span>
              <span>↘</span>
            </div>
          )}
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="font-mono-brutalist text-xs text-slate-300 tracking-wider">
            {(profile?.title || []).filter(Boolean).map((t) => `[${t.toUpperCase()}]`).join(" / ") || "[FULL STACK DEVELOPER] / [MERN ENGINEER]"}
          </p>
          {highlights.length > 0 ? (
            <p className="mt-3 font-mono-brutalist text-[10px] text-slate-500 tracking-wider">
              {highlights.slice(0, 4).map((item) => `#${item}`).join("  ")}
            </p>
          ) : null}
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] border-2 border-white bg-neutral-900 p-8 sm:p-12 shadow-[0_0_50px_rgba(255,255,255,0.08)] rounded-none flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-r-2 border-b-2 border-white bg-neutral-900 transform -translate-x-[2px] -translate-y-[2px]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-l-2 border-b-2 border-white bg-neutral-900 transform translate-x-[2px] -translate-y-[2px]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-r-2 border-t-2 border-white bg-neutral-900 transform -translate-x-[2px] translate-y-[2px]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-l-2 border-t-2 border-white bg-neutral-900 transform translate-x-[2px] translate-y-[2px]" />

            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-6 shrink-0">
                <span className="font-mono-brutalist text-xs text-slate-400 uppercase tracking-widest">
                  [USER SUMMARY // PROFILE_DETAILS]
                </span>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="font-mono-brutalist text-xs text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-widest"
                >
                  [CLOSE X]
                </button>
              </div>

              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto my-2 pr-2 slate-scrollbar min-h-0"
              >
                <TypewriterText text={summaryText} onCharTyped={handleCharTyped} />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-[10px] font-mono-brutalist text-slate-500 uppercase tracking-wider shrink-0">
              <span>{profile?.name || "ALEXA CARTER"}</span>
              <span>PORTFOLIO / 2026</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default LeftSidebar;
