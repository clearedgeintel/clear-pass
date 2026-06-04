import { format, isToday, isYesterday, differenceInDays } from 'date-fns';

/** Fisher-Yates shuffle — returns a new array. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Format a date for display. */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isToday(d)) return 'Today';
  if (isYesterday(d)) return 'Yesterday';
  return format(d, 'MMM d, yyyy');
}

/** Calculate streak from last study date. */
export function calculateStreak(
  lastStudyDate: string | null,
  currentStreak: number
): { streak: number; isActive: boolean } {
  if (!lastStudyDate) return { streak: 0, isActive: false };

  const last = new Date(lastStudyDate);
  const now = new Date();
  const daysDiff = differenceInDays(now, last);

  if (daysDiff === 0) {
    // Studied today — streak is active
    return { streak: currentStreak, isActive: true };
  } else if (daysDiff === 1) {
    // Studied yesterday — streak continues but needs today's activity
    return { streak: currentStreak, isActive: false };
  } else {
    // Streak broken
    return { streak: 0, isActive: false };
  }
}

/** Format minutes to "X min" or "X hr Y min". */
export function formatReadTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hrs} hr ${mins} min` : `${hrs} hr`;
}

/** Format seconds to MM:SS or HH:MM:SS. */
export function formatTimer(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  if (h > 0) return `${h}:${mm}:${ss}`;
  return `${mm}:${ss}`;
}

/** Generate a simple unique ID. */
export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
