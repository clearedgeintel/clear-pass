import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const l4: Module = {
  id: 'l4',
  domain: 'life',
  title: 'Group Life Insurance',
  summary: 'How employer-sponsored group life coverage works — eligibility, conversion rights, and key differences from individual policies.',
  order: 8,
  lessons: [
    {
      id: 'l4-l1',
      moduleId: 'l4',
      title: 'Group Life Fundamentals',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `**Group life insurance** is coverage provided to a group of people under a single master policy, most commonly offered by employers as a workplace benefit. The employer (or organization) is the policyholder; the employees are the insureds who receive certificates of insurance rather than individual policies.

Key characteristics: group life typically uses **simplified underwriting** (no medical exam for most employees), coverage amounts are often tied to salary multiples (e.g., 1x or 2x annual salary), and the employer usually pays part or all of the premium. The most common form is **group term life**, though some employers offer group permanent coverage.

One critical right: **conversion privilege** allows an employee leaving the group to convert their group coverage to an individual policy without proving insurability — usually within 31 days of leaving the group.`,
      keyTerms: [
        { term: 'Master Policy', def: 'The single contract issued to the group policyholder (usually the employer) — individual group members receive certificates of insurance.' },
        { term: 'Certificate of Insurance', def: 'The document given to each insured group member summarizing their coverage under the master policy.' },
        { term: 'Conversion Privilege', def: 'The right of a group member to convert group coverage to an individual policy without evidence of insurability when leaving the group.' },
        { term: 'Contributory Plan', def: 'A group plan where employees pay part of the premium — typically requires 75% participation.' },
        { term: 'Noncontributory Plan', def: 'A group plan where the employer pays the entire premium — requires 100% participation.' },
      ],
      mnCallout: 'Minnesota requires a 31-day conversion period for employees leaving a group life plan. The employer must notify departing employees of their conversion rights.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
