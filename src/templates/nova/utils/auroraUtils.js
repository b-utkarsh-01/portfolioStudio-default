export const getStage = (stages, kind, defaultTitle) => {
  const s = (Array.isArray(stages) ? stages : []).find((x) => x?.id === kind);
  return { enabled: s?.enabled !== false, title: s?.title || defaultTitle };
};

export const getTopSkills = (skills) => {
  if (!skills) return [];
  if (Array.isArray(skills)) {
    return skills
      .map((item) => (typeof item === "string" ? item : item?.name))
      .filter(Boolean)
      .slice(0, 14);
  }
  if (typeof skills === "object") {
    return Object.values(skills).flat().filter(Boolean).slice(0, 14);
  }
  return [];
};

export const getContactIcon = (type = "") => {
  const t = type.toLowerCase();
  if (t.includes("github")) return "◆";
  if (t.includes("linkedin")) return "◈";
  if (t.includes("twitter") || t.includes("x")) return "◇";
  if (t.includes("email") || t.includes("mail")) return "✉";
  if (t.includes("phone") || t.includes("tel")) return "◉";
  if (t.includes("website") || t.includes("portfolio")) return "◎";
  return "○";
};
