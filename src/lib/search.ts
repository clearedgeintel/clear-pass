import type { Module } from '@/types/content';

export interface SearchResult {
  type: 'lesson' | 'term' | 'flashcard';
  moduleId: string;
  moduleTitle: string;
  title: string;
  snippet: string;
  lessonId?: string;
  cardId?: string;
}

/** Search across all modules for a query string. Returns ranked results. */
export function searchContent(
  modules: Module[],
  query: string
): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const mod of modules) {
    // Search lessons
    for (const lesson of mod.lessons) {
      // Search lesson title
      if (lesson.title.toLowerCase().includes(q)) {
        results.push({
          type: 'lesson',
          moduleId: mod.id,
          moduleTitle: mod.title,
          title: lesson.title,
          snippet: lesson.bodyMarkdown.slice(0, 120) + '...',
          lessonId: lesson.id,
        });
      }

      // Search lesson body
      const bodyLower = lesson.bodyMarkdown.toLowerCase();
      const idx = bodyLower.indexOf(q);
      if (idx !== -1) {
        const start = Math.max(0, idx - 40);
        const end = Math.min(bodyLower.length, idx + q.length + 80);
        const snippet = (start > 0 ? '...' : '') +
          lesson.bodyMarkdown.slice(start, end) +
          (end < bodyLower.length ? '...' : '');

        // Avoid duplicate if title already matched
        if (!results.find((r) => r.lessonId === lesson.id && r.type === 'lesson')) {
          results.push({
            type: 'lesson',
            moduleId: mod.id,
            moduleTitle: mod.title,
            title: lesson.title,
            snippet,
            lessonId: lesson.id,
          });
        }
      }

      // Search key terms
      for (const kt of lesson.keyTerms) {
        if (
          kt.term.toLowerCase().includes(q) ||
          kt.def.toLowerCase().includes(q)
        ) {
          results.push({
            type: 'term',
            moduleId: mod.id,
            moduleTitle: mod.title,
            title: kt.term,
            snippet: kt.def.slice(0, 120),
            lessonId: lesson.id,
          });
        }
      }
    }

    // Search flashcards
    for (const card of mod.flashcards) {
      if (
        card.front.toLowerCase().includes(q) ||
        card.back.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'flashcard',
          moduleId: mod.id,
          moduleTitle: mod.title,
          title: card.front,
          snippet: card.back.slice(0, 120),
          cardId: card.id,
        });
      }
    }
  }

  return results;
}
