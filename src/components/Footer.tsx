export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-deep pt-20 pb-12 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-label text-text-primary tracking-[4px]">THE SINGULARITY</span>
            <p className="font-body-small text-text-dim mt-3">
              The Awareness Ecosystem for AI Assistants
            </p>
            <p className="font-body-small text-text-dim mt-1">
              Powered by Intelligence Stones & VIGIL
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label text-text-dim mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Intelligence Stones', href: '#stones' },
                { label: 'VIGIL (The Body)', href: '#vigil' },
                { label: 'The Singularity', href: '#relationship' },
                { label: 'Roadmap', href: '#roadmap' },
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
            <p className="font-label text-text-dim mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/codedbyOzzy/ProjectVIGIL"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                ProjectVIGIL on GitHub
              </a>
              <a
                href="https://github.com/codedbyOzzy/Intelligence-Stones"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Intelligence-Stones on GitHub
              </a>
              <a
                href="https://github.com/codedbyOzzy/ProjectFridaySynapse"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                FRIDAY Synapse
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(240,236,228,0.06)] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-body-small text-text-dim">Apache 2.0 License</span>
          <span className="font-body-small text-text-dim">2026 The Singularity Project</span>
        </div>
      </div>
    </footer>
  );
}
