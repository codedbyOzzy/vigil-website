import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, Github } from 'lucide-react';
import EmberCanvas from '../components/EmberCanvas';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitle2Ref = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to(subtitle2Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1');

    return () => { tl.kill(); };
  }, []);

  const handleExplore = () => {
    const el = document.getElementById('stones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-surface-void"
    >
      <EmberCanvas />

      {/* Fallback background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-[1]"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />

      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6">
        <p
          ref={subtitleRef}
          className="font-label text-accent-ember mb-6 opacity-0 translate-y-4"
        >
          THE AWARENESS LAYER
        </p>

        <h1 ref={titleRef} className="font-display-hero text-text-primary text-6xl md:text-8xl opacity-0 translate-y-4 tracking-tight">
          THE SINGULARITY
        </h1>
        <p className="font-display-subsection text-text-secondary mt-4 opacity-0 translate-y-4 tracking-[0.2em] uppercase text-sm" ref={subtitle2Ref}>
          The Unified Intelligence Ecosystem
        </p>

        <p className="font-body-large text-text-secondary italic mt-8 opacity-0 translate-y-4 max-w-2xl mx-auto" ref={taglineRef}>
          Stones for Intuition. VIGIL for Action.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 opacity-0 translate-y-4">
          <button
            onClick={handleExplore}
            className="px-10 py-4 bg-accent-ember text-white font-label rounded-full hover:bg-[#f0703a] hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore the Ecosystem
          </button>
          <a
            href="https://github.com/codedbyOzzy/ProjectVIGIL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 border border-[rgba(240,236,228,0.15)] text-text-primary font-label rounded-full hover:bg-text-primary hover:text-surface-void hover:border-transparent transition-all duration-200"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 translate-y-4 z-10"
      >
        <ChevronDown size={20} className="text-text-dim animate-scroll-bounce" />
        <span className="font-label text-text-dim">Scroll</span>
      </div>
    </section>
  );
}
