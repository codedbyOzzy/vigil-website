import ScrollReveal from '../components/ScrollReveal';
import { Check, X, Shield, Zap, Database } from 'lucide-react';

const comparisonData = [
  { feature: 'Architecture', before: 'Simple AI Chat', after: 'Multi-layered OS', status: true },
  { feature: 'Memory', before: 'Stateless / Volatile', after: 'Full Persistent Memory', status: true },
  { feature: 'Interaction', before: 'Reactive Only', after: 'Proactive + Reactive', status: true },
  { feature: 'Awareness', before: 'Instant Response', after: 'Long-term Story Tracking', status: true },
  { feature: 'Reliability', before: 'Crash-prone', after: 'Atomic Writes & Fallbacks', status: true },
  { feature: 'Intelligence', before: 'Single Provider', after: 'Multi-provider + Fallback', status: true },
];

const stabilityFeatures = [
  {
    icon: <Shield className="text-accent-stone" />,
    title: 'Atomic Write Protection',
    description: 'Every byte is written to a temporary file first. Friday ensures your memory is never corrupted, even during a power failure.',
  },
  {
    icon: <Zap className="text-accent-ember" />,
    title: 'Circuit Breaker Logic',
    description: 'If a provider or tool fails, the system automatically redirects traffic or enters a safe "Half-Open" state to prevent cascade failures.',
  },
  {
    icon: <Database className="text-accent-compass" />,
    title: 'Crash-Safe Logging',
    description: 'Append-only session logs with atomic rotation. Your conversation history is immutable and recovery-ready at all times.',
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-surface-void py-[120px] px-6 border-t border-[rgba(240,236,228,0.06)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Before vs After Table */}
          <ScrollReveal>
            <h2 className="font-display-section text-text-primary mb-8">The Transformation</h2>
            <p className="font-body-large text-text-secondary mb-12">
              Beyond simple chat. We are building a high-availability infrastructure for human-AI partnership.
            </p>
            
            <div className="bg-surface-raised rounded-2xl border border-[rgba(240,236,228,0.06)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[rgba(240,236,228,0.02)]">
                    <th className="p-4 font-label text-text-dim text-xs uppercase tracking-wider">Feature</th>
                    <th className="p-4 font-label text-text-dim text-xs uppercase tracking-wider">Traditional AI</th>
                    <th className="p-4 font-label text-accent-stone text-xs uppercase tracking-wider">The Singularity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(240,236,228,0.06)]">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-[rgba(240,236,228,0.01)] transition-colors">
                      <td className="p-4 font-body-small text-text-primary">{row.feature}</td>
                      <td className="p-4 font-body-small text-text-dim flex items-center gap-2">
                        <X size={14} className="text-red-500/50" /> {row.before}
                      </td>
                      <td className="p-4 font-body-small text-accent-stone flex items-center gap-2 font-medium">
                        <Check size={14} className="text-accent-stone" /> {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Right: Stability Features */}
          <div className="space-y-12">
            <ScrollReveal delay={0.2}>
              <h2 className="font-display-section text-text-primary mb-8">Built for Stability</h2>
              <div className="space-y-8">
                {stabilityFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 w-12 h-12 rounded-xl bg-surface-raised border border-[rgba(240,236,228,0.06)] flex items-center justify-center group-hover:border-accent-stone/30 transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="font-heading-card text-text-primary mb-2">{feat.title}</h3>
                      <p className="font-body-small text-text-secondary">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
