import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, stagger = 0.1, delay = 0, className = '' }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const childrenEls = el.children;
    if (childrenEls.length === 0) return;

    gsap.set(childrenEls, { opacity: 0, y: 40 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(childrenEls, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: 'power2.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stagger, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
