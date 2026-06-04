import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const g4: Module = {
  id: 'g4',
  domain: 'general',
  title: 'Application, Underwriting & Delivery',
  summary: 'The insurance process from application to policy delivery — field underwriting, MIB, FCRA, HIPAA, and the free-look period.',
  order: 4,
  lessons: [
    {
      id: 'g4-l1',
      moduleId: 'g4',
      title: 'The Application Process & Field Underwriting',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `The application is the foundation of the insurance contract. As a producer, you perform **field underwriting** — the initial screening of an applicant before the application reaches the home office.

Field underwriting includes completing the application accurately, asking required health questions, collecting the initial premium, and noting any observations about the applicant. The application typically has three parts: **Part 1** (general information — name, address, occupation, coverage requested), **Part 2** (medical history and health questions), and sometimes **Part 3** (the agent's report with personal observations).

The **Medical Information Bureau (MIB)** is a nonprofit that member insurers use to share coded medical information. It helps prevent fraud and misrepresentation but does NOT make underwriting decisions — it's just a flag system.`,
      keyTerms: [
        { term: 'Field Underwriting', def: 'The initial risk assessment performed by the producer during the application process — includes completing the app, noting observations, and collecting the premium.' },
        { term: 'MIB (Medical Information Bureau)', def: 'A nonprofit that stores coded medical data submitted by member insurers to detect fraud — it does NOT make underwriting decisions.' },
        { term: 'Fair Credit Reporting Act (FCRA)', def: 'Federal law requiring insurers to notify applicants if a consumer report is used in an adverse decision and allowing them to dispute inaccurate information.' },
        { term: 'HIPAA', def: 'Federal law protecting the privacy of individual health information — limits how insurers can use and share medical data.' },
      ],
      mnCallout: 'Minnesota follows FCRA requirements and has additional state-level privacy protections. Applicants must be informed if an investigative consumer report will be ordered.',
    },
    {
      id: 'g4-l2',
      moduleId: 'g4',
      title: 'Policy Delivery, Effective Date & Free Look',
      order: 2,
      estReadMin: 7,
      bodyMarkdown: `Once a policy is approved, it must be **delivered** to the policyholder. Delivery can happen in person, by mail, or electronically. At delivery, the producer should explain the policy, collect any remaining premium, and obtain a signed delivery receipt.

The **effective date** is when coverage begins. If the applicant paid the initial premium with the application and received a conditional receipt, coverage may be effective from the date of the application (or the date of the medical exam, if later). Otherwise, coverage begins on the delivery date.

The **free-look period** gives the policyholder a window to review the policy and return it for a full refund if they're not satisfied — no questions asked.`,
      keyTerms: [
        { term: 'Policy Delivery', def: 'The act of providing the completed policy to the insured — can be in person, by mail, or electronic.' },
        { term: 'Conditional Receipt', def: 'A receipt given when the first premium is collected with the application — coverage may begin immediately, subject to the applicant being found insurable.' },
        { term: 'Effective Date', def: 'The date coverage begins under the policy.' },
        { term: 'Free-Look Period', def: 'A window after policy delivery during which the policyholder can return the policy for a full refund.' },
      ],
      mnCallout: 'Minnesota requires a 10-day free-look period for most life and health policies. For replacement policies and Medicare supplement policies, the free-look period is 30 days.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
