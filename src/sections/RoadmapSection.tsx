import ScrollReveal from '../components/ScrollReveal';

const modules = [
  { emoji: '🧠', name: 'ORACLE', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🔮', name: 'SPECTRE', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '📦', name: 'ARCHIVE', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🏛️', name: 'THE ARC', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🌊', name: 'TIDE', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🧭', name: 'COMPASS', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🔥', name: 'EMBER', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
  { emoji: '🪞', name: 'MIRROR', design: 'complete', implementation: 'complete', testing: 'complete', release: 'complete' },
];

function StatusCell({ status }: { status: string }) {
  if (status === 'complete') {
    return <span className="text-accent-stone text-lg">✅</span>;
  }
  if (status === 'progress') {
    return <span className="text-accent-stone text-lg">🔄</span>;
  }
  return <span className="text-text-dim text-lg">⏳</span>;
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">08 / THE EVOLUTION</p>

          <h2 className="font-display-section text-text-primary mb-4">The Convergence Roadmap</h2>

          <p className="font-body-large text-text-secondary italic mb-16">
            v1.0 Stable Ecosystem — All awareness layers are now fully operational and production-ready.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto border border-white/5 rounded-2xl bg-surface-raised/20">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[rgba(240,236,228,0.06)] bg-white/5">
                  <th className="font-label text-text-dim text-left py-4 px-6 uppercase tracking-widest text-[10px]">Module</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase tracking-widest text-[10px]">Design</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase tracking-widest text-[10px]">Core</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase tracking-widest text-[10px]">Tests</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase tracking-widest text-[10px]">v1.0</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod) => (
                  <tr
                    key={mod.name}
                    className="border-b border-[rgba(240,236,228,0.06)] hover:bg-[rgba(240,236,228,0.02)] transition-colors duration-200"
                  >
                    <td className="font-body text-text-primary py-4 px-6">
                      <span className="mr-3">{mod.emoji}</span>
                      <span className="font-display text-sm tracking-tight">{mod.name}</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <StatusCell status={mod.design} />
                    </td>
                    <td className="text-center py-4 px-6">
                      <StatusCell status={mod.implementation} />
                    </td>
                    <td className="text-center py-4 px-6">
                      <StatusCell status={mod.testing} />
                    </td>
                    <td className="text-center py-4 px-6">
                      <StatusCell status={mod.release} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center md:text-left">
          <p className="font-body text-text-secondary">
            <strong className="text-accent-stone">Milestone Reached:</strong> The Singularity Convergence Complete.
          </p>
          <p className="font-body-small text-text-dim mt-3 max-w-2xl">
            All 8 layers of awareness have been developed, stress-tested inside production environments, and unified into a single zero-dependency ecosystem. Future development will focus on <strong>Deep Narrative Synthesis</strong> and cross-session persistent state.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
