import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Intelligence Stones', href: '#stones' },
  { label: 'VIGIL (The Body)', href: '#vigil' },
  { label: 'Singularity Ecosystem', href: '#relationship' },
  { label: 'Vision', href: '#vision' },
  { label: 'Documentation', href: '/docs', isRouterLink: true },
  { label: 'GitHub', href: 'https://github.com/codedbyOzzy/ProjectVIGIL', external: true },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'stones', 'architecture', 'vigil', 'integration', 'relationship', 'friday', 'roadmap', 'vision', 'cta'];

    const triggers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean, isRouterLink?: boolean) => {
    if (external || isRouterLink) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const isActive = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? 'bg-surface-void/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-mono text-sm font-medium tracking-[4px] uppercase text-text-primary hover:text-accent-ember transition-colors duration-200"
        >
          SINGULARITY
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRouterLink ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-body-small transition-colors duration-200 text-text-secondary hover:text-text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className={`font-body-small transition-colors duration-200 relative pb-1 ${
                  isActive(link.href)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-ember" />
                )}
              </a>
            )
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-surface-deep flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-text-primary p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleNavClick(e, link.href, link.external)}
                className="font-heading-card text-text-primary hover:text-accent-ember transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
