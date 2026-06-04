/** Single constant for the app name — change this one place to rebrand. */
export const APP_NAME = 'ClearPass';

/** Exam configuration constants */
export const EXAM_CONFIG = {
  /** Combined Life & Health exam */
  combined: {
    questionCount: 135,
    timeLimitMinutes: 180,
    passPercentage: 70,
    label: 'Combined Life & Health',
  },
  /** Life-only exam */
  lifeOnly: {
    questionCount: 75,
    timeLimitMinutes: 120,
    passPercentage: 70,
    label: 'Life Only',
  },
  /** Health-only exam */
  healthOnly: {
    questionCount: 75,
    timeLimitMinutes: 120,
    passPercentage: 70,
    label: 'Health Only',
  },
} as const;

/** XP awards */
export const XP = {
  LESSON_COMPLETE: 25,
  QUIZ_PERFECT: 100,
  QUIZ_PASS: 50,
  QUIZ_ATTEMPT: 10,
  FLASHCARD_SESSION: 15,
  STREAK_BONUS: 10, // per day of streak
} as const;

/** Domain weights for exam readiness score (approximate real exam weighting) */
export const DOMAIN_WEIGHTS = {
  general: 0.20,
  life: 0.30,
  health: 0.30,
  mn_law: 0.20,
} as const;

/** Badge definitions */
export const BADGES = [
  { id: 'first_lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🎯' },
  { id: 'module_master', name: 'Module Master', description: 'Complete all lessons in a module', icon: '⭐' },
  { id: 'streak_3', name: 'On Fire', description: '3-day study streak', icon: '🔥' },
  { id: 'streak_7', name: 'Week Warrior', description: '7-day study streak', icon: '💪' },
  { id: 'streak_30', name: 'Unstoppable', description: '30-day study streak', icon: '🏆' },
  { id: 'quiz_ace', name: 'Quiz Ace', description: 'Score 100% on a quiz', icon: '💯' },
  { id: 'mock_pass', name: 'Ready to Go', description: 'Pass a full mock exam', icon: '🎓' },
  { id: 'flashcard_100', name: 'Card Shark', description: 'Review 100 flashcards', icon: '🃏' },
  { id: 'xp_1000', name: 'Scholar', description: 'Earn 1,000 XP', icon: '📚' },
  { id: 'xp_5000', name: 'Expert', description: 'Earn 5,000 XP', icon: '🧠' },
] as const;
