import { Server, Zap, Brain, Layers } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const layers = [
  {
    id: 'l1',
    name: 'ORACLE — Model Router',
    purpose: 'Which model to use for this query?',
    details: 'gpt-4.1-mini / gemini / llama routing',
    icon: Server,
    color: 'text-purple-400',
    border: 'border-purple-400/30'
  },
  {
    id: 'l2',
    name: 'SPECTRE — Proactive Predictor',
    purpose: 'What will the user ask next?',
    details: 'Inference + Trajectory + Persona fusion',
    icon: Zap,
    color: 'text-blue-400',
    border: 'border-blue-400/30'
  },
  {
    id: 'l3',
    name: 'ARCHIVE — Longitudinal Memory',
    purpose: 'How the user feels over long-term',
    details: 'Context preservation & emotional profiling',
    icon: Brain,
    color: 'text-indigo-400',
    border: 'border-indigo-400/30'
  },
  {
    id: 'l4',
    name: 'THE ARC — Narrative Tracker',
    purpose: 'Where this conversation has been',
    details: 'Decision detection & ghost thread tracking',
    icon: Layers,
    color: 'text-accent-stone',
    border: 'border-accent-stone/30'
  }
];

const stones = [
  { id: 's1', name: 'TideStone', purpose: 'Real-time user state' },
  { id: 's2', name: 'CompassStone', purpose: 'Goal & intent tracking' },
  { id: 's3', name: 'EmberStone', purpose: 'Recurring topic heat' },
  { id: 's4', name: 'MirrorStone', purpose: 'Assistant self-confidence' }
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-6 bg-surface-void relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display-section text-text-primary mb-4">The Convergence Architecture</h2>
            <p className="font-body-large text-text-secondary max-w-2xl mx-auto">
              A hierarchical awareness system designed to run alongside any LLM pipeline.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {layers.map((layer, index) => (
            <ScrollReveal key={layer.id} delay={index * 0.1}>
              <div className={`group p-6 rounded-xl bg-surface-raised/40 border ${layer.border} backdrop-blur-sm hover:bg-surface-raised/60 transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-surface-void border ${layer.border}`}>
                      <layer.icon className={`w-6 h-6 ${layer.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-text-primary">{layer.name}</h3>
                      <p className="font-label text-[10px] uppercase tracking-wider text-text-dim">{layer.purpose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-text-secondary opacity-60 italic">{layer.details}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Connective Line */}
          <div className="flex justify-center py-2">
            <div className="w-px h-8 bg-gradient-to-b from-accent-stone/50 to-transparent" />
          </div>

          {/* Stones Layer */}
          <ScrollReveal delay={0.5}>
            <div className="p-8 rounded-xl bg-surface-raised/40 border border-white/5 backdrop-blur-sm">
              <h4 className="font-label text-xs uppercase tracking-widest text-text-primary text-center mb-8">Intelligence Stones Foundation</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stones.map((stone) => (
                  <div key={stone.id} className="p-4 rounded-lg bg-surface-void border border-white/5 text-center group hover:border-accent-stone/30 transition-all">
                    <p className="font-display text-sm text-text-primary mb-1 group-hover:text-accent-stone transition-colors">{stone.name}</p>
                    <p className="text-[9px] font-label text-text-dim uppercase tracking-tighter leading-tight">{stone.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="flex justify-center pt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="p-6 rounded-2xl bg-accent-stone text-[#0A0A0B] shadow-2xl shadow-accent-stone/20 animate-pulse">
                <span className="font-label text-xs uppercase tracking-[4px] font-bold">Your AI Assistant</span>
              </div>
              <p className="font-body-small text-text-dim italic">"Colored by everything above"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
