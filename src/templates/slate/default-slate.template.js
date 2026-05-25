import Slate from "./slate";

export const defaultSlateTemplate = {
  id: "default-slate",
  tier: "default",
  name: "Slate",
  description: "A bold, neo-brutalist layout characterized by clean borders, monospace typography, and distinct structured sections.",
  theme: {
    bgClassName: "bg-neutral-950",
    cardClassName: "border-white/80 bg-neutral-900 text-white hover:bg-neutral-800",
    title: "Slate Preview",
    effects: "minimal",
  },
  render: Slate,
};
