const AuroraStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

    .aurora-root {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #e2ded9;
    }

    .aurora-serif {
      font-family: 'Cormorant Garamond', serif;
    }

    .aurora-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    /* Scroll progress indicator */
    .chronicle-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 2px;
      background: linear-gradient(90deg, #c5a880, #e6dfd3, #c5a880);
      z-index: 9999;
      width: 0%;
      transition: width 0.1s ease-out;
    }

    /* Reveal animations */
    @keyframes aurora-fade-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes aurora-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .aurora-anim-1 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
    .aurora-anim-2 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
    .aurora-anim-3 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; }
    .aurora-anim-4 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
    .aurora-anim-5 { animation: aurora-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both; }

    /* Cards */
    .aurora-card {
      background: rgba(255, 255, 255, 0.012);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 12px;
      backdrop-filter: blur(12px);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .aurora-card:hover {
      background: rgba(197, 168, 128, 0.02);
      border-color: rgba(197, 168, 128, 0.25);
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(197, 168, 128, 0.05);
    }

    /* Divider */
    .aurora-divider {
      width: 40px;
      height: 1px;
      background: linear-gradient(90deg, #c5a880, rgba(197, 168, 128, 0.3), transparent);
    }

    /* Skill pill */
    .aurora-skill {
      padding: 5px 12px;
      border-radius: 4px;
      border: 1px solid rgba(197, 168, 128, 0.15);
      background: rgba(197, 168, 128, 0.04);
      font-size: 11px;
      font-weight: 400;
      color: #e6dfd3;
      transition: all 0.3s;
      cursor: default;
      display: inline-block;
    }
    .aurora-skill:hover {
      background: rgba(197, 168, 128, 0.08);
      border-color: rgba(197, 168, 128, 0.35);
      transform: translateY(-1px);
    }

    /* Section label */
    .aurora-label {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #c5a880;
      opacity: 0.9;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Timeline dot */
    .aurora-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #c5a880;
      box-shadow: 0 0 6px rgba(197, 168, 128, 0.4);
      flex-shrink: 0;
      margin-top: 6px;
    }

    /* Link button */
    .aurora-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #c5a880;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s;
    }
    .aurora-link:hover { opacity: 0.75; transform: translateX(2px); }

    /* Contact item */
    .aurora-contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.03);
      background: rgba(255,255,255,0.005);
      text-decoration: none;
      transition: all 0.3s;
    }
    .aurora-contact-item:hover {
      background: rgba(197, 168, 128, 0.04);
      border-color: rgba(197, 168, 128, 0.15);
    }

    /* Gradient text */
    .aurora-gradient-text {
      background: linear-gradient(135deg, #e6dfd3, #d4c5b9, #c5a880);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Section heading line */
    .aurora-section-heading {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }

    /* Project card hover */
    .aurora-project-card {
      padding: 18px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.03);
      background: rgba(255,255,255,0.005);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: default;
    }
    .aurora-project-card:hover {
      border-color: rgba(197,168,128,0.2);
      background: rgba(197,168,128,0.02);
      transform: translateY(-2px);
    }

    /* Scroll-reveal for sections */
    .aurora-section {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .aurora-section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Mouse glow spotlight */
    .aurora-mouse-glow {
      pointer-events: none;
      position: fixed;
      top: 0; left: 0;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(197,168,128,0.045) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: left 0.15s ease-out, top 0.15s ease-out;
      z-index: 1;
    }

    /* Testimonial quote */
    .aurora-quote::before {
      content: '“';
      font-family: 'Cormorant Garamond', serif;
      font-size: 3rem;
      color: #c5a880;
      opacity: 0.4;
      line-height: 0;
      position: relative;
      top: 15px;
      margin-right: 2px;
    }

    /* Number accent */
    .aurora-number {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      font-weight: 300;
      color: rgba(197,168,128,0.12);
      line-height: 1;
      position: absolute;
      top: 12px;
      right: 16px;
    }

    /* 3D Card Flip styling */
    .chronicle-flip-card {
      perspective: 1000px;
      width: 180px;
      height: 220px;
      cursor: pointer;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .chronicle-flip-card:hover,
    .chronicle-flip-card.flipped {
      transform: translateY(-6px) scale(1.03);
    }
    .chronicle-flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
      transform-style: preserve-3d;
    }
    .chronicle-flip-card:hover .chronicle-flip-card-inner,
    .chronicle-flip-card.flipped .chronicle-flip-card-inner {
      transform: rotateY(180deg);
    }
    .chronicle-flip-card-front, .chronicle-flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 12px;
      border: 1px solid rgba(197, 168, 128, 0.15);
      background: #111112;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      overflow: hidden;
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }
    .chronicle-flip-card:hover .chronicle-flip-card-front,
    .chronicle-flip-card.flipped .chronicle-flip-card-front {
      border-color: rgba(197, 168, 128, 0.35);
      box-shadow: 0 15px 35px rgba(197, 168, 128, 0.1);
    }
    .chronicle-flip-card-back {
      transform: rotateY(180deg);
      background: #161618;
      border-color: rgba(197, 168, 128, 0.2);
      padding: 16px;
    }
    .chronicle-flip-card:hover .chronicle-flip-card-back,
    .chronicle-flip-card.flipped .chronicle-flip-card-back {
      border-color: rgba(197, 168, 128, 0.55);
      box-shadow: 0 15px 35px rgba(197, 168, 128, 0.15);
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #080809;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(197, 168, 128, 0.15);
      border-radius: 4px;
      border: 2px solid #080809;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(197, 168, 128, 0.35);
    }
  `}</style>
);

export default AuroraStyles;
