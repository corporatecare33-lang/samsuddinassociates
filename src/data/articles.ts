export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    slug: "accrued-expenses-what-they-are-and-why-they-matter",
    category: "Accounting",
    title: "Accrued Expenses: What They Are and Why They Matter",
    excerpt:
      "Understand how accrued expenses shape your books, cash flow, and month-end close accuracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    sections: [
      {
        heading: "What counts as an accrued expense",
        body: [
          "An accrued expense is a cost your business has incurred but hasn't yet paid or invoiced for — think unpaid wages at month-end, interest that has built up on a loan, or utilities used but not yet billed. Under accrual accounting, you record the expense in the period it was incurred, not the period cash actually leaves your account.",
          "This distinction matters because it keeps your income statement honest. If you only recorded expenses when you paid them, a single delayed vendor invoice could make a profitable month look far better than it actually was.",
        ],
      },
      {
        heading: "Why accruals protect your close process",
        body: [
          "A clean month-end close depends on matching revenue with the expenses that generated it, in the same period. Missed accruals are one of the most common reasons a company's monthly financials swing unpredictably from month to month, which erodes trust with investors, lenders, and your own leadership team.",
          "Building a recurring accrual checklist — payroll, interest, utilities, commissions, and any recurring vendor cost — turns this from a source of surprises into a five-minute routine your controller runs every close.",
        ],
      },
      {
        heading: "Getting the mechanics right",
        body: [
          "Each accrual is recorded with a journal entry that debits the relevant expense account and credits an accrued liabilities account. When the bill is eventually paid, that liability is reversed and cash is credited instead — so the expense is never double-counted.",
          "Automating recurring accruals inside your accounting platform, rather than rebuilding the list from memory every month, is one of the highest-leverage changes a growing company can make to its close.",
        ],
      },
    ],
    takeaways: [
      "Accrued expenses are recorded when incurred, not when paid.",
      "A recurring accrual checklist prevents month-to-month profit swings.",
      "Automate recurring accruals so they aren't rebuilt from memory each close.",
    ],
  },
  {
    slug: "tax-planning-strategies-for-growing-companies",
    category: "Business Tax",
    title: "Tax Planning Strategies for Growing Companies",
    excerpt:
      "Proactive tax planning approaches that compound savings as your business scales.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min read",
    sections: [
      {
        heading: "Plan quarterly, not just at year-end",
        body: [
          "Most tax savings are lost simply because they're only considered once a year, after the window to act has already closed. Reviewing your tax position quarterly — alongside your actual financials, not last year's numbers — gives you time to make entity, timing, and structuring decisions while they still matter.",
          "This is especially true for fast-growing companies, where a strategy that made sense at $2M in revenue can leave real money on the table at $10M.",
        ],
      },
      {
        heading: "Choose the right entity structure as you scale",
        body: [
          "The right structure at formation is rarely the right structure five years later. As profitability, headcount, and investor involvement change, revisiting your entity election — S-corp, C-corp, or partnership — can materially change your effective tax rate.",
          "The same applies to state nexus: as you hire remote employees or open new markets, you may unknowingly create tax filing obligations in states you've never formally registered in.",
        ],
      },
      {
        heading: "Don't leave credits on the table",
        body: [
          "R&D tax credits, the Work Opportunity Tax Credit, and various state-level incentives are consistently under-claimed by growing companies, largely because they assume credits are only for larger, more established firms. A proactive review each year catches these before the filing deadline, not after.",
        ],
      },
    ],
    takeaways: [
      "Quarterly tax reviews catch opportunities annual reviews miss.",
      "Revisit your entity structure as revenue and headcount grow.",
      "R&D and state credits are commonly under-claimed by growing companies.",
    ],
  },
  {
    slug: "bookkeeping-basics-every-small-business-needs",
    category: "Bookkeeping",
    title: "Bookkeeping Basics Every Small Business Needs",
    excerpt:
      "The essential ledger practices that keep your finances clean and audit-ready.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
    sections: [
      {
        heading: "Separate business and personal finances from day one",
        body: [
          "It sounds obvious, but mixed accounts remain one of the most common bookkeeping problems small businesses bring to us. A dedicated business bank account and card make every downstream step — categorizing transactions, reconciling statements, filing taxes — dramatically simpler.",
        ],
      },
      {
        heading: "Reconcile on a fixed schedule",
        body: [
          "Bank and credit card reconciliation shouldn't be something you get to eventually. Doing it weekly or monthly, on a fixed calendar, catches errors, duplicate charges, and fraud while they're still easy to trace back to their source.",
          "A consistent chart of accounts — one that doesn't change structure every quarter — is what makes those reconciliations, and any reporting built on top of them, comparable over time.",
        ],
      },
      {
        heading: "Keep records audit-ready as you go",
        body: [
          "Receipts, invoices, and contracts attached to the transactions they support turn a future audit or diligence request from a scramble into a non-event. The habit of filing documentation in real time, rather than backfilling it later, is what separates clean books from books that only look clean.",
        ],
      },
    ],
    takeaways: [
      "Keep business and personal accounts fully separate.",
      "Reconcile bank and card statements on a fixed weekly or monthly cadence.",
      "Attach supporting documentation to transactions as they happen, not later.",
    ],
  },
  {
    slug: "payroll-mistakes-small-businesses-make",
    category: "Payroll",
    title: "Payroll Mistakes Small Businesses Make",
    excerpt:
      "Avoid the compliance pitfalls that lead to penalties, unhappy staff, and rework.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    sections: [
      {
        heading: "Misclassifying workers",
        body: [
          "Treating an employee as an independent contractor — or vice versa — is one of the costliest payroll mistakes a small business can make. Misclassification can trigger back taxes, penalties, and interest, and the rules differ by state, so a classification that's fine in one jurisdiction can be a liability in another.",
        ],
      },
      {
        heading: "Missing multi-state withholding obligations",
        body: [
          "Remote work means it's increasingly common to have employees living in a different state than the one your business is registered in. Each state has its own withholding, unemployment insurance, and registration requirements, and missing them is rarely caught until a state notice arrives, well after the underpayment has accrued.",
        ],
      },
      {
        heading: "Running payroll without a review step",
        body: [
          "Overtime miscalculations, missed benefit deductions, and late tax deposits are almost always caught by a second set of eyes before submission — but many small businesses run payroll as a single, unreviewed step. Building in a short review before every run, and reconciling payroll to the general ledger monthly, catches errors before they compound into penalties or unhappy employees.",
        ],
      },
    ],
    takeaways: [
      "Get worker classification right in every state you employ people.",
      "Track multi-state withholding obligations as your team goes remote.",
      "Add a review step before submitting payroll, not just after.",
    ],
  },
  {
    slug: "how-virtual-cfo-services-improve-growth",
    category: "CFO",
    title: "How Virtual CFO Services Improve Growth",
    excerpt:
      "A fractional CFO can unlock forecasting, capital strategy, and investor-ready reporting.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min read",
    sections: [
      {
        heading: "Forecasting that actually drives decisions",
        body: [
          "Most growing companies have a budget, but far fewer have a rolling forecast that updates as real numbers come in. A virtual CFO builds and maintains that forecast, so hiring, spending, and fundraising decisions are made against where the business is actually headed, not where last year's plan assumed it would be.",
        ],
      },
      {
        heading: "Capital strategy before you need it",
        body: [
          "Fundraising and debt decisions go far better when the groundwork — clean historicals, a defensible model, and a clear narrative on unit economics — is laid months before a raise, not scrambled together once term sheets are on the table. A fractional CFO brings that discipline year-round, at a fraction of the cost of a full-time hire.",
        ],
      },
      {
        heading: "Reporting your board and investors actually trust",
        body: [
          "Investor updates and board packages built on inconsistent numbers erode confidence fast. A virtual CFO standardizes your KPIs and reporting cadence, so the same numbers that drive internal decisions are the ones presented externally — with no reconciliation required between the two.",
        ],
      },
    ],
    takeaways: [
      "A rolling forecast beats a static annual budget for real decisions.",
      "Capital strategy work should start months before you need to raise.",
      "Standardized KPIs keep internal and investor reporting consistent.",
    ],
  },
  {
    slug: "financial-reporting-best-practices",
    category: "Finance",
    title: "Financial Reporting Best Practices",
    excerpt:
      "Board-ready reports that build trust and drive better decisions every quarter.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    sections: [
      {
        heading: "Close on a fixed calendar",
        body: [
          "Board and investor trust starts with predictability. Closing your books on the same schedule every month — for example, finalized by the 10th business day — means reports arrive when people expect them, and any delay becomes a visible signal worth investigating rather than the norm.",
        ],
      },
      {
        heading: "Report the same KPIs every period",
        body: [
          "Swapping metrics quarter to quarter, even with good intentions, makes it impossible for readers to track trends. A fixed set of core KPIs — tied to how your business actually creates value — should appear in every report, with new metrics added alongside them, not in place of them.",
        ],
      },
      {
        heading: "Lead with the story, not just the spreadsheet",
        body: [
          "Numbers without context force every reader to build their own narrative, which rarely matches reality. A short written summary — what changed, why, and what it means for the plan — turns a report people skim into one they actually read and act on.",
        ],
      },
    ],
    takeaways: [
      "Close the books on the same fixed calendar every month.",
      "Keep a consistent core KPI set so trends are visible over time.",
      "Pair every report with a short narrative, not just raw numbers.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
