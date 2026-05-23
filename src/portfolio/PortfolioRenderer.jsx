import { defaultTemplates } from "../default.templates";

const getDefaultTemplateById = (templateId) =>
  defaultTemplates.find((template) => template.id === templateId) || defaultTemplates[0];

const DefaultPortfolioRenderer = ({ templateId = "default-v1", data }) => {
  const template = getDefaultTemplateById(templateId);

  if (typeof template?.render === "function") {
    const RenderComponent = template.render;
    return <RenderComponent data={data} />;
  }

  return null;
};

export default DefaultPortfolioRenderer;
