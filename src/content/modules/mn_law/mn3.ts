import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const mn3: Module = {
  id: 'mn3',
  domain: 'mn_law',
  title: 'MN Unfair Trade Practices',
  summary: 'Minnesota-specific rules on advertising, policy replacement, suitability, anti-fraud provisions, and privacy.',
  order: 17,
  lessons: [
    {
      id: 'mn3-l1',
      moduleId: 'mn3',
      title: 'Unfair Trade Practices Under MN Law',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `Minnesota statutes (primarily under **Chapter 72A**) define specific unfair trade practices that go beyond the general prohibitions covered in the producer module. These Minnesota-specific rules carry significant penalties.

**Unfair claims settlement practices** include failing to promptly investigate claims, denying claims without a reasonable basis, and not attempting fair settlement when liability is clear. **Unfair discrimination** means treating similarly-situated applicants differently based on factors not related to actuarial risk. **False advertising** includes any advertisement that misrepresents the benefits, conditions, or terms of a policy.

Minnesota also has specific **replacement rules** requiring producers to determine whether a proposed sale will replace existing coverage. If it will, additional disclosure requirements apply, including providing a replacement notice to the applicant and notifying the existing insurer.`,
      keyTerms: [
        { term: 'Unfair Claims Settlement', def: 'Practices like failing to investigate claims promptly, denying claims without reasonable basis, or not offering fair settlements when liability is clear.' },
        { term: 'Unfair Discrimination', def: 'Treating similarly-situated applicants differently based on non-actuarial factors — different from illegal discrimination based on protected classes.' },
        { term: 'Replacement Rules', def: 'MN regulations requiring disclosure and notification procedures when a new policy will replace an existing one.' },
        { term: 'False Advertising', def: 'Any insurance advertisement that is misleading, deceptive, or misrepresents policy terms, benefits, or conditions.' },
      ],
      mnCallout: 'MN Chapter 72A covers unfair trade practices. Violations can result in cease-and-desist orders, fines up to $25,000 per violation, and license revocation.',
      externalLinks: [
        { label: 'MN Statutes Chapter 72A — Unfair Claims Practices', url: 'https://www.revisor.mn.gov/statutes/cite/72A' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
