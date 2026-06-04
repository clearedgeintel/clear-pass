import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import type { UserProgress, FlashcardState, QuizResult, ModuleProgress } from '@/types/progress';
import { DEFAULT_PROGRESS } from '@/types/progress';
import { storage } from '@/lib/storage/storage';
import { XP } from '@/config';
import { format } from 'date-fns';

interface ProgressContextValue {
  progress: UserProgress;
  isLoaded: boolean;
  // Lessons
  markLessonComplete: (moduleId: string, lessonId: string, totalLessons: number) => void;
  isLessonComplete: (moduleId: string, lessonId: string) => boolean;
  // Flashcards
  getFlashcardState: (cardId: string) => FlashcardState | undefined;
  saveFlashcardState: (state: FlashcardState) => void;
  // Quizzes
  saveQuizResult: (result: QuizResult) => void;
  // Gamification
  addXP: (amount: number) => void;
  recordStudyActivity: () => void;
  // Bookmarks
  toggleBookmark: (lessonId: string) => void;
  isBookmarked: (lessonId: string) => boolean;
  // Reset
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    storage.getProgress().then((p) => {
      setProgress(p);
      setIsLoaded(true);
    });
  }, []);

  const persist = useCallback((updated: UserProgress) => {
    setProgress(updated);
    storage.saveProgress(updated);
  }, []);

  const checkBadges = useCallback((p: UserProgress): UserProgress => {
    const earned = new Set(p.earnedBadgeIds);
    const completedLessons = Object.values(p.moduleProgress)
      .reduce((sum, mp) => sum + mp.completedLessonIds.length, 0);

    if (completedLessons >= 1) earned.add('first_lesson');
    if (Object.values(p.moduleProgress).some((mp) => mp.isComplete)) earned.add('module_master');
    if (p.currentStreak >= 3) earned.add('streak_3');
    if (p.currentStreak >= 7) earned.add('streak_7');
    if (p.currentStreak >= 30) earned.add('streak_30');
    if (p.quizResults.some((q) => q.percentage === 100)) earned.add('quiz_ace');
    if (p.quizResults.some((q) => q.moduleId === 'mock' && q.percentage >= 70)) earned.add('mock_pass');
    if (p.totalFlashcardsReviewed >= 100) earned.add('flashcard_100');
    if (p.xp >= 1000) earned.add('xp_1000');
    if (p.xp >= 5000) earned.add('xp_5000');

    return { ...p, earnedBadgeIds: Array.from(earned) };
  }, []);

  const recordStudyActivity = useCallback(() => {
    const today = format(new Date(), 'yyyy-MM-dd');
    setProgress((prev) => {
      if (prev.lastStudyDate === today) return prev;

      let newStreak = 1;
      if (prev.lastStudyDate) {
        const yesterday = format(new Date(Date.now() - 86400000), 'yyyy-MM-dd');
        if (prev.lastStudyDate === yesterday) {
          newStreak = prev.currentStreak + 1;
        } else if (prev.lastStudyDate === today) {
          newStreak = prev.currentStreak;
        }
      }

      const updated = {
        ...prev,
        lastStudyDate: today,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
      };
      const withBadges = checkBadges(updated);
      storage.saveProgress(withBadges);
      return withBadges;
    });
  }, [checkBadges]);

  const addXP = useCallback((amount: number) => {
    setProgress((prev) => {
      const updated = { ...prev, xp: prev.xp + amount };
      const withBadges = checkBadges(updated);
      storage.saveProgress(withBadges);
      return withBadges;
    });
  }, [checkBadges]);

  const markLessonComplete = useCallback((moduleId: string, lessonId: string, totalLessons: number) => {
    setProgress((prev) => {
      const mp: ModuleProgress = prev.moduleProgress[moduleId] ?? {
        moduleId,
        completedLessonIds: [],
        isComplete: false,
        quizHighScore: 0,
      };

      if (mp.completedLessonIds.includes(lessonId)) return prev;

      const completedLessonIds = [...mp.completedLessonIds, lessonId];
      const isComplete = completedLessonIds.length >= totalLessons;

      const updated: UserProgress = {
        ...prev,
        xp: prev.xp + XP.LESSON_COMPLETE,
        moduleProgress: {
          ...prev.moduleProgress,
          [moduleId]: { ...mp, completedLessonIds, isComplete },
        },
      };

      const withBadges = checkBadges(updated);
      storage.saveProgress(withBadges);
      return withBadges;
    });
    recordStudyActivity();
  }, [checkBadges, recordStudyActivity]);

  const isLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    return progress.moduleProgress[moduleId]?.completedLessonIds.includes(lessonId) ?? false;
  }, [progress]);

  const getFlashcardState = useCallback((cardId: string) => {
    return progress.flashcardStates[cardId];
  }, [progress]);

  const saveFlashcardState = useCallback((state: FlashcardState) => {
    setProgress((prev) => {
      const updated: UserProgress = {
        ...prev,
        totalFlashcardsReviewed: prev.totalFlashcardsReviewed + 1,
        flashcardStates: { ...prev.flashcardStates, [state.cardId]: state },
      };
      const withBadges = checkBadges(updated);
      storage.saveProgress(withBadges);
      return withBadges;
    });
    recordStudyActivity();
  }, [checkBadges, recordStudyActivity]);

  const saveQuizResult = useCallback((result: QuizResult) => {
    setProgress((prev) => {
      let xpGain: number = XP.QUIZ_ATTEMPT;
      if (result.percentage === 100) xpGain = XP.QUIZ_PERFECT;
      else if (result.percentage >= 70) xpGain = XP.QUIZ_PASS;

      const mp: ModuleProgress = prev.moduleProgress[result.moduleId] ?? {
        moduleId: result.moduleId,
        completedLessonIds: [],
        isComplete: false,
        quizHighScore: 0,
      };

      const updated: UserProgress = {
        ...prev,
        xp: prev.xp + xpGain,
        quizResults: [...prev.quizResults, result],
        moduleProgress: {
          ...prev.moduleProgress,
          [result.moduleId]: {
            ...mp,
            quizHighScore: Math.max(mp.quizHighScore, result.percentage),
          },
        },
      };
      const withBadges = checkBadges(updated);
      storage.saveProgress(withBadges);
      return withBadges;
    });
    recordStudyActivity();
  }, [checkBadges, recordStudyActivity]);

  const toggleBookmark = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const bookmarks = prev.bookmarkedLessonIds.includes(lessonId)
        ? prev.bookmarkedLessonIds.filter((id) => id !== lessonId)
        : [...prev.bookmarkedLessonIds, lessonId];
      const updated = { ...prev, bookmarkedLessonIds: bookmarks };
      storage.saveProgress(updated);
      return updated;
    });
  }, []);

  const isBookmarked = useCallback((lessonId: string) => {
    return progress.bookmarkedLessonIds.includes(lessonId);
  }, [progress]);

  const resetProgress = useCallback(() => {
    const fresh = { ...DEFAULT_PROGRESS };
    persist(fresh);
  }, [persist]);

  return (
    <ProgressContext.Provider value={{
      progress, isLoaded,
      markLessonComplete, isLessonComplete,
      getFlashcardState, saveFlashcardState,
      saveQuizResult, addXP, recordStudyActivity,
      toggleBookmark, isBookmarked,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
