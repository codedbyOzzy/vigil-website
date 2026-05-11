interface StoneCardProps {
  emoji: string;
  name: string;
  version: string;
  learnsKeyword: string;
  learnsText: string;
  description: string;
  image: string;
}

export default function StoneCard({ emoji, name, version, learnsKeyword, learnsText, description, image }: StoneCardProps) {
  return (
    <div
      className="relative bg-surface-deep border border-[rgba(240,236,228,0.06)] rounded-2xl p-10 md:p-12 overflow-hidden group transition-all duration-400 hover:-translate-y-1 hover:shadow-glow-stone hover:border-accent-stone/30"
      style={{ borderLeftWidth: '4px', borderLeftColor: '#6b8f71' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center transition-opacity duration-400 group-hover:opacity-[0.12]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-surface-deep/90" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-heading-card text-text-primary">{name}</h3>
          <span className="ml-auto font-label text-text-primary bg-accent-stone-dim px-3 py-1 rounded-full text-[10px]">
            {version}
          </span>
        </div>

        <p className="font-body-large text-text-primary mt-4">
          Learns <span className="text-accent-stone font-medium">{learnsKeyword}</span> {learnsText}
        </p>

        <p className="font-body text-text-secondary mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
