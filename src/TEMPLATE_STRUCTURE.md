# Default Templates Structure

Each default template must live in its own folder under:

`src/templates/<template-id>/`

## Current pattern

- `src/portfolio/PortfolioRenderer.jsx` (shared default renderer/orchestrator)
- `src/templates/horizon/default-horizon.template.js`
- `src/templates/slate/default-slate.template.js`
- `src/templates/nova/default-nova.template.js`
- `src/templates/default-v4/template.js`
- `src/templates/default-v4/DefaultNeutralPortfolio.jsx`

## Add a new default template

1. Create a new folder:
- `src/templates/default-v5/`

2. Add template files inside that folder (at minimum `template.js`).

3. Export it from:
- `src/index.js`
- `src/default.templates.js`

4. Keep template id unique (example: `default-v5`).

5. If renderer behavior needs template-specific switching, update:
- `src/portfolio/PortfolioRenderer.jsx`
