import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Intelligence Stones', href: '#stones' },
  { label: 'VIGIL (The Body)', href: '#vigil' },
  { label: 'Ecosystem', href: '#relationship' },
  { label: 'Vision', href: '#vision' },
  { label: 'GitHub', href: 'https://github.com/codedbyOzzy/THESingularity', external: true },
];

interface NavigationProps {
  onGetStarted?: () => void;
}

export default function Navigation({ onGetStarted }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    return () => triggers.forEach((t) => t?.kill());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? 'bg-surface-void/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="font-mono text-sm font-medium tracking-[4px] uppercase text-text-primary hover:text-accent-ember transition-colors">
          SINGULARITY
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={(e) => handleNavClick(e, link.href, link.external)}
              className={`font-label text-[10px] tracking-widest uppercase transition-colors ${
                isActive(link.href) ? 'text-accent-stone' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button onClick={onGetStarted} className="ml-4 px-5 py-2 bg-text-primary text-surface-void rounded-full font-label text-[10px] tracking-widest uppercase hover:brightness-110 transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-text-primary p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-surface-void/98 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <button className="absolute top-6 right-6 text-text-primary p-2" onClick={() => setMobileOpen(false)}>
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            onClick={(e) => handleNavClick(e, link.href, link.external)}
            className={`font-display text-2xl tracking-tighter transition-colors ${
              isActive(link.href) ? 'text-accent-stone' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {link.label}
          </a>
        ))}
        <button onClick={() => { onGetStarted?.(); setMobileOpen(false); }} className="mt-8 px-8 py-4 bg-accent-stone text-surface-void rounded-full font-label text-xs tracking-widest uppercase hover:brightness-110 transition-all">
          Get Started
        </button>
      </div>
    </>
  );
}
