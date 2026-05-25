import { useMemo } from "react";
import ConnectSection from "./components/ConnectSection";
import CredentialsSection from "./components/CredentialsSection";
import CustomStagesSection from "./components/CustomStagesSection";
import ExperienceSection from "./components/ExperienceSection";
import LeftSidebar from "./components/LeftSidebar";
import ProjectsSection from "./components/ProjectsSection";
import SlateFooter from "./components/SlateFooter";
import SlateStyles from "./components/SlateStyles";
import SocialSection from "./components/SocialSection";
import { getStage } from "./utils/slateUtils";

const Slate = ({ data }) => {
  if (!data) return null;

  const stages = data.layout?.stages || [];

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
  const highlights = Array.isArray(data.profile?.highlights) ? data.profile.highlights.filter(Boolean) : [];
  const educationCards = useMemo(
    () =>
      (Array.isArray(data.education) ? data.education : []).flatMap((group) =>
        (Array.isArray(group?.items) ? group.items : []).map((item) => ({
          title: item?.degree || "Education",
          subtitle: group?.subtitle || "",
          description: item?.institute || "",
          link: "",
          image: "",
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
        cards: highlights.map((item) => ({ title: item, subtitle: "", description: "", link: "", image: "" })),
      });
    }
    if (educationCards.length) {
      items.push({ id: "education", title: "Education", kind: "cards", cards: educationCards });
    }
    return [...items, ...customStages];
  }, [customStages, educationCards, highlights]);

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
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-200 antialiased px-4 py-8 sm:px-8 sm:py-12 lg:px-6 lg:py-6 lg:h-screen lg:overflow-hidden">
      <SlateStyles />

      <div className="mx-auto max-w-[95%] xl:max-w-7xl h-full flex flex-col lg:flex-row lg:gap-16">
        <LeftSidebar
          profile={data.profile}
          workEnabled={workStage.enabled}
          experiencesCount={experiences.length}
          projectsCount={projects.length}
          socialEnabled={socialStage.enabled}
          socialCount={services.length + testimonials.length}
          publishEnabled={publishStage.enabled}
          certCount={certifications.length}
          contactCount={contactLinks.length}
          badgeName={data.badgeName?.name}
          badgeTitle={data.badgeName?.badgeTitle}
          highlights={highlights}
        />

        <main className="w-full lg:flex-1 lg:h-full lg:overflow-y-auto space-y-16 lg:pr-6 pb-12 lg:pb-0 slate-scrollbar scroll-smooth">
          {workStage.enabled && <ExperienceSection title={workStage.title} experiences={experiences} />}
          <ProjectsSection projects={projects} />
          {socialStage.enabled && <SocialSection title={socialStage.title} services={services} testimonials={testimonials} />}
          {publishStage.enabled && <CredentialsSection title={publishStage.title} certifications={certifications} />}
          <CustomStagesSection customStages={derivedStages} />
          <ConnectSection contactLinks={contactLinks} />
          <SlateFooter profileName={data.profile?.name} />
        </main>
      </div>
    </div>
  );
};

export default Slate;
