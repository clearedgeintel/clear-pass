import { getAllQuizQuestions } from '@/content/modules';
import { EXAM_CONFIG } from '@/config';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { QuizSession } from '@/components/quiz/QuizSession';
import { QuizResults } from '@/components/quiz/QuizResults';
import { useQuiz } from '@/hooks/useQuiz';
import { AlertTriangle, Clock, Target, Hash } from 'lucide-react';

export function MockExamPage() {
  const allQuestions = getAllQuizQuestions();
  const config = EXAM_CONFIG.combined;
  const quiz = useQuiz(allQuestions, 'mock', config.timeLimitMinutes);

  if (quiz.phase === 'config') {
    return (
      <div className="max-w-md mx-auto py-8 animate-fade-in">
        <h1 className="text-xl font-bold text-text-primary text-center mb-2">Full Mock Exam</h1>
        <p className="text-text-secondary text-center mb-6">{config.label}</p>

        <Card className="mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Hash size={18} className="text-text-muted" />
              <span className="text-sm text-text-primary">
                {config.questionCount} questions (or all available: {allQuestions.length})
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-text-muted" />
              <span className="text-sm text-text-primary">
                {config.timeLimitMinutes} minute time limit
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Target size={18} className="text-text-muted" />
              <span className="text-sm text-text-primary">
                {config.passPercentage}% to pass
              </span>
            </div>
          </div>
        </Card>

        <div className="bg-warning/10 border border-warning/20 rounded-card p-3 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} className="text-warning flex-shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              This simulates the real exam experience. Find a quiet spot, set aside{' '}
              {config.timeLimitMinutes} minutes, and treat it like the real thing.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={() => quiz.startQuiz(Math.min(config.questionCount, allQuestions.length))}
        >
          Start Exam
        </Button>
      </div>
    );
  }

  if (quiz.phase === 'review' && quiz.result) {
    return (
      <QuizResults
        result={quiz.result}
        questions={quiz.shuffledQuestions}
        answers={quiz.answers}
        onRetry={() => quiz.setPhase('config')}
      />
    );
  }

  if (quiz.currentQuestion) {
    return (
      <QuizSession
        question={quiz.currentQuestion}
        questionIndex={quiz.currentIndex}
        totalQuestions={quiz.totalQuestions}
        selectedChoice={quiz.selectedChoice}
        showFeedback={quiz.showFeedback}
        timeRemaining={quiz.timeRemaining}
        onSelectChoice={quiz.setSelectedChoice}
        onSubmit={quiz.submitAnswer}
        onNext={quiz.nextQuestion}
      />
    );
  }

  return null;
}
