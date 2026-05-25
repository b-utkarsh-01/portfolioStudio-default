import { useMemo, useRef, useEffect } from "react";
import CustomSections from "./components/CustomSections";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import HeroSection from "./components/HeroSection";
import PublishSection from "./components/PublishSection";
import SkillsSection from "./components/SkillsSection";
import SocialSection from "./components/SocialSection";
import WorkSection from "./components/WorkSection";
import { getContactIcon, getStage, getTopSkills } from "./utils/horizonUtils";

const Horizon = ({ data }) => {
  if (!data) return null;

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const stages = data.layout?.stages || [];
  const profile = data.profile || {};

  const skillsStage = getStage(stages, "skills", "Skills");
  const workStage = getStage(stages, "work", "Experience");
  const socialStage = getStage(stages, "social", "Services & Testimonials");
  const publishStage = getStage(stages, "publish", "Credentials");

  const customStages = useMemo(
    () =>
      (Array.isArray(data.customStages) ? data.customStages : []).filter((item) =>
        item?.kind === "cards" ? Array.isArray(item.cards) && item.cards.length : `${item?.paragraph || ""}`.trim()
      ),
    [data.customStages]
  );
  const highlights = Array.isArray(profile.highlights) ? profile.highlights.filter(Boolean) : [];
  const educationCards = useMemo(
    () =>
      (Array.isArray(data.education) ? data.education : []).flatMap((group) =>
        (Array.isArray(group?.items) ? group.items : []).map((item) => ({
          title: item?.degree || "Education",
          subtitle: group?.subtitle || "",
          description: item?.institute || "",
          link: "",
        }))
      ),
    [data.education]
  );
  const derivedStages = useMemo(() => {
    const items = [];
    if (highlights.length) {
      items.push({
        id: "highlights",
        title: "Highlights",
        kind: "cards",
        cards: highlights.map((item) => ({ title: item, subtitle: "", description: "", link: "" })),
      });
    }
    if (educationCards.length) {
      items.push({ id: "education", title: "Education", kind: "cards", cards: educationCards });
    }
    return [...items, ...customStages];
  }, [customStages, educationCards, highlights]);

  const topSkills = useMemo(() => getTopSkills(data.skills), [data.skills]);

  const contactLinks = useMemo(
    () => (profile.contacts || []).filter((item) => item?.text || item?.href),
    [profile.contacts]
  );

  const projects = (data.projects || []).slice(0, 6);
  const experiences = (data.experiences || []).slice(0, 6);
  const services = (data.services || []).slice(0, 6);
  const certifications = (data.certifications || []).slice(0, 8);
  const testimonials = (data.testimonials || []).slice(0, 4);

  const firstName = (profile.name || "User").trim().split(/\s+/)[0] || "User";

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300 overflow-hidden"
    >
      {/* Interactive Mouse Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 200px), rgba(16, 185, 129, 0.08), transparent 80%)`,
        }}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* Radial Top Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-950/10 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 pb-32">
        <HeaderBar firstName={firstName} contactLink={contactLinks[0]} badgeName={data.badgeName?.name} badgeTitle={data.badgeName?.badgeTitle} />

        <HeroSection profile={profile} contactLinks={contactLinks} getContactIcon={getContactIcon} />

        <SkillsSection stage={skillsStage} topSkills={topSkills} />

        <WorkSection stage={workStage} experiences={experiences} projects={projects} />

        <SocialSection stage={socialStage} services={services} testimonials={testimonials} />

        <PublishSection stage={publishStage} certifications={certifications} />

        <CustomSections customStages={derivedStages} />

        <FooterBar profileName={profile.name} firstName={firstName} />
      </div>
    </div>
  );
};

export default Horizon;
