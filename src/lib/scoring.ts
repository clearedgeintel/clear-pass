import type { UserProgress, ModuleProgress } from '@/types/progress';
import type { Module, Domain } from '@/types/content';
import { DOMAIN_WEIGHTS } from '@/config';

/** Calculate mastery percentage for a single module (0-100). */
export function getModuleMastery(
  module: Module,
  progress: ModuleProgress | undefined
): number {
  if (!progress || module.lessons.length === 0) return 0;

  const lessonCompletion =
    progress.completedLessonIds.length / module.lessons.length;
  const quizScore = progress.quizHighScore / 100;

  // 60% lesson completion, 40% quiz performance
  return Math.round((lessonCompletion * 0.6 + quizScore * 0.4) * 100);
}

/** Calculate domain mastery across all modules in that domain (0-100). */
export function getDomainMastery(
  domain: Domain,
  modules: Module[],
  progress: UserProgress
): number {
  const domainModules = modules.filter((m) => m.domain === domain);
  if (domainModules.length === 0) return 0;

  const total = domainModules.reduce((sum, mod) => {
    return sum + getModuleMastery(mod, progress.moduleProgress[mod.id]);
  }, 0);

  return Math.round(total / domainModules.length);
}

/** Calculate overall exam readiness (0-100), weighted by domain. */
export function getExamReadiness(
  modules: Module[],
  progress: UserProgress
): number {
  const domains: Domain[] = ['general', 'life', 'health', 'mn_law'];

  const weighted = domains.reduce((sum, domain) => {
    const mastery = getDomainMastery(domain, modules, progress);
    return sum + mastery * DOMAIN_WEIGHTS[domain];
  }, 0);

  return Math.round(weighted);
}

/** Get all domain masteries. */
export function getDomainBreakdown(
  modules: Module[],
  progress: UserProgress
): Record<Domain, number> {
  return {
    general: getDomainMastery('general', modules, progress),
    life: getDomainMastery('life', modules, progress),
    health: getDomainMastery('health', modules, progress),
    mn_law: getDomainMastery('mn_law', modules, progress),
  };
}

/** Find the weakest domain. */
export function getWeakestDomain(
  modules: Module[],
  progress: UserProgress
): { domain: Domain; mastery: number } {
  const breakdown = getDomainBreakdown(modules, progress);
  let weakest: Domain = 'general';
  let lowest = 101;

  for (const [domain, mastery] of Object.entries(breakdown)) {
    if (mastery < lowest) {
      lowest = mastery;
      weakest = domain as Domain;
    }
  }

  return { domain: weakest, mastery: lowest };
}

/** Pretty domain label. */
export function domainLabel(domain: Domain): string {
  const labels: Record<Domain, string> = {
    general: 'General',
    life: 'Life',
    health: 'Health',
    mn_law: 'MN Law',
  };
  return labels[domain];
}
