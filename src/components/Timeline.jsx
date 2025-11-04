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
          <ul className={`space-y-2 text-gray-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-sm leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
          {experience.achievements && (
            <div className="mt-4">
              <p className="text-purple-400 font-semibold mb-2">Key Achievements:</p>
              <ul className={`space-y-1 text-gray-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      highlights: [
        'Managed email marketing automation program for 9M+ merchant base using SFMC, HubSpot, and SendGrid',
        'Initially focused on strategic initiatives within Product Sourcing team for Handshake and Oberlo',
        'Developed dynamic email templates and automated journeys using Liquid, HTML, CSS, JavaScript, SQL, and AMPscript',
        'Collaborated with UX, lifecycle marketing, data science, and experimentation teams'
      ],
      achievements: [
        'Built industry-leading email marketing campaigns',
        'Implemented A/B and multivariate testing frameworks',
        'Partnered with data science to build behavioral scoring models'
      ]
    },
    {
      title: 'CRM Email Manager',
      company: 'M&S (Marks & Spencer)',
      period: '2019 - 2020',
      highlights: [
        'Delivered 15+ email campaigns weekly to 2M+ subscribers using Salesforce Marketing Cloud',
        'Managed campaigns across Food, Clothing & Home, and Beauty divisions',
        'Implemented cross-client testing (Litmus), real-time personalization (LiveClicker), and AI optimization (Phrasee)',
        'Increased engagement through advanced personalization with AMPscript'
      ],
      achievements: [
        'Built automated workflows in Automation Studio',
        'Sustained 95%+ inbox placement rate',
        'Coordinated cross-functional deliverables via Jira'
      ]
    },
    {
      title: 'Marketing Automation Specialist',
      company: 'Pitney Bowes',
      period: '2016 - 2019',
      highlights: [
        'Developed customer onboarding automation programs using SFMC',
        'Led technical implementation of demand creation and lead nurturing programs',
        'Implemented A/B and multivariate testing frameworks',
        'Documented processes and provided team training on SFMC capabilities'
      ],
      achievements: [
        'Contributed to 15% improvement in D30 activation metrics',
        'Improved open rates (+12%), CTR (+18%), and conversion rates (+9%)',
        'Ensured GDPR and CAN-SPAM compliance'
      ]
    },
    {
      title: 'Campaign Manager',
      company: 'Terradata / Mapp',
      period: '2015 - 2016',
      highlights: [
        'Implemented CRM campaigns across email, mobile push, and SMS platforms',
        'Worked closely with clients at their offices on bi-weekly basis',
        'Analyzed campaign results and made data-driven recommendations',
        'Supported clients in developing long-term CRM strategies'
      ]
    },
    {
      title: 'Senior Account Executive',
      company: 'Experian Cross Channel Marketing',
      period: '2013 - 2015',
      highlights: [
        'Collaborated in high-level strategy meetings for enterprise clients',
        'Developed email marketing campaigns across multiple platforms',
        'Managed accounts including RBS, Emirates, Mamas & Papas',
        'Built strong client relationships through data-driven recommendations'
      ]
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
