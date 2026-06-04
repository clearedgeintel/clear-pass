import type { FlashcardState } from '@/types/progress';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Grade scale:
 *   0 = Again (complete blackout)
 *   1 = Hard (incorrect, but upon seeing the answer it felt familiar)
 *   2 = Good (correct with some effort)
 *   3 = Easy (correct with no hesitation)
 *
 * Based on the SuperMemo SM-2 algorithm by Piotr Wozniak.
 */
export type SM2Grade = 0 | 1 | 2 | 3;

export const GRADE_LABELS: Record<SM2Grade, string> = {
  0: 'Again',
  1: 'Hard',
  2: 'Good',
  3: 'Easy',
};

/** Map our 0-3 grades to SM-2's 0-5 scale */
function toSM2Quality(grade: SM2Grade): number {
  const map: Record<SM2Grade, number> = { 0: 0, 1: 2, 2: 4, 3: 5 };
  return map[grade];
}

export function createInitialState(cardId: string): FlashcardState {
  return {
    cardId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    dueDate: new Date().toISOString(),
  };
}

export function gradeCard(state: FlashcardState, grade: SM2Grade): FlashcardState {
  const quality = toSM2Quality(grade);
  const now = new Date();

  let { easeFactor, interval, repetitions } = state;

  if (quality < 3) {
    // Failed — reset
    repetitions = 0;
    interval = 0;
  } else {
    // Passed
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Update ease factor (minimum 1.3)
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Calculate next due date
  const dueDate = new Date(now);
  if (interval === 0) {
    // Due again today (in 1 minute for "again", 10 minutes for "hard")
    dueDate.setMinutes(dueDate.getMinutes() + (grade === 0 ? 1 : 10));
  } else {
    dueDate.setDate(dueDate.getDate() + interval);
  }

  return {
    cardId: state.cardId,
    easeFactor,
    interval,
    repetitions,
    dueDate: dueDate.toISOString(),
    lastReview: now.toISOString(),
  };
}

export function isDue(state: FlashcardState): boolean {
  return new Date(state.dueDate) <= new Date();
}

export function getDueCount(states: Record<string, FlashcardState>): number {
  return Object.values(states).filter(isDue).length;
}
