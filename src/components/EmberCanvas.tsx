import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  swayAmp: number;
  swayFreq: number;
  swayPhase: number;
}

export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 150 : 300;
    const MOUSE_RADIUS = 150;
    const MOUSE_FORCE = 2;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle(): Particle {
      if (!canvas) return {} as Particle;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2,
        speedY: -(0.2 + Math.random() * 0.4),
        speedX: 0,
        alpha: 0.3 + Math.random() * 0.6,
        baseAlpha: 0.3 + Math.random() * 0.6,
        pulseSpeed: 0.5 + Math.random() * 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
        swayAmp: 0.3 + Math.random() * 0.4,
        swayFreq: 0.005 + Math.random() * 0.01,
        swayPhase: Math.random() * Math.PI * 2,
      };
    }

    function initParticles() {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push(createParticle());
      }
    }

    function update(time: number) {
      if (!canvas) return;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Upward drift
        p.y += p.speedY;

        // Horizontal sway
        p.x += Math.sin(time * p.swayFreq + p.swayPhase) * p.swayAmp;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.x += (dx / dist) * force;
        }

        // Alpha pulse
        p.alpha = p.baseAlpha + Math.sin(time * 0.002 * p.pulseSpeed + p.pulseOffset) * 0.2;
        p.alpha = Math.max(0.1, Math.min(1, p.alpha));

        // Wrap around
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Glow halo
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(232, 93, 43, ${p.alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(232, 93, 43, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(232, 93, 43, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate(time: number) {
      if (!isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      update(time);
      draw();
      animFrameRef.current = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resize();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Visibility observer
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
