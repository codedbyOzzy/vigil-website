import ScrollReveal from '../components/ScrollReveal';

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-ember mb-6">01 / THE PROBLEM</p>

          <h2 className="font-display-section text-text-primary">
            Your AI Responds to Words. Not to What You Mean.
          </h2>

          <p className="font-body-large text-text-secondary mt-6">
            Most AI assistants are reactive. They wait for you to speak, respond to what you said, and move on.
            They don't notice that you've been struggling with the same problem for three days.
            They don't adjust when you're exhausted at 1am versus focused at 10am.
          </p>

          <p className="font-body-large text-text-secondary mt-6">
            They answer with equal confidence whether they're certain or guessing.
            They respond to your words — not to what you're actually trying to accomplish.
            Every session starts from zero. Every conversation is independent.
            The assistant learns nothing about who you are or how you feel in this moment.
          </p>

          <p className="font-body-large text-text-secondary mt-6">
            We built VIGIL to close that gap. Not with more training data.
            Not with larger models. But with something simpler and more profound:{' '}
            <span className="text-accent-ember underline underline-offset-4 decoration-accent-ember/40">
              awareness
            </span>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
