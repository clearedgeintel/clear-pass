interface ReadinessGaugeProps {
  score: number; // 0-100
}

export function ReadinessGauge({ score }: ReadinessGaugeProps) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 70 ? 'text-success' : score >= 40 ? 'text-warning' : 'text-danger';

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="rgb(var(--color-border))"
            strokeWidth="8"
          />
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            className={color}
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-text-primary">{score}%</span>
          <span className="text-xs text-text-muted">Ready</span>
        </div>
      </div>
      <p className="text-sm text-text-secondary mt-2 text-center">Exam Readiness</p>
    </div>
  );
}
