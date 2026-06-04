export type Theme = 'light' | 'sepia' | 'dark';

export type FontSize = 'sm' | 'base' | 'lg' | 'xl';

export interface UserSettings {
  theme: Theme;
  fontSize: FontSize;
  readerLineSpacing: number; // 1.5, 1.75, 2.0
}

export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'light',
  fontSize: 'base',
  readerLineSpacing: 1.75,
};

export const FONT_SIZE_MAP: Record<FontSize, string> = {
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
};
