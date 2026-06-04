import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import type { UserSettings, Theme, FontSize } from '@/types/settings';
import { DEFAULT_SETTINGS, FONT_SIZE_MAP } from '@/types/settings';
import { storage } from '@/lib/storage/storage';

interface SettingsContextValue {
  settings: UserSettings;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
  setLineSpacing: (spacing: number) => void;
  isLoaded: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings on mount
  useEffect(() => {
    storage.getSettings().then((s) => {
      setSettings(s);
      setIsLoaded(true);
    });
  }, []);

  // Apply theme to <html> whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  // Apply font size to <html>
  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZE_MAP[settings.fontSize];
  }, [settings.fontSize]);

  const persist = useCallback((updated: UserSettings) => {
    setSettings(updated);
    storage.saveSettings(updated);
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    persist({ ...settings, theme });
  }, [settings, persist]);

  const setFontSize = useCallback((fontSize: FontSize) => {
    persist({ ...settings, fontSize });
  }, [settings, persist]);

  const setLineSpacing = useCallback((readerLineSpacing: number) => {
    persist({ ...settings, readerLineSpacing });
  }, [settings, persist]);

  return (
    <SettingsContext.Provider value={{ settings, setTheme, setFontSize, setLineSpacing, isLoaded }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
