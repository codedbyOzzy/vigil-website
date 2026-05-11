import ScrollReveal from '../components/ScrollReveal';
import { ChevronDown } from 'lucide-react';

const flowSteps = [
  {
    type: 'user',
    text: 'User types a message',
  },
  {
    type: 'stone',
    name: 'Intuition Stone',
    quote: "I've seen this pattern before. They'll need X next.",
  },
  {
    type: 'stone',
    name: 'Bond Stone',
    quote: "They're working on the Vision project. They use Python + CUDA. Last time this came up, the issue was memory.",
  },
  {
    type: 'stone',
    name: 'Mind Stone',
    quote: 'Keep it short. Lead with code. Skip the theory.',
  },
  {
    type: 'assistant',
    text: 'Assistant responds',
  },
  {
    type: 'stone',
    name: 'Echo Stone',
    quote: "They said 'ok' — but they asked the same thing three turns ago. This explanation isn't landing. Flag for next turn.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-compass mb-6">03 / THE ARCHITECTURE</p>

          <h2 className="font-display-section text-text-primary mb-12">
            How the Stones Fit Together
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-surface-raised border border-[rgba(240,236,228,0.06)] rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-2">
              {flowSteps.map((step, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  {step.type === 'user' || step.type === 'assistant' ? (
                    <p className="font-body-large text-text-primary py-3">{step.text}</p>
                  ) : (
                    <div className="w-full flex items-start gap-4 py-3">
                      <span
                        className="font-label text-accent-stone shrink-0 pt-1"
                        style={{ borderLeft: '4px solid #6b8f71', paddingLeft: '12px' }}
                      >
                        {step.name}
                      </span>
                      <p className="font-body text-text-secondary italic">{step.quote}</p>
                    </div>
                  )}
                  {i < flowSteps.length - 1 && (
                    <ChevronDown size={20} className="text-text-dim my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <p className="font-body-large text-text-secondary text-center max-w-[700px] mx-auto">
            No magic. No large models. No embeddings. Each stone is a small, auditable Python module
            running in microseconds. The intelligence comes from careful observation accumulated over time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
