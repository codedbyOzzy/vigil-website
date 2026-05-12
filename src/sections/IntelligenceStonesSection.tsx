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
      'The "Voice" of the AI. Observes every conversation turn to build a quantified model of communication style. Verbosity, technical depth, and tone bias are all tracked to ensure the AI speaks your language, not just at you.',
    image: '/images/stone-mind.jpg',
  },
  {
    emoji: '🔊',
    name: 'Echo Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHETHER',
    learnsText: 'the user understood',
    description:
      "The 'Clarity' engine. Detects confusion patterns and cognitive overload. Knows the difference between a polite 'got it' and genuine understanding. If an explanation isn't landing, Echo Stone flags the breakdown.",
    image: '/images/stone-echo.jpg',
  },
  {
    emoji: '🔗',
    name: 'Bond Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHO',
    learnsText: 'the user is',
    description:
      "The 'Persistence' layer. Builds a long-term model of your stack, your constraints, and your world. Remembers the 'context' of who you are across every session without requiring repetitive manual instruction.",
    image: '/images/stone-bond.jpg',
  },
  {
    emoji: '🔮',
    name: 'Intuition Stone',
    version: 'v1.1.0',
    learnsKeyword: 'WHERE',
    learnsText: 'the conversation is going',
    description:
      "The 'Foresight' engine. Learns the shape of your workflows. Predicts where a conversation is headed before you finish the turn, ensuring the AI is always preparing for the next logical step in your project.",
    image: '/images/stone-intuition.jpg',
  },
];

export default function IntelligenceStonesSection() {
  return (
    <section id="stones" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">02 / THE MIND LAYER</p>

          <h2 className="font-display-section text-text-primary">Intelligence Stones</h2>
          <p className="font-label text-accent-stone mt-2">SOUL: EXPRESSION & IDENTITY</p>

          <p className="font-body-large text-text-secondary italic mt-4 mb-16">
            "How does the assistant speak to this user?" — These stones define the persona, clarity, and persistence of the AI's interaction model.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stones.map((stone, i) => (
            <ScrollReveal key={stone.name} delay={i * 0.15}>
              <StoneCard {...stone} />
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison sub-text */}
        <ScrollReveal className="mt-20">
          <div className="text-center p-8 rounded-2xl border border-white/5 bg-surface-raised/30">
            <p className="font-body text-text-dim max-w-2xl mx-auto">
              While <strong>Intelligence Stones</strong> focus on <em>how</em> the assistant communicates, the <strong>Awareness Layer (VIGIL)</strong> focuses on <em>what</em> the user is trying to achieve. Together, they create a complete AI partner.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
