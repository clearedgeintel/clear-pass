import { useFlashcards } from '@/hooks/useFlashcards';
import { Button } from '@/components/ui/Button';
import { GRADE_LABELS, type SM2Grade } from '@/lib/sm2';
import type { Flashcard } from '@/types/content';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

const GRADE_COLORS: Record<SM2Grade, string> = {
  0: 'bg-danger text-white',
  1: 'bg-warning text-white',
  2: 'bg-success text-white',
  3: 'bg-primary text-white',
};

export function FlashcardDeck({ cards, title }: { cards: Flashcard[]; title: string }) {
  const {
    currentCard, currentIndex, totalDue, isFlipped,
    isComplete, sessionReviewed, flip, grade, restart,
  } = useFlashcards(cards);

  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted">No flashcards available for this module yet.</p>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
        <h2 className="text-xl font-bold text-text-primary mb-2">Session Complete!</h2>
        <p className="text-text-secondary mb-1">
          You reviewed {sessionReviewed} card{sessionReviewed !== 1 ? 's' : ''}.
        </p>
        {totalDue === 0 && (
          <p className="text-sm text-text-muted mb-6">All cards are up to date. Come back later!</p>
        )}
        <Button onClick={restart} variant="secondary">
          <RotateCcw size={16} className="mr-2" />
          Review Again
        </Button>
      </div>
    );
  }

  if (!currentCard) return null;

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        <span className="text-sm text-text-muted">
          {currentIndex + 1} / {totalDue}
        </span>
      </div>

      <div
        className="card-flip cursor-pointer"
        onClick={() => !isFlipped && flip()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && !isFlipped && flip()}
        aria-label={isFlipped ? 'Flashcard answer' : 'Tap to reveal answer'}
      >
        <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-front bg-surface rounded-card border border-border p-6 min-h-[200px] flex items-center justify-center shadow-sm">
            <p className="text-lg text-text-primary text-center font-medium">
              {currentCard.front}
            </p>
          </div>
          <div className="card-back absolute inset-0 bg-surface rounded-card border border-primary/30 p-6 min-h-[200px] flex items-center justify-center shadow-sm">
            <p className="text-base text-text-primary text-center">
              {currentCard.back}
            </p>
          </div>
        </div>
      </div>

      {!isFlipped && (
        <p className="text-center text-sm text-text-muted mt-4">Tap card to reveal answer</p>
      )}

      {isFlipped && (
        <div className="mt-6 animate-slide-up">
          <p className="text-xs text-text-muted text-center mb-3">How well did you know this?</p>
          <div className="grid grid-cols-4 gap-2">
            {([0, 1, 2, 3] as SM2Grade[]).map((g) => (
              <button
                key={g}
                onClick={() => grade(g)}
                className={`${GRADE_COLORS[g]} rounded-card py-3 text-sm font-medium transition-transform hover:scale-105 active:scale-95`}
              >
                {GRADE_LABELS[g]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
