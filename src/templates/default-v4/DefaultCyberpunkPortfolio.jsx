import { useMemo } from "react";
import CyberBentoGrid from "./components/CyberBentoGrid";
import CyberFooter from "./components/CyberFooter";
import CyberStyles from "./components/CyberStyles";
import CyberTitle from "./components/CyberTitle";
import CyberTopHeader from "./components/CyberTopHeader";
import { getStage, getTopSkills } from "./utils/cyberUtils";

const DefaultCyberpunkPortfolio = ({ data }) => {
  if (!data) return null;

  const stages = data.layout?.stages || [];

  const profileStage = getStage(stages, "profile", "Overview");
  const skillsStage = getStage(stages, "skills", "Status");
  const workStage = getStage(stages, "work", "Experience");
  const socialStage = getStage(stages, "social", "Services");
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
  const highlights = Array.isArray(data.profile?.highlights) ? data.profile.highlights.filter(Boolean) : [];
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
    () => (data.profile?.contacts || []).filter((item) => item?.text || item?.href),
    [data.profile?.contacts]
  );

  const projects = (data.projects || []).slice(0, 6);
  const experiences = (data.experiences || []).slice(0, 6);
  const services = (data.services || []).slice(0, 6);
  const certifications = (data.certifications || []).slice(0, 8);
  const testimonials = (data.testimonials || []).slice(0, 4);

  return (
    <div className="relative w-full h-screen bg-[#06070c] text-slate-100 antialiased font-sans p-4 sm:p-6 lg:p-12 overflow-y-auto overflow-x-hidden cyberglass-scrollbar selection:bg-cyan-500/30 selection:text-cyan-300">
      <CyberStyles />

      <div className="absolute inset-0 cyber-grid-bg pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-cyan-500/8 blur-[140px] pointer-events-none z-0 animate-blob" />
      <div className="absolute bottom-[10%] right-[-10%] w-[650px] h-[650px] rounded-full bg-pink-500/8 blur-[160px] pointer-events-none z-0 animate-blob-delayed" />
      <div className="absolute top-[35%] left-[45%] w-[400px] h-[400px] rounded-full bg-purple-600/7 blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-8">
        <CyberTopHeader badgeName={data.badgeName?.name} badgeTitle={data.badgeName?.badgeTitle} />
        <CyberTitle profile={data.profile} />

        <CyberBentoGrid
          profileStage={profileStage}
          skillsStage={skillsStage}
          workStage={workStage}
          socialStage={socialStage}
          publishStage={publishStage}
          profile={data.profile}
          topSkills={topSkills}
          contactLinks={contactLinks}
          projects={projects}
          experiences={experiences}
          services={services}
          certifications={certifications}
          testimonials={testimonials}
          customStages={derivedStages}
        />

        <CyberFooter profileName={data.profile?.name} />
      </div>
    </div>
  );
};

export default DefaultCyberpunkPortfolio;
