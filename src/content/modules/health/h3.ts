import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const h3: Module = {
  id: 'h3',
  domain: 'health',
  title: 'Health Policy Provisions & Clauses',
  summary: 'Mandatory and optional uniform provisions, coordination of benefits, elimination periods, and pre-existing condition rules.',
  order: 12,
  lessons: [
    {
      id: 'h3-l1',
      moduleId: 'h3',
      title: 'Mandatory Uniform Provisions',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `Health insurance policies must include certain **mandatory uniform provisions** that protect the policyholder. These are standardized across states (with minor variations) so that consumers have baseline protections regardless of which insurer they choose.

Key mandatory provisions include the **entire contract clause** (the policy and attached application are the entire contract), **time limit on certain defenses** (the insurer cannot void the policy for misstatements after 2 years, except for fraud), **grace period** (31 days for most health policies), **reinstatement** (a reinstated policy covers accidents immediately but has a 10-day waiting period for sickness), and **claims provisions** (notice of claim, claim forms, proof of loss, time for payment).

These provisions form the backbone of consumer protection in health insurance, and you should expect several exam questions on them.`,
      keyTerms: [
        { term: 'Entire Contract Clause', def: 'The policy, application, and any attached riders constitute the entire contract — no outside documents can modify it.' },
        { term: 'Time Limit on Certain Defenses', def: 'After 2 years (3 years in some states), the insurer cannot void a health policy based on misstatements in the application, except for fraudulent misstatements.' },
        { term: 'Grace Period (Health)', def: 'A period (typically 31 days) after the premium due date during which coverage remains in force and the policyholder can pay without penalty.' },
        { term: 'Reinstatement', def: 'Restoring a lapsed health policy — covers accidents immediately, but sickness coverage has a 10-day waiting period after reinstatement.' },
        { term: 'Proof of Loss', def: 'Written documentation of a claim that must be submitted within 90 days of the loss (the insurer has 45 days to pay after receiving proof).' },
      ],
      mnCallout: 'Minnesota follows the NAIC model for mandatory uniform provisions. The grace period for health policies in MN is 31 days for monthly-premium policies.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
