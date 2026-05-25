const AuroraStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    .aurora-root {
      font-family: 'Inter', sans-serif;
    }

    .aurora-serif {
      font-family: 'Playfair Display', serif;
    }

    .aurora-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    /* Aurora orbs */
    @keyframes aurora-drift-1 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
      33% { transform: translate(60px, -40px) scale(1.1); opacity: 0.5; }
      66% { transform: translate(-30px, 30px) scale(0.9); opacity: 0.8; }
    }
    @keyframes aurora-drift-2 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
      33% { transform: translate(-80px, 50px) scale(1.15); opacity: 0.4; }
      66% { transform: translate(50px, -60px) scale(0.85); opacity: 0.7; }
    }
    @keyframes aurora-drift-3 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
      50% { transform: translate(40px, 70px) scale(1.2); opacity: 0.3; }
    }

    .aurora-orb-1 { animation: aurora-drift-1 18s ease-in-out infinite; }
    .aurora-orb-2 { animation: aurora-drift-2 24s ease-in-out infinite; }
    .aurora-orb-3 { animation: aurora-drift-3 15s ease-in-out infinite; }

    /* Reveal animations */
    @keyframes aurora-fade-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes aurora-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes aurora-slide-right {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .aurora-anim-1 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
    .aurora-anim-2 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
    .aurora-anim-3 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; }
    .aurora-anim-4 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
    .aurora-anim-5 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both; }
    .aurora-anim-6 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }

    /* Cards */
    .aurora-card {
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 20px;
      backdrop-filter: blur(8px);
      transition: background 0.4s ease, border-color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease;
    }
    .aurora-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(245, 158, 11, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,158,11,0.08);
    }

    /* Divider */
    .aurora-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, #f59e0b, #fb923c, transparent);
      border-radius: 2px;
    }

    /* Skill pill */
    .aurora-skill {
      padding: 6px 14px;
      border-radius: 100px;
      border: 1px solid rgba(245, 158, 11, 0.2);
      background: rgba(245, 158, 11, 0.06);
      font-size: 11px;
      font-weight: 500;
      color: #fcd34d;
      transition: background 0.3s, border-color 0.3s, transform 0.2s;
      cursor: default;
      display: inline-block;
    }
    .aurora-skill:hover {
      background: rgba(245, 158, 11, 0.14);
      border-color: rgba(245, 158, 11, 0.4);
      transform: translateY(-1px);
    }

    /* Section label */
    .aurora-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #f59e0b;
      opacity: 0.8;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Timeline dot */
    .aurora-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #f59e0b;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
      flex-shrink: 0;
      margin-top: 5px;
    }

    /* Link button */
    .aurora-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #f59e0b;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.2s;
    }
    .aurora-link:hover { opacity: 0.75; transform: translateX(3px); }

    /* Contact item */
    .aurora-contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.05);
      text-decoration: none;
      transition: background 0.3s, border-color 0.3s;
    }
    .aurora-contact-item:hover {
      background: rgba(245, 158, 11, 0.06);
      border-color: rgba(245, 158, 11, 0.2);
    }

    /* Gradient text */
    .aurora-gradient-text {
      background: linear-gradient(135deg, #fbbf24, #fb923c, #f87171);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Section heading line */
    .aurora-section-heading {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    /* Project card hover */
    .aurora-project-card {
      padding: 20px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.05);
      background: rgba(255,255,255,0.015);
      transition: all 0.3s ease;
      cursor: default;
    }
    .aurora-project-card:hover {
      border-color: rgba(245,158,11,0.2);
      background: rgba(245,158,11,0.04);
      transform: translateY(-2px);
    }

    /* Scroll-reveal for sections */
    .aurora-section {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .aurora-section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Mouse glow */
    .aurora-mouse-glow {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0;
      width: 600px; height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.2s ease-out, top 0.2s ease-out;
      z-index: 1;
    }

    /* Testimonial quote */
    .aurora-quote::before {
      content: '"';
      font-family: 'Playfair Display', serif;
      font-size: 4rem;
      color: #f59e0b;
      opacity: 0.3;
      line-height: 0;
      position: relative;
      top: 20px;
      margin-right: 4px;
    }

    /* Number accent */
    .aurora-number {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      font-weight: 900;
      color: rgba(245,158,11,0.15);
      line-height: 1;
      position: absolute;
      top: 16px;
      right: 20px;
    }
  `}</style>
);

export default AuroraStyles;
