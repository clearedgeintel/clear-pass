import { useState } from 'react';
import { Sun, Moon, BookOpen, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { useSettings } from '@/contexts/SettingsContext';
import { useProgress } from '@/contexts/ProgressContext';
import { APP_NAME } from '@/config';
import type { Theme, FontSize } from '@/types/settings';

const THEMES: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'sepia', label: 'Sepia', icon: BookOpen },
  { value: 'dark', label: 'Dark', icon: Moon },
];

const FONT_SIZES: { value: FontSize; label: string }[] = [
  { value: 'sm', label: 'Small' },
  { value: 'base', label: 'Medium' },
  { value: 'lg', label: 'Large' },
  { value: 'xl', label: 'Extra Large' },
];

export function SettingsPage() {
  const { settings, setTheme, setFontSize } = useSettings();
  const { resetProgress } = useProgress();
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold text-text-primary mb-4">Settings</h1>

      {/* Theme */}
      <Card className="mb-4">
        <h2 className="text-sm font-semibold text-text-secondary mb-3">Theme</h2>
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`flex flex-col items-center gap-1 p-3 rounded-card border transition-colors ${
                settings.theme === value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <Icon size={20} className={settings.theme === value ? 'text-primary' : 'text-text-muted'} />
              <span className="text-xs font-medium text-text-primary">{label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Font Size */}
      <Card className="mb-4">
        <h2 className="text-sm font-semibold text-text-secondary mb-3">Font Size</h2>
        <div className="grid grid-cols-4 gap-2">
          {FONT_SIZES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFontSize(value)}
              className={`p-2 rounded-card border text-xs font-medium transition-colors ${
                settings.fontSize === value
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border text-text-secondary hover:border-primary/30'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Reset Progress */}
      <Card className="mb-4">
        <h2 className="text-sm font-semibold text-text-secondary mb-3">Data</h2>
        <Button
          variant="danger"
          size="sm"
          onClick={() => setShowResetModal(true)}
        >
          Reset All Progress
        </Button>
      </Card>

      {/* Disclaimer */}
      <Card className="mb-4 bg-warning/5 border-warning/20">
        <div className="flex items-start gap-2">
          <AlertTriangle size={18} className="text-warning flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-semibold text-text-primary mb-1">Disclaimer</h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              {APP_NAME} is an independent study aid. It is not affiliated with the Minnesota
              Department of Commerce, Pearson VUE, PSI, Xcel, Kaplan, Mometrix, or any course
              provider. This app does not satisfy Minnesota's state-approved pre-licensing
              education requirement. Always verify current exam requirements and regulations at{' '}
              <a
                href="https://mn.gov/commerce/industries/insurance/licensing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mn.gov/commerce
              </a>.
            </p>
          </div>
        </div>
      </Card>

      {/* Reset Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Progress?"
      >
        <p className="text-sm text-text-secondary mb-4">
          This will permanently delete all your study progress, including XP, streaks,
          badges, quiz scores, and flashcard schedules. This cannot be undone.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" size="sm" onClick={() => setShowResetModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              resetProgress();
              setShowResetModal(false);
            }}
          >
            Reset Everything
          </Button>
        </div>
      </Modal>
    </div>
  );
}
