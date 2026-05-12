import ScrollReveal from '../components/ScrollReveal';

const visions = [
  {
    borderColor: '#F0ECE4',
    title: 'Awareness is not a feature. It is a layer.',
    body: "Intelligence without awareness is just computation. The Singularity provides the layer that gives your AI genuine depth, intuition, and proactive foresight.",
  },
  {
    borderColor: '#e85d2b',
    title: 'Moving from Memory to Soul.',
    body: "Most AI assistants exist only in the 'now.' We move from session-based memory to a longitudinal narrative arc that remembers the person, not just the data.",
  },
  {
    borderColor: '#3d9bc0',
    title: 'Zero-Dependency, Production-Tested.',
    body: "Every module ships with no external dependencies. Developed inside production environments first—a module only ships once it's proven in real use.",
  },
  {
    borderColor: '#c9a84c',
    title: 'Open Ecosystem.',
    body: 'Apache 2.0 license. Free to use, modify, and distribute. No waitlists, no frameworks, just high-quality awareness modules for any AI pipeline.',
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">09 / VISION</p>

          <h2 className="font-display-section text-text-primary mb-12">
            The Singularity is the convergence of Soul, Mind, and Body.
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
