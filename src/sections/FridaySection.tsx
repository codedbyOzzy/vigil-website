import ScrollReveal from '../components/ScrollReveal';

const stats = [
  { number: '4', label: 'Stones Active', color: 'text-accent-stone' },
  { number: '4', label: 'VIGIL Modules', color: 'text-accent-ember' },
  { number: '\u221e', label: 'Conversations', color: 'text-accent-compass' },
];

export default function FridaySection() {
  return (
    <section id="friday" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-compass mb-6">07 / POWERED BY</p>

          <h2 className="font-display-section text-text-primary mb-8">FRIDAY Synapse</h2>

          <p className="font-body-large text-text-secondary">
            VIGIL is being actively developed as part of FRIDAY Synapse — a Windows-native AI desktop
            assistant with persistent memory, real voice interaction, and deep OS-level integration.
          </p>

          <p className="font-body-large text-text-secondary mt-6">
            Every VIGIL module is validated in production before release. Every Intelligence Stone is
            battle-tested inside FRIDAY Synapse on every conversation turn. You get battle-tested code,
            not theoretical design.
          </p>

          <p className="font-body-large text-text-secondary mt-6">
            FRIDAY Synapse runs the complete four-stone system on every conversation turn, forming the
            adaptive cognitive layer that makes the system feel different from a standard LLM wrapper.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <div className="flex flex-row justify-center gap-12 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`font-display-subsection ${stat.color}`}>{stat.number}</p>
                <p className="font-label text-text-dim mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
