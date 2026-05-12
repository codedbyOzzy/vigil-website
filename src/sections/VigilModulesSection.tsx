import ScrollReveal from '../components/ScrollReveal';
import ModuleCard from '../components/ModuleCard';

const modules = [
  {
    emoji: '🏛️',
    name: 'THE ARC — Narrative Architecture',
    status: 'done' as const,
    quote: "Conversations have arcs. THE ARC tracks the story.",
    description: 'The backbone of long-term continuity. It detects definitive decisions, tracks unresolved "ghost threads," and manages the semantic decay of information to keep the AI focused on what truly matters.',
    image: '/images/vigil-arc.jpg',
  },
  {
    emoji: '🧠',
    name: 'ORACLE — Intelligent Model Router',
    status: 'done' as const,
    quote: "The right brain for the right task — automatically.",
    description: 'Dynamically selects the most efficient LLM for each turn based on query complexity, topic depth, and urgency. Optimizes for cost without sacrificing quality.',
    image: '/images/vigil-oracle.jpg',
  },
  {
    emoji: '🔮',
    name: 'SPECTRE — Proactive Predictor',
    status: 'done' as const,
    quote: "Anticipating the path before it's taken.",
    description: 'Synthesizes persona data with narrative trajectory to predict the user’s next logical step. Prepares the context before the question is even asked.',
    image: '/images/vigil-spectre.jpg',
  },
  {
    emoji: '📦',
    name: 'ARCHIVE — Longitudinal Memory',
    status: 'done' as const,
    quote: "Remembering the person, not just the data.",
    description: 'A hierarchical, emotional memory system that builds a profile of the user across months, tracking emotional signatures and long-term behavioral trends.',
    image: '/images/vigil-archive.jpg',
  },
  {
    emoji: '🔥',
    name: 'EMBER — Open Loop Tracker',
    status: 'done' as const,
    quote: "Some things don't close. EMBER keeps watching them.",
    description: 'Detects unresolved topics and recurring concerns. Each ember has a heat level that evolves dynamically: +0.20 on recurrence, -0.05 per day of silence.',
    image: '/images/vigil-ember.jpg',
  },
  {
    emoji: '🧭',
    name: 'COMPASS — Goal State Engine',
    status: 'done' as const,
    quote: 'You asked what. COMPASS knows why.',
    description: "Tracks the user's actual goal across multiple conversation turns — not the command they issued, but what they're genuinely trying to accomplish.",
    image: '/images/vigil-compass.jpg',
  },
  {
    emoji: '🌊',
    name: 'TIDE — Real-Time State Reader',
    status: 'done' as const,
    quote: "Detects energy, focus, and pace from behavioral signals.",
    description: "Reads the user's current cognitive and emotional state from message patterns — message length, response cadence, vocabulary complexity, time of day.",
    image: '/images/vigil-tide.jpg',
  },
  {
    emoji: '🪞',
    name: 'MIRROR — Self-Uncertainty Tracker',
    status: 'done' as const,
    quote: "Knowing what you don't know is the beginning of real intelligence.",
    description: 'Tracks where the AI assistant produces unreliable or inconsistent answers. Builds a confidence model to determine when the assistant should be honest about its uncertainty.',
    image: '/images/vigil-mirror.jpg',
  },
];

export default function VigilModulesSection() {
  return (
    <section id="vigil" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">04 / THE AWARENESS LAYER</p>

          <h2 className="font-display-section text-text-primary">Ecosystem Modules</h2>
          <p className="font-label text-accent-stone mt-2 italic">THE SINGULARITY: 8 INTERCONNECTED LAYERS</p>

          <p className="font-body-large text-text-secondary italic mt-4 mb-16">
            Not memory. Not personality. Not another chatbot wrapper. Something that lives between
            conversations. Beneath the words. Always watching. Always learning.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
