import { useMemo, useRef } from "react";
import AuroraBackground from "./components/AuroraBackground";
import AuroraCustom from "./components/AuroraCustom";
import AuroraFooter from "./components/AuroraFooter";
import AuroraHero from "./components/AuroraHero";
import AuroraPublish from "./components/AuroraPublish";
import AuroraSkills from "./components/AuroraSkills";
import AuroraSocial from "./components/AuroraSocial";
import AuroraStyles from "./components/AuroraStyles";
import AuroraWork from "./components/AuroraWork";
import { getContactIcon, getStage, getTopSkills } from "./utils/auroraUtils";

const AuroraPortfolio = ({ data }) => {
  if (!data) return null;
  const scrollContainerRef = useRef(null);

  const stages = data.layout?.stages || [];
  const profile = data.profile || {};

  const skillsStage = getStage(stages, "skills", "Skills");
  const workStage = getStage(stages, "work", "Experience & Work");
  const socialStage = getStage(stages, "social", "Services & Reviews");
  const publishStage = getStage(stages, "publish", "Credentials");

  const customStages = useMemo(
    () => {
      const layoutTitleById = new Map(
        (Array.isArray(stages) ? stages : []).map((stage) => [`${stage?.id || ""}`, `${stage?.title || ""}`.trim()])
      );
      return (Array.isArray(data.customStages) ? data.customStages : [])
        .filter((item) =>
          item?.kind === "cards" ? Array.isArray(item.cards) && item.cards.length : `${item?.paragraph || ""}`.trim()
        )
        .map((item) => ({
          ...item,
          title: `${layoutTitleById.get(`${item?.id || ""}`) || item?.title || ""}`.trim(),
        }));
    },
    [data.customStages, stages]
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

  return (
    <div
      ref={scrollContainerRef}
      className="aurora-root"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#080809",
        color: "#e7e5e4",
        overflowY: "auto",
        overflowX: "hidden",
        overscrollBehavior: "contain",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <AuroraStyles />
      <AuroraBackground scrollContainerRef={scrollContainerRef} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          className="aurora-anim-1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            paddingBottom: "8px",
          }}
        >
          <span className="aurora-mono aurora-gradient-text" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em" }}>
            {(data.badgeName?.name || "PS")} | {(data.badgeName?.badgeTitle || "CHRONICLE")}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(195,163,122,0.6)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(203,191,180,0.4)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>

        <AuroraHero profile={profile} contactLinks={contactLinks} getContactIcon={getContactIcon} />
        <AuroraSkills stage={skillsStage} topSkills={topSkills} />
        <AuroraWork stage={workStage} experiences={experiences} projects={projects} />
        <AuroraSocial stage={socialStage} services={services} testimonials={testimonials} />
        <AuroraPublish stage={publishStage} certifications={certifications} />
        <AuroraCustom customStages={derivedStages} />
        <AuroraFooter profileName={profile.name} />
      </div>
    </div>
  );
};

export default AuroraPortfolio;
