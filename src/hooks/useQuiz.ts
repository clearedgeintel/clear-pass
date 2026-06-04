import { useState, useCallback, useRef, useEffect } from 'react';
import type { QuizQuestion } from '@/types/content';
import type { QuizResult } from '@/types/progress';
import { useProgress } from '@/contexts/ProgressContext';
import { shuffle, uid } from '@/lib/utils';

type QuizPhase = 'config' | 'active' | 'review';

interface QuizAnswer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}

export function useQuiz(
  questions: QuizQuestion[],
  moduleId: string,
  timeLimitMinutes?: number
) {
  const { saveQuizResult } = useProgress();
  const [phase, setPhase] = useState<QuizPhase>('config');
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const startTimeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const autoFinishRef = useRef(false);

  const finishQuiz = useCallback(() => {
    clearInterval(timerRef.current);
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
    const correct = answers.filter((a) => a.isCorrect).length;
    const total = shuffledQuestions.length;

    const domainBreakdown: Record<string, { correct: number; total: number }> = {};
    shuffledQuestions.forEach((q, i) => {
      if (!domainBreakdown[q.domain]) {
        domainBreakdown[q.domain] = { correct: 0, total: 0 };
      }
      domainBreakdown[q.domain].total++;
      if (answers[i]?.isCorrect) {
        domainBreakdown[q.domain].correct++;
      }
    });

    const quizResult: QuizResult = {
      id: uid(),
      moduleId,
      date: new Date().toISOString(),
      score: correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
      domainBreakdown,
      missedQuestionIds: answers.filter((a) => !a.isCorrect).map((a) => a.questionId),
      timeSpentSeconds: timeSpent,
    };

    setResult(quizResult);
    saveQuizResult(quizResult);
    setPhase('review');
  }, [answers, shuffledQuestions, moduleId, saveQuizResult]);

  // Timer
  useEffect(() => {
    if (phase === 'active' && timeLimitMinutes) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            autoFinishRef.current = true;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [phase, timeLimitMinutes]);

  // Auto-submit when timer runs out
  useEffect(() => {
    if (autoFinishRef.current) {
      autoFinishRef.current = false;
      finishQuiz();
    }
  }, [timeRemaining, finishQuiz]);

  const startQuiz = useCallback((questionCount?: number) => {
    let selected = shuffle(questions);
    if (questionCount && questionCount < selected.length) {
      selected = selected.slice(0, questionCount);
    }
    setShuffledQuestions(selected);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedChoice(null);
    setShowFeedback(false);
    setResult(null);
    autoFinishRef.current = false;
    startTimeRef.current = Date.now();
    if (timeLimitMinutes) {
      setTimeRemaining(timeLimitMinutes * 60);
    }
    setPhase('active');
  }, [questions, timeLimitMinutes]);

  const submitAnswer = useCallback(() => {
    if (selectedChoice === null || !shuffledQuestions[currentIndex]) return;

    const q = shuffledQuestions[currentIndex];
    const isCorrect = selectedChoice === q.correctIndex;

    setAnswers((prev) => [...prev, {
      questionId: q.id,
      selectedIndex: selectedChoice,
      isCorrect,
    }]);
    setShowFeedback(true);
  }, [selectedChoice, shuffledQuestions, currentIndex]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= shuffledQuestions.length) {
      finishQuiz();
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  }, [currentIndex, shuffledQuestions.length, finishQuiz]);

  const currentQuestion = shuffledQuestions[currentIndex] ?? null;

  return {
    phase,
    currentQuestion,
    currentIndex,
    totalQuestions: shuffledQuestions.length,
    selectedChoice,
    showFeedback,
    timeRemaining,
    result,
    answers,
    shuffledQuestions,
    setSelectedChoice,
    startQuiz,
    submitAnswer,
    nextQuestion,
    setPhase,
  };
}
