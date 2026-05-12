import { ArrowRight, Github, Terminal } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-stone/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-stone/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-stone/10 border border-accent-stone/20">
              <span className="w-2 h-2 rounded-full bg-accent-stone animate-pulse" />
              <span className="font-label text-[10px] uppercase tracking-[2px] text-accent-stone">The Singularity v1.0 Stable</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-text-primary">
              The Awareness Layer for AI Assistants
            </h1>

            <p className="font-body-large text-text-secondary max-w-[500px] leading-relaxed">
              What if your AI assistant could notice things — without being asked? 
              <br /><br />
              The Singularity is an open-source awareness ecosystem that gives AI genuine depth, intuition, and proactive intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button 
                onClick={onGetStarted}
                className="group flex items-center gap-3 px-8 py-4 bg-accent-stone text-[#0A0A0B] rounded-lg font-label text-xs uppercase tracking-[2px] hover:brightness-110 transition-all shadow-xl shadow-accent-stone/10"
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="https://github.com/codedbyOzzy/THESingularity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-surface-raised border border-[rgba(240,236,228,0.1)] text-text-primary rounded-lg font-label text-xs uppercase tracking-[2px] hover:bg-surface-void transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col">
                <span className="font-display text-2xl text-text-primary">8</span>
                <span className="font-label text-[10px] text-text-dim uppercase tracking-widest">Active Modules</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-display text-2xl text-text-primary">0</span>
                <span className="font-label text-[10px] text-text-dim uppercase tracking-widest">Dependencies</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col text-accent-stone">
                <span className="font-display text-2xl tracking-tighter">Ω</span>
                <span className="font-label text-[10px] uppercase tracking-widest">Singularity</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-stone/20 to-accent-stone/5 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-8 bg-surface-void border border-[rgba(240,236,228,0.08)] rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <Terminal size={20} className="text-accent-stone" />
                <span className="font-mono text-xs text-text-dim">system_awareness.py</span>
              </div>
              <pre className="font-mono text-[13px] leading-relaxed text-text-secondary overflow-x-auto">
                <code className="block whitespace-pre">
                  {`# The Convergence Layer
from the_singularity import Oracle, Spectre, Archive

oracle = Oracle()  # Which model?
spectre = Spectre() # What's next?
archive = Archive() # How did it feel?

# Awareness injection
context = arc.consult(user_msg)
system_prompt += f"\\n\\n{context}"`}
                </code>
              </pre>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-raised/50 border border-white/5">
                  <p className="font-label text-[10px] text-accent-stone uppercase mb-1">State</p>
                  <p className="text-xs text-text-primary">Proactive Intelligence</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-raised/50 border border-white/5">
                  <p className="font-label text-[10px] text-accent-stone uppercase mb-1">Sync</p>
                  <p className="text-xs text-text-primary">Ecosystem Stable</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
