import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const mn1: Module = {
  id: 'mn1',
  domain: 'mn_law',
  title: 'Minnesota Insurance Regulation',
  summary: 'The MN Department of Commerce, the Commissioner\'s powers, and market conduct oversight.',
  order: 15,
  lessons: [
    {
      id: 'mn1-l1',
      moduleId: 'mn1',
      title: 'The MN Department of Commerce',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `Insurance in Minnesota is regulated by the **Minnesota Department of Commerce**, headed by the **Commissioner of Commerce**. The Commissioner is appointed by the Governor (not elected) and has broad powers over the insurance industry in the state.

The Commissioner's powers include licensing producers and agencies, examining insurers' financial conditions, conducting **market conduct examinations** (reviews of an insurer's sales practices, claims handling, and advertising), approving policy forms and rates, and taking enforcement actions against violations.

The Department of Commerce protects consumers by ensuring insurers are financially solvent, producers are properly licensed and ethical, and insurance products sold in Minnesota meet state requirements.`,
      keyTerms: [
        { term: 'Commissioner of Commerce', def: 'The head of the MN Department of Commerce who regulates insurance — appointed by the Governor, not elected.' },
        { term: 'Market Conduct Examination', def: 'A review by the Department of Commerce of an insurer\'s business practices including sales, underwriting, claims handling, and advertising.' },
        { term: 'Certificate of Authority', def: 'The authorization an insurer must obtain from the Commissioner to sell insurance in Minnesota.' },
      ],
      mnCallout: 'The MN Department of Commerce website (mn.gov/commerce) is a key resource for licensing information, filing complaints, and verifying producer licenses.',
      externalLinks: [
        { label: 'MN Department of Commerce — Insurance', url: 'https://mn.gov/commerce/industries/insurance/' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
