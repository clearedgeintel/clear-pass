import { useState, useMemo, useCallback } from 'react';
import type { Flashcard } from '@/types/content';
import type { FlashcardState } from '@/types/progress';
import { useProgress } from '@/contexts/ProgressContext';
import { gradeCard, createInitialState, isDue, type SM2Grade } from '@/lib/sm2';

export function useFlashcards(cards: Flashcard[]) {
  const { progress, getFlashcardState, saveFlashcardState } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionReviewed, setSessionReviewed] = useState(0);

  // Get cards that are due for review
  const dueCards = useMemo(() => {
    return cards.filter((card) => {
      const state = progress.flashcardStates[card.id];
      if (!state) return true; // New card — always due
      return isDue(state);
    });
  }, [cards, progress.flashcardStates]);

  const currentCard = dueCards[currentIndex] ?? null;
  const totalDue = dueCards.length;
  const isComplete = currentIndex >= dueCards.length;

  const flip = useCallback(() => setIsFlipped(true), []);

  const grade = useCallback((g: SM2Grade) => {
    if (!currentCard) return;

    const existing: FlashcardState =
      getFlashcardState(currentCard.id) ?? createInitialState(currentCard.id);

    const updated = gradeCard(existing, g);
    saveFlashcardState(updated);
    setSessionReviewed((n) => n + 1);
    setIsFlipped(false);
    setCurrentIndex((i) => i + 1);
  }, [currentCard, getFlashcardState, saveFlashcardState]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(0);
  }, []);

  return {
    currentCard,
    currentIndex,
    totalDue,
    isFlipped,
    isComplete,
    sessionReviewed,
    flip,
    grade,
    restart,
  };
}
