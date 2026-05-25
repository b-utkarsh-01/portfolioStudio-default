import AuroraPortfolio from "./AuroraPortfolio";

export const defaultNovaTemplate = {
  id: "default-nova",
  tier: "default",
  name: "Chronicle",
  description: "Matte dark editorial layout with Cormorant Garamond serif typography, bronze accents, and minimal lookbook divisions.",
  theme: {
    bgClassName: "bg-[#080809]",
    cardClassName: "border-white/5 bg-white/[0.025] text-stone-200 hover:bg-white/[0.05] backdrop-blur-sm",
    title: "Chronicle Preview",
    effects: "chronicle",
  },
  render: AuroraPortfolio,
};
