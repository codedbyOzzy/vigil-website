import ScrollReveal from '../components/ScrollReveal';

export default function RelationshipSection() {
  return (
    <section id="relationship" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-mirror mb-6">06 / THE RELATIONSHIP</p>

          <h2 className="font-display-section text-text-primary mb-12 text-center">
            Two Systems. One Complete Picture.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div
              className="bg-surface-rounded-2xl p-10 md:p-12 h-full"
              style={{
                backgroundColor: '#141419',
                borderLeft: '4px solid #6b8f71',
                borderRadius: '16px',
              }}
            >
              <h3 className="font-heading-card text-text-primary">Intelligence Stones</h3>
              <p className="font-label text-accent-stone mt-2">The Cognitive Layer</p>
              <div className="border-t border-[rgba(240,236,228,0.06)] my-6" />
              <p className="font-body-large text-text-primary mb-4">WHO is the user?</p>
              <p className="font-body text-text-secondary">
                Long-term style, preferences, world model. The accumulated understanding of a person
                built over weeks of conversation.
              </p>
              <p className="font-body-small text-text-dim mt-6">
                Mind Stone · Echo Stone · Bond Stone · Intuition Stone
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className="p-10 md:p-12 h-full"
              style={{
                backgroundColor: '#141419',
                borderLeft: '4px solid #e85d2b',
                borderRadius: '16px',
              }}
            >
              <h3 className="font-heading-card text-text-primary">VIGIL</h3>
              <p className="font-label text-accent-ember mt-2">The Awareness Layer</p>
              <div className="border-t border-[rgba(240,236,228,0.06)] my-6" />
              <p className="font-body-large text-text-primary mb-4">
                WHAT IS HAPPENING right now?
              </p>
              <p className="font-body text-text-secondary">
                Real-time state, open loops, goal tracking, self-uncertainty. The immediate moment
                beneath the words.
              </p>
              <p className="font-body-small text-text-dim mt-6">
                EMBER · COMPASS · TIDE · MIRROR
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16" delay={0.3}>
          <p className="font-display-subsection text-text-primary text-center max-w-[800px] mx-auto">
            Both systems together: an assistant that knows you and understands the moment.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
