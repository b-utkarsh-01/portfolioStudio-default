import { defaultTemplates } from "../default.templates";

const getDefaultTemplateById = (templateId) =>
  defaultTemplates.find((template) => template.id === templateId) || defaultTemplates[0];

const DefaultPortfolioRenderer = ({ templateId = "default-horizon", data }) => {
  const template = getDefaultTemplateById(templateId);

  if (typeof template?.render === "function") {
    const RenderComponent = template.render;
    return (
      <div className="template-safe-text">
        <style>{`
          .template-safe-text p,
          .template-safe-text h1,
          .template-safe-text h2,
          .template-safe-text h3,
          .template-safe-text h4,
          .template-safe-text h5,
          .template-safe-text h6,
          .template-safe-text span,
          .template-safe-text li,
          .template-safe-text a,
          .template-safe-text blockquote {
            overflow-wrap: anywhere;
            word-break: break-word;
            max-width: 100%;
          }
        `}</style>
        <RenderComponent data={data} />
      </div>
    );
  }

  return null;
};

export default DefaultPortfolioRenderer;
