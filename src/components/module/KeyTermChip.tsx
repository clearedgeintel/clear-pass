import { useState } from 'react';
import type { KeyTerm } from '@/types/content';

export function KeyTermChip({ term }: { term: KeyTerm }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      onClick={() => setRevealed(!revealed)}
      className="text-left w-full bg-surface-alt rounded-card p-3 border border-border hover:border-primary/30 transition-colors"
      aria-expanded={revealed}
    >
      <span className="text-sm font-semibold text-primary">{term.term}</span>
      {revealed && (
        <p className="text-sm text-text-secondary mt-1 animate-fade-in">
          {term.def}
        </p>
      )}
      {!revealed && (
        <p className="text-xs text-text-muted mt-1">Tap to reveal</p>
      )}
    </button>
  );
}
