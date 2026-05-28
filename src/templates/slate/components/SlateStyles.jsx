const SlateStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    .font-serif-brutalist { font-family: 'Instrument Serif', Georgia, serif; }
    .font-mono-brutalist { font-family: 'Space Mono', Courier, monospace; }
    .slate-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(208, 178, 132, 0.8) rgba(12, 12, 14, 0.95);
    }
    .slate-scrollbar::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .slate-scrollbar::-webkit-scrollbar-track {
      background: rgba(10, 10, 12, 0.95);
      border-left: 1px solid rgba(208, 178, 132, 0.14);
    }
    .slate-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(224, 196, 154, 0.95), rgba(161, 124, 74, 0.95));
      border-radius: 999px;
      border: 2px solid rgba(10, 10, 12, 0.95);
    }
    .slate-scrollbar::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(239, 216, 181, 1), rgba(183, 139, 79, 1));
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
);

export default SlateStyles;
