import { Globe, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export const getContactIcon = (type = "") => {
  const lower = type.toLowerCase();
  if (lower.includes("email") || lower.includes("mail")) return <Mail className="w-5 h-5" />;
  if (lower.includes("phone") || lower.includes("call") || lower.includes("mobile")) return <Phone className="w-5 h-5" />;
  if (lower.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
  if (lower.includes("github") || lower.includes("git")) return <Github className="w-5 h-5" />;
  if (lower.includes("twitter") || lower.includes("x.com")) return <Twitter className="w-5 h-5" />;
  return <Globe className="w-5 h-5" />;
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
