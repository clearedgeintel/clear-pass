import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Check, Clock, Bookmark, BookmarkCheck, ExternalLink, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { KeyTermChip } from './KeyTermChip';
import { MNCallout } from './MNCallout';
import { VideoEmbed } from './VideoEmbed';
import { useProgress } from '@/contexts/ProgressContext';
import type { Lesson } from '@/types/content';

interface LessonCardProps {
  lesson: Lesson;
  totalLessons: number;
}

export function LessonCard({ lesson, totalLessons }: LessonCardProps) {
  const { markLessonComplete, isLessonComplete, toggleBookmark, isBookmarked } = useProgress();
  const complete = isLessonComplete(lesson.moduleId, lesson.id);
  const bookmarked = isBookmarked(lesson.id);
  const [expanded, setExpanded] = useState(!complete);

  return (
    <Card className={complete ? 'opacity-80' : ''}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${complete ? 'bg-success/20 text-success' : 'bg-surface-alt text-text-muted'}`}>
            {complete ? <Check size={16} /> : <span className="text-xs font-bold">{lesson.order}</span>}
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary">{lesson.title}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <Clock size={12} className="text-text-muted" />
              <span className="text-xs text-text-muted">{lesson.estReadMin} min read</span>
            </div>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-4 animate-fade-in">
          <div className="prose text-text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.bodyMarkdown}</ReactMarkdown>
          </div>

          {lesson.mnCallout && <MNCallout text={lesson.mnCallout} />}

          {lesson.mnemonics && lesson.mnemonics.length > 0 && (
            <div className="bg-warning/10 rounded-card p-3 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={16} className="text-warning" />
                <span className="text-xs font-bold text-warning uppercase tracking-wider">Memory Hook</span>
              </div>
              {lesson.mnemonics.map((m, i) => (
                <p key={i} className="text-sm text-text-primary">{m}</p>
              ))}
            </div>
          )}

          {lesson.keyTerms.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-text-secondary mb-2">Key Terms</h4>
              <div className="grid gap-2">
                {lesson.keyTerms.map((kt) => (
                  <KeyTermChip key={kt.term} term={kt} />
                ))}
              </div>
            </div>
          )}

          {lesson.videoEmbeds?.map((v) => (
            <VideoEmbed key={v.youtubeId} video={v} />
          ))}

          {lesson.externalLinks && lesson.externalLinks.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-text-secondary mb-2">Resources</h4>
              <div className="flex flex-col gap-1">
                {lesson.externalLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
            {!complete && (
              <Button
                onClick={() => markLessonComplete(lesson.moduleId, lesson.id, totalLessons)}
                size="sm"
              >
                <Check size={16} className="mr-1" />
                Mark Complete
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleBookmark(lesson.id)}
              aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {bookmarked ? <BookmarkCheck size={16} className="text-primary" /> : <Bookmark size={16} />}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
