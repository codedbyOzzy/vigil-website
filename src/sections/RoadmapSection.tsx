import ScrollReveal from '../components/ScrollReveal';

const modules = [
  { emoji: '🔥', name: 'EMBER', design: 'complete', implementation: 'progress', testing: 'planned', release: 'planned' },
  { emoji: '🧭', name: 'COMPASS', design: 'complete', implementation: 'progress', testing: 'planned', release: 'planned' },
  { emoji: '🌊', name: 'TIDE', design: 'complete', implementation: 'progress', testing: 'planned', release: 'planned' },
  { emoji: '🪞', name: 'MIRROR', design: 'complete', implementation: 'planned', testing: 'planned', release: 'planned' },
];

function StatusCell({ status }: { status: string }) {
  if (status === 'complete') {
    return <span className="text-accent-stone text-lg">✅</span>;
  }
  if (status === 'progress') {
    return <span className="text-accent-compass text-lg">🔄</span>;
  }
  return <span className="text-text-dim text-lg">⏳</span>;
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-compass mb-6">08 / ROADMAP</p>

          <h2 className="font-display-section text-text-primary mb-4">An Honest Roadmap</h2>

          <p className="font-body-large text-text-secondary italic mb-16">
            No hype, no inflated timelines. Real software, when it's ready.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[rgba(240,236,228,0.06)]">
                  <th className="font-label text-text-dim text-left py-4 px-6 uppercase">Module</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase">Design</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase">Implementation</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase">Testing</th>
                  <th className="font-label text-text-dim text-center py-4 px-6 uppercase">Release</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod) => (
                  <tr
                    key={mod.name}
                    className="border-b border-[rgba(240,236,228,0.06)] hover:bg-[rgba(240,236,228,0.02)] transition-colors duration-200"
                  >
                    <td className="font-body text-text-primary py-4 px-6">
                      <span className="mr-2">{mod.emoji}</span>
                      {mod.name}
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

        <ScrollReveal className="mt-12">
          <p className="font-body text-text-secondary">
            <strong className="text-text-primary">Release Order:</strong> EMBER → COMPASS → TIDE → MIRROR
          </p>
          <p className="font-body-small text-text-dim mt-3">
            Rationale: EMBER has the most immediate impact on conversation quality and is furthest along.
            MIRROR requires the most longitudinal data to be useful, so it ships last.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
