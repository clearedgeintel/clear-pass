import type { Module } from '@/types/content';

import { g1 } from './general/g1';
import { g2 } from './general/g2';
import { g3 } from './general/g3';
import { g4 } from './general/g4';
import { l1 } from './life/l1';
import { l2 } from './life/l2';
import { l3 } from './life/l3';
import { l4 } from './life/l4';
import { l5 } from './life/l5';
import { h1 } from './health/h1';
import { h2 } from './health/h2';
import { h3 } from './health/h3';
import { h4 } from './health/h4';
import { h5 } from './health/h5';
import { mn1 } from './mn_law/mn1';
import { mn2 } from './mn_law/mn2';
import { mn3 } from './mn_law/mn3';
import { mn4 } from './mn_law/mn4';

/** All modules in curriculum order. */
export const allModules: Module[] = [
  g1, g2, g3, g4,
  l1, l2, l3, l4, l5,
  h1, h2, h3, h4, h5,
  mn1, mn2, mn3, mn4,
];

/** Lookup module by ID. */
export const moduleMap: Record<string, Module> = Object.fromEntries(
  allModules.map((m) => [m.id, m])
);

/** Get modules for a specific domain. */
export function getModulesByDomain(domain: string): Module[] {
  return allModules.filter((m) => m.domain === domain);
}

/** Get all flashcards across all modules. */
export function getAllFlashcards() {
  return allModules.flatMap((m) => m.flashcards);
}

/** Get all quiz questions across all modules. */
export function getAllQuizQuestions() {
  return allModules.flatMap((m) => m.quizQuestions);
}
