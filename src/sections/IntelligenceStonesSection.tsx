import ScrollReveal from '../components/ScrollReveal';
import StoneCard from '../components/StoneCard';

const stones = [
  {
    emoji: '🧠',
    name: 'Mind Stone',
    version: 'v1.3.0',
    learnsKeyword: 'HOW',
    learnsText: 'the user communicates',
    description:
      'Observes every conversation turn and builds a quantified model of how a user communicates. verbosity, tech_depth, example_bias, follow_up_rate — all tracked via EMA updates. Generates a short style directive injected into the system prompt, shaping tone, depth, and format without the user ever configuring anything.',
    image: '/images/stone-mind.jpg',
  },
  {
    emoji: '🔊',
    name: 'Echo Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHETHER',
    learnsText: 'the user actually understood',
    description:
      "Detects false confirmations, confusion patterns, and cognitive overload. Knows the difference between 'got it' and 'got it' (but didn't). If the user asks the same thing three turns ago, Echo Stone flags that the explanation isn't landing.",
    image: '/images/stone-echo.jpg',
  },
  {
    emoji: '🔗',
    name: 'Bond Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHO',
    learnsText: 'the user is',
    description:
      "Builds a persistent model of your world across sessions. Remembers without being told to remember. Your projects, your stack, your constraints, your people. When you say 'the usual setup' or 'that API problem', Bond Stone knows what you mean.",
    image: '/images/stone-bond.jpg',
  },
  {
    emoji: '🔮',
    name: 'Intuition Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHERE',
    learnsText: 'the conversation is going',
    description:
      "Learns the shape of conversations. Knows where this is going before you finish asking. When you've seen this pattern before and you'll need X next, Intuition Stone is already preparing the answer you haven't asked yet.",
    image: '/images/stone-intuition.jpg',
  },
];

export default function IntelligenceStonesSection() {
  return (
    <section id="stones" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">02 / COGNITIVE FOUNDATION</p>

          <h2 className="font-display-section text-text-primary">Intelligence Stones</h2>

          <p className="font-body-large text-text-secondary italic mt-4 mb-16">
            Most AI assistants know what to say. These teach them how to say it — and whether it actually landed.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stones.map((stone, i) => (
            <ScrollReveal key={stone.name} delay={i * 0.15}>
              <StoneCard {...stone} />
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture diagram */}
        <ScrollReveal className="mt-20">
          <div className="bg-surface-raised border border-[rgba(240,236,228,0.06)] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-label text-text-dim mb-3">Layer 1 — Expression</p>
                <p className="font-code text-text-primary text-sm">
                  Mind Stone + Echo Stone
                </p>
              </div>
              <div className="text-center">
                <p className="font-label text-text-dim mb-3">Layer 2 — Context</p>
                <p className="font-code text-text-primary text-sm">
                  Bond Stone
                </p>
              </div>
              <div className="text-center">
                <p className="font-label text-text-dim mb-3">Layer 3 — Prediction</p>
                <p className="font-code text-text-primary text-sm">
                  Intuition Stone
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
