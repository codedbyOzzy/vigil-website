import ScrollReveal from '../components/ScrollReveal';

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">01 / THE PROBLEM</p>

          <h2 className="font-display-section text-text-primary">
            Most AI Assistants Exist Only in the "Now."
          </h2>

          <p className="font-body-large text-text-secondary mt-8 leading-relaxed">
            They process your last message, generate a response, and wait for the next input. 
            <strong> They don't understand the narrative arc of your week.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-xl bg-surface-raised/30 border border-white/5">
              <p className="font-label text-[10px] text-accent-stone uppercase mb-3">Missed Signal: Narrative</p>
              <p className="font-body text-text-secondary">They don't notice that you've been working on the same goal across 5 different threads for three days.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-raised/30 border border-white/5">
              <p className="font-label text-[10px] text-accent-stone uppercase mb-3">Missed Signal: Behavioral</p>
              <p className="font-body text-text-secondary">They don't notice that your energy shifted from high-focus at 10 AM to exhaustion at 1 AM.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-raised/30 border border-white/5">
              <p className="font-label text-[10px] text-accent-stone uppercase mb-3">Missed Signal: Decisions</p>
              <p className="font-body text-text-secondary">They don't track the definitive decisions you made yesterday, leading to repetitive or revoked logic.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-raised/30 border border-white/5">
              <p className="font-label text-[10px] text-accent-stone uppercase mb-3">Missed Signal: Intuition</p>
              <p className="font-body text-text-secondary">Every session starts from zero. Every conversation is isolated. The AI is a reactive tool, not a partner.</p>
            </div>
          </div>

          <p className="font-body-large text-text-secondary mt-12">
            The Singularity is built to close that gap. Not with larger models, but with a **convergence of awareness layers** that gives your AI genuine depth and foresight.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
