import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const h5: Module = {
  id: 'h5',
  domain: 'health',
  title: 'Group Health Insurance',
  summary: 'Employer-sponsored group health plans, COBRA continuation, eligibility rules, and conversion rights.',
  order: 14,
  lessons: [
    {
      id: 'h5-l1',
      moduleId: 'h5',
      title: 'Group Health Fundamentals & COBRA',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `**Group health insurance** works similarly to group life — a master policy is issued to the employer, and employees receive certificates of coverage. Group health typically provides more comprehensive benefits at lower per-person costs than individual policies due to risk pooling.

**COBRA (Consolidated Omnibus Budget Reconciliation Act)** is a federal law that allows employees and their dependents to continue group health coverage after a qualifying event (job loss, reduction in hours, divorce, etc.). COBRA applies to employers with 20+ employees. The individual pays up to 102% of the full premium (employee + employer share, plus a 2% admin fee).

COBRA coverage lasts 18 months for job loss/hour reduction and 36 months for other qualifying events like divorce, death of the covered employee, or a dependent aging out.`,
      keyTerms: [
        { term: 'COBRA', def: 'Federal law allowing employees to continue group health coverage for 18-36 months after a qualifying event — applies to employers with 20+ employees.' },
        { term: 'Qualifying Event', def: 'An event (job loss, divorce, death, etc.) that triggers the right to COBRA continuation coverage.' },
        { term: 'Conversion Privilege', def: 'The right to convert group health coverage to an individual policy without evidence of insurability when leaving the group or when COBRA expires.' },
      ],
      mnCallout: 'Minnesota has a state continuation law (sometimes called "mini-COBRA") that extends coverage to employees of smaller employers (2-19 employees) not covered by federal COBRA. MN continuation lasts up to 18 months.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
