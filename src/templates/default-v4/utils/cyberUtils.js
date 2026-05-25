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
