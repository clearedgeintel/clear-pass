import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const l3: Module = {
  id: 'l3',
  domain: 'life',
  title: 'Riders, Provisions, Options & Exclusions',
  summary: 'Policy add-ons, nonforfeiture options, dividend options, settlement options, and key policy provisions like grace period and incontestability.',
  order: 7,
  lessons: [
    {
      id: 'l3-l1',
      moduleId: 'l3',
      title: 'Common Life Insurance Riders',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `**Riders** are optional add-ons that modify or enhance base policy coverage. They add benefits (and cost) beyond what the standard policy provides. Think of them as upgrades to a base model.

The most common life insurance riders include **waiver of premium** (waives premiums if you become disabled), **accidental death benefit** (pays extra if death is accidental — often called "double indemnity"), **guaranteed insurability** (lets you buy more coverage at set dates without proving health), and **accelerated death benefit** (lets you access part of the death benefit if diagnosed with a terminal illness).

Newer riders include **long-term care riders** that let you use part of the death benefit for LTC expenses and **return of premium** riders that refund premiums if you outlive a term policy.`,
      keyTerms: [
        { term: 'Waiver of Premium', def: 'A rider that waives premium payments if the insured becomes totally disabled — typically requires a waiting period of 6 months.' },
        { term: 'Accidental Death Benefit (ADB)', def: 'Pays an additional death benefit (often double) if the insured dies as a result of an accident.' },
        { term: 'Guaranteed Insurability Rider', def: 'Allows the insured to purchase additional coverage at specified dates or events without evidence of insurability.' },
        { term: 'Accelerated Death Benefit', def: 'Allows the insured to receive a portion of the death benefit while still living if diagnosed with a terminal, chronic, or critical illness.' },
      ],
      mnCallout: 'Minnesota requires that accelerated death benefit provisions be offered with all individual life policies. The insured must be informed of potential tax implications and effects on public assistance eligibility.',
    },
    {
      id: 'l3-l2',
      moduleId: 'l3',
      title: 'Nonforfeiture Options & Policy Provisions',
      order: 2,
      estReadMin: 9,
      bodyMarkdown: `When you stop paying premiums on a permanent life insurance policy with cash value, you don't necessarily lose everything. **Nonforfeiture options** protect the policyholder's accumulated value.

The three standard nonforfeiture options are: **cash surrender** (take the cash value as a lump sum and end the policy), **reduced paid-up** (use the cash value to buy a smaller whole life policy with no more premiums due), and **extended term** (use the cash value to buy term coverage for the original face amount — coverage lasts as long as the cash value can fund it).

Key policy provisions tested on the exam include the **grace period** (31 days for life), **reinstatement** (restoring a lapsed policy), **incontestability clause** (insurer cannot contest the policy after 2 years), and the **suicide clause** (no death benefit for suicide within first 2 years).`,
      keyTerms: [
        { term: 'Cash Surrender Value', def: 'The amount of money available to the policy owner if the policy is voluntarily terminated before maturity or the insured event occurs.' },
        { term: 'Reduced Paid-Up', def: 'A nonforfeiture option that uses the cash value to purchase a smaller whole life policy with no further premium payments required.' },
        { term: 'Extended Term', def: 'A nonforfeiture option that uses the cash value to purchase term insurance for the original face amount — duration depends on available cash value.' },
        { term: 'Grace Period', def: 'A period after the premium due date (31 days for life insurance) during which coverage continues even though the premium hasn\'t been paid.' },
        { term: 'Incontestability Clause', def: 'After the policy has been in force for 2 years, the insurer cannot void it based on misstatements in the application (except non-payment of premiums).' },
        { term: 'Reinstatement', def: 'Restoring a lapsed policy to its original status — typically requires paying back premiums, proving insurability, and reinstating within 3-5 years.' },
      ],
      mnCallout: 'Minnesota law requires all three nonforfeiture options to be included in permanent life policies. The default nonforfeiture option (if the policyholder doesn\'t choose) is extended term insurance.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
