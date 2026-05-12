import { Cpu, Eye, Archive } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const futureModules = [
  {
    id: 'oracle',
    title: 'ORACLE',
    subtitle: 'Intelligent Model Router — v1.0 Stable',
    description: 'Dynamic turn-by-turn model selection. Oracle analyzes query complexity and topic depth to route requests to the most efficient LLM—optimizing for speed, cost, and quality simultaneously.',
    icon: Cpu,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    tags: ['Cost Efficiency', 'Logic Depth', 'Auto-Routing']
  },
  {
    id: 'spectre',
    title: 'SPECTRE',
    subtitle: 'Proactive Context Synthesizer — v1.0 Stable',
    description: 'The end of reactive AI. Spectre anticipates the user’s next logical step by synthesizing existing conversation arcs and persona patterns, preparing the context before the question is even asked.',
    icon: Eye,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    tags: ['Prediction', 'Proactivity', 'Intuition']
  },
  {
    id: 'archive',
    title: 'ARCHIVE',
    subtitle: 'Longitudinal User Memory — v1.0 Stable',
    description: 'Beyond session-based history. Archive builds a hierarchical, emotional profile of the user across months and years, remembering not just data, but how the interaction felt.',
    icon: Archive,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20',
    tags: ['Eternal Memory', 'Emotional Signature', 'Legacy']
  }
];

export default function EvolutionSection() {
  return (
    <section id="evolution" className="py-24 px-6 relative overflow-hidden bg-surface-void">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-display-section text-text-primary mb-4">The Evolution Complete</h2>
            <p className="font-body-large text-text-secondary max-w-2xl mx-auto italic">
              "We have moved from reactive awareness toward proactive intelligence. The Singularity is now fully operational."
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {futureModules.map((module, index) => (
            <ScrollReveal key={module.id} delay={index * 0.2}>
              <div className={`relative group p-8 rounded-2xl border ${module.border} ${module.bg} backdrop-blur-sm hover:-translate-y-2 transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-xl ${module.bg} border ${module.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <module.icon className={`w-7 h-7 ${module.color}`} />
                </div>

                <h3 className="font-display text-2xl text-text-primary mb-1">{module.title}</h3>
                <p className={`font-label text-[10px] uppercase tracking-widest ${module.color} mb-4`}>{module.subtitle}</p>
                
                <p className="font-body-small text-text-secondary leading-relaxed mb-6">
                  {module.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {module.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-void/50 border border-white/5 text-[9px] font-label text-text-dim uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 rounded bg-accent-stone/10 border border-accent-stone/20 text-[8px] font-label text-accent-stone uppercase tracking-tighter">
                    v1.0 Stable
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-surface-deep/30 text-center">
            <p className="font-body-small text-text-dim max-w-3xl mx-auto">
              The <strong>Singularity v1.0 Ecosystem</strong> is now complete. By integrating narrative soul, intelligence routing, and real-time awareness, we have created the most advanced open-source awareness layer for AI assistants.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
