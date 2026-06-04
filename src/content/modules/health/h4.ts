import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const h4: Module = {
  id: 'h4',
  domain: 'health',
  title: 'Disability & Other Health Concepts',
  summary: 'Types of disability, occupational vs non-occupational coverage, taxation of health benefits, managed care, and subrogation.',
  order: 13,
  lessons: [
    {
      id: 'h4-l1',
      moduleId: 'h4',
      title: 'Understanding Disability Definitions',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `The definition of "disability" in an insurance policy determines when benefits are paid — and these definitions vary significantly. Understanding the differences is crucial.

**Total disability** means the insured cannot perform the duties of their own occupation (the "own occupation" definition) or any occupation for which they are reasonably suited by education, training, or experience (the "any occupation" definition). Most policies use own-occ for the first 2 years, then switch to any-occ.

**Partial disability** means the insured can perform some but not all duties. **Residual disability** measures the loss of income — if you return to work but earn less due to your disability, residual benefits make up the difference. **Recurrent disability** is the same or related disability that returns after a period of recovery.`,
      keyTerms: [
        { term: 'Total Disability', def: 'The insured is completely unable to perform the duties of their occupation (or any occupation, depending on the policy definition).' },
        { term: 'Partial Disability', def: 'The insured can perform some but not all duties of their occupation.' },
        { term: 'Residual Disability', def: 'A disability that results in a loss of income — benefits are proportional to the percentage of income lost.' },
        { term: 'Recurrent Disability', def: 'A disability caused by the same or related condition that returns after the insured had recovered — may not require a new elimination period.' },
        { term: 'Own Occupation', def: 'A disability definition that pays benefits when the insured cannot perform the specific duties of their own occupation.' },
        { term: 'Any Occupation', def: 'A stricter disability definition that only pays when the insured cannot perform any occupation for which they are reasonably qualified.' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
