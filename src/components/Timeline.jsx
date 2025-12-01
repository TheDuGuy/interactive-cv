import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center mb-12`}
    >
      <div className="flex-1 md:text-right">
        <div className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
          <div className="flex items-start justify-between mb-2">
            <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} flex-1`}>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {experience.title}
              </h3>
              <p className="text-blue-400 font-semibold">{experience.company}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-3">{experience.period}</p>
          <div className={`text-gray-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <p className="text-sm leading-relaxed mb-3">
              {experience.description}
            </p>
            {experience.achievements && (
              <div className="mt-4">
                <p className="text-purple-400 font-semibold mb-2">Key Achievements:</p>
                <p className="text-sm leading-relaxed text-gray-300">
                  {experience.achievements}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
        />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      title: 'Senior Growth Marketer / Marketing Automation',
      company: 'Shopify Inc.',
      period: '2020 - 2025',
      description: 'Managed lifecycle automation and CRM for millions of Shopify merchants using SFMC, HubSpot, SendGrid, SQL, Liquid, and AMPscript. Served as the team\'s SME for dynamic content and localisation, building highly personalised, multilingual journeys and partnering with Product, UX, and Data Science to optimise key lifecycle stages.',
      achievements: 'Co-designed six automated shipping cross-sell and upsell journeys (20+ emails) reaching 100K+ merchants per month; the "Shipping New Sellers" holdout test drove a 4.31% lift in shipping label adoption. Built a global Plus content syndication nurture for 100K+ high-value C-suite/VP leads annually, fully translated and dynamically personalised by region with local case studies; a 50/50 holdout delivered a 19% statistically significant lift in MQL conversion (p = 0.03). Achieved a 28% open rate and 2% click-through rate on the Plus nurture, contributing to ~$950k projected influenced gross profit annually. Recognised as the team\'s SME for dynamic content and multilingual personalisation, consulted by other teams for AMPscript/Liquid personalisation strategy and complex journey logic.'
    },
    {
      title: 'CRM Email Manager',
      company: 'M&S (Marks & Spencer)',
      period: '2019 - 2020',
      description: 'Delivered 15+ email campaigns weekly to 2M+ subscribers using Salesforce Marketing Cloud, managing complex campaign calendar across Food, Clothing & Home, and Beauty divisions. Led technical implementation of cross-client testing (Litmus), real-time personalisation (LiveClicker), and AI-powered subject line optimisation (Phrasee). Increased email engagement by implementing advanced personalisation with AMPscript and dynamic content blocks, collaborating with data agency Planning Inc on audience segmentation and targeting strategies.',
      achievements: 'Built automated workflows in Automation Studio including file imports, SQL queries, and data extensions management, reducing manual work by 40%. Sustained 95%+ inbox placement rate through list hygiene, suppression management, and ISP feedback loop monitoring. Coordinated cross-functional deliverables using Jira for seamless execution and reporting.'
    },
    {
      title: 'Marketing Automation Specialist',
      company: 'Pitney Bowes',
      period: '2016 - 2019',
      description: 'Developed customer onboarding automation programs using SFMC, reducing time-to-value and improving product adoption rates. Led technical conceptualisation and implementation of demand creation and lead nurturing programs, including end-to-end lead management for customer and prospect segments. Implemented A/B and multivariate testing frameworks to optimise campaign performance across email creative, subject lines, send times, and audience segments.',
      achievements: 'Contributed to 15% improvement in D30 activation metrics through multi-touch welcome series. Improved open rates (+12%), CTR (+18%), and conversion rates (+9%) through data-driven testing. Documented marketing automation processes and provided training to marketing team members on SFMC capabilities.'
    },
    {
      title: 'Campaign Manager',
      company: 'Terradata / Mapp',
      period: '2015 - 2016',
      description: 'Implemented CRM campaigns across email, mobile push, and SMS platforms using Mapp (formerly Teradata Marketing Applications), achieving high levels of customer engagement for retail and eCommerce clients. Worked closely with clients at their offices on bi-weekly basis, identifying trends in campaign performance and recommending data-driven optimisations. Analysed campaign results regularly using platform analytics and Google Analytics, supporting clients in developing long-term CRM strategies and lifecycle marketing frameworks.'
    },
    {
      title: 'Senior Account Executive',
      company: 'Experian Cross Channel Marketing',
      period: '2013 - 2015',
      description: 'Collaborated with clients and account managers in high-level strategy meetings to develop long-term marketing strategies for enterprise accounts including RBS, Emirates, and Mamas & Papas. Developed email marketing campaigns across multiple cross-channel marketing platforms with engaging online content. Managed multiple accounts serving as primary point of contact for campaign execution and strategic consultation, building strong client relationships through responsive service and data-driven recommendations.'
    }
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A journey through impactful roles in product marketing, strategy, and technology
        </p>
      </motion.div>

      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
