import type { UserProgress } from '@/types/progress';
import type { UserSettings } from '@/types/settings';
import { DEFAULT_PROGRESS } from '@/types/progress';
import { DEFAULT_SETTINGS } from '@/types/settings';

const KEYS = {
  PROGRESS: 'clearpass_progress',
  SETTINGS: 'clearpass_settings',
  SCROLL_POSITIONS: 'clearpass_scroll',
} as const;

/**
 * Storage adapter interface — swap implementations to move from
 * localStorage to Supabase without changing any call sites.
 *
 * Phase 2: implement SupabaseAdapter with the same interface.
 */
export interface StorageAdapter {
  getProgress(): Promise<UserProgress>;
  saveProgress(progress: UserProgress): Promise<void>;
  getSettings(): Promise<UserSettings>;
  saveSettings(settings: UserSettings): Promise<void>;
  getScrollPosition(key: string): Promise<number>;
  saveScrollPosition(key: string, position: number): Promise<void>;
  clearAll(): Promise<void>;
}

export class LocalStorageAdapter implements StorageAdapter {
  async getProgress(): Promise<UserProgress> {
    try {
      const raw = localStorage.getItem(KEYS.PROGRESS);
      if (!raw) return { ...DEFAULT_PROGRESS };
      return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
    } catch {
      return { ...DEFAULT_PROGRESS };
    }
  }

  async saveProgress(progress: UserProgress): Promise<void> {
    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
  }

  async getSettings(): Promise<UserSettings> {
    try {
      const raw = localStorage.getItem(KEYS.SETTINGS);
      if (!raw) return { ...DEFAULT_SETTINGS };
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  async saveSettings(settings: UserSettings): Promise<void> {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  }

  async getScrollPosition(key: string): Promise<number> {
    try {
      const raw = localStorage.getItem(KEYS.SCROLL_POSITIONS);
      if (!raw) return 0;
      const positions = JSON.parse(raw);
      return positions[key] ?? 0;
    } catch {
      return 0;
    }
  }

  async saveScrollPosition(key: string, position: number): Promise<void> {
    try {
      const raw = localStorage.getItem(KEYS.SCROLL_POSITIONS);
      const positions = raw ? JSON.parse(raw) : {};
      positions[key] = position;
      localStorage.setItem(KEYS.SCROLL_POSITIONS, JSON.stringify(positions));
    } catch {
      // fail silently for scroll position
    }
  }

  async clearAll(): Promise<void> {
    localStorage.removeItem(KEYS.PROGRESS);
    localStorage.removeItem(KEYS.SETTINGS);
    localStorage.removeItem(KEYS.SCROLL_POSITIONS);
  }
}

/** The active storage adapter. Change this one line to swap to Supabase. */
export const storage: StorageAdapter = new LocalStorageAdapter();
