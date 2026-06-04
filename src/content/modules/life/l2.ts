import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const l2: Module = {
  id: 'l2',
  domain: 'life',
  title: 'Annuities',
  summary: 'Fixed, variable, and indexed annuities — accumulation vs payout phases, settlement options, and suitability requirements.',
  order: 6,
  lessons: [
    {
      id: 'l2-l1',
      moduleId: 'l2',
      title: 'Annuity Fundamentals',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `While life insurance protects against dying too soon, **annuities** protect against the risk of **living too long** — outliving your savings. An annuity is a contract between an individual and an insurance company where the insurer promises periodic payments, either for a specific period or for the annuitant's lifetime.

Annuities have two phases: the **accumulation phase** (when you're putting money in and it grows) and the **annuity phase** (when the insurer starts making payments to you). The shift between these phases is called **annuitization**.

There are several ways to classify annuities: by when payments begin (**immediate** vs **deferred**), by how the money grows (**fixed** vs **variable** vs **indexed**), and by how the premium is paid (**single premium** vs **flexible premium**).`,
      keyTerms: [
        { term: 'Annuity', def: 'A contract with an insurer that provides periodic income payments — the opposite of life insurance (protects against outliving savings).' },
        { term: 'Accumulation Phase', def: 'The period during which the annuity owner makes contributions and the funds grow tax-deferred.' },
        { term: 'Annuity (Payout) Phase', def: 'The period during which the insurer makes periodic payments to the annuitant.' },
        { term: 'Annuitization', def: 'The point at which the annuity converts from accumulation to the payout phase — typically irreversible.' },
        { term: 'Immediate Annuity', def: 'Payments begin within one payment period (usually 30 days) after a single lump-sum premium.' },
        { term: 'Deferred Annuity', def: 'Payments begin at some future date — allows time for tax-deferred accumulation.' },
      ],
      mnCallout: 'Minnesota requires a suitability review for all annuity sales. Producers must have reasonable grounds for believing the annuity is suitable for the consumer based on their financial situation and needs.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
