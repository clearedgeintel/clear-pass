import type { Module } from '@/types/content';

export const h1: Module = {
  id: 'h1',
  domain: 'health',
  title: 'Types of Health Insurance Policies',
  summary:
    'Covers every major category of health insurance you will see on the MN exam: disability income, AD&D, medical expense plans, managed care (HMO/PPO/POS/EPO), HSAs, Medicare supplement, long-term care, and specialty coverages like critical illness and hospital indemnity.',
  order: 1,

  // ─────────────────────────── LESSONS ───────────────────────────
  lessons: [
    // ── Lesson 1: Disability Income ──────────────────────────────
    {
      id: 'h1-l1',
      moduleId: 'h1',
      title: 'Disability Income Insurance',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `
## Why Disability Income Insurance Exists

Most people insure their house and car but skip the asset that pays for everything else: their ability to earn a living. **Disability income (DI) insurance** replaces a portion of your paycheck when an illness or injury keeps you from working.

### Short-Term vs. Long-Term Disability

| Feature | **Short-Term Disability (STD)** | **Long-Term Disability (LTD)** |
|---|---|---|
| Elimination (waiting) period | 0 -- 14 days | 90 -- 180 days |
| Benefit duration | Up to 6 months (sometimes 1--2 years) | 2 years, 5 years, or to age 65 |
| Typical benefit amount | 60--70 % of gross pay | 50--70 % of gross pay |
| Common funding | Employer self-funded or insured | Group or individual policy |

A **Duluth school teacher** who breaks her leg skiing might collect STD benefits for a few months while she heals, then never touch LTD. A **St. Paul electrician** who suffers a permanent back injury could exhaust STD and then transition onto an LTD policy that pays until he turns 65.

### Definition of Disability Matters

Policies define disability in two main ways:

- **Own-occupation ("own-occ"):** You are disabled if you cannot perform the duties of *your specific job*. A surgeon who loses fine motor control qualifies even if she could work a desk job.
- **Any-occupation ("any-occ"):** You are disabled only if you cannot perform *any job for which you are reasonably suited* by education, training, or experience.

Many LTD policies use a **split definition**: own-occ for the first 24 months, then any-occ after that.

### Business Uses of Disability Insurance

Disability coverage is not just personal. Businesses buy specialized forms:

1. **Business Overhead Expense (BOE):** Reimburses a business for its fixed costs (rent, utilities, employee salaries) while the owner is disabled. Benefits usually last 12--24 months. *Example: An Eagan small-business owner who runs a pet-grooming shop can keep the lights on and pay her two employees while she recovers from surgery.*

2. **Key Person Disability:** The *business* owns the policy and is the beneficiary. If a crucial employee becomes disabled, the company receives income to hire a replacement or cover lost revenue.

3. **Disability Buy-Sell (Buy-Out):** Funds a buy-sell agreement between business partners. If one partner becomes permanently disabled, the policy pays a lump sum or installments so the remaining partners can purchase the disabled partner's ownership share. This keeps the business running and gives the disabled partner fair value.

### Tax Treatment Snapshot

- **Individual DI policy (you pay premiums with after-tax dollars):** Benefits are received **tax-free**.
- **Employer-paid group DI:** Benefits are **taxable income** to the employee because the employer deducted the premiums.
- **BOE benefits:** The business deducts the premiums *and* the reimbursed expenses, but the benefits themselves offset deductible expenses, so the net tax effect is neutral.
`,
      keyTerms: [
        { term: 'Elimination Period', def: 'The waiting period after disability begins before benefits start paying. Longer elimination periods reduce premium cost.' },
        { term: 'Own-Occupation Disability', def: 'Definition that considers you disabled if you cannot perform the duties of your specific occupation.' },
        { term: 'Any-Occupation Disability', def: 'Definition that considers you disabled only if you cannot perform any job suited to your education, training, or experience.' },
        { term: 'Business Overhead Expense (BOE)', def: 'Disability policy that reimburses a business for fixed operating costs while the owner is disabled.' },
        { term: 'Key Person Disability', def: 'Policy owned by a business that pays the business when a key employee becomes disabled.' },
        { term: 'Disability Buy-Sell', def: 'Policy that funds the buyout of a disabled business partner\'s ownership interest under a buy-sell agreement.' },
        { term: 'Benefit Period', def: 'The maximum length of time disability benefits will be paid, such as 2 years, 5 years, or to age 65.' },
      ],
      mnemonics: [
        'BOE = "Business Only Expenses" -- it covers the business\'s bills, not the owner\'s personal income.',
        'STD is SHORT -- short wait, short payout. LTD is LONG -- long wait, long payout.',
        '"Own-occ, own job; Any-occ, any job." -- rhyme to keep the definitions straight.',
      ],
      mnCallout: 'Minnesota requires that individual disability income policies include a 10-day free-look period. Group DI certificates must follow MN statutes on required provisions, including a reasonable contestability period.',
      videoEmbeds: [
        { title: 'Disability Income Insurance Explained', youtubeId: 'TODO_DI_overview' }, // TODO: find suitable public video
      ],
      externalLinks: [
        { label: 'MN Dept. of Commerce -- Disability Insurance Guide', url: 'https://mn.gov/commerce/consumers/insurance/health/' },
      ],
    },

    // ── Lesson 2: AD&D ──────────────────────────────────────────
    {
      id: 'h1-l2',
      moduleId: 'h1',
      title: 'Accidental Death & Dismemberment (AD&D)',
      order: 2,
      estReadMin: 5,
      bodyMarkdown: `
## What AD&D Covers

**Accidental Death & Dismemberment (AD&D)** pays a benefit when an insured dies or loses a body part -- but *only* when the cause is an accident, not illness.

### Benefit Structure

AD&D policies set a **principal sum** (the face amount). Payouts are based on a **schedule of losses**:

| Loss | Typical Payout |
|---|---|
| Loss of life | 100 % of principal sum |
| Loss of both hands or both feet | 100 % |
| Loss of sight in both eyes | 100 % |
| Loss of one hand or one foot | 50 % |
| Loss of sight in one eye | 50 % |
| Loss of thumb and index finger on same hand | 25 % |

**"Loss"** usually means actual severance at or above a specified joint, or total and irrecoverable loss of use.

### What Counts as an Accident?

The loss must result from an **accidental bodily injury** -- an event that is sudden, unexpected, and external. Most policies require the loss to occur within **90 to 365 days** of the accident.

### Common Exclusions

AD&D does **not** pay for losses caused by:

- Illness or disease (a heart attack while driving is *not* an accident under most policies)
- Suicide or self-inflicted injury
- War or act of war
- Commission of a felony
- Drug or alcohol intoxication (policy language varies)
- Aviation (unless flying as a fare-paying passenger on a commercial airline)

### AD&D vs. Life Insurance

A common exam trap: AD&D is *not* a substitute for life insurance. It only pays for accidental causes, which account for a small fraction of all deaths. A **Rochester nurse** might carry a $500,000 life policy *and* a $100,000 AD&D rider. If she dies of cancer, only the life policy pays. If she dies in a car accident, both pay.

### Voluntary vs. Group AD&D

- **Employer-sponsored group AD&D** is often bundled with group life at no cost to the employee.
- **Voluntary AD&D** lets employees buy additional coverage through payroll deduction at group rates.
- **Individual AD&D** policies exist but are less common.

### Double and Triple Indemnity

Some policies include a **double indemnity** clause that pays 2x the principal sum if the death occurs under specific circumstances -- for example, as a fare-paying passenger on a common carrier (bus, airplane, train). A few older policies offer **triple indemnity** for common-carrier accidents, but this is rare today.
`,
      keyTerms: [
        { term: 'Principal Sum', def: 'The face amount of an AD&D policy -- the maximum benefit payable for loss of life or double dismemberment.' },
        { term: 'Schedule of Losses', def: 'A table in an AD&D policy listing each covered loss and the percentage of the principal sum payable.' },
        { term: 'Capital Sum', def: 'Another name for the dismemberment benefit amount, typically a percentage of the principal sum.' },
        { term: 'Common Carrier', def: 'A public transportation provider (airline, bus, train). Some AD&D policies pay extra if death occurs on a common carrier.' },
        { term: 'Double Indemnity', def: 'A provision that doubles the death benefit if death results from specific accidental circumstances.' },
        { term: 'Accidental Bodily Injury', def: 'An injury caused by an event that is sudden, unexpected, and external -- the trigger for AD&D benefits.' },
      ],
      mnemonics: [
        'AD&D = "Accidents Do it & Dismemberment" -- only accidents trigger payment, never illness.',
        'Principal sum = death; Capital sum = dismemberment.',
      ],
      mnCallout: 'Minnesota law prohibits unfair claim settlement practices. An AD&D insurer in MN cannot deny a claim by unreasonably redefining "accident." The MN Commerce Department reviews AD&D policy forms for compliance.',
      videoEmbeds: [
        { title: 'AD&D Insurance Basics', youtubeId: 'TODO_ADD_basics' }, // TODO: find suitable public video
      ],
      externalLinks: [
        { label: 'NAIC -- Accident & Health Insurance Overview', url: 'https://content.naic.org/cipr-topics/accident-and-health-insurance' },
      ],
    },

    // ── Lesson 3: Medical Expense & Managed Care ─────────────────
    {
      id: 'h1-l3',
      moduleId: 'h1',
      title: 'Medical Expense Insurance & Managed Care Plans',
      order: 3,
      estReadMin: 8,
      bodyMarkdown: `
## Medical Expense Insurance

**Medical expense insurance** pays for the cost of medical treatment -- doctor visits, hospital stays, surgery, prescriptions, and lab work. It is the broadest and most familiar type of health coverage.

### Major Medical

**Major medical insurance** is designed to cover a wide range of medical expenses with high benefit limits. It typically features:

- A **deductible** (the amount you pay before the plan starts paying)
- **Coinsurance** (you and the insurer split costs, e.g., 80/20)
- An **out-of-pocket maximum** (once you hit this ceiling, the plan pays 100 %)
- A broad list of covered services

Under the ACA, major medical plans sold on the individual and small-group market must cover **10 essential health benefits** including hospitalization, prescription drugs, maternity care, and mental health services.

### Managed Care: HMO vs. PPO vs. POS vs. EPO

Most Americans get medical coverage through a **managed care** arrangement. Here is how the four main types compare:

| Feature | **HMO** | **PPO** | **POS** | **EPO** |
|---|---|---|---|---|
| Network required? | Yes -- must use network | Preferred network, out-of-network allowed | Network + out-of-network option | Yes -- must use network |
| Primary Care Physician (PCP) required? | Yes | No | Yes | No |
| Referral needed for specialists? | Yes | No | Yes (in-network) | No |
| Out-of-network coverage? | **No** (except emergencies) | **Yes**, at higher cost | **Yes**, at higher cost | **No** (except emergencies) |
| Typical cost | Lowest premiums | Higher premiums | Mid-range | Mid-range |

**Memory hook -- "HMO: Hub Manages Orders":** Everything flows through your PCP hub. No referral, no coverage.

**PPO: "Pay for Preferred Options":** You pay less when you stay in-network, but you *can* go out.

**POS: "Point of Service choice":** At the *point* you need *service*, you choose in-network (HMO-style) or out-of-network (PPO-style).

**EPO: "Exclusive Provider Only":** Like an HMO minus the referral hassle, but still no out-of-network coverage.

### Minnesota Managed Care Landscape

Minnesota has a robust managed care market. Major HMO/managed care organizations operating in MN include **HealthPartners**, **Blue Cross Blue Shield of Minnesota**, **Medica**, and **UCare**. The MN Department of Commerce regulates insurance companies, while the MN Department of Health regulates HMOs.

*Example: A Bloomington family enrolled in a HealthPartners HMO must choose a PCP at a HealthPartners clinic. If their child needs to see a pediatric neurologist, the PCP writes a referral first.*

### HSA-Qualified High-Deductible Health Plans (HDHP)

A **High-Deductible Health Plan (HDHP)** is a medical plan with a higher-than-normal deductible. When paired with a **Health Savings Account (HSA)**, it offers triple tax advantages:

1. **Contributions are tax-deductible** (or pre-tax through payroll).
2. **Growth is tax-free** (interest, dividends, capital gains).
3. **Withdrawals for qualified medical expenses are tax-free.**

To open an HSA, you must be enrolled in an HDHP, have no other disqualifying coverage, not be enrolled in Medicare, and not be claimed as a dependent. HSA funds roll over indefinitely -- there is no "use it or lose it" rule (unlike an FSA).

*Example: A Mankato freelance graphic designer chooses an HDHP through MNsure (Minnesota's health insurance exchange) and contributes to an HSA each month. She uses HSA funds to pay her deductible when she visits the dentist or fills prescriptions.*
`,
      keyTerms: [
        { term: 'Deductible', def: 'The dollar amount the insured must pay out of pocket each year before the insurance plan begins paying benefits.' },
        { term: 'Coinsurance', def: 'The percentage split of costs between the insurer and the insured after the deductible is met (e.g., 80/20 means the insurer pays 80%).' },
        { term: 'Out-of-Pocket Maximum', def: 'The most the insured will pay in a plan year. Once reached, the plan covers 100% of eligible expenses.' },
        { term: 'HMO (Health Maintenance Organization)', def: 'A managed care plan requiring members to use network providers and get referrals from a primary care physician.' },
        { term: 'PPO (Preferred Provider Organization)', def: 'A managed care plan that offers lower costs for in-network providers but still covers out-of-network care at higher cost.' },
        { term: 'HDHP (High-Deductible Health Plan)', def: 'A health plan with a higher deductible than traditional plans, eligible to be paired with a Health Savings Account.' },
        { term: 'HSA (Health Savings Account)', def: 'A tax-advantaged savings account for medical expenses, available only to people enrolled in an HDHP.' },
        { term: 'MNsure', def: 'Minnesota\'s state-based health insurance exchange where individuals and small businesses shop for ACA-compliant plans.' },
      ],
      mnemonics: [
        'HMO = "Hub Manages Orders" -- PCP is the hub, you need a referral.',
        'PPO = "Pay for Preferred Options" -- you can go out-of-network, just costs more.',
        'EPO = "Exclusive Provider Only" -- network only, no referrals needed.',
        'POS = "Pick On the Spot" -- choose in or out of network at the point of service.',
        'HSA triple tax benefit = "In free, Grow free, Out free."',
      ],
      mnCallout: 'In Minnesota, HMOs are regulated by the **MN Department of Health**, while insurance companies (including those offering PPO plans) are regulated by the **MN Department of Commerce**. This split-regulation structure is a frequent exam topic. Also, MNsure is Minnesota\'s own ACA exchange -- know the name.',
      videoEmbeds: [
        { title: 'HMO vs PPO vs EPO vs POS Explained', youtubeId: 'TODO_managed_care' }, // TODO: find suitable public video
      ],
      externalLinks: [
        { label: 'MNsure -- Minnesota Health Insurance Exchange', url: 'https://www.mnsure.org/' },
        { label: 'MN Dept. of Health -- HMO Information', url: 'https://www.health.state.mn.us/facilities/insurance/managedcare/index.html' },
      ],
    },

    // ── Lesson 4: Medicare Supplement & Long-Term Care ────────────
    {
      id: 'h1-l4',
      moduleId: 'h1',
      title: 'Medicare Supplement (Medigap) & Long-Term Care Insurance',
      order: 4,
      estReadMin: 7,
      bodyMarkdown: `
## Medicare Supplement Insurance (Medigap)

**Medicare supplement insurance**, commonly called **Medigap**, is private insurance that helps pay costs that Original Medicare (Parts A and B) does not fully cover -- deductibles, copayments, and coinsurance.

### Standardized Plans

Federal law standardizes Medigap into lettered plans: **A, B, C, D, F, G, K, L, M, and N**. Every insurer selling Plan G, for example, must offer the exact same benefits -- only the premium can differ. Plans C and F are no longer available to people who became newly eligible for Medicare on or after January 1, 2020.

### Key Rules

- You must already be enrolled in **Medicare Parts A and B** to buy Medigap.
- Medigap does **not** cover prescription drugs -- you need a separate **Part D** plan for that.
- During the **6-month Medigap open enrollment period** (starts the month you turn 65 and are enrolled in Part B), insurers must sell you any plan at the standard rate regardless of health -- **guaranteed issue**.
- After open enrollment ends, insurers in most states can medically underwrite you. However, Minnesota has **extra consumer protections** (see MN Callout below).
- Medigap only supplements *Original* Medicare. If you join a **Medicare Advantage (Part C)** plan, you cannot also use Medigap.

### Minnesota Medigap Extras

Minnesota stands out: it mandates two additional standardized plans -- **Minnesota Basic** and **Minnesota Extended Basic** -- that are unique to the state. These plans satisfy federal requirements while including benefits tailored to MN residents.

*Example: A 66-year-old retiree in Brainerd enrolls in Original Medicare and buys a Medigap Plan G from Blue Cross Blue Shield of Minnesota. Her Plan G picks up the Part A coinsurance and the Part B 20% coinsurance, so she has very little out-of-pocket cost.*

---

## Long-Term Care (LTC) Insurance

**Long-term care insurance** pays for services that help people perform **activities of daily living (ADLs)** when they can no longer do so independently. These services can be provided in a nursing home, assisted living facility, adult day care, or in the insured's own home.

### Benefit Triggers

Most LTC policies require the insured to be unable to perform **at least 2 of the 6 ADLs** without substantial assistance, or to have a **severe cognitive impairment** (such as Alzheimer's disease).

The **6 ADLs** are:

1. **B**athing
2. **D**ressing
3. **E**ating
4. **T**oileting (continence)
5. **T**ransferring (moving from bed to chair)
6. **A**mbulating (walking / mobility)

**Mnemonic: "Big Dogs Eat Two Treats Always"** -- Bathing, Dressing, Eating, Toileting, Transferring, Ambulating.

### Key Policy Features

- **Elimination period:** Similar to disability insurance -- common choices are 30, 60, or 90 days. The insured pays out of pocket during this time.
- **Daily or monthly benefit:** For example, $200/day or $6,000/month.
- **Benefit period:** 2 years, 3 years, 5 years, or lifetime.
- **Inflation protection:** A rider that increases the daily benefit over time to keep pace with rising care costs. The **compound inflation rider** is more valuable but more expensive than a simple inflation rider.

### Minnesota LTC Partnership Program

Minnesota participates in the **Long-Term Care Partnership Program**. If you buy a Partnership-qualified LTC policy and exhaust its benefits, you can qualify for **Medicaid** while protecting assets equal to the amount of LTC benefits already paid. This is a major incentive to buy LTC coverage.

*Example: A 55-year-old Woodbury couple each buys a Partnership-qualified LTC policy with a $200,000 lifetime benefit. Years later, if one spouse uses $200,000 in LTC benefits and still needs care, he can apply for Medicaid while shielding $200,000 of personal assets from Medicaid spend-down.*

### Tax Treatment

- Premiums on **tax-qualified LTC policies** are deductible as medical expenses (subject to age-based limits and the 7.5% AGI floor).
- Benefits received from a tax-qualified policy are generally **tax-free** up to IRS per-diem limits.
`,
      keyTerms: [
        { term: 'Medigap', def: 'Private supplemental insurance that covers out-of-pocket costs (deductibles, copays, coinsurance) not paid by Original Medicare.' },
        { term: 'Guaranteed Issue', def: 'The requirement that an insurer accept an applicant without regard to health status, applicable during the Medigap open enrollment period.' },
        { term: 'Activities of Daily Living (ADLs)', def: 'The six basic self-care tasks (bathing, dressing, eating, toileting, transferring, ambulating) used to measure the need for long-term care.' },
        { term: 'Elimination Period (LTC)', def: 'The waiting period at the start of a long-term care claim during which the insured pays costs out of pocket.' },
        { term: 'LTC Partnership Program', def: 'A state-federal program allowing Partnership-qualified LTC policyholders to protect assets from Medicaid spend-down equal to benefits received.' },
        { term: 'Inflation Protection Rider', def: 'An optional LTC policy feature that automatically increases the daily benefit amount to keep pace with rising care costs.' },
        { term: 'Minnesota Basic Plan', def: 'A Medigap plan unique to Minnesota that satisfies federal standardization requirements with MN-specific benefit design.' },
      ],
      mnemonics: [
        '"Big Dogs Eat Two Treats Always" -- the 6 ADLs: Bathing, Dressing, Eating, Toileting, Transferring, Ambulating.',
        'Medigap open enrollment = "6 months starting at 65 + Part B." Miss it and you may face underwriting.',
        'Partnership LTC = "Use it, then protect it." Benefits paid = assets shielded from Medicaid.',
      ],
      mnCallout: 'Minnesota mandates two unique Medigap plans -- **Minnesota Basic** and **Minnesota Extended Basic** -- not available in other states. MN also has strong consumer protections for LTC insurance, including a required 30-day free-look period on LTC policies and restrictions on post-claims underwriting. The MN LTC Partnership Program lets residents protect assets dollar-for-dollar.',
      videoEmbeds: [
        { title: 'Understanding Medigap Plans', youtubeId: 'TODO_medigap_overview' }, // TODO: find suitable public video
        { title: 'Long-Term Care Insurance Explained', youtubeId: 'TODO_ltc_overview' }, // TODO: find suitable public video
      ],
      externalLinks: [
        { label: 'MN Dept. of Commerce -- Medicare Supplement Insurance', url: 'https://mn.gov/commerce/consumers/insurance/health/medicare/' },
        { label: 'MN Long-Term Care Partnership Program', url: 'https://mn.gov/dhs/people-we-serve/seniors/health-care/health-care-programs/programs-and-services/ltc-partnership.jsp' },
      ],
    },

    // ── Lesson 5: Specialty Health Coverages ─────────────────────
    {
      id: 'h1-l5',
      moduleId: 'h1',
      title: 'Dental, Vision, Critical Illness & Hospital Indemnity',
      order: 5,
      estReadMin: 6,
      bodyMarkdown: `
## Specialty Health Insurance Products

Beyond the "big" categories of medical expense, disability, and long-term care, several specialty products fill specific gaps. The exam expects you to know what each one does and how it differs from comprehensive medical insurance.

### Dental Insurance

**Dental insurance** covers preventive, basic, and major dental services. Most plans use a **100/80/50 structure**:

- **Preventive** (cleanings, exams): plan pays 100 %
- **Basic** (fillings, extractions): plan pays 80 %
- **Major** (crowns, bridges, root canals): plan pays 50 %

Dental plans typically have a low annual maximum (often $1,000 -- $2,000) and a small deductible. Orthodontia (braces) may have a separate lifetime max.

*Example: A Minneapolis marketing manager has employer-sponsored dental coverage with a $1,500 annual max. Her two cleanings are covered at 100 %, and when she needs a filling, the plan pays 80 % after a $50 deductible.*

### Vision Insurance

**Vision insurance** covers routine eye exams, lenses, frames, and contact lenses. It typically pays on a fixed schedule (e.g., one exam and one pair of glasses per year) and has a low premium. Vision insurance is separate from medical coverage for eye diseases or injuries, which would fall under a medical expense policy.

### Critical Illness Insurance

**Critical illness insurance** pays a **lump-sum benefit** when the insured is diagnosed with a covered condition. Common covered conditions include:

- Heart attack
- Stroke
- Cancer (often excluding early-stage)
- Organ transplant
- Kidney failure
- Coronary artery bypass

The insured can use the lump sum for **any purpose** -- medical bills, mortgage payments, travel for treatment, lost income. The benefit is triggered by **diagnosis**, not by the amount of medical expenses incurred.

*Example: A Maple Grove firefighter is diagnosed with cancer. His critical illness policy pays a one-time $50,000 benefit. He uses part of it to cover his family's mortgage while he undergoes treatment, and part to pay travel costs to Mayo Clinic in Rochester.*

### Hospital Indemnity Insurance

**Hospital indemnity insurance** pays a **fixed daily or per-event amount** when the insured is admitted to a hospital. It does not pay providers directly or reimburse specific expenses. The benefit is paid **regardless of other coverage** and can be used for anything.

| Feature | **Critical Illness** | **Hospital Indemnity** |
|---|---|---|
| Trigger | Diagnosis of a listed illness | Hospital admission |
| Benefit type | Lump sum | Fixed daily/per-admission amount |
| Relationship to medical plan | Supplemental -- stacks on top | Supplemental -- stacks on top |
| Use of funds | Any purpose | Any purpose |

### How Specialty Products Fit Together

None of these specialty products replaces comprehensive medical insurance. They are **supplemental** -- they sit alongside a major medical plan and help cover gaps like out-of-pocket costs, lost income, or non-medical expenses during a health event.

Think of them in layers:

1. **Base layer:** Major medical (HMO, PPO, etc.) -- covers the cost of care.
2. **Income replacement layer:** Disability income -- replaces your paycheck.
3. **Gap-filler layer:** Critical illness, hospital indemnity, dental, vision -- covers everything else.

*Example: A Burnsville warehouse worker has a group PPO for medical, STD/LTD through his employer, a critical illness rider, and a hospital indemnity plan. When he has a heart attack, his PPO covers the hospital and surgeon; STD replaces part of his paycheck; the critical illness policy pays $25,000 for his mortgage and bills; and hospital indemnity pays $300/day for each day he is admitted.*
`,
      keyTerms: [
        { term: 'Critical Illness Insurance', def: 'A policy that pays a lump-sum benefit upon diagnosis of a specific covered condition such as cancer, heart attack, or stroke.' },
        { term: 'Hospital Indemnity Insurance', def: 'A policy that pays a fixed daily or per-admission benefit when the insured is hospitalized, regardless of actual expenses.' },
        { term: 'Dental Insurance', def: 'Coverage for preventive, basic, and major dental services, usually with an annual maximum benefit.' },
        { term: 'Vision Insurance', def: 'Coverage for routine eye exams, lenses, frames, and contacts, usually on an annual schedule.' },
        { term: 'Supplemental Insurance', def: 'Any policy that adds to or fills gaps in a primary medical plan rather than replacing it.' },
        { term: 'Lump-Sum Benefit', def: 'A one-time payment of the full benefit amount, as opposed to periodic or reimbursement-style payments.' },
      ],
      mnemonics: [
        'Critical illness = "Diagnosed, then Deposited." Diagnosis triggers a lump deposit.',
        'Hospital indemnity = "Head In, Get Paid." Each day admitted means a fixed payment.',
        'Dental 100/80/50: "Perfect smile, mostly fixed, half rebuilt."',
      ],
      mnCallout: 'Minnesota regulates critical illness and hospital indemnity policies as limited-benefit plans. Insurers must clearly disclose that these products are **not comprehensive medical coverage**. MN also requires that dental plans comply with state mandated-benefit laws for dependent children.',
      videoEmbeds: [
        { title: 'Critical Illness vs Hospital Indemnity', youtubeId: 'TODO_specialty_health' }, // TODO: find suitable public video
      ],
      externalLinks: [
        { label: 'MN Dept. of Commerce -- Understanding Your Health Coverage', url: 'https://mn.gov/commerce/consumers/insurance/health/' },
      ],
    },
  ],

  // ─────────────────────────── FLASHCARDS ────────────────────────
  flashcards: [
    { id: 'h1-f01', moduleId: 'h1', front: 'What is the difference between short-term disability (STD) and long-term disability (LTD)?', back: 'STD covers the first weeks/months of disability (0-14 day wait, up to ~6 months of benefits). LTD kicks in after a longer elimination period (90-180 days) and can pay for years or until age 65.' },
    { id: 'h1-f02', moduleId: 'h1', front: 'What does a Business Overhead Expense (BOE) policy cover?', back: 'BOE reimburses a disabled business owner for fixed business expenses like rent, utilities, and employee salaries -- NOT the owner\'s personal income.' },
    { id: 'h1-f03', moduleId: 'h1', front: 'What is a disability buy-sell policy?', back: 'It funds a buy-sell agreement between business partners. If one partner becomes permanently disabled, the policy pays to buy out that partner\'s ownership share.' },
    { id: 'h1-f04', moduleId: 'h1', front: 'What is the principal sum in an AD&D policy?', back: 'The face amount of the policy -- the maximum benefit payable for accidental loss of life or double dismemberment (e.g., both hands).' },
    { id: 'h1-f05', moduleId: 'h1', front: 'Does AD&D pay if the insured dies of a heart attack?', back: 'No. AD&D only covers losses caused by accidents. Illness-related deaths, including heart attacks, are excluded.' },
    { id: 'h1-f06', moduleId: 'h1', front: 'What are the four main types of managed care plans?', back: 'HMO (Health Maintenance Organization), PPO (Preferred Provider Organization), POS (Point of Service), and EPO (Exclusive Provider Organization).' },
    { id: 'h1-f07', moduleId: 'h1', front: 'Which managed care plans require a PCP and referrals?', back: 'HMO and POS both require a primary care physician. HMO requires referrals for specialists; POS requires referrals for in-network specialist visits.' },
    { id: 'h1-f08', moduleId: 'h1', front: 'Which managed care plans allow out-of-network coverage?', back: 'PPO and POS allow out-of-network visits (at higher cost). HMO and EPO do not cover out-of-network except in emergencies.' },
    { id: 'h1-f09', moduleId: 'h1', front: 'What three tax advantages does an HSA offer?', back: 'Contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. ("In free, Grow free, Out free.")' },
    { id: 'h1-f10', moduleId: 'h1', front: 'What is Medigap?', back: 'Private supplemental insurance that helps pay deductibles, copays, and coinsurance not covered by Original Medicare (Parts A and B). It does NOT cover prescription drugs.' },
    { id: 'h1-f11', moduleId: 'h1', front: 'What is unique about Minnesota\'s Medigap offerings?', back: 'Minnesota mandates two state-specific plans -- Minnesota Basic and Minnesota Extended Basic -- in addition to the federal standardized letter plans.' },
    { id: 'h1-f12', moduleId: 'h1', front: 'What are the 6 Activities of Daily Living (ADLs)?', back: 'Bathing, Dressing, Eating, Toileting, Transferring, and Ambulating. Mnemonic: "Big Dogs Eat Two Treats Always."' },
    { id: 'h1-f13', moduleId: 'h1', front: 'How does the MN LTC Partnership Program protect assets?', back: 'If you exhaust a Partnership-qualified LTC policy, you can qualify for Medicaid while shielding personal assets equal to the dollar amount of LTC benefits already paid.' },
    { id: 'h1-f14', moduleId: 'h1', front: 'What triggers a critical illness insurance benefit?', back: 'Diagnosis of a covered condition (cancer, heart attack, stroke, etc.). The lump-sum payment can be used for any purpose.' },
    { id: 'h1-f15', moduleId: 'h1', front: 'How does hospital indemnity differ from medical expense insurance?', back: 'Hospital indemnity pays a fixed daily/per-admission amount regardless of actual expenses. Medical expense insurance reimburses or pays providers for specific medical costs.' },
    { id: 'h1-f16', moduleId: 'h1', front: 'What is own-occupation disability?', back: 'You are considered disabled if you cannot perform the duties of YOUR specific occupation, even if you could work in another job.' },
    { id: 'h1-f17', moduleId: 'h1', front: 'Who regulates HMOs in Minnesota?', back: 'The MN Department of Health regulates HMOs. The MN Department of Commerce regulates insurance companies (including PPO insurers).' },
    { id: 'h1-f18', moduleId: 'h1', front: 'What is MNsure?', back: 'Minnesota\'s state-based health insurance exchange where individuals and small businesses can shop for ACA-compliant health plans.' },
  ],

  // ─────────────────────── QUIZ QUESTIONS ────────────────────────
  quizQuestions: [
    // --- Difficulty 1 (basic recall) ---
    {
      id: 'h1-q01', moduleId: 'h1', domain: 'health', difficulty: 1,
      stem: 'Which type of insurance replaces a portion of income when the insured cannot work due to illness or injury?',
      choices: ['AD&D insurance', 'Disability income insurance', 'Hospital indemnity insurance', 'Critical illness insurance'],
      correctIndex: 1,
      explanation: 'Disability income insurance is specifically designed to replace a portion of the insured\'s earnings during a period of disability caused by illness or injury.',
    },
    {
      id: 'h1-q02', moduleId: 'h1', domain: 'health', difficulty: 1,
      stem: 'AD&D insurance covers losses resulting from which of the following?',
      choices: ['Illness', 'Accidents only', 'Both illness and accidents', 'Hospitalization'],
      correctIndex: 1,
      explanation: 'Accidental Death & Dismemberment insurance only pays benefits when the loss is caused by an accident. Losses due to illness are excluded.',
    },
    {
      id: 'h1-q03', moduleId: 'h1', domain: 'health', difficulty: 1,
      stem: 'Which managed care plan type requires members to select a primary care physician and obtain referrals to see specialists?',
      choices: ['PPO', 'EPO', 'HMO', 'Indemnity plan'],
      correctIndex: 2,
      explanation: 'An HMO requires members to choose a PCP who coordinates all care and provides referrals to specialists within the network.',
    },
    {
      id: 'h1-q04', moduleId: 'h1', domain: 'health', difficulty: 1,
      stem: 'What does Medigap insurance supplement?',
      choices: ['Medicaid', 'Original Medicare (Parts A and B)', 'Medicare Part D', 'Employer group health plans'],
      correctIndex: 1,
      explanation: 'Medigap (Medicare supplement) fills the gaps in Original Medicare Parts A and B, such as deductibles and coinsurance. It does not supplement Medicaid, Part D, or group plans.',
    },
    {
      id: 'h1-q05', moduleId: 'h1', domain: 'health', difficulty: 1,
      stem: 'Critical illness insurance pays benefits based on:',
      choices: ['The number of days hospitalized', 'Actual medical expenses incurred', 'Diagnosis of a covered condition', 'The insured\'s inability to work'],
      correctIndex: 2,
      explanation: 'Critical illness insurance pays a lump-sum benefit triggered by the diagnosis of a specific covered condition, regardless of expenses or work status.',
    },

    // --- Difficulty 2 (application / comparison) ---
    {
      id: 'h1-q06', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'An Eagan veterinarian owns a solo practice. She wants a policy that will cover her clinic rent and staff wages if she becomes disabled. Which product should she buy?',
      choices: ['Key person disability', 'Long-term disability', 'Business overhead expense (BOE)', 'Disability buy-sell'],
      correctIndex: 2,
      explanation: 'A BOE policy reimburses fixed business expenses (rent, utilities, employee wages) while the owner is disabled. Key person benefits the company for lost revenue, LTD replaces personal income, and buy-sell funds a partner buyout.',
    },
    {
      id: 'h1-q07', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'A Rochester nurse has both a $500,000 life insurance policy and a $100,000 AD&D policy. She dies of cancer. What total death benefit is paid?',
      choices: ['$600,000', '$500,000', '$100,000', '$0'],
      correctIndex: 1,
      explanation: 'Cancer is an illness, not an accident. The AD&D policy does not pay for illness-related deaths. Only the $500,000 life insurance benefit is payable.',
    },
    {
      id: 'h1-q08', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'Which of the following is TRUE about a PPO compared to an HMO?',
      choices: [
        'A PPO always has lower premiums than an HMO',
        'A PPO requires referrals to see specialists',
        'A PPO provides coverage for out-of-network providers at a higher cost-sharing level',
        'A PPO does not allow members to choose their own doctors',
      ],
      correctIndex: 2,
      explanation: 'The distinguishing feature of a PPO is that it covers out-of-network care, though at a higher cost to the member. PPOs generally have higher premiums than HMOs and do not require referrals.',
    },
    {
      id: 'h1-q09', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'To qualify for a Health Savings Account (HSA), an individual must:',
      choices: [
        'Be enrolled in any health insurance plan',
        'Be enrolled in a High-Deductible Health Plan and not be covered by Medicare',
        'Be at least 65 years old',
        'Have an annual income below a specified threshold',
      ],
      correctIndex: 1,
      explanation: 'HSA eligibility requires enrollment in a qualifying HDHP, no other disqualifying coverage, no Medicare enrollment, and not being claimed as a dependent. There is no income limit for HSA eligibility.',
    },
    {
      id: 'h1-q10', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'A long-term care policy benefit is typically triggered when the insured:',
      choices: [
        'Is hospitalized for more than 3 days',
        'Cannot perform at least 2 of 6 activities of daily living or has severe cognitive impairment',
        'Reaches age 65',
        'Exhausts Medicare Part A benefits',
      ],
      correctIndex: 1,
      explanation: 'Most LTC policies require the insured to need substantial help with at least 2 of the 6 ADLs (bathing, dressing, eating, toileting, transferring, ambulating) or to have a severe cognitive impairment.',
    },
    {
      id: 'h1-q11', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'In Minnesota, HMOs are regulated by:',
      choices: [
        'The MN Department of Commerce',
        'The MN Department of Health',
        'The federal Centers for Medicare & Medicaid Services',
        'The MN Attorney General\'s office',
      ],
      correctIndex: 1,
      explanation: 'Minnesota has split regulation: the Department of Health regulates HMOs, while the Department of Commerce regulates insurance companies. This is a frequent exam topic.',
    },
    {
      id: 'h1-q12', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'Which disability definition would allow a surgeon who loses fine motor skills but can still teach to collect benefits?',
      choices: ['Any-occupation', 'Own-occupation', 'Partial disability', 'Residual disability'],
      correctIndex: 1,
      explanation: 'Own-occupation considers you disabled if you cannot perform the duties of your specific occupation. The surgeon cannot operate (her own job), so she qualifies even though she could teach.',
    },
    {
      id: 'h1-q13', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'Hospital indemnity insurance pays benefits based on:',
      choices: [
        'The actual cost of hospital services',
        'The diagnosis received during hospitalization',
        'A fixed daily or per-admission amount upon hospital admission',
        'The insured\'s inability to work after discharge',
      ],
      correctIndex: 2,
      explanation: 'Hospital indemnity pays a fixed, predetermined amount for each day of hospitalization or per admission, regardless of actual expenses incurred.',
    },
    {
      id: 'h1-q14', moduleId: 'h1', domain: 'health', difficulty: 2,
      stem: 'A dental plan with a "100/80/50" structure means:',
      choices: [
        'The insured pays 100%, 80%, or 50% depending on the service',
        'Preventive services are covered at 100%, basic at 80%, and major at 50% by the plan',
        'The annual maximum is $100, $80, or $50 per service type',
        'The deductible is $100, $80, or $50 depending on the plan tier',
      ],
      correctIndex: 1,
      explanation: 'The 100/80/50 structure means the plan pays 100% for preventive care, 80% for basic services, and 50% for major services. The remaining percentage is the insured\'s coinsurance.',
    },

    // --- Difficulty 3 (analysis / MN-specific / tricky) ---
    {
      id: 'h1-q15', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'Two partners own a Duluth fishing-charter business. They want insurance that will let the healthy partner buy out the other if one becomes permanently disabled. Which product fits?',
      choices: ['Business overhead expense', 'Key person disability', 'Disability buy-sell', 'Long-term disability'],
      correctIndex: 2,
      explanation: 'A disability buy-sell policy funds the purchase of a disabled partner\'s ownership share under a buy-sell agreement. BOE covers operating expenses, key person compensates for lost revenue, and LTD replaces personal income.',
    },
    {
      id: 'h1-q16', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'A Woodbury couple each purchases a Minnesota LTC Partnership policy with a $150,000 lifetime benefit. One spouse uses the full $150,000 in benefits and still needs care. Under the Partnership Program, how much in assets is protected when applying for Medicaid?',
      choices: ['$0', '$75,000', '$150,000', 'All assets are protected'],
      correctIndex: 2,
      explanation: 'Under the MN LTC Partnership Program, assets are protected dollar-for-dollar up to the amount of LTC benefits paid. Since $150,000 in benefits was received, $150,000 in assets is shielded from Medicaid spend-down.',
    },
    {
      id: 'h1-q17', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'A 66-year-old enrolls in a Medicare Advantage (Part C) plan. She also wants to buy a Medigap policy. What is the result?',
      choices: [
        'She can buy Medigap, but it will serve as secondary coverage',
        'She cannot use Medigap while enrolled in Medicare Advantage',
        'Medigap will replace her Medicare Advantage plan',
        'She must wait 12 months before buying Medigap',
      ],
      correctIndex: 1,
      explanation: 'Medigap only supplements Original Medicare (Parts A and B). If you are enrolled in a Medicare Advantage plan, you cannot use a Medigap policy. She would need to return to Original Medicare first.',
    },
    {
      id: 'h1-q18', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'An employee\'s LTD premiums are paid entirely by his employer. When the employee becomes disabled and begins receiving benefits, how are those benefits taxed?',
      choices: [
        'Tax-free to the employee',
        'Taxable income to the employee',
        'Taxable to the employer',
        'Tax-free up to 60% of prior income',
      ],
      correctIndex: 1,
      explanation: 'When the employer pays DI premiums and deducts them as a business expense, the benefits received by the employee are taxable income. If the employee paid premiums with after-tax dollars, benefits would be tax-free.',
    },
    {
      id: 'h1-q19', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'Which of the following is unique to Minnesota\'s Medigap market?',
      choices: [
        'Minnesota prohibits the sale of all Medigap plans',
        'Minnesota offers Plan Z, which covers prescription drugs',
        'Minnesota mandates Minnesota Basic and Minnesota Extended Basic plans',
        'Minnesota allows insurers to sell Medigap to people under 65 without restrictions',
      ],
      correctIndex: 2,
      explanation: 'Minnesota requires insurers to offer two state-specific Medigap plans -- Minnesota Basic and Minnesota Extended Basic -- in addition to the federally standardized lettered plans. No other state has these specific plans.',
    },
    {
      id: 'h1-q20', moduleId: 'h1', domain: 'health', difficulty: 3,
      stem: 'A Bloomington resident is enrolled in an EPO. She is visiting family in Iowa when she falls and breaks her wrist. She goes to a local Iowa emergency room that is not in her EPO network. Will the EPO cover this visit?',
      choices: [
        'No, EPOs never cover out-of-network services',
        'Yes, EPOs typically cover emergency services even at out-of-network facilities',
        'Only if she gets a referral from her PCP first',
        'Only if the Iowa hospital agrees to accept the EPO rate',
      ],
      correctIndex: 1,
      explanation: 'While EPOs generally do not cover out-of-network services, emergency care is the exception. Managed care plans, including EPOs, typically cover emergency services regardless of network status, as the patient cannot reasonably choose a provider during a true emergency.',
    },
  ],
};
