import AuroraPortfolio from "./AuroraPortfolio";

export const defaultNovaTemplate = {
  id: "default-nova",
  tier: "default",
  name: "Aurora",
  description: "Warm dark editorial layout with flowing amber aurora gradients, Playfair Display serif typography, and smooth scroll-reveal animations.",
  theme: {
    bgClassName: "bg-[#0a0908]",
    cardClassName: "border-white/5 bg-white/[0.025] text-stone-200 hover:bg-white/[0.05] backdrop-blur-sm",
    title: "Aurora Preview",
    effects: "aurora",
  },
  render: AuroraPortfolio,
};
