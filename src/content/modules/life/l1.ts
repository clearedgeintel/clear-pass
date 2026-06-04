import type { Module } from '@/types/content';

export const l1: Module = {
  id: 'l1',
  domain: 'life',
  title: 'Types of Life Insurance Policies',
  summary:
    'Covers every major category of life insurance you will see on the exam: term life (level, decreasing, increasing, renewable, convertible), whole life (straight, limited-pay, single-premium), universal life (Option A and Option B), indexed universal life, variable life, and variable universal life.',
  order: 1,

  // ─── LESSONS ────────────────────────────────────────────────
  lessons: [
    // ── Lesson 1: Term Life ──────────────────────────────────
    {
      id: 'l1-01',
      moduleId: 'l1',
      title: 'Term Life Insurance — Temporary Protection',
      order: 1,
      estReadMin: 7,
      bodyMarkdown: `
## What Is Term Life Insurance?

**Term life insurance** provides a death benefit for a specific period of time — the *term*. If the insured dies during the term, beneficiaries receive the face amount. If the term expires and the insured is still alive, coverage ends and no benefit is paid.

Think of term life the way you think of renting an apartment: you get protection while you are "renting," but you do not build any ownership (cash value). This makes term the **least expensive** form of life insurance per dollar of initial death benefit.

---

## Types of Term Policies

### Level Term
The death benefit stays the same for the entire term. A 20-year level term policy purchased by a 30-year-old Minneapolis nurse would pay the same $500,000 whether she died in year 1 or year 19.

### Decreasing Term
The death benefit **shrinks** over time while the premium stays level. This is commonly used as **mortgage protection** — imagine a Burnsville HVAC business owner who buys a 30-year decreasing term policy that mirrors his shop's mortgage balance.

### Increasing Term
The death benefit **grows** over time, usually to keep pace with inflation. Premiums rise as well.

---

## Renewable and Convertible Features

| Feature | What It Does | Key Detail |
|---|---|---|
| **Renewable** | Lets the owner renew at the end of the term **without proving insurability** | Premium goes up at each renewal to reflect the insured's current age |
| **Convertible** | Lets the owner swap the term policy for a **permanent policy** without a new medical exam | Conversion must happen before a deadline stated in the contract |

A St. Paul teacher who bought a cheap 10-year term policy at age 25 might **convert** it to whole life at age 34 — locking in permanent coverage without a health exam, even if she developed a medical condition in the meantime.

---

## Re-entry Term

A **re-entry term** policy offers a lower premium at renewal **if** the insured can pass a new medical exam. If the insured cannot qualify, coverage continues but at a higher "standard" rate.

---

## Why Term Matters on the Exam

The exam loves to test the difference between **renewable** (no proof of health needed, higher premium) and **convertible** (switch to permanent coverage, no new underwriting). It also tests that term insurance has **no cash value** and **no loan provision**.

> **Exam tip:** If a question says a policy "expires" or "has no savings element," it is describing term insurance.
`,
      keyTerms: [
        { term: 'Term Life Insurance', def: 'Life insurance that provides a death benefit for a specified period; no cash value accumulates.' },
        { term: 'Level Term', def: 'Term policy where the death benefit remains constant throughout the term.' },
        { term: 'Decreasing Term', def: 'Term policy where the death benefit decreases over time while the premium remains level.' },
        { term: 'Increasing Term', def: 'Term policy where the death benefit increases over time, often to offset inflation.' },
        { term: 'Renewable Term', def: 'A provision allowing the policyholder to renew at the end of the term without evidence of insurability, at a higher premium.' },
        { term: 'Convertible Term', def: 'A provision allowing the policyholder to exchange the term policy for a permanent policy without a new medical exam.' },
        { term: 'Re-entry Term', def: 'A term policy that offers lower renewal premiums if the insured can demonstrate continued good health.' },
      ],
      mnemonics: [
        'R-C: Renewable = Renew same type; Convertible = Convert to permanent.',
        'Term = Temporary. No cash, no loan, no frills — just a death benefit for a set period.',
      ],
      mnCallout:
        'Minnesota requires that any term policy sold in the state clearly disclose whether it is renewable, convertible, or both. The Minnesota Department of Commerce enforces plain-language disclosure rules so consumers understand when coverage ends.',
      videoEmbeds: [
        { title: 'Term Life Insurance Explained', youtubeId: 'TODO_term_life' /* TODO: replace with real ID */ },
      ],
      externalLinks: [
        { label: 'MN Dept. of Commerce — Life Insurance Basics', url: 'https://mn.gov/commerce/consumers/insurance/life/' },
      ],
    },

    // ── Lesson 2: Whole Life Insurance ───────────────────────
    {
      id: 'l1-02',
      moduleId: 'l1',
      title: 'Whole Life Insurance — Permanent Protection with Cash Value',
      order: 2,
      estReadMin: 8,
      bodyMarkdown: `
## What Is Whole Life Insurance?

**Whole life insurance** (also called **ordinary life** or **straight life**) provides a death benefit that lasts for the insured's *entire* lifetime, as long as premiums are paid. Unlike term, whole life builds **cash value** — a savings component that grows on a tax-deferred basis.

The insurer guarantees three things:
1. A **fixed premium** that never changes.
2. A **guaranteed death benefit**.
3. A **minimum cash value** accumulation schedule.

---

## Varieties of Whole Life

### Straight (Ordinary) Life
Premiums are paid from the date of issue until the insured dies (or reaches age 100/121 on newer tables). This is the most common form.

### Limited-Pay Life
The same lifetime coverage, but premiums are compressed into a shorter payment window — for example, **20-pay life** or **paid-up at 65**. A Duluth fishing guide who wants coverage for life but plans to retire at 65 might choose a "life paid-up at 65" policy so no premiums are due in retirement.

### Single-Premium Whole Life (SPWL)
The entire cost is paid in **one lump sum**. Cash value is immediately high, but the IRS classifies most SPWL policies as **Modified Endowment Contracts (MECs)**, which changes the tax treatment of withdrawals and loans.

---

## Comparing Whole Life Variations

| Feature | Straight Life | Limited-Pay | Single-Premium |
|---|---|---|---|
| Premium period | Lifetime | Set number of years | One payment |
| Premium amount per payment | Lowest | Higher | Highest (one-time) |
| Cash value growth speed | Slowest | Faster | Fastest |
| MEC risk | Low | Moderate | Almost always a MEC |

---

## Cash Value, Loans, and Dividends

The **cash value** belongs to the policy owner. The owner can:
- **Borrow** against it via a **policy loan** (interest is charged; unpaid loans reduce the death benefit).
- **Surrender** the policy for its cash surrender value.
- Use the cash value to pay premiums through **automatic premium loan** provisions.

**Participating** whole life policies may pay **dividends**. Dividends are considered a return of excess premium and are **not taxable** until they exceed the total premiums paid. A Rochester Mayo Clinic employee might use dividends to purchase **paid-up additions**, small chunks of additional whole life coverage that further increase the death benefit.

> **Exam tip:** Dividends on participating policies are *not* guaranteed — they are based on the insurer's actual mortality, expense, and investment experience.

---

## Nonforfeiture Options

If a whole life policyholder stops paying premiums, the accumulated cash value does not vanish. Minnesota law (consistent with the NAIC Standard Nonforfeiture Law) requires insurers to offer at least three **nonforfeiture options**:
1. **Cash surrender** — take the money and walk away.
2. **Reduced paid-up insurance** — use the cash value to buy a smaller, fully paid-up whole life policy.
3. **Extended term insurance** — use the cash value to buy term coverage at the original face amount for as long as it lasts.
`,
      keyTerms: [
        { term: 'Whole Life Insurance', def: 'Permanent life insurance with fixed premiums, a guaranteed death benefit, and guaranteed cash value growth.' },
        { term: 'Limited-Pay Life', def: 'Whole life policy where premiums are paid over a shorter period (e.g., 20 years) but coverage lasts a lifetime.' },
        { term: 'Single-Premium Whole Life', def: 'Whole life policy funded by one lump-sum premium; typically classified as a MEC.' },
        { term: 'Cash Value', def: 'The savings component inside a permanent life policy that grows tax-deferred and can be borrowed against.' },
        { term: 'Modified Endowment Contract (MEC)', def: 'A life policy that fails the 7-pay test and loses favorable tax treatment on loans and withdrawals.' },
        { term: 'Nonforfeiture Options', def: 'Choices available to a policyholder who stops paying premiums: cash surrender, reduced paid-up, or extended term.' },
        { term: 'Paid-Up Additions', def: 'Small increments of additional whole life coverage purchased with dividends; they increase both death benefit and cash value.' },
        { term: 'Policy Loan', def: 'A loan from the insurer using the policy cash value as collateral; unpaid loans reduce the death benefit.' },
      ],
      mnemonics: [
        'CRE for nonforfeiture: Cash surrender, Reduced paid-up, Extended term.',
        'Whole life = Whole lifetime. Premiums are fixed, cash value grows, death benefit is guaranteed.',
        'MEC = Money Entered too Quickly (single premium or overfunding triggers MEC status).',
      ],
      mnCallout:
        'Minnesota follows the NAIC Standard Nonforfeiture Law. Every whole life policy sold in the state must include the three nonforfeiture options. Insurers must also provide an annual statement showing current cash value, death benefit, and any outstanding loans.',
      videoEmbeds: [
        { title: 'Whole Life Insurance Explained', youtubeId: 'TODO_whole_life' /* TODO: replace with real ID */ },
      ],
      externalLinks: [
        { label: 'NAIC — Life Insurance Buyer\'s Guide', url: 'https://content.naic.org/sites/default/files/publication-lbg-lp.pdf' },
      ],
    },

    // ── Lesson 3: Universal Life ─────────────────────────────
    {
      id: 'l1-03',
      moduleId: 'l1',
      title: 'Universal Life Insurance — Flexible Premiums and Two Death Benefit Options',
      order: 3,
      estReadMin: 8,
      bodyMarkdown: `
## What Is Universal Life Insurance?

**Universal life (UL)** is a permanent policy that separates the three components of life insurance into transparent "buckets":

1. **Mortality charge** — the cost of the actual death-benefit protection.
2. **Expense charge** — the insurer's administrative costs.
3. **Cash value account** — what is left over after charges; earns interest at a rate declared by the insurer (subject to a guaranteed minimum).

Because the components are unbundled, the policy owner gets **flexibility**: premiums can be raised, lowered, or even skipped (as long as enough cash value exists to cover charges), and the death benefit can be adjusted.

---

## Option A vs. Option B — The Exam Favorite

This is one of the most tested concepts on the Minnesota licensing exam.

| | **Option A (Level Death Benefit)** | **Option B (Increasing Death Benefit)** |
|---|---|---|
| Also called | Option 1 | Option 2 |
| Death benefit equals | A **fixed face amount** | Face amount **plus** accumulated cash value |
| Net amount at risk | Decreases over time as cash value grows | Stays roughly level |
| Cost of insurance over time | Generally decreases | Generally stays level or rises |
| Best for | People who want lower long-term cost | People who want maximum death benefit growth |

### Memory Hook

> **"A = Amount stays the same; B = Benefit goes up (because cash value is added on top)."**

### Example

A 40-year-old Eagan pharmacist buys a $300,000 UL policy. After 15 years, her cash value is $60,000.

- Under **Option A**, her beneficiaries would receive **$300,000** (the face amount). The insurer is only "at risk" for $240,000 because the cash value covers part of the payout.
- Under **Option B**, her beneficiaries would receive **$360,000** ($300,000 face + $60,000 cash value). The insurer is at risk for the full $300,000.

---

## Interest Crediting

The insurer declares a **current interest rate** each year, but the policy has a **guaranteed minimum rate** (often 2-4%). The cash value will never earn less than the guaranteed floor, but it can earn more in good years.

---

## Corridor Rules and the Definition of Life Insurance

The IRS requires that the death benefit must always exceed the cash value by a minimum percentage (the **corridor**). If the cash value grows too large relative to the death benefit, the policy could lose its tax-advantaged status and be reclassified. Insurers automatically increase the death benefit to maintain the corridor when necessary.

---

## Surrender Charges

Most UL policies impose a **surrender charge** during the first 10-15 years. If the owner cancels early, this charge is deducted from the cash value. After the surrender-charge period expires, the full cash value is available.

---

## Key Risks

- **Underfunding risk**: If the owner pays too little premium and the cash value is exhausted, the policy **lapses**.
- **Interest-rate risk**: If actual credited rates stay near the guaranteed minimum, the cash value may grow slower than projected.

A Mankato restaurant owner who skips premiums for several years might receive a "lapse warning" letter when the cash value can no longer cover monthly charges.
`,
      keyTerms: [
        { term: 'Universal Life (UL)', def: 'A flexible-premium permanent life policy with unbundled mortality charges, expense charges, and a cash value account.' },
        { term: 'Option A (Level Death Benefit)', def: 'UL death benefit option where the payout equals a fixed face amount; cash value is included within that amount.' },
        { term: 'Option B (Increasing Death Benefit)', def: 'UL death benefit option where the payout equals the face amount plus accumulated cash value.' },
        { term: 'Net Amount at Risk', def: 'The difference between the death benefit and the cash value; this is the portion the insurer actually covers from its own funds.' },
        { term: 'Guaranteed Minimum Interest Rate', def: 'The lowest rate the insurer will credit to the UL cash value, regardless of market conditions.' },
        { term: 'Surrender Charge', def: 'A fee deducted from the cash value if the policy is surrendered during the early years of the contract.' },
        { term: 'Corridor', def: 'An IRS-required minimum gap between the death benefit and cash value to preserve the policy\'s tax-advantaged status.' },
      ],
      mnemonics: [
        'A = Amount stays the same. B = Benefit goes Bigger (cash value added on top).',
        'UL = "U pick the Level" of premium and death benefit — flexibility is the hallmark.',
      ],
      mnCallout:
        'Minnesota requires insurers to provide UL policyholders with an annual report showing premiums paid, interest credited, mortality and expense charges deducted, cash surrender value, and current death benefit. This transparency requirement helps consumers catch underfunding early.',
      videoEmbeds: [
        { title: 'Universal Life — Option A vs Option B', youtubeId: 'TODO_ul_options' /* TODO: replace with real ID */ },
      ],
      externalLinks: [
        { label: 'MN Dept. of Commerce — Understanding Life Insurance', url: 'https://mn.gov/commerce/consumers/insurance/life/' },
      ],
    },

    // ── Lesson 4: Indexed Universal Life ─────────────────────
    {
      id: 'l1-04',
      moduleId: 'l1',
      title: 'Indexed Universal Life (IUL) — Market-Linked Growth with a Floor',
      order: 4,
      estReadMin: 6,
      bodyMarkdown: `
## What Is Indexed Universal Life?

**Indexed universal life (IUL)** is a variation of universal life where the cash value interest is tied to the performance of a **stock market index** — most commonly the **S&P 500** — rather than a rate declared solely by the insurer.

The policy owner does **not** invest directly in the market. Instead, the insurer uses the index's return to *calculate* the interest credit, subject to a **floor** and a **cap**.

---

## Floor, Cap, and Participation Rate

| Component | What It Means | Typical Range |
|---|---|---|
| **Floor** | The minimum interest credit, even if the index drops | 0% – 2% |
| **Cap** | The maximum interest credit in any period | 8% – 14% |
| **Participation rate** | The percentage of the index gain that is credited | 50% – 100% |

### Example

Suppose a Bloomington dentist owns an IUL with a 0% floor, a 12% cap, and a 100% participation rate.

- If the S&P 500 gains 18% in a year, her cash value is credited **12%** (the cap).
- If the S&P 500 gains 7%, her cash value is credited **7%** (below the cap, full participation).
- If the S&P 500 loses 15%, her cash value is credited **0%** (the floor protects against loss).

If the participation rate were 80% instead of 100%, that 7% gain would be credited as 5.6% (7% x 0.80).

---

## How IUL Differs from Regular UL

| Feature | Traditional UL | Indexed UL |
|---|---|---|
| Interest basis | Insurer-declared rate | Linked to a market index |
| Upside potential | Moderate | Higher (up to the cap) |
| Downside protection | Guaranteed minimum rate | Floor (often 0%) prevents negative crediting |
| Complexity | Moderate | Higher — caps, floors, participation rates |
| Securities registration | Not a security | **Not a security** (still an insurance product regulated by state DOI) |

> **Exam tip:** IUL is regulated as an *insurance* product, **not** a security. The policy owner bears no direct market risk because the floor prevents the cash value from losing money due to index declines.

---

## Potential Pitfalls

- **Cap drag**: In strong bull markets, the cap limits gains below what a direct index investment would have earned.
- **Illustrations**: Projected returns in sales illustrations may assume index crediting rates that are higher than historical averages. Minnesota's illustration regulations require insurers to show both a **guaranteed** and a **current/non-guaranteed** scenario.
- **Complexity**: Multiple moving parts (floor, cap, participation rate, segment lengths) can make IUL hard for consumers to understand.

---

## When IUL Makes Sense

IUL can appeal to someone who wants **permanent coverage**, is comfortable with moderate complexity, and likes the idea of market-linked growth without the risk of actual market losses. A Plymouth financial planner saving for retirement supplementation might use IUL as part of a broader strategy, but should understand the cap and floor trade-off.
`,
      keyTerms: [
        { term: 'Indexed Universal Life (IUL)', def: 'A universal life policy whose cash value interest is linked to the performance of a stock market index, subject to a floor and a cap.' },
        { term: 'Floor', def: 'The minimum interest rate credited to an IUL cash value, protecting against negative returns (often 0%).' },
        { term: 'Cap', def: 'The maximum interest rate credited to an IUL cash value in a given period, limiting upside gains.' },
        { term: 'Participation Rate', def: 'The percentage of the index gain that is actually credited to the IUL cash value.' },
        { term: 'Segment', def: 'The time period (often one year) over which IUL index performance is measured before crediting interest.' },
        { term: 'Illustration', def: 'A projection showing how a policy might perform under guaranteed and non-guaranteed assumptions.' },
      ],
      mnemonics: [
        'IUL = "I Understand Limits" — the floor protects you, the cap limits you.',
        'Floor-Cap-Part: the three numbers that control your IUL crediting. Floor stops losses, Cap stops excess gains, Participation Rate is your share.',
      ],
      mnCallout:
        'Minnesota follows the NAIC Life Insurance Illustration Model Regulation. Agents selling IUL in Minnesota must show guaranteed and non-guaranteed illustrations and may not use misleading projected rates. The MN Department of Commerce has issued bulletins warning agents about over-optimistic IUL illustrations.',
      videoEmbeds: [
        { title: 'How Indexed Universal Life Works', youtubeId: 'TODO_iul_explained' /* TODO: replace with real ID */ },
      ],
      externalLinks: [
        { label: 'NAIC — Indexed Universal Life Consumer Guide', url: 'https://content.naic.org/cipr-topics/indexed-universal-life' },
      ],
    },

    // ── Lesson 5: Variable Life and Variable Universal Life ──
    {
      id: 'l1-05',
      moduleId: 'l1',
      title: 'Variable Life and Variable Universal Life — Securities-Based Policies',
      order: 5,
      estReadMin: 7,
      bodyMarkdown: `
## Why Variable Policies Are Different

With **variable life (VL)** and **variable universal life (VUL)**, the policy owner directs how the cash value is invested among **separate accounts** (also called sub-accounts), which function like mutual funds. Because the policy owner bears the **investment risk**, these products are classified as **securities** and are regulated by both the state insurance department **and** the SEC/FINRA.

> **Exam tip:** To sell variable products in Minnesota, an agent needs *both* a Minnesota life insurance license **and** a FINRA securities registration (typically a Series 6 or Series 7, plus a Series 63 or 66).

---

## Variable Life (VL) — Fixed Premium, Variable Benefit

| Feature | Detail |
|---|---|
| Premium | **Fixed**, like whole life |
| Death benefit | Has a **guaranteed minimum**, but can increase if investments perform well |
| Cash value | **Not guaranteed** — rises or falls with sub-account performance |
| Investment options | Separate accounts (stock, bond, balanced funds, etc.) |
| Regulatory status | **Security** — requires a prospectus |

A Woodbury engineer buys a variable life policy and allocates 60% to a stock sub-account and 40% to a bond sub-account. If the stock market booms, her cash value and death benefit grow. If the market tanks, her cash value drops, but the death benefit will not fall below the guaranteed minimum stated in the contract.

---

## Variable Universal Life (VUL) — Maximum Flexibility + Investment Risk

VUL combines the **flexible premiums** of universal life with the **investment options** of variable life. It is the most flexible — and most complex — form of permanent life insurance.

| Feature | Detail |
|---|---|
| Premium | **Flexible** (like UL) |
| Death benefit | **Option A or Option B**, adjustable |
| Cash value | **Not guaranteed** — depends on sub-account performance |
| Investment options | Separate accounts chosen by the owner |
| Regulatory status | **Security** — requires a prospectus |

### Comparison Table: Variable Life vs. VUL

| | Variable Life | Variable Universal Life |
|---|---|---|
| Premium flexibility | No (fixed) | Yes (flexible) |
| Death benefit options | Guaranteed minimum + variable upside | Option A / Option B, adjustable |
| Cash value guarantee | None | None |
| Separate accounts | Yes | Yes |
| Security? | Yes | Yes |

---

## The Separate Account vs. the General Account

- **General account**: Where traditional whole life and UL cash values are held. The insurer manages it and guarantees a minimum return. General account assets back the insurer's guarantees.
- **Separate account**: Where VL and VUL cash values are held. Assets are kept *separate* from the insurer's general account so that if the insurer becomes insolvent, the sub-account assets are shielded from creditors. The policy owner bears the investment risk and reward.

---

## Prospectus Requirement

Because variable products are securities, the policy owner must receive a **prospectus** before or at the time of sale. The prospectus discloses fees, investment objectives, risks, and sub-account options.

---

## Suitability and Best-Interest Standards

FINRA's suitability rules and the SEC's Regulation Best Interest both apply to variable product sales. In Minnesota, agents must also comply with the state's own suitability and best-interest standards. A Maple Grove couple nearing retirement with low risk tolerance would likely **not** be suitable candidates for a VUL policy loaded with aggressive stock sub-accounts.

---

## Quick Memory Framework

Think of the four main permanent policies on a spectrum:

| Policy | Premium | Cash Value Guarantee | Security? |
|---|---|---|---|
| Whole Life | Fixed | Yes | No |
| Universal Life | Flexible | Yes (minimum rate) | No |
| Variable Life | Fixed | No | **Yes** |
| Variable Universal Life | Flexible | No | **Yes** |

> **Mnemonic: "Variable = Venture into the market = Securities license required."**
`,
      keyTerms: [
        { term: 'Variable Life (VL)', def: 'A fixed-premium permanent policy where cash value is invested in separate accounts; classified as a security.' },
        { term: 'Variable Universal Life (VUL)', def: 'A flexible-premium permanent policy where cash value is invested in separate accounts; classified as a security.' },
        { term: 'Separate Account', def: 'An investment account held apart from the insurer\'s general account; used for variable product cash values and shielded from insurer creditors.' },
        { term: 'General Account', def: 'The insurer\'s main investment account that backs guaranteed products like whole life and traditional UL.' },
        { term: 'Prospectus', def: 'A legal disclosure document required for securities, detailing fees, risks, and investment options of a variable policy.' },
        { term: 'Sub-Account', def: 'An individual investment option within a separate account, similar to a mutual fund.' },
        { term: 'FINRA', def: 'The Financial Industry Regulatory Authority; regulates broker-dealers and agents who sell securities, including variable insurance products.' },
      ],
      mnemonics: [
        'Variable = Venture into the market = Securities license required.',
        'VL = fixed premium + variable cash value. VUL = flexible premium + variable cash value.',
        'Separate account = Separated from insurer risk. General account = General guarantees from insurer.',
      ],
      mnCallout:
        'To sell variable life or VUL in Minnesota, an agent must hold a Minnesota life insurance producer license AND the appropriate FINRA securities registrations (Series 6 or 7, plus Series 63 or 66). The Minnesota Department of Commerce coordinates with FINRA on enforcement actions involving variable products.',
      videoEmbeds: [
        { title: 'Variable Life vs Variable Universal Life', youtubeId: 'TODO_vl_vul' /* TODO: replace with real ID */ },
      ],
      externalLinks: [
        { label: 'FINRA — Variable Life Insurance', url: 'https://www.finra.org/investors/insights/variable-life-insurance' },
        { label: 'SEC — Variable Insurance Products', url: 'https://www.sec.gov/answers/varannu.htm' },
      ],
    },
  ],

  // ─── FLASHCARDS ─────────────────────────────────────────────
  flashcards: [
    {
      id: 'l1-fc-01',
      moduleId: 'l1',
      front: 'What type of life insurance provides coverage for a specific period and builds NO cash value?',
      back: 'Term life insurance.',
    },
    {
      id: 'l1-fc-02',
      moduleId: 'l1',
      front: 'What is the key feature of a RENEWABLE term policy?',
      back: 'The owner can renew coverage at the end of the term without providing evidence of insurability, but the premium increases.',
    },
    {
      id: 'l1-fc-03',
      moduleId: 'l1',
      front: 'What is the key feature of a CONVERTIBLE term policy?',
      back: 'The owner can convert the term policy to a permanent policy without a new medical exam, before a stated deadline.',
    },
    {
      id: 'l1-fc-04',
      moduleId: 'l1',
      front: 'Which type of term insurance is commonly used for mortgage protection?',
      back: 'Decreasing term — the death benefit decreases over time, mirroring a declining mortgage balance.',
    },
    {
      id: 'l1-fc-05',
      moduleId: 'l1',
      front: 'Name the three nonforfeiture options required by law for whole life policies.',
      back: 'Cash surrender value, reduced paid-up insurance, and extended term insurance (CRE).',
    },
    {
      id: 'l1-fc-06',
      moduleId: 'l1',
      front: 'How does limited-pay whole life differ from straight whole life?',
      back: 'Limited-pay compresses premiums into a shorter period (e.g., 20 years or to age 65), while straight whole life premiums are paid for the insured\'s entire lifetime. Both provide permanent coverage.',
    },
    {
      id: 'l1-fc-07',
      moduleId: 'l1',
      front: 'What is a Modified Endowment Contract (MEC)?',
      back: 'A life insurance policy that fails the 7-pay test due to excessive premium funding. Loans and withdrawals from a MEC are taxed less favorably (LIFO) and may incur a 10% penalty before age 59 1/2.',
    },
    {
      id: 'l1-fc-08',
      moduleId: 'l1',
      front: 'In universal life, what is the difference between Option A and Option B?',
      back: 'Option A (level): death benefit is a fixed face amount (cash value is inside). Option B (increasing): death benefit is the face amount PLUS accumulated cash value.',
    },
    {
      id: 'l1-fc-09',
      moduleId: 'l1',
      front: 'Under UL Option A, what happens to the net amount at risk as cash value grows?',
      back: 'It decreases, because the cash value covers a larger portion of the fixed death benefit.',
    },
    {
      id: 'l1-fc-10',
      moduleId: 'l1',
      front: 'What three components does universal life unbundle?',
      back: 'Mortality charge, expense charge, and cash value account.',
    },
    {
      id: 'l1-fc-11',
      moduleId: 'l1',
      front: 'What is the FLOOR in an indexed universal life policy?',
      back: 'The minimum interest rate credited to the cash value (often 0%), protecting against negative market returns.',
    },
    {
      id: 'l1-fc-12',
      moduleId: 'l1',
      front: 'What is the CAP in an indexed universal life policy?',
      back: 'The maximum interest rate that can be credited in a given period, limiting the upside even when the index performs strongly.',
    },
    {
      id: 'l1-fc-13',
      moduleId: 'l1',
      front: 'Is indexed universal life (IUL) classified as a security?',
      back: 'No. IUL is classified as an insurance product, not a security, because the policy owner does not bear direct market risk (the floor prevents negative crediting).',
    },
    {
      id: 'l1-fc-14',
      moduleId: 'l1',
      front: 'Which two types of life insurance are classified as SECURITIES?',
      back: 'Variable life (VL) and variable universal life (VUL), because the policy owner directs investments in separate accounts and bears the investment risk.',
    },
    {
      id: 'l1-fc-15',
      moduleId: 'l1',
      front: 'What is a separate account?',
      back: 'An investment account held apart from the insurer\'s general account, used for variable product cash values. It is shielded from the insurer\'s creditors.',
    },
    {
      id: 'l1-fc-16',
      moduleId: 'l1',
      front: 'What document must be provided to a buyer of a variable life or VUL policy?',
      back: 'A prospectus, which discloses fees, risks, and investment options.',
    },
    {
      id: 'l1-fc-17',
      moduleId: 'l1',
      front: 'To sell variable life insurance in Minnesota, what licenses/registrations are required?',
      back: 'A Minnesota life insurance producer license AND FINRA securities registrations (Series 6 or 7, plus Series 63 or 66).',
    },
    {
      id: 'l1-fc-18',
      moduleId: 'l1',
      front: 'What is the participation rate in an IUL policy?',
      back: 'The percentage of the index gain that is actually credited to the cash value. For example, if the index gains 10% and the participation rate is 80%, only 8% is credited.',
    },
  ],

  // ─── QUIZ QUESTIONS ─────────────────────────────────────────
  quizQuestions: [
    // --- Difficulty 1 (basic recall) ---
    {
      id: 'l1-q-01',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 1,
      stem: 'Which type of life insurance provides coverage for a stated period and does NOT accumulate cash value?',
      choices: [
        'Whole life',
        'Term life',
        'Universal life',
        'Variable life',
      ],
      correctIndex: 1,
      explanation: 'Term life insurance provides a death benefit for a specific period only and does not build cash value. All other options listed are permanent policies that accumulate cash value.',
    },
    {
      id: 'l1-q-02',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 1,
      stem: 'A whole life policy that requires premium payments for the insured\'s entire lifetime is called:',
      choices: [
        'Limited-pay life',
        'Single-premium whole life',
        'Straight (ordinary) life',
        'Modified endowment contract',
      ],
      correctIndex: 2,
      explanation: 'Straight (ordinary) life requires premiums from issue until death or maturity (age 100/121). Limited-pay compresses payments into a shorter period, and single-premium uses one lump sum.',
    },
    {
      id: 'l1-q-03',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 1,
      stem: 'Which nonforfeiture option uses the cash value to purchase term insurance at the original face amount for as long as possible?',
      choices: [
        'Cash surrender',
        'Reduced paid-up insurance',
        'Extended term insurance',
        'Automatic premium loan',
      ],
      correctIndex: 2,
      explanation: 'Extended term uses the cash value to buy term coverage at the original face amount for a limited duration. Reduced paid-up buys a smaller permanent policy. Cash surrender returns the cash value to the owner.',
    },
    {
      id: 'l1-q-04',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 1,
      stem: 'Dividends paid on a participating whole life policy are considered:',
      choices: [
        'Guaranteed income',
        'A return of excess premium',
        'Capital gains',
        'Interest income',
      ],
      correctIndex: 1,
      explanation: 'Policy dividends are treated as a return of excess premium and are not taxable until total dividends received exceed total premiums paid. They are never guaranteed.',
    },
    {
      id: 'l1-q-05',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 1,
      stem: 'What is the primary advantage of a renewable term policy?',
      choices: [
        'The premium decreases at renewal',
        'The policy builds cash value at renewal',
        'The owner can renew without proving insurability',
        'The death benefit doubles at renewal',
      ],
      correctIndex: 2,
      explanation: 'The renewable feature allows the policyholder to renew coverage at the end of the term without evidence of insurability. The premium increases at each renewal to reflect the insured\'s attained age.',
    },
    // --- Difficulty 2 (application) ---
    {
      id: 'l1-q-06',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'A Burnsville homeowner wants a life insurance policy whose death benefit decreases over time to match her declining mortgage balance. Which policy is most appropriate?',
      choices: [
        'Level term',
        'Increasing term',
        'Decreasing term',
        'Whole life',
      ],
      correctIndex: 2,
      explanation: 'Decreasing term is designed for situations where the financial obligation decreases over time, such as a mortgage. The death benefit declines roughly in step with the remaining mortgage balance.',
    },
    {
      id: 'l1-q-07',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'Under universal life Option A (level death benefit), a $400,000 policy has accumulated $80,000 in cash value. What amount will the beneficiary receive at death?',
      choices: [
        '$320,000',
        '$400,000',
        '$480,000',
        '$80,000',
      ],
      correctIndex: 1,
      explanation: 'Under Option A, the death benefit is the stated face amount — $400,000. The cash value is included within that amount. The insurer\'s net amount at risk is $320,000.',
    },
    {
      id: 'l1-q-08',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'Under universal life Option B (increasing death benefit), a $400,000 policy has accumulated $80,000 in cash value. What amount will the beneficiary receive at death?',
      choices: [
        '$320,000',
        '$400,000',
        '$480,000',
        '$80,000',
      ],
      correctIndex: 2,
      explanation: 'Under Option B, the death benefit equals the face amount PLUS the accumulated cash value: $400,000 + $80,000 = $480,000.',
    },
    {
      id: 'l1-q-09',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'A St. Paul teacher purchased a 10-year term policy at age 25. At age 34, she is diagnosed with diabetes but wants permanent coverage. Which policy feature allows her to obtain a whole life policy without a new medical exam?',
      choices: [
        'Renewable provision',
        'Waiver of premium rider',
        'Convertible provision',
        'Guaranteed insurability rider',
      ],
      correctIndex: 2,
      explanation: 'The convertible provision allows the owner to convert a term policy to a permanent policy without evidence of insurability. The renewable provision only allows renewal of the same type of term coverage.',
    },
    {
      id: 'l1-q-10',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'Which of the following statements about indexed universal life (IUL) is CORRECT?',
      choices: [
        'The policy owner invests directly in the S&P 500',
        'IUL is classified as a security and requires a prospectus',
        'The floor protects the cash value from negative index returns',
        'There is no limit on how much interest can be credited',
      ],
      correctIndex: 2,
      explanation: 'The floor (often 0%) ensures the cash value is not reduced by negative index performance. The owner does not invest directly in the index. IUL is NOT a security. The cap limits upside crediting.',
    },
    {
      id: 'l1-q-11',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'A Bloomington dentist owns an IUL with a 0% floor, 12% cap, and 100% participation rate. If the linked index gains 20% this year, how much interest is credited?',
      choices: [
        '0%',
        '12%',
        '20%',
        '10%',
      ],
      correctIndex: 1,
      explanation: 'The cap limits the credited interest to 12%, even though the index gained 20%. With a 100% participation rate, the full gain up to the cap is credited.',
    },
    {
      id: 'l1-q-12',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'What is the primary risk of underfunding a universal life policy?',
      choices: [
        'The death benefit will automatically double',
        'The policy will convert to term insurance',
        'The cash value may be exhausted, causing the policy to lapse',
        'The insurer will refund all premiums paid',
      ],
      correctIndex: 2,
      explanation: 'If insufficient premiums are paid and the cash value cannot cover the monthly mortality and expense charges, the policy will lapse and coverage will end.',
    },
    {
      id: 'l1-q-13',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'To sell variable universal life insurance in Minnesota, an agent must hold:',
      choices: [
        'Only a Minnesota life insurance license',
        'Only FINRA securities registrations',
        'Both a Minnesota life insurance license and FINRA securities registrations',
        'A Minnesota property and casualty license',
      ],
      correctIndex: 2,
      explanation: 'Variable products are both insurance products and securities, so selling them requires a state life insurance license AND FINRA registrations (typically Series 6 or 7, plus Series 63 or 66).',
    },
    // --- Difficulty 3 (analysis / tricky) ---
    {
      id: 'l1-q-14',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'An insured owns a universal life policy with Option A and a face amount of $250,000. Over 20 years, the cash value has grown to $240,000. What is MOST LIKELY to happen?',
      choices: [
        'The insurer will cancel the policy',
        'The death benefit will automatically increase to maintain the required corridor',
        'The cash value will be reduced to maintain the corridor',
        'The policy will convert to term insurance',
      ],
      correctIndex: 1,
      explanation: 'IRS rules require a minimum corridor (gap) between the death benefit and cash value. When the cash value approaches the face amount, the insurer must increase the death benefit to maintain the policy\'s tax-advantaged status.',
    },
    {
      id: 'l1-q-15',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'A single-premium whole life policy will almost always be classified as a Modified Endowment Contract (MEC). What is the practical consequence for the policy owner?',
      choices: [
        'The death benefit is no longer income-tax-free',
        'Policy loans and withdrawals are taxed on a LIFO basis and may incur a 10% penalty before age 59 1/2',
        'The policy cannot name a beneficiary',
        'Premiums are no longer deductible',
      ],
      correctIndex: 1,
      explanation: 'MEC status changes the tax treatment of distributions: loans and withdrawals are taxed LIFO (gains come out first) and may be subject to a 10% early-distribution penalty. The death benefit itself remains income-tax-free. Life insurance premiums are generally not tax-deductible regardless of MEC status.',
    },
    {
      id: 'l1-q-16',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'A variable life policy owner has directed cash value into a stock sub-account. If the insurer becomes insolvent, what happens to the sub-account assets?',
      choices: [
        'They become part of the insurer\'s general account and are available to creditors',
        'They are protected in the separate account and shielded from the insurer\'s creditors',
        'They are automatically transferred to the state guaranty association',
        'They are forfeited to the state of Minnesota',
      ],
      correctIndex: 1,
      explanation: 'Separate account assets are held apart from the insurer\'s general account specifically to protect them from the insurer\'s creditors in the event of insolvency.',
    },
    {
      id: 'l1-q-17',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'All of the following are true about variable universal life (VUL) EXCEPT:',
      choices: [
        'Premiums are flexible',
        'Cash value is invested in separate accounts',
        'A guaranteed minimum cash value is provided by the insurer',
        'A prospectus must be delivered to the buyer',
      ],
      correctIndex: 2,
      explanation: 'VUL does NOT guarantee a minimum cash value because the investments are in separate accounts where the owner bears the risk. Premiums are flexible, sub-accounts are used, and a prospectus is required because VUL is a security.',
    },
    {
      id: 'l1-q-18',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'An IUL policy has a 0% floor, 10% cap, and 75% participation rate. If the index gains 16% in a given year, how much interest is credited?',
      choices: [
        '10%',
        '12%',
        '7.5%',
        '16%',
      ],
      correctIndex: 0,
      explanation: 'First apply the participation rate: 16% x 75% = 12%. Then apply the cap: the cap is 10%, so the credited rate is limited to 10%. The cap is the binding constraint here.',
    },
    {
      id: 'l1-q-19',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 3,
      stem: 'A Maple Grove couple, both age 62 with low risk tolerance and conservative investment preferences, asks their agent about a variable universal life policy with aggressive stock sub-accounts. What should the agent do?',
      choices: [
        'Sell the policy because the couple requested it',
        'Determine that the policy is likely not suitable given their risk profile and recommend alternatives',
        'Sell the policy but exclude the aggressive sub-accounts',
        'Refer the couple to another agent',
      ],
      correctIndex: 1,
      explanation: 'FINRA suitability rules and Minnesota best-interest standards require agents to recommend products appropriate for the client\'s risk tolerance, age, and financial situation. An aggressive VUL is likely unsuitable for a conservative couple near retirement.',
    },
    {
      id: 'l1-q-20',
      moduleId: 'l1',
      domain: 'life',
      difficulty: 2,
      stem: 'Which of the following policies is NOT classified as a security?',
      choices: [
        'Variable life',
        'Variable universal life',
        'Indexed universal life',
        'All of the above are securities',
      ],
      correctIndex: 2,
      explanation: 'Indexed universal life (IUL) is NOT a security because the policy owner does not directly invest in the market and the floor protects against loss. Variable life and VUL are securities because the owner bears investment risk through separate accounts.',
    },
  ],
};
