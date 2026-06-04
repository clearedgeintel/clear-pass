import { useNavigate } from 'react-router-dom';
import { Flame, Zap, Award, Layers, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ReadinessGauge } from '@/components/dashboard/ReadinessGauge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { useProgress } from '@/contexts/ProgressContext';
import { allModules } from '@/content/modules';
import { getExamReadiness, getWeakestDomain, getDomainBreakdown, domainLabel } from '@/lib/scoring';
import { getDueCount } from '@/lib/sm2';
import { BADGES } from '@/config';
import type { Domain } from '@/types/content';

export function DashboardPage() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  const readiness = getExamReadiness(allModules, progress);
  const weakest = getWeakestDomain(allModules, progress);
  const domainBreakdown = getDomainBreakdown(allModules, progress);
  const dueCards = getDueCount(progress.flashcardStates);
  const earnedBadges = BADGES.filter((b) => progress.earnedBadgeIds.includes(b.id));

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {/* Readiness + Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="flex items-center justify-center py-6">
          <ReadinessGauge score={readiness} />
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <div className="flex items-center gap-2 text-text-secondary mb-1">
              <Flame size={16} className="text-warning" />
              <span className="text-xs">Streak</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">
              {progress.currentStreak}
            </p>
            <p className="text-xs text-text-muted">
              Best: {progress.longestStreak}
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-2 text-text-secondary mb-1">
              <Zap size={16} className="text-primary" />
              <span className="text-xs">XP</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">
              {progress.xp.toLocaleString()}
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-2 text-text-secondary mb-1">
              <Award size={16} className="text-success" />
              <span className="text-xs">Badges</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">
              {earnedBadges.length}
            </p>
            <p className="text-xs text-text-muted">of {BADGES.length}</p>
          </Card>

          <Card
            className="cursor-pointer hover:border-primary/30 transition-colors"
            onClick={() => navigate('/flashcards/due')}
          >
            <div className="flex items-center gap-2 text-text-secondary mb-1">
              <Layers size={16} />
              <span className="text-xs">Due</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">{dueCards}</p>
            <p className="text-xs text-text-muted">flashcards</p>
          </Card>
        </div>
      </div>

      {/* Domain Breakdown */}
      <Card>
        <h2 className="text-sm font-semibold text-text-secondary mb-3">Domain Mastery</h2>
        <div className="flex flex-col gap-3">
          {(Object.entries(domainBreakdown) as [Domain, number][]).map(([domain, mastery]) => (
            <div key={domain}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-text-primary">{domainLabel(domain)}</span>
                <span className="text-xs text-text-muted">{mastery}%</span>
              </div>
              <ProgressBar
                value={mastery}
                size="sm"
                color={mastery >= 70 ? 'success' : mastery >= 40 ? 'warning' : 'danger'}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Weakest Domain CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-primary font-medium uppercase tracking-wider">Weakest Area</p>
            <p className="text-base font-semibold text-text-primary mt-0.5">
              {domainLabel(weakest.domain)} — {weakest.mastery}%
            </p>
            <p className="text-sm text-text-secondary mt-0.5">
              Focus here to boost your readiness score.
            </p>
          </div>
          <Button
            size="sm"
            onClick={() => navigate('/modules')}
          >
            Drill <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </Card>

      {/* Badges */}
      {earnedBadges.length > 0 && (
        <Card>
          <h2 className="text-sm font-semibold text-text-secondary mb-3">Badges Earned</h2>
          <div className="flex flex-wrap gap-2">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-1.5 bg-surface-alt rounded-full px-3 py-1.5"
                title={badge.description}
              >
                <span>{badge.icon}</span>
                <span className="text-xs font-medium text-text-primary">{badge.name}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => navigate('/quiz/mock')}
        >
          Mock Exam
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => navigate('/modules')}
        >
          Study Modules
        </Button>
      </div>
    </div>
  );
}
