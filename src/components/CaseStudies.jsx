import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const caseStudiesData = [
  {
    id: 2,
    title: 'Building Shopify\'s Unified Email Platform',
    shortSummary: 'Leading the migration from a patchwork of parallel email systems to a unified internal platform that centralized communications, improved consistency, and empowered teams.',
    image: '/case-studies/hero_case_study.png',
    imageAlt: 'Abstract visualization of multiple message streams merging into a unified communication hub.',
    metricsImage: '/case-studies/hero_key_metrics.png',
    metricsImageAlt: 'Minimal abstract illustration showing performance uplift and system efficiency.',
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
    title: 'Revitalizing the Shopify Payments Lifecycle',
    shortSummary: 'Breathing new life into Shopify Payments\' lifecycle journeys by rethinking segmentation, messaging, and experience design—leading to a measurable lift in engagement and feature adoption.',
    image: '/case-studies/payments_lifecycle.png',
    imageAlt: 'Abstract illustration of lifecycle marketing flows and segmentation paths.',
    problem: 'After migrating from Marketing Cloud to an internal tool, Shopify Payments\' lifecycle journeys had remained unchanged for nearly two years. Messaging felt generic, segmentation lacked behavioral nuance, and adoption had stalled.',
    solution: [
      'Full health audit across segments, geos, and journey entry conditions',
      'Template redesign with UX/Design',
      'Behavior-driven segmentation (international sellers, installment-eligible, new sellers)',
      'Holdout experiment comparing legacy vs new journeys'
    ],
    impact: [
      '~15% lift in lifecycle engagement',
      '~20% improvement in Shopify Payments activation',
      'Stronger personalization through behavior-based messaging'
    ],
    tools: ['Segmentation', 'Lifecycle Optimization', 'Experiment Design', 'UX Collaboration']
  },
  {
    id: 3,
    title: 'Lifecycle Launch for Oberlo & Handshake',
    shortSummary: 'Creating the launch strategy and lifecycle programs for Oberlo and Handshake, improving awareness, adoption, and brand alignment.',
    image: '/case-studies/oberlo_handshake.png',
    imageAlt: 'Abstract illustration of multi-step product onboarding and activation flows.',
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
    imageAlt: 'Abstract illustration of global content distribution with region-targeted nodes.',
    problem: 'Shopify Plus prospects entered the funnel with varied levels of product understanding, and nurture strategies differed by region. We needed a unified, personalised nurture experience for high-value C-suite and VP-level contacts.',
    solution: [
      'Fully translated, region-specific content',
      'Dynamic content blocks powered by SFMC',
      'Modular storytelling aligned to value pillars',
      'A rigorous 50/50 holdout experiment for stat-sig measurement'
    ],
    impact: [
      '19% stat-sig lift in MQL conversion (p = 0.03)',
      '28% open rate, 2% CTR',
      '~$950k projected influenced gross profit annually'
    ],
    tools: ['Dynamic Content', 'Localisation', 'Experimentation', 'Enterprise Nurture Strategy']
  },
  {
    id: 5,
    title: 'Shipping Cross-Sell & Upsell Lifecycle Journeys',
    shortSummary: 'A suite of six multilingual automated journeys reaching 100K+ merchants monthly and increasing adoption of Shopify Shipping features.',
    image: '/case-studies/shipping_lifecycle.png',
    imageAlt: 'Abstract illustration of shipping workflows and automated product movement paths.',
    problem: 'Shipping feature adoption varied widely across merchant behaviors, and generic communication did not effectively support merchants with differing operational maturity.',
    solution: [
      'Six automated journeys (20+ emails)',
      'Behavior-led segmentation (new shippers, consistent shippers, high-volume, cross-border)',
      'AMPscript/Liquid-based localisation and personalisation',
      'Formal holdout test for the "Shipping New Sellers" flow'
    ],
    impact: [
      'Reached 100K+ merchants monthly',
      '4.31% lift in shipping label adoption (holdout tested)',
      'Improved awareness and usage of under-utilised features'
    ],
    tools: ['AMPscript/Liquid', 'Localisation', 'Lifecycle Architecture', 'Experimentation']
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
                    {/* Problem */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {caseStudy.problem}
                      </p>
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
