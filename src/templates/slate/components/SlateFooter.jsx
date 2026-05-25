const SlateFooter = ({ profileName }) => (
  <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono-brutalist text-slate-500 py-8 border-t border-neutral-800">
    <p>© {new Date().getFullYear()} {profileName || "Portfolio"}. All rights reserved.</p>
    <p className="tracking-wider uppercase">Portfolio / {new Date().getFullYear()}</p>
  </footer>
);

export default SlateFooter;
