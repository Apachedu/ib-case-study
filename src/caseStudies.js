export const caseStudies = [
  {
    id: "econ-saudi-001",
    title: "Saudi Arabia’s Expansionary Fiscal Policy Response to Unemployment",
    level: "SL/HL",
    topic: "2.3 Fiscal Policy",
    module: "Macroeconomics",
    relatedTopics: ["2.4 Unemployment", "2.1 Measuring Economic Activity"],
    toolkit: ["Keynesian Multiplier", "Fiscal Tools", "Unemployment Types"],
    caseType: "Macroeconomic Intervention",

    caseText: `
      In response to rising unemployment, the Saudi Arabian government introduced a 7% increase in public spending for 2019, marking a pivot away from strict austerity. The move was aimed at stimulating non-oil sectors, given their Vision 2030 diversification goals. 

      With unemployment among nationals hitting 12.9% and sluggish private sector growth, the government opted to slow its deficit reduction plans to prioritize job creation. The spending surge aimed to support infrastructure, education, and health sectors.
    `,

    dataTable: [
      { label: "Saudi 2019 Budget Increase", value: "7%" },
      { label: "Unemployment Rate (2018)", value: "12.9%" },
      { label: "2015 Fiscal Deficit", value: "$98 billion (15% of GDP)" },
      { label: "Projected 2019 Deficit", value: "4.2% of GDP" }
    ],

    iaLink: "Evaluate the impact of expansionary fiscal policy on employment and output.",
    eeLink: "To what extent can fiscal stimulus reduce unemployment in oil-dependent economies?",
    tokLink: "How do policymakers balance ethical obligations and economic theory when responding to job loss?",

    resources: "See Keynesian Multiplier and types of unemployment (Paul Krugman model).",

    questions: [
      {
        id: "q1",
        text: "Evaluate the effectiveness of Saudi Arabia’s fiscal policy in reducing unemployment.",
        commandTerm: "Evaluate",
        marks: 10,
        level: "SL/HL",
        banding: [
          "1–4: Basic knowledge of fiscal policy with limited analysis.",
          "5–7: Reasonable application of theory to the Saudi context, some balance.",
          "8–10: Strong analysis, well-supported evaluation, includes limitations and counterarguments."
        ],
        sampleAnswer: "The increased government spending could shift AD rightward, reducing cyclical unemployment. However, structural issues in the Saudi labour market and oil price volatility may limit long-term success. Multiplier effects depend on consumer confidence and import leakages."
      },
      {
        id: "q2",
        text: "Explain how expansionary fiscal policy can reduce cyclical unemployment.",
        commandTerm: "Explain",
        marks: 6,
        level: "SL & HL",
        banding: [
          "1–2: Vague reference to government spending and employment.",
          "3–4: Moderate explanation of AD and demand-deficient unemployment.",
          "5–6: Clear chain of reasoning including fiscal tools and AD/AS framework."
        ],
        sampleAnswer: "By increasing government spending, aggregate demand rises. This prompts firms to hire more workers, reducing cyclical unemployment caused by weak demand."
      }
    ]
  },

  {
    id: "bm-equity-001",
    title: "Equity Academy: Balancing Social Impact and Operational Efficiency",
    level: "HL",
    topic: "2.2 Organizational Structure",
    module: "Human Resources",
    relatedTopics: ["2.4 Motivation", "2.5 Organizational Culture", "3.1 Financial Rewards"],
    toolkit: ["Shamrock Org Structure", "Motivation Theories", "Appraisal Systems"],
    caseType: "Operational/Structural Dilemma",

    caseText: `
      Equity Academy (EA) is a socially-driven tutoring firm operating in five cities. It pays above-average wages but allows tutors extensive autonomy, creating a highly decentralized culture. EA's leadership is debating whether this flat structure is slowing decision-making.

      Although tutors report high satisfaction, informal appraisals and decentralized communication have raised concerns about accountability and future scalability—especially as EA prepares to launch educational products online.
    `,

    dataTable: [
      { label: "Cities of Operation", value: "5" },
      { label: "% of Part-Time Tutors", value: ">50%" },
      { label: "Employee Ownership Stake", value: "25%" },
      { label: "Avg. Tutor Tenure", value: "3+ years for full-time" }
    ],

    iaLink: "Analyse impact of organisational structure on communication and motivation.",
    eeLink: "To what extent does decentralization improve employee motivation and firm performance?",
    tokLink: "How do different perspectives on 'autonomy' affect the evaluation of organizational effectiveness?",

    resources: "Use Mintzberg’s structure model and motivational theories (e.g., Herzberg, Pink).",

    questions: [
      {
        id: "q1",
        text: "Analyse the impact of Equity Academy’s decentralised structure on its decision-making.",
        commandTerm: "Analyse",
        marks: 10,
        level: "HL Only",
        banding: [
          "1–4: Identifies structure with vague impact on decisions.",
          "5–7: Links decentralization to communication and responsiveness.",
          "8–10: Thorough use of case data and organizational theory."
        ],
        sampleAnswer: "EA’s decentralized approach empowers tutors and aligns with its social mission, but hinders consistency in operations. Limited formal reporting may delay high-level decisions, especially when scaling digital services."
      },
      {
        id: "q2",
        text: "Explain one benefit and one drawback of EA’s informal appraisal system.",
        commandTerm: "Explain",
        marks: 6,
        level: "SL & HL",
        banding: [
          "1–2: Lists advantages/disadvantages.",
          "3–4: Moderate use of EA context.",
          "5–6: Detailed explanation using motivation theory and appraisal goals."
        ],
        sampleAnswer: "The informal system may boost tutor comfort and reduce stress, fostering trust. However, it can lead to inconsistent feedback, impacting performance tracking and promotion fairness."
      }
    ]
  },

  {
    id: "bm-econ-amul-001",
    title: "Amul’s Global Pricing Dilemma: Balancing Cost Push and Competitive Pressure",
    level: "SL/HL",
    topic: "4.5 The Four Ps – Price",
    module: "Marketing / Microeconomics",
    relatedTopics: ["1.5 External Environment", "2.5 Economic Change", "2.2 Price Elasticity"],
    toolkit: ["Cost-Plus Pricing", "Elasticity Analysis", "Porter’s Five Forces"],
    caseType: "Strategic Pricing and Expansion",

    caseText: `
      Amul, India's largest dairy cooperative, is facing a strategic dilemma: whether to revise its international pricing strategy amid rising global milk powder costs and currency fluctuations. The cooperative has long positioned itself as an affordable and socially grounded brand.

      With aggressive competition from multinationals like Nestlé and local dairy firms in Southeast Asia, Amul risks eroding its margin or losing market share. The firm also faces input cost pressures from higher feed and energy prices and public backlash if retail prices rise too sharply.
    `,

    dataTable: [
      { label: "Avg. Export Price per kg (2023)", value: "$3.75" },
      { label: "Global Milk Powder Price Increase", value: "+21% YoY" },
      { label: "Currency Depreciation (INR vs USD)", value: "-9%" },
      { label: "Competitor Price Range in SEA", value: "$3.60–$4.10/kg" }
    ],

    iaLink: "Apply cost-plus pricing and elasticity to evaluate international price adjustments.",
    eeLink: "To what extent should a socially driven business prioritize profit margins in global markets?",
    tokLink: "How do cultural perceptions of fairness shape pricing decisions across countries?",

    resources: "See Price Elasticity of Demand and Competitive Pricing strategies.",

    questions: [
      {
        id: "q1",
        text: "Discuss the factors Amul should consider before changing its pricing strategy in international markets.",
        commandTerm: "Discuss",
        marks: 10,
        level: "SL/HL",
        banding: [
          "1–4: Lists generic factors with minimal link to Amul.",
          "5–7: Good balance of internal/external factors, some link to data.",
          "8–10: Strong integration of cost/market analysis, stakeholder impact."
        ],
        sampleAnswer: "Amul should weigh cost inflation, exchange rate impact, and elasticity of demand in price-sensitive markets. Maintaining affordability aligns with its mission, but sustainability requires profit. Competitor analysis and stakeholder sentiment also influence strategy."
      },
      {
        id: "q2",
        text: "Explain how price elasticity affects Amul’s ability to raise prices in competitive markets.",
        commandTerm: "Explain",
        marks: 6,
        level: "SL & HL",
        banding: [
          "1–2: Basic mention of demand and price.",
          "3–4: Moderate explanation using elasticity definition.",
          "5–6: Strong explanation with applied case insight."
        ],
        sampleAnswer: "If Amul’s product is price elastic, a price increase could lead to a disproportionate drop in quantity demanded. In price-sensitive SEA markets, this may reduce revenue and market share."
      }
    ]
  }
];
