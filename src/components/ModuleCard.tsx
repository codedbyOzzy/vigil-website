interface ModuleCardProps {
  emoji: string;
  name: string;
  status: 'design' | 'progress' | 'planned';
  quote?: string;
  description: string;
  image: string;
}

const statusConfig = {
  design: {
    label: 'Design Complete',
    bg: 'rgba(107, 143, 113, 0.15)',
    text: '#6b8f71',
    border: 'rgba(107, 143, 113, 0.3)',
  },
  progress: {
    label: 'In Progress',
    bg: 'rgba(201, 168, 76, 0.15)',
    text: '#c9a84c',
    border: 'rgba(201, 168, 76, 0.3)',
  },
  planned: {
    label: 'Planned',
    bg: 'rgba(90, 88, 84, 0.15)',
    text: '#5c5854',
    border: 'rgba(90, 88, 84, 0.3)',
  },
};

export default function ModuleCard({ emoji, name, status, quote, description, image }: ModuleCardProps) {
  const config = statusConfig[status];

  return (
    <div
      className="relative bg-surface-deep border border-[rgba(240,236,228,0.06)] rounded-2xl p-10 md:p-12 overflow-hidden group transition-all duration-400 hover:-translate-y-1 hover:shadow-glow hover:border-accent-ember/30"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center transition-opacity duration-400 group-hover:opacity-[0.12]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-surface-deep/90" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-heading-card text-text-primary">{name}</h3>
          <span
            className="ml-auto font-label px-3 py-1 rounded-full text-[10px] border"
            style={{
              backgroundColor: config.bg,
              color: config.text,
              borderColor: config.border,
            }}
          >
            {config.label}
          </span>
        </div>

        {quote && (
          <p className="font-body-large text-text-secondary italic mt-4">
            "{quote}"
          </p>
        )}

        <p className="font-body text-text-secondary mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
