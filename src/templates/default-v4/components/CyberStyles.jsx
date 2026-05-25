const CyberStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');

    .font-cyber-mono { font-family: 'Share Tech Mono', monospace; }
    .font-cyber-header { font-family: 'Orbitron', monospace; }

    .cyber-grid-bg {
      background-image:
        linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    @keyframes blob {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(30px,-50px) scale(1.1); }
      66% { transform: translate(-20px,20px) scale(0.9); }
    }
    @keyframes blob-delayed {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(-40px,30px) scale(1.05); }
      66% { transform: translate(25px,-30px) scale(0.95); }
    }
    .animate-blob { animation: blob 20s ease-in-out infinite; }
    .animate-blob-delayed { animation: blob-delayed 26s ease-in-out infinite; }

    .cyber-card {
      background: rgba(15,23,42,0.55);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 24px;
      backdrop-filter: blur(16px);
      transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    }
    .cyber-card:hover {
      border-color: rgba(6,182,212,0.2);
      background: rgba(15,23,42,0.7);
      box-shadow: 0 0 40px rgba(6,182,212,0.05), 0 20px 60px rgba(0,0,0,0.3);
    }

    .cyberglass-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(34, 211, 238, 1) rgba(6, 10, 18, 0.96);
    }
    .cyberglass-scrollbar::-webkit-scrollbar { width: 10px; height: 10px; }
    .cyberglass-scrollbar::-webkit-scrollbar-track {
      background: rgba(6, 10, 18, 0.96);
      border-radius: 999px;
      border: 1px solid rgba(34, 211, 238, 0.35);
    }
    .cyberglass-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(34, 211, 238, 1), rgba(217, 70, 239, 0.98));
      border-radius: 999px;
      border: 2px solid rgba(6, 10, 18, 0.96);
      box-shadow: 0 0 12px rgba(34, 211, 238, 0.45);
    }
    .cyberglass-scrollbar::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(125, 211, 252, 1), rgba(244, 114, 182, 1));
    }
  `}</style>
);

export default CyberStyles;
