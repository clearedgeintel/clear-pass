import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { domainLabel } from '@/lib/scoring';
import { formatTimer } from '@/lib/utils';
import type { QuizResult } from '@/types/progress';
import type { QuizQuestion, Domain } from '@/types/content';
import { Trophy, Clock, Target, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface QuizResultsProps {
  result: QuizResult;
  questions: QuizQuestion[];
  answers: Array<{ questionId: string; selectedIndex: number; isCorrect: boolean }>;
  onRetry: () => void;
}

export function QuizResults({ result, questions, answers, onRetry }: QuizResultsProps) {
  const [showMissed, setShowMissed] = useState(false);
  const passed = result.percentage >= 70;

  const missedQuestions = questions.filter((q) =>
    result.missedQuestionIds.includes(q.id)
  );

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${passed ? 'bg-success/20' : 'bg-danger/20'} mb-3`}>
          <Trophy size={36} className={passed ? 'text-success' : 'text-danger'} />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">
          {passed ? 'Passed!' : 'Keep Studying'}
        </h2>
        <p className="text-text-secondary mt-1">
          {result.score} / {result.total} correct ({result.percentage}%)
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card>
          <div className="flex items-center gap-2 text-text-secondary">
            <Target size={16} />
            <span className="text-sm">Score</span>
          </div>
          <p className="text-2xl font-bold text-text-primary mt-1">{result.percentage}%</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-text-secondary">
            <Clock size={16} />
            <span className="text-sm">Time</span>
          </div>
          <p className="text-2xl font-bold text-text-primary mt-1">
            {formatTimer(result.timeSpentSeconds)}
          </p>
        </Card>
      </div>

      <Card className="mb-6">
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Domain Breakdown</h3>
        <div className="flex flex-col gap-3">
          {Object.entries(result.domainBreakdown).map(([domain, { correct, total }]) => {
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
            return (
              <div key={domain}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-text-primary">{domainLabel(domain as Domain)}</span>
                  <span className="text-sm text-text-muted">{correct}/{total} ({pct}%)</span>
                </div>
                <ProgressBar
                  value={pct}
                  size="sm"
                  color={pct >= 70 ? 'success' : pct >= 50 ? 'warning' : 'danger'}
                />
              </div>
            );
          })}
        </div>
      </Card>

      {missedQuestions.length > 0 && (
        <Card className="mb-6">
          <button
            onClick={() => setShowMissed(!showMissed)}
            className="w-full flex items-center justify-between"
          >
            <h3 className="text-sm font-semibold text-text-secondary">
              Missed Questions ({missedQuestions.length})
            </h3>
            {showMissed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showMissed && (
            <div className="mt-4 flex flex-col gap-4 animate-fade-in">
              {missedQuestions.map((q) => {
                const answer = answers.find((a) => a.questionId === q.id);
                return (
                  <div key={q.id} className="border-t border-border pt-3">
                    <p className="text-sm font-medium text-text-primary mb-2">{q.stem}</p>
                    <p className="text-sm text-danger mb-1">
                      Your answer: {q.choices[answer?.selectedIndex ?? 0]}
                    </p>
                    <p className="text-sm text-success mb-2">
                      Correct: {q.choices[q.correctIndex]}
                    </p>
                    <p className="text-xs text-text-secondary">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      )}

      <div className="flex justify-center">
        <Button onClick={onRetry} variant="secondary">
          <RotateCcw size={16} className="mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
