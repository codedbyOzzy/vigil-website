import ScrollReveal from '../components/ScrollReveal';

const visions = [
  {
    borderColor: '#e85d2b',
    title: 'The future of AI is not bigger models.',
    body: "It's assistants that understand context, respect uncertainty, and adapt to the human in front of them. Intelligence that notices rather than just responds.",
  },
  {
    borderColor: '#6b8f71',
    title: 'Open source, zero-dependency, framework-agnostic.',
    body: "Every module in VIGIL and every Stone ships with no external dependencies. JSON-based persistence — no database required. Language-configurable signal sets. Apache 2.0 license — free for commercial use.",
  },
  {
    borderColor: '#3d9bc0',
    title: 'Built in production, not in theory.',
    body: 'VIGIL modules are developed inside FRIDAY Synapse first — a production AI assistant running daily. A module ships only after it\'s proven in real use.',
  },
  {
    borderColor: '#c9a84c',
    title: "What won't change.",
    body: 'Zero external dependencies per module. JSON-based persistence. Language-configurable signal sets. Apache 2.0 license. Just commits — no newsletter, no Discord, no waitlist.',
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-ember mb-6">09 / VISION</p>

          <h2 className="font-display-section text-text-primary mb-12">
            A Good Assistant Doesn't Wait to Be Told Everything. It Pays Attention.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {visions.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div
                className="pl-6"
                style={{ borderLeft: `4px solid ${v.borderColor}` }}
              >
                <p className="font-body-large text-text-primary">{v.title}</p>
                <p className="font-body text-text-secondary mt-3">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
