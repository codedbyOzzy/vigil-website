import ScrollReveal from '../components/ScrollReveal';
import ModuleCard from '../components/ModuleCard';

const modules = [
  {
    emoji: '🔥',
    name: 'EMBER — Open Loop Tracker',
    status: 'progress' as const,
    quote: "Some things don't close. EMBER keeps watching them.",
    description:
      'Detects unresolved topics, unfinished tasks, and recurring concerns across conversations. Each ember has a heat level — it glows brighter when related topics surface, fades when resolved, and surfaces proactively when it\'s been burning too long. Every unresolved topic creates an ember with a heat value (0.0-1.0) that evolves over time.',
    image: '/images/vigil-ember.jpg',
  },
  {
    emoji: '🧭',
    name: 'COMPASS — Goal State Engine',
    status: 'progress' as const,
    quote: 'You asked what. COMPASS knows why.',
    description:
      "Tracks the user's actual goal across multiple conversation turns — not the command they issued, but what they're genuinely trying to accomplish. A debugging session is different from a learning session, even when the words look the same. Multi-level abstraction from turn to session to project.",
    image: '/images/vigil-compass.jpg',
  },
  {
    emoji: '🌊',
    name: 'TIDE — Real-Time State Reader',
    status: 'progress' as const,
    description:
      "Reads the user's current cognitive and emotional state from behavioral signals — message length, response cadence, vocabulary complexity, time of day — and adjusts the assistant's output depth accordingly. Not long-term style learning. The current moment, right now. Maps signals to energy, focus, and pace profiles.",
    image: '/images/vigil-tide.jpg',
  },
  {
    emoji: '🪞',
    name: 'MIRROR — Self-Uncertainty Tracker',
    status: 'design' as const,
    quote: "Knowing what you don't know is the beginning of real intelligence.",
    description:
      'Tracks where the AI assistant produces unreliable, inconsistent, or later-corrected answers. Builds a confidence model: which domains, tools, and question types are trustworthy — and which warrant explicit uncertainty signals to the user. Genuine epistemic humility, calibrated empirically.',
    image: '/images/vigil-mirror.jpg',
  },
];

export default function VigilModulesSection() {
  return (
    <section id="vigil" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-ember mb-6">04 / THE AWARENESS LAYER</p>

          <h2 className="font-display-section text-text-primary">VIGIL</h2>

          <p className="font-body-large text-text-secondary italic mt-4 mb-16">
            Not memory. Not personality. Not another chatbot wrapper. Something that lives between
            conversations. Beneath the words. Always watching. Always learning.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.name} delay={i * 0.15}>
              <ModuleCard {...mod} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
