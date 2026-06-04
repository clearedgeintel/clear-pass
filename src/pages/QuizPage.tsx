import { useParams, useNavigate } from 'react-router-dom';
import { moduleMap, allModules } from '@/content/modules';
import { DOMAIN_INFO } from '@/content/course';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { QuizSession } from '@/components/quiz/QuizSession';
import { QuizResults } from '@/components/quiz/QuizResults';
import { useQuiz } from '@/hooks/useQuiz';
import { Brain, ChevronRight } from 'lucide-react';

function ModuleQuiz({ moduleId }: { moduleId: string }) {
  const mod = moduleMap[moduleId];
  const navigate = useNavigate();

  if (!mod || mod.quizQuestions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted">
          {mod ? 'No quiz questions available yet for this module.' : 'Module not found.'}
        </p>
        <Button variant="ghost" onClick={() => navigate('/quiz')} className="mt-4">
          Back to Quizzes
        </Button>
      </div>
    );
  }

  const quiz = useQuiz(mod.quizQuestions, mod.id);

  if (quiz.phase === 'config') {
    return (
      <div className="text-center py-8 animate-fade-in">
        <h1 className="text-xl font-bold text-text-primary mb-2">{mod.title} Quiz</h1>
        <p className="text-text-secondary mb-6">{mod.quizQuestions.length} questions</p>
        <Button size="lg" onClick={() => quiz.startQuiz()}>Start Quiz</Button>
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
        timeRemaining={null}
        onSelectChoice={quiz.setSelectedChoice}
        onSubmit={quiz.submitAnswer}
        onNext={quiz.nextQuestion}
      />
    );
  }

  return null;
}

export function QuizPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  if (moduleId) {
    return <ModuleQuiz moduleId={moduleId} />;
  }

  // Quiz picker
  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold text-text-primary mb-4">Quizzes</h1>

      {/* Mock Exam */}
      <Card
        className="mb-4 cursor-pointer hover:border-primary/30 transition-colors"
        onClick={() => navigate('/quiz/mock')}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Brain size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Full Mock Exam</h3>
              <p className="text-sm text-text-muted">135 questions, 180 min, 70% to pass</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-text-muted" />
        </div>
      </Card>

      <h2 className="text-sm font-semibold text-text-secondary mb-3 mt-6">By Module</h2>
      <div className="flex flex-col gap-2">
        {allModules
          .filter((m) => m.quizQuestions.length > 0)
          .map((mod) => {
            const domainInfo = DOMAIN_INFO[mod.domain];
            return (
              <Card
                key={mod.id}
                className="cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => navigate(`/quiz/${mod.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-xs font-medium ${domainInfo.color}`}>
                      {domainInfo.label}
                    </span>
                    <h3 className="text-sm font-semibold text-text-primary">{mod.title}</h3>
                    <p className="text-xs text-text-muted">{mod.quizQuestions.length} questions</p>
                  </div>
                  <ChevronRight size={18} className="text-text-muted" />
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
