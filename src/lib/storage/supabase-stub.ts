/**
 * Phase 2: Supabase Storage Adapter
 *
 * To enable Supabase sync:
 * 1. npm install @supabase/supabase-js
 * 2. Implement this class with real Supabase client calls
 * 3. In storage.ts, change: export const storage = new SupabaseAdapter(supabaseClient);
 *
 * The tables you'll need:
 *   - user_progress (user_id, xp, current_streak, longest_streak, ...)
 *   - module_progress (user_id, module_id, completed_lesson_ids, ...)
 *   - flashcard_states (user_id, card_id, ease_factor, interval, repetitions, due_date)
 *   - quiz_results (user_id, quiz_id, module_id, score, total, ...)
 *   - user_settings (user_id, theme, font_size, ...)
 */

import type { StorageAdapter } from './storage';
import type { UserProgress } from '@/types/progress';
import type { UserSettings } from '@/types/settings';

// Phase 2: export and use when ready
export class SupabaseAdapter implements StorageAdapter {
  // constructor(private client: SupabaseClient) {}

  async getProgress(): Promise<UserProgress> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async saveProgress(): Promise<void> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async getSettings(): Promise<UserSettings> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async saveSettings(): Promise<void> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async getScrollPosition(): Promise<number> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async saveScrollPosition(): Promise<void> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
  async clearAll(): Promise<void> {
    throw new Error('SupabaseAdapter not implemented — Phase 2');
  }
}
