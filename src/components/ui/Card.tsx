import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
}

export function Card({ className, padding = true, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-card border border-border shadow-sm',
        padding && 'p-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
