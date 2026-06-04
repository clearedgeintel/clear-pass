import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const mn4: Module = {
  id: 'mn4',
  domain: 'mn_law',
  title: 'MN-Specific Life & Health Provisions',
  summary: 'Minnesota-specific policy requirements, free-look periods, grace periods, and consumer protections unique to MN.',
  order: 18,
  lessons: [
    {
      id: 'mn4-l1',
      moduleId: 'mn4',
      title: 'MN Life & Health Policy Requirements',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `Minnesota has several state-specific provisions that go beyond or differ from general insurance law. These are heavily tested on the MN portion of the licensing exam.

**Free-look periods**: MN requires a **10-day free-look period** for most life and health policies. For **Medicare supplement** and **replacement** policies, the free-look period extends to **30 days**. During the free-look period, the policyholder can return the policy for a full refund.

**Grace periods**: Life insurance policies must include a **31-day grace period** for premium payment. Health insurance grace periods are also 31 days for monthly-premium policies.

**Accelerated death benefits**: Minnesota requires that all individual life insurance policies include an accelerated death benefit provision, allowing terminally ill policyholders to access a portion of their death benefit.

**Domestic abuse protections**: MN prohibits insurers from denying, canceling, or limiting coverage based on a person's status as a victim of domestic abuse.`,
      keyTerms: [
        { term: 'MN Free-Look Period', def: '10 days for most policies, 30 days for Medicare supplement and replacement policies — policyholder can return for a full refund.' },
        { term: 'MN Grace Period', def: '31 days for life insurance and monthly-premium health insurance — coverage continues during this period.' },
        { term: 'Accelerated Death Benefit (MN)', def: 'MN mandates this provision in all individual life policies — allows early access to death benefit for terminal illness.' },
        { term: 'Domestic Abuse Protection', def: 'MN law prohibits insurers from using domestic abuse status as a basis for denying, limiting, or pricing coverage.' },
      ],
      mnCallout: 'These MN-specific provisions are heavily tested. Remember: 10-day free look (standard), 30-day free look (Medicare supplement/replacement), 31-day grace period.',
      externalLinks: [
        { label: 'MN Statutes Chapter 61A — Life Insurance', url: 'https://www.revisor.mn.gov/statutes/cite/61A' },
        { label: 'MN Department of Commerce — Consumer Resources', url: 'https://mn.gov/commerce/consumers/insurance/' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
