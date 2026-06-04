import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const mn2: Module = {
  id: 'mn2',
  domain: 'mn_law',
  title: 'Minnesota Producer Licensing',
  summary: 'Licensing requirements, lines of authority, appointment, CE requirements (24 hrs/2 yrs including ethics), and license renewal.',
  order: 16,
  lessons: [
    {
      id: 'mn2-l1',
      moduleId: 'mn2',
      title: 'Licensing Requirements & Lines of Authority',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `To sell insurance in Minnesota, you must obtain a **producer license** from the Department of Commerce. The process involves completing a **state-approved pre-licensing education course**, passing the state licensing exam administered by Pearson VUE, submitting a license application, passing a background check, and paying the required fees.

Minnesota issues licenses by **line of authority** — the types of insurance you're permitted to sell. For life, accident & health, the main lines are **Life**, **Accident & Health (or Sickness)**, and **Variable Products** (requires additional FINRA registration). You can hold multiple lines on a single license.

Once licensed, a producer must be **appointed** by at least one insurer within a specified time frame. The insurer files the appointment with the Department of Commerce. When the relationship ends, the insurer must file a **termination notice**.`,
      keyTerms: [
        { term: 'Producer License', def: 'The state authorization required to sell, solicit, or negotiate insurance in Minnesota.' },
        { term: 'Line of Authority', def: 'The specific type(s) of insurance a producer is licensed to sell (e.g., Life, Accident & Health, Variable Products).' },
        { term: 'Appointment', def: 'The authorization from a specific insurer for a producer to act as their agent — must be filed with the Department of Commerce.' },
        { term: 'Pre-Licensing Education', def: 'State-approved coursework that must be completed before taking the licensing exam — 40 hours for Life, Accident & Health in MN.' },
        { term: 'Continuing Education (CE)', def: 'Ongoing education required to maintain a license — 24 hours every 2 years in MN, including ethics hours.' },
      ],
      mnCallout: 'Minnesota requires 24 hours of CE every 2 years, including a minimum of ethics credit hours. CE must be completed through approved providers. Failure to complete CE by the renewal deadline results in license lapse.',
      externalLinks: [
        { label: 'MN Commerce — Insurance Licensing', url: 'https://mn.gov/commerce/industries/insurance/licensing/' },
        { label: 'Pearson VUE — MN Insurance Exams', url: 'https://home.pearsonvue.com/mncommerce' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
