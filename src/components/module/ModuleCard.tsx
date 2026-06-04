import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useProgress } from '@/contexts/ProgressContext';
import type { Module } from '@/types/content';
import { DOMAIN_INFO } from '@/content/course';

export function ModuleCard({ module }: { module: Module }) {
  const navigate = useNavigate();
  const { progress } = useProgress();
  const mp = progress.moduleProgress[module.id];
  const completed = mp?.completedLessonIds.length ?? 0;
  const total = module.lessons.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const domainInfo = DOMAIN_INFO[module.domain];

  return (
    <Card
      className="cursor-pointer hover:border-primary/30 transition-colors"
      onClick={() => navigate(`/modules/${module.id}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/modules/${module.id}`)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className={`text-xs font-medium ${domainInfo.color}`}>
            {domainInfo.label}
          </span>
          <h3 className="text-base font-semibold text-text-primary mt-0.5 truncate">
            {module.title}
          </h3>
          <p className="text-sm text-text-secondary mt-1 line-clamp-2">
            {module.summary}
          </p>
          <div className="flex items-center gap-3 mt-3">
            <ProgressBar value={pct} size="sm" className="flex-1" />
            <span className="text-xs text-text-muted flex items-center gap-1">
              <BookOpen size={12} />
              {completed}/{total}
            </span>
          </div>
        </div>
        <ChevronRight size={20} className="text-text-muted flex-shrink-0 mt-1" />
      </div>
    </Card>
  );
}
