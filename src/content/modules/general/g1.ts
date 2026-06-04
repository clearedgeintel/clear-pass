import type { Module } from '@/types/content';

export const g1: Module = {
  id: 'g1',
  domain: 'general',
  title: 'Insurance Basics',
  summary:
    'Foundational concepts every insurance producer must know: risk, peril, hazard, the law of large numbers, insurable interest, adverse selection, reinsurance, and the social and economic role of insurance.',
  order: 1,

  // ---------------------------------------------------------------------------
  // LESSONS
  // ---------------------------------------------------------------------------
  lessons: [
    // ── Lesson 1 ──────────────────────────────────────────────────────────────
    {
      id: 'g1-l1',
      moduleId: 'g1',
      title: 'Risk, Peril & Hazard',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `
## What Is Risk?

In everyday language, "risk" means danger. In insurance, the word has a more precise meaning: **risk** is the **uncertainty about whether a financial loss will occur** and, if it does, how large it will be.

Think of a Minneapolis bakery owner. She knows a kitchen fire *could* happen, but she does not know *when* or *if* it will. That uncertainty is risk. Insurance exists to manage it.

### Two Kinds of Risk

| Type | Definition | Insurable? |
|------|-----------|------------|
| **Pure risk** | Only two outcomes: a loss happens, or nothing happens. | Yes |
| **Speculative risk** | Could result in a loss, a gain, or break-even (e.g., investing in stocks). | No |

Insurance deals only with **pure risk**. A Duluth fishing guide who worries that a storm might destroy his dock faces pure risk. If he opens a second bait shop hoping to profit, that is speculative risk — insurance will not cover the chance the shop fails.

---

## Peril vs. Hazard

These two terms look similar but mean different things on the exam.

- **Peril** — the *cause* of a loss. Fire, windstorm, theft, collision, and illness are all perils.
- **Hazard** — a *condition* that increases the chance or severity of a loss from a peril.

### Three Types of Hazard

1. **Physical hazard** — a tangible condition. Icy steps outside a St. Paul office building, a cracked furnace, or faulty wiring. You can see, touch, or measure it.
2. **Moral hazard** — dishonesty or character problems that increase loss. A policyholder who sets fire to a failing restaurant to collect insurance money is a moral hazard.
3. **Morale hazard** (sometimes called *attitudinal hazard*) — carelessness or indifference *because* insurance exists. A Rochester homeowner who stops locking her doors because "insurance will pay if I'm robbed" is exhibiting morale hazard. She is not dishonest — just careless.

> **Exam tip:** Moral = intentional dishonesty. Morale = carelessness. The extra "e" in morale can remind you of "meh — I don't care."

---

## Tying It Together

Imagine a Bloomington warehouse owner:

- **Risk**: uncertainty about whether the building will be damaged.
- **Peril**: a tornado strikes the building.
- **Physical hazard**: the roof is 30 years old and has missing shingles.
- **Morale hazard**: the owner skips annual inspections because he has coverage.

Understanding these distinctions helps you classify exam questions quickly.
`,
      keyTerms: [
        { term: 'Risk', def: 'Uncertainty about whether a financial loss will occur and how large it may be.' },
        { term: 'Pure risk', def: 'A situation where the only outcomes are loss or no loss — the only kind of risk insurance covers.' },
        { term: 'Speculative risk', def: 'A situation that could result in loss, gain, or break-even; not insurable.' },
        { term: 'Peril', def: 'The direct cause of a loss (e.g., fire, theft, windstorm).' },
        { term: 'Hazard', def: 'A condition that increases the likelihood or severity of a loss.' },
        { term: 'Physical hazard', def: 'A tangible, measurable condition that raises loss potential (e.g., icy sidewalks, old wiring).' },
        { term: 'Moral hazard', def: 'Dishonesty or intentional behavior that increases the chance of a loss (e.g., arson for insurance money).' },
        { term: 'Morale hazard', def: 'Carelessness or indifference because insurance exists — not dishonest, just neglectful.' },
      ],
      mnemonics: [
        'Pure risk = "Pure loss or nothing." Speculative = "Speculation could win or lose."',
        'Moral = "Morally wrong" (intentional). Morale = "Meh, I don\'t care" (careless).',
        'PHM hazards: Physical (you can touch it), Honest-lack (moral), Meh-attitude (morale).',
      ],
      mnCallout:
        'Minnesota winters create significant physical hazards — ice dams, frozen pipes, and snow-loaded roofs are common claim triggers that MN insurers factor into underwriting.',
      videoEmbeds: [
        {
          title: 'Risk, Peril & Hazard Explained',
          youtubeId: 'TODO_REPLACE', // TODO: find a suitable CC-licensed or public explainer video
        },
      ],
      externalLinks: [
        {
          label: 'Minnesota Dept. of Commerce — Insurance Division',
          url: 'https://mn.gov/commerce/industries/insurance/',
        },
      ],
    },

    // ── Lesson 2 ──────────────────────────────────────────────────────────────
    {
      id: 'g1-l2',
      moduleId: 'g1',
      title: 'Law of Large Numbers & How Insurance Works',
      order: 2,
      estReadMin: 7,
      bodyMarkdown: `
## Pooling Risk — The Big Idea

Insurance works because many people share a common risk. Each person pays a relatively small premium into a pool. When one of them suffers a covered loss, the pool pays out. No single person bears the full weight of the loss.

### The Law of Large Numbers

The **law of large numbers** is the mathematical backbone of insurance. It states:

> As the number of similar, independent exposure units increases, the actual results will come closer to the expected (predicted) results.

In plain English: the more policyholders an insurer covers, the more accurately it can predict total losses. A company insuring 50 homes in Mankato might have wild year-to-year swings. The same company insuring 500,000 homes across Minnesota can predict losses with much greater confidence.

This is why insurers want large, diverse pools of risks.

---

## How Premiums Are Set

Insurers use **actuaries** — statisticians who specialize in risk math — to build rate tables. The basic premium formula:

| Component | What it covers |
|-----------|---------------|
| **Pure premium** | Expected claim costs (based on historical loss data) |
| **Loading** | Operating expenses, commissions to producers, profit margin, and a cushion for unexpected losses |
| **Total (gross) premium** | Pure premium + loading = what the policyholder pays |

### Example

Say historical data shows that out of every 1,000 homes in the Twin Cities valued at $300,000, about 3 will have a total fire loss each year. Expected annual fire losses = 3 × $300,000 = $900,000. Spread across 1,000 homes, the pure premium per home is $900. After loading, the gross premium might be $1,200.

---

## Indemnity — Restoring, Not Profiting

The **principle of indemnity** says insurance should put you back where you were before the loss — no better, no worse. A policyholder should never *profit* from a claim.

If a hailstorm damages the roof of a home in Eagan, the insurer pays to restore the roof to its pre-storm condition. It does not pay to upgrade the roof to a higher-grade material (unless the policy specifically provides replacement-cost coverage and the homeowner chooses to upgrade out of pocket for the difference).

---

## Risk Transfer vs. Risk Retention

People handle risk in several ways:

- **Avoidance** — do not engage in the risky activity at all. A person afraid of flying simply does not fly.
- **Reduction (loss control)** — take steps to lower the chance or size of a loss. Install smoke detectors, wear seat belts.
- **Retention (self-insurance)** — accept the risk yourself. A large employer might set aside reserves to pay smaller workers' comp claims directly.
- **Transfer** — shift the financial burden to someone else, usually an insurer, through a policy contract.

Insurance is the most common form of risk *transfer*.
`,
      keyTerms: [
        { term: 'Law of large numbers', def: 'As exposure units increase, actual loss experience approaches predicted loss experience.' },
        { term: 'Pooling', def: 'Combining many similar risks so losses are spread across the group.' },
        { term: 'Actuary', def: 'A specialist who uses statistics and mathematics to calculate insurance rates and reserves.' },
        { term: 'Pure premium', def: 'The portion of the premium that covers expected claim costs only.' },
        { term: 'Loading', def: 'The portion of the premium added for expenses, commissions, profit, and contingencies.' },
        { term: 'Principle of indemnity', def: 'Insurance should restore the insured to the same financial position as before the loss — not better or worse.' },
        { term: 'Risk transfer', def: 'Shifting the financial consequences of a loss to another party, typically an insurer.' },
        { term: 'Risk retention', def: 'Choosing to bear the financial consequences of a loss yourself (self-insuring).' },
      ],
      mnemonics: [
        'Risk handling: "ARRT" — Avoid, Reduce, Retain, Transfer.',
        'Law of Large Numbers: "More people in the pool = more predictable the result."',
      ],
      mnCallout:
        'Minnesota requires auto insurers to file rates with the Department of Commerce. Rate-setting must comply with MN Stat. ch. 70A, ensuring rates are not excessive, inadequate, or unfairly discriminatory.',
      videoEmbeds: [
        {
          title: 'How the Law of Large Numbers Powers Insurance',
          youtubeId: 'TODO_REPLACE', // TODO: find a suitable explainer video
        },
      ],
      externalLinks: [
        {
          label: 'NAIC — How Insurance Works',
          url: 'https://content.naic.org/consumer/understanding-insurance',
        },
      ],
    },

    // ── Lesson 3 ──────────────────────────────────────────────────────────────
    {
      id: 'g1-l3',
      moduleId: 'g1',
      title: 'Insurable Interest & Adverse Selection',
      order: 3,
      estReadMin: 7,
      bodyMarkdown: `
## Insurable Interest

For a valid insurance contract to exist, the policyholder must have an **insurable interest** in what is being insured. That means the person must stand to suffer a genuine financial loss if the insured event occurs.

### Why Does This Rule Exist?

Without it, insurance becomes gambling. If anyone could buy a fire policy on a stranger's warehouse, there would be no relationship between the policyholder and the loss — and a perverse incentive to cause it. Insurable interest keeps insurance grounded in real economic protection.

### When Must Insurable Interest Exist?

| Line of Insurance | When insurable interest must exist |
|-------------------|------------------------------------|
| **Property & casualty** | At the time of the **loss** |
| **Life insurance** | At the time of **policy inception** (when the policy is purchased) |

This distinction matters on the exam. A husband and wife who are married when a life policy is issued maintain insurable interest in the policy even if they later divorce. But a property policy requires insurable interest at the time the fire or storm actually happens.

### Common Examples of Insurable Interest

- A homeowner has insurable interest in her own home.
- A bank that holds a mortgage has insurable interest in the property securing the loan.
- A business partner has insurable interest in the life of the other partner — the death could harm the business financially.
- A parent has insurable interest in a minor child's life.
- An employer may have insurable interest in a key employee whose death would cause significant economic loss.

### Minnesota Example

A Rochester clinic with three founding physicians buys a **key-person life insurance** policy on each physician. If one dies unexpectedly, the clinic faces lost revenue, recruitment costs, and patient disruption. The clinic clearly has insurable interest.

---

## Adverse Selection

**Adverse selection** is the tendency for people who are most likely to suffer a loss to be the ones most eager to buy insurance.

A person diagnosed with a serious heart condition is highly motivated to buy life insurance. A building owner in a flood zone is highly motivated to buy flood coverage. If insurers unknowingly fill their pool with high-risk applicants, actual losses will far exceed predictions, and the pool collapses.

### How Insurers Fight Adverse Selection

- **Underwriting** — evaluating each applicant's risk before issuing a policy. Medical exams, credit checks, inspections, driving records.
- **Waiting periods** — many health and disability policies impose a waiting period for pre-existing conditions.
- **Exclusions and limitations** — policies carve out specific high-risk scenarios.
- **Premium adjustments** — higher-risk applicants pay more.

> **Exam tip:** Adverse selection is the *applicant's* tendency; underwriting is the *insurer's* defense.

### Minnesota Example

A Duluth fishing guide who operates in rough Lake Superior waters applies for a disability policy. The insurer's underwriter reviews the occupation code, prior injury history, and seasonal nature of the work before deciding whether to issue the policy and at what premium.
`,
      keyTerms: [
        { term: 'Insurable interest', def: 'A financial stake in the subject of insurance such that the policyholder would suffer a real economic loss if the insured event occurred.' },
        { term: 'Key-person insurance', def: 'A life or disability policy purchased by a business on an essential employee whose loss would cause financial harm to the company.' },
        { term: 'Adverse selection', def: 'The tendency of higher-risk individuals to seek insurance more actively than lower-risk individuals.' },
        { term: 'Underwriting', def: 'The process an insurer uses to evaluate and classify risk before deciding to issue a policy.' },
        { term: 'Waiting period', def: 'A specified time after policy issue during which certain coverages (especially for pre-existing conditions) do not apply.' },
        { term: 'Exclusion', def: 'A policy provision that removes coverage for specific perils, conditions, or circumstances.' },
      ],
      mnemonics: [
        'Insurable interest timing: "Property = at Loss, Life = at Launch."',
        'Adverse selection: "The sickest swimmers rush to the pool first." Underwriting is the lifeguard checking everyone in.',
      ],
      mnCallout:
        'Under Minnesota law (MN Stat. § 61A.03), an insurable interest is required for all life insurance. A policy taken out without insurable interest is void from inception. The MN Department of Commerce actively enforces this requirement.',
      videoEmbeds: [
        {
          title: 'Insurable Interest & Adverse Selection',
          youtubeId: 'TODO_REPLACE', // TODO: find a suitable explainer video
        },
      ],
      externalLinks: [
        {
          label: 'MN Statutes Ch. 61A — Life Insurance',
          url: 'https://www.revisor.mn.gov/statutes/cite/61A',
        },
      ],
    },

    // ── Lesson 4 ──────────────────────────────────────────────────────────────
    {
      id: 'g1-l4',
      moduleId: 'g1',
      title: 'Reinsurance & the Role of Insurance in Society',
      order: 4,
      estReadMin: 6,
      bodyMarkdown: `
## Reinsurance — Insurance for Insurers

Even large insurance companies face the possibility that a single catastrophe — a tornado tearing through the Twin Cities, for example — could generate claims far exceeding what their reserves can cover. To protect themselves, insurers buy **reinsurance**.

### How It Works

- The original insurer is called the **ceding company** (or **cedent**).
- The company accepting the risk is the **reinsurer** (or **assuming company**).
- The original policyholder is usually unaware of the reinsurance arrangement and has no direct relationship with the reinsurer.

### Types of Reinsurance

| Type | How it works |
|------|-------------|
| **Facultative** | Negotiated policy by policy. The ceding company offers a single risk; the reinsurer decides whether to accept it. Used for large or unusual risks. |
| **Treaty** | A standing agreement covering an entire class or book of business automatically. Every policy that fits the treaty terms is included. |

### Why Reinsurance Matters

1. **Catastrophe protection** — a single severe hailstorm across central Minnesota could generate thousands of claims on the same day.
2. **Capacity** — reinsurance lets a smaller company write policies larger than its own surplus could support.
3. **Stabilization** — smooths out year-to-year financial swings so the ceding company's results are more predictable.

---

## The Role of Insurance in Society

Insurance is more than a private transaction. It serves broad social and economic functions:

### Economic Benefits

- **Reduces the unproductive hoarding of money.** Without insurance, every business would need massive cash reserves "just in case." Insurance frees that capital for investment.
- **Supports credit and lending.** Banks require property insurance before issuing a mortgage. Without it, home lending as we know it would not exist.
- **Enables entrepreneurship.** A new coffee roaster in Northeast Minneapolis can open its doors because liability and property insurance make the financial risk manageable.
- **Creates jobs.** The insurance industry itself employs thousands of Minnesotans — agents, underwriters, claims adjusters, actuaries, and support staff.

### Social Benefits

- **Reduces the burden on public assistance.** When a family's home is destroyed by fire, insurance — not taxpayers — funds the rebuilding.
- **Encourages loss prevention.** Insurers offer discounts for smoke detectors, sprinkler systems, safe-driving courses, and wellness programs, creating incentives for safer behavior across society.
- **Provides peace of mind.** Knowing that a covered loss will not lead to financial ruin allows families and businesses to plan, invest, and take productive risks.

---

## Insurance and the State of Minnesota

Minnesota regulates insurance primarily through the **Minnesota Department of Commerce**. The Commissioner of Commerce oversees insurer solvency, rate filings, market conduct, and producer licensing. The goal is to protect consumers while maintaining a competitive market.

Key Minnesota regulatory themes you will encounter in later modules:

- Insurers must be **licensed (admitted)** to sell policies in MN.
- Producers (agents/brokers) must pass a state exam and maintain continuing education.
- The **Minnesota Life and Health Insurance Guaranty Association** protects policyholders if an insurer becomes insolvent, up to statutory limits.
`,
      keyTerms: [
        { term: 'Reinsurance', def: 'Insurance purchased by an insurance company to transfer part of its risk to another insurer.' },
        { term: 'Ceding company', def: 'The original insurer that transfers (cedes) risk to a reinsurer.' },
        { term: 'Reinsurer (assuming company)', def: 'The company that accepts risk from the ceding company.' },
        { term: 'Facultative reinsurance', def: 'Reinsurance negotiated on an individual, policy-by-policy basis.' },
        { term: 'Treaty reinsurance', def: 'A standing reinsurance agreement that automatically covers all qualifying policies in a defined class.' },
        { term: 'Minnesota Department of Commerce', def: 'The state agency that regulates insurance companies and licenses producers in Minnesota.' },
        { term: 'Guaranty association', def: 'A state-mandated organization that pays claims (up to limits) when a member insurer becomes insolvent.' },
      ],
      mnemonics: [
        'Facultative = "Faculty picks each student one at a time." Treaty = "Treat the whole class the same."',
        'Reinsurance parties: "Ceding company Cedes (gives away) risk; Assuming company Assumes (takes on) risk."',
      ],
      mnCallout:
        'The Minnesota Life and Health Insurance Guaranty Association (MN Stat. ch. 61B) provides a safety net for policyholders of insolvent insurers. Coverage limits apply — for life insurance, the limit is generally $500,000 in death benefits per individual per insurer.',
      videoEmbeds: [
        {
          title: 'What Is Reinsurance?',
          youtubeId: 'TODO_REPLACE', // TODO: find a suitable explainer video
        },
      ],
      externalLinks: [
        {
          label: 'MN Life & Health Insurance Guaranty Association',
          url: 'https://mnlifega.org/',
        },
        {
          label: 'MN Dept. of Commerce — Producer Licensing',
          url: 'https://mn.gov/commerce/insurance/licensing/',
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // FLASHCARDS
  // ---------------------------------------------------------------------------
  flashcards: [
    { id: 'g1-fc1', moduleId: 'g1', front: 'What is "risk" in insurance terms?', back: 'Uncertainty about whether a financial loss will occur and how large it may be.' },
    { id: 'g1-fc2', moduleId: 'g1', front: 'What is the difference between pure risk and speculative risk?', back: 'Pure risk has only two outcomes (loss or no loss) and is insurable. Speculative risk can result in loss, gain, or break-even and is not insurable.' },
    { id: 'g1-fc3', moduleId: 'g1', front: 'Define "peril."', back: 'The direct cause of a loss — for example, fire, theft, windstorm, or collision.' },
    { id: 'g1-fc4', moduleId: 'g1', front: 'Define "hazard."', back: 'A condition that increases the likelihood or severity of a loss caused by a peril.' },
    { id: 'g1-fc5', moduleId: 'g1', front: 'What are the three types of hazard?', back: 'Physical hazard (tangible condition), moral hazard (dishonesty), and morale hazard (carelessness because insurance exists).' },
    { id: 'g1-fc6', moduleId: 'g1', front: 'How do moral hazard and morale hazard differ?', back: 'Moral hazard involves intentional dishonesty (e.g., arson). Morale hazard involves carelessness or indifference (e.g., not locking doors) because the person knows they are insured.' },
    { id: 'g1-fc7', moduleId: 'g1', front: 'What does the law of large numbers state?', back: 'As the number of similar, independent exposure units increases, actual results will approach predicted (expected) results.' },
    { id: 'g1-fc8', moduleId: 'g1', front: 'What is the principle of indemnity?', back: 'Insurance should restore the insured to the same financial position as before the loss — no better and no worse.' },
    { id: 'g1-fc9', moduleId: 'g1', front: 'Name the four methods of handling risk.', back: 'Avoidance, Reduction (loss control), Retention (self-insurance), and Transfer (insurance). Mnemonic: ARRT.' },
    { id: 'g1-fc10', moduleId: 'g1', front: 'What is insurable interest?', back: 'A financial stake in the subject of insurance such that the policyholder would suffer a genuine economic loss if the insured event occurred.' },
    { id: 'g1-fc11', moduleId: 'g1', front: 'When must insurable interest exist for property insurance vs. life insurance?', back: 'Property insurance: at the time of the loss. Life insurance: at the time of policy inception (purchase).' },
    { id: 'g1-fc12', moduleId: 'g1', front: 'What is adverse selection?', back: 'The tendency of higher-risk individuals to seek insurance more actively than lower-risk individuals, which can distort the risk pool.' },
    { id: 'g1-fc13', moduleId: 'g1', front: 'How do insurers combat adverse selection?', back: 'Through underwriting, waiting periods, exclusions/limitations, and premium adjustments.' },
    { id: 'g1-fc14', moduleId: 'g1', front: 'What is reinsurance?', back: 'Insurance purchased by an insurance company to transfer part of its risk to another insurer (the reinsurer).' },
    { id: 'g1-fc15', moduleId: 'g1', front: 'What is the difference between facultative and treaty reinsurance?', back: 'Facultative is negotiated policy by policy. Treaty is a standing agreement that automatically covers all qualifying policies in a class.' },
    { id: 'g1-fc16', moduleId: 'g1', front: 'In reinsurance, what is the ceding company?', back: 'The original insurer that transfers (cedes) part of its risk to a reinsurer.' },
    { id: 'g1-fc17', moduleId: 'g1', front: 'What is key-person life insurance?', back: 'A policy purchased by a business on a vital employee whose death or disability would cause the company significant financial harm.' },
    { id: 'g1-fc18', moduleId: 'g1', front: 'What Minnesota agency regulates insurance?', back: 'The Minnesota Department of Commerce, headed by the Commissioner of Commerce.' },
    { id: 'g1-fc19', moduleId: 'g1', front: 'What role does the MN Life & Health Insurance Guaranty Association play?', back: 'It protects policyholders by paying claims (up to statutory limits) when a member insurer becomes insolvent.' },
    { id: 'g1-fc20', moduleId: 'g1', front: 'What is an actuary?', back: 'A specialist who uses statistics and mathematics to calculate insurance rates, reserves, and risk probabilities.' },
  ],

  // ---------------------------------------------------------------------------
  // QUIZ QUESTIONS
  // ---------------------------------------------------------------------------
  quizQuestions: [
    // ── Difficulty 1 (basic recall) ──────────────────────────────────────────
    {
      id: 'g1-q1',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'Which type of risk is insurable?',
      choices: ['Speculative risk', 'Pure risk', 'Investment risk', 'Market risk'],
      correctIndex: 1,
      explanation:
        'Insurance covers only pure risk, where the possible outcomes are loss or no loss. Speculative risk, which can produce a gain, is not insurable.',
    },
    {
      id: 'g1-q2',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'A fire that destroys a warehouse is an example of a:',
      choices: ['Hazard', 'Peril', 'Risk', 'Liability'],
      correctIndex: 1,
      explanation:
        'A peril is the direct cause of a loss. Fire is a peril. A hazard is a condition that makes the loss more likely (e.g., oily rags near the furnace).',
    },
    {
      id: 'g1-q3',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'Which of the following is a physical hazard?',
      choices: [
        'A policyholder who exaggerates a claim',
        'Faulty wiring in a building',
        'Carelessness because of insurance coverage',
        'Filing a fraudulent claim',
      ],
      correctIndex: 1,
      explanation:
        'Faulty wiring is a tangible, measurable condition that increases fire risk — a classic physical hazard. Exaggerating or filing fraudulent claims relates to moral hazard; carelessness relates to morale hazard.',
    },
    {
      id: 'g1-q4',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'The law of large numbers allows an insurer to:',
      choices: [
        'Avoid paying claims',
        'Predict losses more accurately as the pool of insureds grows',
        'Guarantee a profit every year',
        'Eliminate all risk from the pool',
      ],
      correctIndex: 1,
      explanation:
        'The law of large numbers states that actual results approach expected results as the number of exposure units increases. It does not guarantee profits or eliminate risk entirely.',
    },
    {
      id: 'g1-q5',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'The principle of indemnity means:',
      choices: [
        'The insurer must always pay the policy limit',
        'The insured should profit from a covered loss',
        'The insured should be restored to the same financial position as before the loss',
        'The premium must equal the expected loss',
      ],
      correctIndex: 2,
      explanation:
        'Indemnity means making the insured whole — restoring them to their pre-loss financial position, no better and no worse.',
    },
    {
      id: 'g1-q6',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'Reinsurance is best described as:',
      choices: [
        'A policy sold directly to consumers',
        'Insurance purchased by one insurer from another insurer',
        'A government program for uninsurable risks',
        'A type of self-insurance',
      ],
      correctIndex: 1,
      explanation:
        'Reinsurance is insurance that an insurance company buys to transfer part of its own risk to another insurer (the reinsurer).',
    },
    {
      id: 'g1-q7',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 1,
      stem: 'Who regulates insurance companies and licenses producers in Minnesota?',
      choices: [
        'The Minnesota Department of Revenue',
        'The Federal Insurance Office',
        'The Minnesota Department of Commerce',
        'The National Association of Insurance Commissioners',
      ],
      correctIndex: 2,
      explanation:
        'The Minnesota Department of Commerce is the state agency responsible for regulating insurers and licensing insurance producers.',
    },

    // ── Difficulty 2 (application) ───────────────────────────────────────────
    {
      id: 'g1-q8',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'A homeowner stops maintaining her smoke detectors because she has homeowners insurance. This is an example of:',
      choices: ['Physical hazard', 'Moral hazard', 'Morale hazard', 'Speculative risk'],
      correctIndex: 2,
      explanation:
        'Morale hazard is carelessness or indifference because insurance exists. The homeowner is not being dishonest (which would be moral hazard) — she is simply being careless.',
    },
    {
      id: 'g1-q9',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'A Minneapolis bakery owner intentionally starts a fire in her shop to collect insurance proceeds. This illustrates:',
      choices: ['Physical hazard', 'Morale hazard', 'Moral hazard', 'Pure risk'],
      correctIndex: 2,
      explanation:
        'Moral hazard involves dishonesty or intentional acts to cause a loss for financial gain. Arson for insurance money is the textbook example.',
    },
    {
      id: 'g1-q10',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'For a life insurance policy, insurable interest must exist:',
      choices: [
        'At the time of the loss (death)',
        'At the time the policy is purchased',
        'At the time the first premium is paid after the first year',
        'At both inception and time of loss',
      ],
      correctIndex: 1,
      explanation:
        'For life insurance, insurable interest must exist at inception (when the policy is purchased). It does not need to exist at the time of the insured\'s death.',
    },
    {
      id: 'g1-q11',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'A Duluth fishing guide with a history of injuries applies for disability insurance. The insurer reviews his occupation and medical records before issuing the policy. This review process is called:',
      choices: ['Indemnification', 'Reinsurance', 'Underwriting', 'Subrogation'],
      correctIndex: 2,
      explanation:
        'Underwriting is the insurer\'s process of evaluating an applicant\'s risk profile before deciding whether to issue a policy and at what premium.',
    },
    {
      id: 'g1-q12',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'An insurer writes a large commercial property policy and then transfers a portion of the risk to another insurance company. The original insurer is known as the:',
      choices: ['Reinsurer', 'Assuming company', 'Ceding company', 'Surplus lines carrier'],
      correctIndex: 2,
      explanation:
        'The ceding company (cedent) is the original insurer that transfers part of its risk to a reinsurer. The reinsurer is also called the assuming company.',
    },
    {
      id: 'g1-q13',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'Which risk-handling method is a business using when it sets aside its own funds to pay small workers\' compensation claims directly?',
      choices: ['Risk avoidance', 'Risk transfer', 'Risk retention', 'Risk reduction'],
      correctIndex: 2,
      explanation:
        'Risk retention (self-insurance) means accepting the risk and covering potential losses from your own resources instead of purchasing insurance.',
    },
    {
      id: 'g1-q14',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'Adverse selection is BEST described as:',
      choices: [
        'An insurer choosing not to write policies in a certain area',
        'A producer selling policies to friends and family',
        'Higher-risk individuals seeking insurance more actively than lower-risk individuals',
        'A reinsurer refusing to assume risk from a cedent',
      ],
      correctIndex: 2,
      explanation:
        'Adverse selection is the tendency of higher-risk individuals to seek insurance more aggressively, which can skew the risk pool and increase losses beyond what was predicted.',
    },
    {
      id: 'g1-q15',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 2,
      stem: 'Installing a sprinkler system in a St. Paul restaurant to reduce fire damage is an example of:',
      choices: ['Risk transfer', 'Risk avoidance', 'Risk reduction', 'Risk retention'],
      correctIndex: 2,
      explanation:
        'Risk reduction (loss control) involves taking steps to decrease the likelihood or severity of a loss. A sprinkler system directly reduces potential fire damage.',
    },

    // ── Difficulty 3 (analysis / tricky) ─────────────────────────────────────
    {
      id: 'g1-q16',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 3,
      stem: 'Tom and Sara are married when Tom buys a life insurance policy on Sara. They later divorce. If Sara dies after the divorce, the policy:',
      choices: [
        'Is void because insurable interest no longer exists',
        'Pays the death benefit because insurable interest is required only at inception for life insurance',
        'Pays only the cash value, not the full death benefit',
        'Must be reassigned to someone with current insurable interest',
      ],
      correctIndex: 1,
      explanation:
        'For life insurance, insurable interest is required at the time of purchase (inception), not at the time of death. Since insurable interest existed when Tom bought the policy, the policy remains valid and pays the death benefit even after the divorce.',
    },
    {
      id: 'g1-q17',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 3,
      stem: 'A small Minnesota insurer writes homeowners policies exclusively in Anoka County. Which of the following poses the GREATEST risk to the company\'s solvency?',
      choices: [
        'Having too many policies with low premiums',
        'A single large hailstorm causing thousands of claims simultaneously in Anoka County',
        'An increase in the number of new policyholders',
        'A competitor lowering its rates',
      ],
      correctIndex: 1,
      explanation:
        'A geographically concentrated book of business violates the insurance principle of spreading risk. A single catastrophic event in that one county could overwhelm the insurer. The law of large numbers works best with diversified, spread-out exposure units.',
    },
    {
      id: 'g1-q18',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 3,
      stem: 'An insurer has a treaty reinsurance agreement covering all homeowners policies it writes. One of those policies involves a $5 million mansion. Under the treaty:',
      choices: [
        'The reinsurer must separately agree to cover the mansion',
        'The mansion is automatically covered because it falls within the treaty\'s class of business',
        'The ceding company must first offer the risk as facultative reinsurance',
        'Treaty reinsurance does not apply to high-value properties',
      ],
      correctIndex: 1,
      explanation:
        'Treaty reinsurance is a standing agreement that automatically covers all policies within a defined class. Unlike facultative reinsurance, no policy-by-policy negotiation is needed — if the mansion falls within the treaty terms, it is covered automatically.',
    },
    {
      id: 'g1-q19',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 3,
      stem: 'Which of the following scenarios BEST illustrates a violation of the principle of indemnity?',
      choices: [
        'An insurer pays to repair a roof damaged by hail',
        'A policyholder receives a claims payment and uses it to take a vacation instead of repairing the damage',
        'An insurer pays the insured more than the actual cash value of a totaled vehicle, resulting in a profit to the insured',
        'A policyholder files a legitimate claim for smoke damage',
      ],
      correctIndex: 2,
      explanation:
        'The principle of indemnity says insurance should restore the insured to the same position as before the loss — not better. Paying more than the vehicle\'s actual cash value results in a profit to the insured, which violates indemnity.',
    },
    {
      id: 'g1-q20',
      moduleId: 'g1',
      domain: 'general',
      difficulty: 3,
      stem: 'An insurer notices that 80% of new applicants for its individual health plans have pre-existing conditions. This pattern is most likely the result of:',
      choices: [
        'The law of large numbers',
        'Moral hazard',
        'Adverse selection',
        'Treaty reinsurance',
      ],
      correctIndex: 2,
      explanation:
        'Adverse selection occurs when higher-risk individuals disproportionately seek coverage. If 80% of applicants already have health conditions, the pool is heavily skewed toward high-risk individuals, which is the hallmark of adverse selection.',
    },
  ],
};
