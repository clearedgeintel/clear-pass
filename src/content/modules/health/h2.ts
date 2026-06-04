import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const h2: Module = {
  id: 'h2',
  domain: 'health',
  title: 'Social Insurance Programs',
  summary: 'Medicare Parts A/B/C/D, Medicaid, Social Security disability, and ACA basics including metal tiers and essential health benefits.',
  order: 11,
  lessons: [
    {
      id: 'h2-l1',
      moduleId: 'h2',
      title: 'Medicare Overview',
      order: 1,
      estReadMin: 9,
      bodyMarkdown: `**Medicare** is the federal health insurance program for people age 65 and older, people under 65 with certain disabilities, and people with End-Stage Renal Disease (ESRD). It has four parts, each covering different services.

**Part A (Hospital Insurance)** covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health care. Most people get Part A premium-free because they (or a spouse) paid Medicare taxes while working. **Part B (Medical Insurance)** covers doctor visits, outpatient care, preventive services, and medical equipment. Part B requires a monthly premium.

**Part C (Medicare Advantage)** is an alternative way to get Parts A and B through private insurance companies approved by Medicare — often includes prescription drug coverage and extras like dental and vision. **Part D (Prescription Drug Coverage)** is available as a standalone plan or bundled into Part C.`,
      keyTerms: [
        { term: 'Medicare Part A', def: 'Hospital insurance — covers inpatient hospital care, skilled nursing, hospice, and some home health. Usually premium-free for those who paid Medicare taxes.' },
        { term: 'Medicare Part B', def: 'Medical insurance — covers outpatient care, doctor visits, preventive services, and durable medical equipment. Requires a monthly premium.' },
        { term: 'Medicare Part C', def: 'Medicare Advantage — private insurance plans that provide Parts A & B benefits, often with extra coverage like dental and vision.' },
        { term: 'Medicare Part D', def: 'Prescription drug coverage — available standalone or through Medicare Advantage plans.' },
        { term: 'Medigap', def: 'Medicare Supplement Insurance — private policies that help pay for costs Original Medicare doesn\'t cover (deductibles, copays, coinsurance).' },
      ],
      mnCallout: 'Minnesota is one of three states (with Massachusetts and Wisconsin) that uses its own standardized Medigap plans instead of the standard federal plan letters. MN Medigap plans are called Basic, Extended Basic, and Extended.',
    },
    {
      id: 'h2-l2',
      moduleId: 'h2',
      title: 'ACA Basics & Medicaid',
      order: 2,
      estReadMin: 7,
      bodyMarkdown: `The **Affordable Care Act (ACA)** made sweeping changes to health insurance. Key provisions include guaranteed issue (can't deny coverage for pre-existing conditions), community rating (can't charge more based on health status), essential health benefits requirements, and the creation of health insurance marketplaces.

ACA marketplace plans use **metal tiers** to indicate coverage levels: **Bronze** (60% actuarial value), **Silver** (70%), **Gold** (80%), and **Platinum** (90%). Higher tiers mean higher premiums but lower out-of-pocket costs.

**Medicaid** is a joint federal-state program providing health coverage to low-income individuals and families. Unlike Medicare, Medicaid is means-tested (based on income and assets). Minnesota expanded Medicaid under the ACA, and the state's Medicaid program is called **Medical Assistance (MA)**.`,
      keyTerms: [
        { term: 'Essential Health Benefits', def: 'Ten categories of services that ACA marketplace plans must cover, including emergency care, maternity, mental health, and prescription drugs.' },
        { term: 'Metal Tiers', def: 'ACA marketplace plan categories (Bronze/Silver/Gold/Platinum) based on how costs are shared between the plan and the member.' },
        { term: 'Guaranteed Issue', def: 'Under the ACA, health insurers cannot deny coverage based on pre-existing conditions or health status.' },
        { term: 'Medicaid', def: 'A joint federal-state program providing health coverage to eligible low-income individuals — means-tested and administered by each state.' },
      ],
      mnCallout: 'Minnesota\'s health insurance marketplace is called MNsure (mnsure.org). The state\'s Medicaid program is Medical Assistance (MA), and MinnesotaCare provides coverage for residents who earn too much for MA but still need affordable coverage.',
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
