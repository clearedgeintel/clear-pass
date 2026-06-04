import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const g3: Module = {
  id: 'g3',
  domain: 'general',
  title: 'The Insurance Producer',
  summary: 'Agent authority, fiduciary duties, fair sales practices, and prohibited acts like twisting and rebating.',
  order: 3,
  lessons: [
    {
      id: 'g3-l1',
      moduleId: 'g3',
      title: 'Types of Agent Authority',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `As an insurance producer, you act on behalf of an insurer — but the scope of what you can do depends on the type of **authority** granted to you. Understanding these distinctions is critical both for the exam and for your career.

**Express authority** is explicitly granted in writing, typically through your agent contract. **Implied authority** covers actions that are customary or necessary to carry out your express authority (like quoting premiums or collecting applications). **Apparent authority** arises when the insurer's actions lead the public to reasonably believe you have authority you technically don't — and the insurer can be bound by it.`,
      keyTerms: [
        { term: 'Express Authority', def: 'Authority explicitly granted to an agent in writing, usually through the agency contract.' },
        { term: 'Implied Authority', def: 'Authority to perform acts that are customary or necessary to carry out express authority.' },
        { term: 'Apparent Authority', def: 'Authority that a reasonable person would believe the agent has, based on the insurer\'s actions or representations.' },
        { term: 'Fiduciary Duty', def: 'The legal obligation to act in the best interest of another party — producers hold client premiums in a fiduciary capacity.' },
      ],
      mnCallout: 'Minnesota requires that all premium funds collected by a producer be held in a segregated trust account. Commingling personal and premium funds is a violation of fiduciary duty.',
    },
    {
      id: 'g3-l2',
      moduleId: 'g3',
      title: 'Prohibited Practices',
      order: 2,
      estReadMin: 8,
      bodyMarkdown: `Insurance regulation exists to protect consumers. Several sales practices are explicitly prohibited, and you need to know each one for the exam.

**Twisting** is persuading a policyholder to replace an existing policy through misrepresentation. **Churning** is similar but involves an agent replacing policies within the same company to generate commissions. **Rebating** is returning part of your commission to the client as an inducement to buy. **Misrepresentation** is making false statements about a policy. **Coercion** is using threats or force to compel someone to buy insurance.

These prohibited practices carry serious penalties including fines, license revocation, and potential criminal charges.`,
      keyTerms: [
        { term: 'Twisting', def: 'Using misrepresentation to convince a policyholder to replace an existing policy — illegal in all states.' },
        { term: 'Churning', def: 'Excessive replacing of policies within the same company to generate commissions for the agent.' },
        { term: 'Rebating', def: 'Giving back part of the agent\'s commission or offering other inducements not stated in the policy as incentive to purchase.' },
        { term: 'Misrepresentation', def: 'Making false or misleading statements about a policy\'s terms, benefits, or conditions.' },
        { term: 'Coercion', def: 'Using threats, intimidation, or force to compel the purchase of insurance.' },
        { term: 'Defamation', def: 'Making false statements that damage another insurer\'s or producer\'s reputation.' },
      ],
      mnCallout: 'Minnesota law (§72A.20) specifically prohibits unfair trade practices including twisting, rebating, and misrepresentation, with penalties up to license revocation and fines.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
