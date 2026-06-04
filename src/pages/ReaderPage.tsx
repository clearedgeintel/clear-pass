import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Menu, X, Clock, Type, Minus, Plus } from 'lucide-react';
import { moduleMap } from '@/content/modules';
import { MNCallout } from '@/components/module/MNCallout';
import { Button } from '@/components/ui/Button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useSettings } from '@/contexts/SettingsContext';
import { formatReadTime } from '@/lib/utils';
import type { Theme } from '@/types/settings';

const LINE_SPACINGS = [1.5, 1.75, 2.0];

export function ReaderPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { settings, setTheme, setLineSpacing } = useSettings();
  const [showTOC, setShowTOC] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const mod = moduleId ? moduleMap[moduleId] : undefined;
  useScrollPosition(moduleId ? `reader-${moduleId}` : 'reader');

  if (!mod) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted">Module not found.</p>
        <Button variant="ghost" onClick={() => navigate('/modules')} className="mt-4">
          Back to Modules
        </Button>
      </div>
    );
  }

  const totalReadTime = mod.lessons.reduce((sum, l) => sum + l.estReadMin, 0);

  return (
    <div className="animate-fade-in">
      {/* Reader toolbar */}
      <div className="sticky top-14 z-20 bg-surface/95 backdrop-blur-sm border-b border-border -mx-4 px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="text-text-secondary hover:text-text-primary p-1"
          aria-label="Toggle table of contents"
        >
          {showTOC ? <X size={20} /> : <Menu size={20} />}
        </button>
        <span className="text-xs text-text-muted flex items-center gap-1">
          <Clock size={12} /> {formatReadTime(totalReadTime)}
        </span>
        <button
          onClick={() => setShowControls(!showControls)}
          className="text-text-secondary hover:text-text-primary p-1"
          aria-label="Reading settings"
        >
          <Type size={20} />
        </button>
      </div>

      {/* Reading controls popover */}
      {showControls && (
        <div className="bg-surface border border-border rounded-card p-4 mb-4 animate-fade-in shadow-lg">
          <h3 className="text-sm font-semibold text-text-secondary mb-3">Reading Settings</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-text-primary">Theme</span>
            <div className="flex gap-1">
              {(['light', 'sepia', 'dark'] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    settings.theme === t
                      ? 'bg-primary text-white'
                      : 'bg-surface-alt text-text-secondary'
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-primary">Line Spacing</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const idx = LINE_SPACINGS.indexOf(settings.readerLineSpacing);
                  if (idx > 0) setLineSpacing(LINE_SPACINGS[idx - 1]);
                }}
                className="p-1 text-text-muted hover:text-text-primary"
              >
                <Minus size={16} />
              </button>
              <span className="text-sm text-text-primary w-8 text-center">
                {settings.readerLineSpacing}
              </span>
              <button
                onClick={() => {
                  const idx = LINE_SPACINGS.indexOf(settings.readerLineSpacing);
                  if (idx < LINE_SPACINGS.length - 1) setLineSpacing(LINE_SPACINGS[idx + 1]);
                }}
                className="p-1 text-text-muted hover:text-text-primary"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table of Contents sidebar */}
      {showTOC && (
        <div className="bg-surface border border-border rounded-card p-4 mb-4 animate-fade-in shadow-lg">
          <h3 className="text-sm font-semibold text-text-secondary mb-2">Contents</h3>
          <nav>
            {mod.lessons.map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowTOC(false)}
                className="block text-sm text-primary hover:underline py-1"
              >
                {lesson.order}. {lesson.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Module title */}
      <h1 className="text-2xl font-bold text-text-primary mb-2">{mod.title}</h1>
      <p className="text-text-secondary mb-8">{mod.summary}</p>

      {/* Continuous content */}
      <div style={{ lineHeight: settings.readerLineSpacing }}>
        {mod.lessons.map((lesson) => (
          <section key={lesson.id} id={lesson.id} className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-1">{lesson.title}</h2>
            <p className="text-xs text-text-muted mb-4">
              {formatReadTime(lesson.estReadMin)} read
            </p>

            <div className="prose text-text-primary">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {lesson.bodyMarkdown}
              </ReactMarkdown>
            </div>

            {lesson.mnCallout && <MNCallout text={lesson.mnCallout} />}

            {lesson.keyTerms.length > 0 && (
              <div className="mt-6 mb-4">
                <h3 className="text-sm font-semibold text-text-secondary mb-2">Key Terms</h3>
                <dl className="grid gap-2">
                  {lesson.keyTerms.map((kt) => (
                    <div key={kt.term} className="bg-surface-alt rounded-card p-3">
                      <dt className="text-sm font-semibold text-primary">{kt.term}</dt>
                      <dd className="text-sm text-text-secondary mt-0.5">{kt.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
