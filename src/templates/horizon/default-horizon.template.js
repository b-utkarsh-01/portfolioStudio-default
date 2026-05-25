import Horizon from "./horizon";

export const defaultHorizonTemplate = {
  id: "default-horizon",
  tier: "default",
  name: "Horizon",
  description: "A modern, sleek dark-emerald layout featuring smooth interactive mouse-glow effects and fluid scroll reveal animations.",
  theme: {
    bgClassName: "bg-slate-950",
    cardClassName: "border-slate-600 bg-slate-900/60 text-slate-200 hover:bg-slate-800",
    title: "Horizon Preview",
    effects: "minimal",
  },
  render: Horizon,
};
