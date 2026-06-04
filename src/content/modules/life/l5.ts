import type { Module } from '@/types/content';

// TODO: expand — full lessons, flashcards, and quiz questions needed
export const l5: Module = {
  id: 'l5',
  domain: 'life',
  title: 'Taxation & Retirement',
  summary: 'Tax treatment of life insurance, MECs, 1035 exchanges, and qualified vs non-qualified retirement plans.',
  order: 9,
  lessons: [
    {
      id: 'l5-l1',
      moduleId: 'l5',
      title: 'Tax Treatment of Life Insurance',
      order: 1,
      estReadMin: 8,
      bodyMarkdown: `Understanding how life insurance is taxed is essential for the licensing exam and for advising clients properly. The tax advantages of life insurance are one of its biggest selling points.

**Death benefits** are generally received income-tax-free by the beneficiary under IRC Section 101(a). **Cash value** grows on a tax-deferred basis — you don't pay taxes on the gains until you withdraw them. **Premiums** for personal life insurance are NOT tax-deductible.

Two important tax concepts: A **Modified Endowment Contract (MEC)** is a life policy that was funded too quickly (failed the 7-pay test). MECs lose some tax advantages — withdrawals and loans are taxed on a LIFO (last-in, first-out) basis and may incur a 10% penalty if taken before age 59½. A **1035 exchange** allows you to swap one life insurance policy for another (or for an annuity) without triggering a taxable event.`,
      keyTerms: [
        { term: 'IRC Section 101(a)', def: 'The Internal Revenue Code provision that makes life insurance death benefits generally income-tax-free to the beneficiary.' },
        { term: 'Modified Endowment Contract (MEC)', def: 'A life policy that fails the 7-pay test due to excessive funding — withdrawals and loans are taxed LIFO and may face a 10% early withdrawal penalty.' },
        { term: '7-Pay Test', def: 'The IRS test determining whether a policy is a MEC — if cumulative premiums paid in the first 7 years exceed the amount needed to pay up the policy, it\'s a MEC.' },
        { term: '1035 Exchange', def: 'A tax-free replacement of one insurance or annuity contract for another of like kind — avoids triggering capital gains tax on the old policy.' },
        { term: 'Tax-Deferred Growth', def: 'Cash value inside a life policy grows without being taxed each year — taxes are only owed upon withdrawal of gains.' },
      ],
    },
    {
      id: 'l5-l2',
      moduleId: 'l5',
      title: 'Qualified vs Non-Qualified Retirement Plans',
      order: 2,
      estReadMin: 8,
      bodyMarkdown: `Retirement plans are a major topic on the exam. The key distinction is between **qualified** plans (which meet IRS requirements and receive tax advantages) and **non-qualified** plans (which don't meet those requirements but offer more flexibility).

**Qualified plans** include 401(k)s, traditional IRAs, Roth IRAs, SEP-IRAs, SIMPLE IRAs, and defined benefit pensions. Contributions may be tax-deductible, growth is tax-deferred, and distributions are taxed as ordinary income (except Roth, which grows tax-free).

**Non-qualified plans** are funded with after-tax dollars and don't have the same contribution limits or restrictions. They're often used by employers to provide additional benefits to key executives (deferred compensation plans, executive bonus plans).`,
      keyTerms: [
        { term: 'Qualified Plan', def: 'A retirement plan that meets IRS/ERISA requirements and receives favorable tax treatment — contributions may be deductible, growth is tax-deferred.' },
        { term: 'Non-Qualified Plan', def: 'A retirement plan that doesn\'t meet IRS requirements — no contribution limits or mandatory coverage rules, funded with after-tax dollars.' },
        { term: '401(k)', def: 'An employer-sponsored qualified plan allowing employees to contribute pre-tax salary — employer may match contributions.' },
        { term: 'Traditional IRA', def: 'An individual retirement account with tax-deductible contributions (subject to income limits if covered by an employer plan) and tax-deferred growth.' },
        { term: 'Roth IRA', def: 'An IRA funded with after-tax dollars — contributions are not deductible, but qualified distributions (after age 59½ and 5 years) are completely tax-free.' },
      ],
    },
  ],
  flashcards: [],
  quizQuestions: [],
};
