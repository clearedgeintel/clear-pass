export interface FlashcardState {
  cardId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  dueDate: string; // ISO date string
  lastReview?: string;
}

export interface QuizResult {
  id: string;
  moduleId: string | 'mock';
  date: string; // ISO date string
  score: number;
  total: number;
  percentage: number;
  domainBreakdown: Record<string, { correct: number; total: number }>;
  missedQuestionIds: string[];
  timeSpentSeconds: number;
}

export interface ModuleProgress {
  moduleId: string;
  completedLessonIds: string[];
  isComplete: boolean;
  quizHighScore: number;
}

export interface UserProgress {
  xp: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null; // ISO date string
  totalFlashcardsReviewed: number;
  earnedBadgeIds: string[];
  moduleProgress: Record<string, ModuleProgress>;
  flashcardStates: Record<string, FlashcardState>;
  quizResults: QuizResult[];
  bookmarkedLessonIds: string[];
}

export const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: null,
  totalFlashcardsReviewed: 0,
  earnedBadgeIds: [],
  moduleProgress: {},
  flashcardStates: {},
  quizResults: [],
  bookmarkedLessonIds: [],
};
