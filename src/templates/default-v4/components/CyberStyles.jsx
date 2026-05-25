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
  `}</style>
);

export default CyberStyles;
