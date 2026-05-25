const FooterBar = ({ profileName, firstName }) => (
  <footer className="mt-24 border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
    <p>© {new Date().getFullYear()} {profileName || "Horizon Portfolio"}. All rights reserved.</p>
    <p className="font-mono">Designed with {firstName}</p>
  </footer>
);

export default FooterBar;
