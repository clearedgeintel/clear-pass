import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Brain, Layers, BookOpenText } from 'lucide-react';
import { moduleMap } from '@/content/modules';
import { DOMAIN_INFO } from '@/content/course';
import { LessonCard } from '@/components/module/LessonCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { useProgress } from '@/contexts/ProgressContext';
import { formatReadTime } from '@/lib/utils';

export function ModuleDetailPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { progress } = useProgress();

  const mod = moduleId ? moduleMap[moduleId] : undefined;
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

  const mp = progress.moduleProgress[mod.id];
  const completed = mp?.completedLessonIds.length ?? 0;
  const total = mod.lessons.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const domainInfo = DOMAIN_INFO[mod.domain];
  const totalReadTime = mod.lessons.reduce((sum, l) => sum + l.estReadMin, 0);

  return (
    <div className="animate-fade-in">
      {/* Module Header */}
      <div className="mb-6">
        <span className={`text-xs font-medium ${domainInfo.color}`}>
          {domainInfo.label}
        </span>
        <h1 className="text-xl font-bold text-text-primary mt-1">{mod.title}</h1>
        <p className="text-sm text-text-secondary mt-1">{mod.summary}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-text-muted">
          <span className="flex items-center gap-1">
            <BookOpen size={14} /> {total} lessons
          </span>
          <span>{formatReadTime(totalReadTime)} total</span>
        </div>

        <div className="mt-3">
          <ProgressBar value={pct} showLabel />
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(`/reader/${mod.id}`)}
          >
            <BookOpenText size={14} className="mr-1" /> Reader Mode
          </Button>
          {mod.flashcards.length > 0 && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate(`/flashcards/${mod.id}`)}
            >
              <Layers size={14} className="mr-1" /> Flashcards ({mod.flashcards.length})
            </Button>
          )}
          {mod.quizQuestions.length > 0 && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate(`/quiz/${mod.id}`)}
            >
              <Brain size={14} className="mr-1" /> Quiz ({mod.quizQuestions.length}q)
            </Button>
          )}
        </div>
      </div>

      {/* Lessons */}
      <div className="flex flex-col gap-4">
        {mod.lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            totalLessons={total}
          />
        ))}
      </div>
    </div>
  );
}
