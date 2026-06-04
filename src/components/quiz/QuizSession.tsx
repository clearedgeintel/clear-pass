import { clsx } from 'clsx';
import { Check, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formatTimer } from '@/lib/utils';
import type { QuizQuestion } from '@/types/content';

interface QuizSessionProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedChoice: number | null;
  showFeedback: boolean;
  timeRemaining: number | null;
  onSelectChoice: (index: number) => void;
  onSubmit: () => void;
  onNext: () => void;
}

export function QuizSession({
  question,
  questionIndex,
  totalQuestions,
  selectedChoice,
  showFeedback,
  timeRemaining,
  onSelectChoice,
  onSubmit,
  onNext,
}: QuizSessionProps) {
  const progress = ((questionIndex) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-text-muted">
          Question {questionIndex + 1} of {totalQuestions}
        </span>
        {timeRemaining !== null && (
          <div className="flex items-center gap-1 text-text-secondary">
            <Clock size={14} />
            <span className={clsx(
              'text-sm font-mono',
              timeRemaining < 300 && 'text-danger font-bold'
            )}>
              {formatTimer(timeRemaining)}
            </span>
          </div>
        )}
      </div>

      <ProgressBar value={progress} size="sm" className="mb-6" />

      <Card>
        <p className="text-base font-medium text-text-primary mb-4">{question.stem}</p>

        <div className="flex flex-col gap-2">
          {question.choices.map((choice, i) => {
            const isSelected = selectedChoice === i;
            const isCorrect = i === question.correctIndex;

            return (
              <button
                key={i}
                onClick={() => !showFeedback && onSelectChoice(i)}
                disabled={showFeedback}
                className={clsx(
                  'w-full text-left p-3 rounded-card border transition-colors',
                  !showFeedback && isSelected && 'border-primary bg-primary/5',
                  !showFeedback && !isSelected && 'border-border hover:border-primary/30',
                  showFeedback && isCorrect && 'border-success bg-success/10',
                  showFeedback && isSelected && !isCorrect && 'border-danger bg-danger/10',
                  showFeedback && !isCorrect && !isSelected && 'border-border opacity-50',
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={clsx(
                    'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold',
                    showFeedback && isCorrect ? 'bg-success text-white' :
                    showFeedback && isSelected && !isCorrect ? 'bg-danger text-white' :
                    isSelected ? 'bg-primary text-white' : 'bg-surface-alt text-text-muted'
                  )}>
                    {showFeedback && isCorrect ? <Check size={14} /> :
                     showFeedback && isSelected && !isCorrect ? <X size={14} /> :
                     String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-text-primary">{choice}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-4 p-3 bg-surface-alt rounded-card animate-fade-in">
            <p className="text-sm text-text-secondary">{question.explanation}</p>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          {!showFeedback ? (
            <Button
              onClick={onSubmit}
              disabled={selectedChoice === null}
            >
              Submit
            </Button>
          ) : (
            <Button onClick={onNext}>
              {questionIndex + 1 >= totalQuestions ? 'Finish' : 'Next'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
