import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const g2: Module = {
  id: 'g2',
  domain: 'general',
  title: 'Contract Law',
  summary: 'The legal foundations of insurance contracts — what makes them enforceable and unique.',
  order: 2,
  lessons: [
    {
      id: 'g2-l1',
      moduleId: 'g2',
      title: 'Elements of a Valid Contract',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `Insurance policies are **legal contracts**, and like any contract they must meet specific requirements to be enforceable. Understanding these elements helps you grasp why applications, premiums, and policy delivery work the way they do.

Every valid insurance contract requires four elements: **offer and acceptance**, **consideration**, **competent parties**, and **legal purpose**. In insurance, the applicant usually makes the offer (by submitting the application), and the insurer accepts it (by issuing the policy). Consideration is the exchange of value — the applicant's premium payment in exchange for the insurer's promise to pay claims.

This lesson covers each element in detail, plus the unique characteristics that make insurance contracts different from a typical business agreement.`,
      keyTerms: [
        { term: 'Offer and Acceptance', def: 'The two-part process of one party proposing terms and the other agreeing — in insurance, the application is typically the offer.' },
        { term: 'Consideration', def: 'Something of value exchanged by each party — the premium from the insured, the promise to pay from the insurer.' },
        { term: 'Competent Parties', def: 'Both parties must be legally capable of entering a contract — of legal age, sound mind, and (for insurers) authorized to do business.' },
        { term: 'Legal Purpose', def: 'A contract must be for a lawful objective — you cannot insure illegal activity.' },
      ],
      mnCallout: 'In Minnesota, the age of majority for contract purposes is 18. A minor cannot enter into a binding insurance contract.',
    },
    {
      id: 'g2-l2',
      moduleId: 'g2',
      title: 'Unique Characteristics of Insurance Contracts',
      order: 2,
      estReadMin: 10,
      bodyMarkdown: `Insurance contracts have several characteristics that set them apart from ordinary agreements. These come up frequently on the licensing exam, so pay close attention.

An insurance contract is a **contract of adhesion** — the insurer drafts the entire policy, and the applicant either takes it or leaves it. Because of this, courts interpret ambiguous language in favor of the insured. Insurance is also an **aleatory** contract, meaning the dollar amounts exchanged are unequal — you might pay $500/year in premiums and receive a $250,000 death benefit.

Other key characteristics include **unilateral** (only the insurer is legally bound to perform), **conditional** (benefits depend on meeting certain conditions), and the principle of **utmost good faith** (both parties must deal honestly).`,
      keyTerms: [
        { term: 'Adhesion', def: 'A take-it-or-leave-it contract drafted entirely by one party — ambiguities are interpreted against the drafter (the insurer).' },
        { term: 'Aleatory', def: 'A contract where the values exchanged are unequal and depend on an uncertain event.' },
        { term: 'Unilateral', def: 'Only one party (the insurer) makes an enforceable promise; the policyholder can stop paying at any time.' },
        { term: 'Conditional', def: 'The insurer\'s obligation to pay depends on the insured meeting specific conditions (paying premiums, filing claims properly, etc.).' },
        { term: 'Utmost Good Faith', def: 'Both parties must deal honestly and disclose all material information.' },
      ],
    },
    {
      id: 'g2-l3',
      moduleId: 'g2',
      title: 'Representations, Warranties & Concealment',
      order: 3,
      estReadMin: 7,
      bodyMarkdown: `When applying for insurance, the statements you make matter — but how much they matter depends on whether they're classified as representations or warranties.

**Representations** are statements believed to be true to the best of the applicant's knowledge. They don't have to be perfectly accurate — just substantially true. **Warranties** are statements guaranteed to be absolutely true. In practice, most statements on insurance applications are treated as representations, not warranties, which protects consumers.

**Concealment** is the intentional failure to disclose a material fact. If an applicant hides a known health condition, the insurer may have grounds to void the policy. The key word is "material" — the hidden information must be something that would have changed the insurer's decision.`,
      keyTerms: [
        { term: 'Representation', def: 'A statement made by the applicant believed to be true — must be substantially (not perfectly) accurate.' },
        { term: 'Warranty', def: 'A statement guaranteed to be exactly true — any breach can void the contract (rarely used in modern insurance).' },
        { term: 'Concealment', def: 'The intentional hiding of a material fact during the application process.' },
        { term: 'Material Fact', def: 'Information that would influence the insurer\'s decision to issue or price a policy.' },
        { term: 'Misrepresentation', def: 'A false statement on an application — if material and intentional, it can void the policy.' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
