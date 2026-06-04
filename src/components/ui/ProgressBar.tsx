import { clsx } from 'clsx';

interface ProgressBarProps {
  value: number; // 0-100
  size?: 'sm' | 'md';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  size = 'md',
  color = 'primary',
  className,
  showLabel = false,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div
        className={clsx(
          'flex-1 rounded-full bg-surface-alt overflow-hidden',
          size === 'sm' ? 'h-1.5' : 'h-2.5'
        )}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={clsx(
            'h-full rounded-full transition-all duration-500',
            {
              'bg-primary': color === 'primary',
              'bg-success': color === 'success',
              'bg-warning': color === 'warning',
              'bg-danger': color === 'danger',
            }
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-text-muted font-medium min-w-[2.5rem] text-right">
          {clamped}%
        </span>
      )}
    </div>
  );
}
