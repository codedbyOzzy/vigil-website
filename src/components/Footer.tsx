export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-deep pt-20 pb-12 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-label text-text-primary tracking-[4px]">THE SINGULARITY</span>
            <p className="font-body-small text-text-dim mt-3 italic">
              "Remembering the person, not just the data."
            </p>
            <p className="font-body-small text-text-dim mt-4">
              The complete awareness layer for AI assistants. Zero dependencies. Open source. v1.0 Stable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label text-text-dim mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Intelligence Stones', href: '#stones' },
                { label: 'Ecosystem Modules', href: '#vigil' },
                { label: 'Convergence Architecture', href: '#architecture' },
                { label: 'Roadmap & Future', href: '#roadmap' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-label text-text-dim mb-4">Ecosystem</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/codedbyOzzy/THESingularity"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/codedbyOzzy/THESingularity/blob/master/INSTALLATION_GUIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Technical Blueprint
              </a>
              <a
                href="https://github.com/codedbyOzzy/THESingularity"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Project Manifesto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(240,236,228,0.06)] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-body-small text-text-dim">Apache 2.0 License — Open for all.</span>
          <span className="font-body-small text-text-dim">2026 The Singularity Ecosystem</span>
        </div>
      </div>
    </footer>
  );
}
