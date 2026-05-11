import ScrollReveal from '../components/ScrollReveal';

export default function CTASection() {
  return (
    <section id="cta" className="bg-surface-deep py-[120px] px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal stagger={0.15}>
          <h2 className="font-display-section text-text-primary mb-6">Join the Ecosystem</h2>

          <p className="font-body-large text-text-secondary mb-12">
            Star the repositories to get notified when modules ship. Code will be released — no
            newsletter, no waitlist, no gatekeeping. Just good software, when it's ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/codedbyOzzy/ProjectVIGIL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-accent-ember text-white font-label rounded-full hover:bg-[#f0703a] hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
            >
              Star VIGIL on GitHub
            </a>
            <a
              href="https://github.com/codedbyOzzy/Intelligence-Stones"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-ember text-white font-label rounded-full hover:bg-[#f0703a] hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Star Intelligence-Stones
            </a>
          </div>

          <p className="font-body-small text-text-dim mt-8">
            Apache 2.0 — free to use in personal and commercial projects.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
