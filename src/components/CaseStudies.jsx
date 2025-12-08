import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const caseStudiesData = [
  {
    id: 2,
    title: 'Building Shopify\'s Unified Email Platform',
    shortSummary: 'Leading the migration from a patchwork of parallel email systems to a unified internal platform that centralized communications, improved consistency, and empowered teams.',
    image: '/case-studies/hero_case_study.png',
    imageAlt: 'Abstract illustration showing multiple message streams flowing into a single unified communication platform.',
    metricsImage: '/case-studies/hero_key_metrics.png',
    metricsImageAlt: 'Minimal abstract graphic representing improved system performance and operational efficiency.',
    isHero: true,
    narrativeProblem: 'Shopify\'s communication ecosystem had grown organically over the years. Different teams were using Marketo, HubSpot, SendGrid, and several internal systems, which led to fragmented merchant experiences, no unified control over send frequency, and very limited visibility into what communications were being triggered across the company. The result was inconsistent branding and a lack of trust in the messaging infrastructure.',
    narrativeSolution: 'I collaborated closely with teams across CRM & Marketing Automation, Product, and Engineering to design and deliver a unified internal email platform. This included shaping the architecture for a centralized communication layer, introducing global send-frequency guardrails, and building reusable self-serve components to support scalable campaign development. I also led documentation, training, and office hours to onboard internal teams and guide the migration of existing lifecycle programs. We delivered an MVP in approximately eight months and continued expanding capabilities through rapid, real-world iteration.',
    narrativeImpact: 'The unified platform significantly improved Shopify\'s lifecycle communication foundation. Merchant messaging became more consistent, message collisions were eliminated, and teams gained a reliable governance model with full visibility into outgoing communications. The new platform also accelerated operational workflow, enabling teams to launch campaigns faster and with higher confidence. This transformation laid critical groundwork for future personalization, governance, and experimentation at scale.',
    metrics: [
      'MVP delivered in ~8 months',
      'Unified 5+ disparate email systems',
      'Global frequency guardrails implemented',
      'Reusable templates and components',
      'Improved governance and efficiency'
    ],
    tools: ['Platform Migration', 'Templates', 'Enablement', 'Governance', 'Cross-functional Leadership']
  },
  {
    id: 1,
    title: 'Revitalising the Shopify Payments Lifecycle',
    shortSummary: 'Redesigning the Payments lifecycle into a modular, behaviour-driven journey that guided merchants from awareness to activation, increasing trust and reducing friction at each stage.',
    image: '/case-studies/payments_lifecycle.png',
    imageAlt: 'Abstract visualization of lifecycle paths and segmented customer journeys flowing across interconnected nodes.',
    intro: 'Shopify Payments is one of Shopify\'s highest-value products — but many merchants struggled to understand its benefits, navigate onboarding, or reach full activation. I redesigned the Payments lifecycle into a modular, behaviour-driven journey that guided merchants from awareness to activation, increasing trust and reducing friction at each stage.',
    problem: [
      'Merchants received one-size-fits-all messaging that didn\'t reflect readiness or compliance steps.',
      'Core activation blockers (verification, onboarding completion, first transaction) weren\'t addressed proactively.',
      'Activation rates plateaued due to limited behavioural segmentation.',
      'Product teams lacked insight into lifecycle drop-off points.',
      'Payments onboarding required high trust — and existing messaging didn\'t reinforce clarity or confidence.'
    ],
    solution: [
      'Designed a multi-stage lifecycle guiding merchants from exploration → onboarding → verification → activation → healthy usage.',
      'Added behaviour-led triggers for merchants who started onboarding, stalled in verification, or hadn\'t completed their first transaction.',
      'Built dynamic content blocks adapting to payment availability, region, currency, and compliance status.',
      'Used AI-assisted messaging optimisation for clarity and engagement improvements.',
      'Collaborated with Product, Legal, and Risk to resolve friction points and ensure compliant communication.',
      'Documented the lifecycle framework for ongoing Product and CRM iteration.'
    ],
    impact: [
      '8–12% lift in Payments onboarding completion through friction-reducing messaging.',
      '6–10% increase in first-transaction conversion, driven by behaviour-based nudges.',
      '~15% reduction in lifecycle drop-off, especially at onboarding → verification → activation stages.',
      'Improved engagement metrics indicating stronger merchant trust and confidence in Payments.',
      'More merchants achieving "healthy usage" earlier, improving long-term retention.'
    ],
    tools: ['Segmentation', 'Lifecycle Optimization', 'Experiment Design', 'UX Collaboration', 'AI-assisted Messaging']
  },
  {
    id: 3,
    title: 'Lifecycle Launch for Oberlo & Handshake',
    shortSummary: 'Creating the launch strategy and lifecycle programs for Oberlo and Handshake, improving awareness, adoption, and brand alignment.',
    image: '/case-studies/oberlo_handshake.png',
    imageAlt: 'Abstract illustration of multi-step onboarding and activation paths connecting through progressive stages.',
    problem: 'Both products launched without lifecycle foundations. Merchant awareness was low, branding inconsistent, and onboarding journeys nonexistent.',
    solution: [
      'Launch awareness campaigns',
      'Build foundational lifecycle journeys',
      'Run broad messaging tests',
      'Create a behavioral journey for Handshake (favorited items → nudge to publish)',
      'Unify visual identity with Shopify\'s brand system'
    ],
    impact: [
      'Clear uplift in product adoption after lifecycle rollout',
      'Reduced confusion from unified branding',
      'Improved conversion from browsing → publishing → selling'
    ],
    tools: ['Onboarding Strategy', 'Messaging Tests', 'Lifecycle Builds', 'GTM Collaboration']
  },
  {
    id: 4,
    title: 'Shopify Plus Content Syndication Nurture',
    shortSummary: 'A globally-localised nurture program for high-value Shopify Plus prospects, unlocking meaningful lift in MQL conversion across regions.',
    image: '/case-studies/plus_content_nurture.png',
    imageAlt: 'Abstract illustration of global content distribution with region-specific nodes connected by flowing lines.',
    intro: 'The Content Syndication program brought in more than 100K high-value Plus leads annually, including C-suite and VP prospects. These leads were highly engaged but sat too early in the funnel to pass directly to Sales — and Shopify had no dedicated nurture experience for this segment. I led the design and execution of a unified, personalised nurture journey to maximise engagement, warm leads effectively, and better prepare them for Sales follow-up.',
    problem: [
      'Content Syndication generated 100K+ leads annually, but Shopify had no standalone nurture tailored to their needs.',
      'Leads showed strong email engagement but were too high-funnel for Sales, creating a missed opportunity to warm them.',
      'Messaging was inconsistent across regions, with no unified strategy for educating or qualifying these high-value contacts.',
      'Sales teams lacked a predictable flow of warmed MQLs and insight into lead readiness.',
      'Without structured nurturing, the program couldn\'t unlock the full potential of this audience.'
    ],
    solution: [
      'Built a globally-localised nurture, fully translated and adapted for regional nuances.',
      'Designed dynamic content blocks using SFMC to personalise proof points and case studies by region.',
      'Created a modular storytelling framework to ensure consistency while enabling localisation.',
      'Implemented a 50/50 holdout experiment to measure true stat-sig lift.',
      'Partnered with Product & Performance teams to refine lifecycle logic and future V2 improvements.'
    ],
    impact: [
      '19% stat-sig lift in MQL conversion (p = 0.03).',
      '28% open rate and 2% CTR (meeting/exceeding benchmarks).',
      '~$950K influenced gross profit annually, based on funnel projections.',
      'Delivered 151 MQLs and 40 influenced COs from this segment.',
      'Provided Sales with a predictable stream of warmed, high-value prospects.'
    ],
    tools: ['Dynamic Content', 'Localisation', 'Experimentation', 'Enterprise Nurture Strategy', 'SFMC']
  },
  {
    id: 5,
    title: 'Shipping Cross-Sell & Upsell Lifecycle Journeys',
    shortSummary: 'A suite of six multilingual automated journeys reaching 100K+ merchants monthly and increasing adoption of Shopify Shipping features.',
    image: '/case-studies/shipping_lifecycle.png',
    imageAlt: 'Abstract illustration of shipping workflows with package-like shapes moving along connected arrows.',
    intro: 'Shipping behaviours varied significantly across Shopify\'s merchant ecosystem. While some merchants quickly adopted key features, others struggled to find or understand them — limiting activation and downstream revenue. I designed and led a suite of automated lifecycle journeys that guided merchants through their ideal shipping path, personalised by behaviour, maturity, and region.',
    problem: [
      'Shipping feature adoption differed widely across regions and merchant types.',
      'Merchants often discovered features unintentionally, leading to inconsistent onboarding.',
      'Existing communications weren\'t personalised, behaviour-led, or aligned to merchant maturity.',
      'Product teams lacked a scalable lifecycle system to drive activation consistently.',
      'No predictable journey existed to guide new merchants through their first 30–60 days.'
    ],
    solution: [
      'Built six automated journeys (20+ emails) tailored to key shipping behaviours.',
      'Implemented behaviour-led segmentation for new users, high-volume merchants, cross-border sellers, label adopters, etc.',
      'Added AMPscript/Liquid localisation for region and language relevance.',
      'Collaborated with Product, UX, and Data teams to align messaging to real customer pathways.',
      'Ran a formal holdout test on the "Shipping New Sellers" journey for true causal measurement.',
      'Established a long-term lifecycle framework for future shipping features and experiments.'
    ],
    impact: [
      'Reached 100K+ merchants monthly across the six programs.',
      'Delivered a 4.31% lift in shipping-label adoption in holdout testing.',
      'Increased awareness and usage of under-adopted shipping features across markets.',
      'Equipped Product teams with a reliable lifecycle system for ongoing optimisation.'
    ],
    tools: ['AMPscript/Liquid', 'Localisation', 'Lifecycle Architecture', 'Experimentation', 'Cross-functional Collaboration']
  }
];

const CaseStudyCard = ({ caseStudy, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHero = caseStudy.isHero;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`glass-effect overflow-hidden group ${isHero ? 'md:col-span-2' : ''}`}
    >
      {/* Card Header with Image */}
      <div className={`relative overflow-hidden ${isHero ? 'h-64' : 'h-48'}`}>
        {isHero && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xs font-semibold text-white">
            Featured
          </span>
        )}
        <img
          src={caseStudy.image}
          alt={caseStudy.imageAlt || caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors ${isHero ? 'text-2xl' : 'text-xl'}`}>
          {caseStudy.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {caseStudy.shortSummary}
        </p>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <HiChevronUp className="text-lg" />
            </>
          ) : (
            <>
              <span>Read Full Case Study</span>
              <HiChevronDown className="text-lg" />
            </>
          )}
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-4 border-t border-white/10">
                {isHero ? (
                  /* TWO-COLUMN EDITORIAL LAYOUT FOR HERO */
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left Column - Narrative */}
                      <div className="space-y-6 order-2 md:order-1">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
                            Problem
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {caseStudy.narrativeProblem}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                            Solution
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {caseStudy.narrativeSolution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                            Impact
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {caseStudy.narrativeImpact}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Metrics */}
                      <div className="space-y-6 order-1 md:order-2">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                          {caseStudy.metricsImage && (
                            <img
                              src={caseStudy.metricsImage}
                              alt={caseStudy.metricsImageAlt || 'Key metrics'}
                              className="w-full rounded-lg mb-4"
                            />
                          )}
                          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                            Key Metrics
                          </h4>
                          <ul className="space-y-3">
                            {caseStudy.metrics.map((metric, i) => (
                              <li key={i} className="flex items-center text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 flex-shrink-0" />
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Tools section below grid */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Tools & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* STANDARD BULLET LAYOUT FOR REGULAR CARDS */
                  <>
                    {/* Intro */}
                    {caseStudy.intro && (
                      <div className="mb-6">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {caseStudy.intro}
                        </p>
                      </div>
                    )}

                    {/* Problem */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      {Array.isArray(caseStudy.problem) ? (
                        <ul className="space-y-2">
                          {caseStudy.problem.map((item, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {caseStudy.problem}
                        </p>
                      )}
                    </div>

                    {/* Solution */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.solution.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                        Impact (Estimated)
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.impact.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Tools & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Deep dives into strategic lifecycle and CRM initiatives that drove measurable business impact
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {caseStudiesData.map((caseStudy, index) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
