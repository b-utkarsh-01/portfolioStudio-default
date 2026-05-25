import DefaultCyberpunkPortfolio from "./DefaultCyberpunkPortfolio";

export const defaultV4Template = {
  id: "default-v4",
  tier: "default",
  name: "Cyberpunk Glassmorphism",
  description: "Futuristic text-only layout featuring frosted glass cards, glowing neon accents, and modular bento grids.",
  theme: {
    bgClassName: "bg-[#07080e]",
    cardClassName: "border-white/10 bg-slate-900/40 text-slate-200 hover:bg-slate-900/60 backdrop-blur-md",
    title: "Cyberpunk Glassmorphism Preview",
    effects: "minimal",
  },
  render: DefaultCyberpunkPortfolio,
};
