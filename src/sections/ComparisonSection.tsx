import ScrollReveal from '../components/ScrollReveal';
import { Check, X, Shield, Zap, Database } from 'lucide-react';

const comparisonData = [
  { feature: 'Core Strategy', before: 'Reactive Response', after: 'Proactive Intelligence', status: true },
  { feature: 'Model Selection', before: 'Fixed Overkill', after: 'Oracle Routing (v1.0)', status: true },
  { feature: 'Context Flow', before: 'Stateless Snips', after: 'Narrative Arcs (v1.0)', status: true },
  { feature: 'User Awareness', before: 'Zero Behavioral Data', after: 'Real-time State (v1.0)', status: true },
  { feature: 'Memory Depth', before: 'Simple Chat Logs', after: 'Longitudinal Archive (v1.0)', status: true },
  { feature: 'System Cost', before: 'High/Linear', after: '40% Optimized (Oracle)', status: true },
];

const ecosystemPillars = [
  {
    icon: <Zap className="text-accent-stone" />,
    title: 'Model Autonomy',
    description: 'Oracle automatically selects the right brain for the right query. No more wasting GPT-4 on "hello".',
  },
  {
    icon: <Shield className="text-accent-stone" />,
    title: 'Proactive Synthesis',
    description: 'Spectre anticipates the next turn before the user speaks, synthesizing persona data with narrative trajectory.',
  },
  {
    icon: <Database className="text-accent-stone" />,
    title: 'Emotional Legacy',
    description: 'Archive builds a profile across months, tracking emotional signatures and long-term behavioral trends.',
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
              Beyond simple chat. The Singularity moves AI from a reactive tool to a proactive partner.
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

          {/* Right: Ecosystem Pillars */}
          <div className="space-y-12">
            <ScrollReveal delay={0.2}>
              <h2 className="font-display-section text-text-primary mb-8">Ecosystem v1.0</h2>
              <div className="space-y-8">
                {ecosystemPillars.map((feat, i) => (
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
