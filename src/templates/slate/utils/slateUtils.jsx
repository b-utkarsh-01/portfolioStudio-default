import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";

export const getContactIcon = (type = "") => {
  const lower = type.toLowerCase();
  if (lower.includes("email") || lower.includes("mail")) return <Mail className="w-4 h-4 text-white" />;
  if (lower.includes("phone") || lower.includes("call") || lower.includes("mobile")) return <Phone className="w-4 h-4 text-white" />;
  if (lower.includes("linkedin")) return <Linkedin className="w-4 h-4 text-white" />;
  if (lower.includes("github") || lower.includes("git")) return <Github className="w-4 h-4 text-white" />;
  return <Globe className="w-4 h-4 text-white" />;
};

export const getStage = (stages, id, fallbackTitle) => {
  const match = (Array.isArray(stages) ? stages : []).find((stage) => stage?.id === id);
  return {
    enabled: match?.enabled !== false,
    title: match?.title?.trim() || fallbackTitle,
  };
};

export const getTopSkills = (skills) => {
  if (!skills) return [];
  if (Array.isArray(skills)) return skills.filter(Boolean);
  if (typeof skills === "object") return Object.values(skills).flat().filter(Boolean);
  return [];
};
