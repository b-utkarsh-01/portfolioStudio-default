import DefaultNeutralPortfolio from "./DefaultNeutralPortfolio";

export const defaultV4Template = {
  id: "default-v4",
  tier: "default",
  name: "Executive Canvas",
  description: "Polished professional layout with strong hierarchy and recruiter-friendly sections.",
  theme: {
    bgClassName: "bg-slate-100",
    textClassName: "text-slate-900",
    cardClassName: "border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    title: "Executive Canvas Preview",
    effects: "minimal",
  },
  render: DefaultNeutralPortfolio,
};
