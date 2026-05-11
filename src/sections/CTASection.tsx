import ScrollReveal from '../components/ScrollReveal';
import { Terminal } from 'lucide-react';

interface CTASectionProps {
  onGetStarted?: () => void;
}

export default function CTASection({ onGetStarted }: CTASectionProps) {
  return (
    <section id="cta" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal stagger={0.15}>
          <h2 className="font-display-section text-text-primary mb-6">Start Your Journey</h2>

          <p className="font-body-large text-text-secondary mb-12">
            The era of reactive AI is over. Integrate the Awareness Layer into your project today and build assistants that truly understand the path they are on.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="flex items-center gap-3 px-10 py-4 bg-accent-stone text-[#0A0A0B] font-label text-xs uppercase tracking-widest rounded-full hover:brightness-110 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
            >
              <Terminal size={16} />
              Quick Start
            </button>
            <a
              href="https://github.com/codedbyOzzy/ProjectVIGIL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[rgba(240,236,228,0.15)] text-text-primary font-label text-xs uppercase tracking-widest rounded-full hover:bg-text-primary hover:text-surface-void hover:border-transparent transition-all duration-200"
            >
              Full Documentation
            </a>
          </div>

          <p className="font-body-small text-text-dim mt-8 italic">
            "Software that pays attention."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
