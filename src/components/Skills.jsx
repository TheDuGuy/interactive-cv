import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-2xl">
        {skill.emoji}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {skill.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      name: 'Marketing Automation',
      emoji: '⚡',
      description: 'Expert in SFMC, HubSpot, SendGrid with deep knowledge of Journey Builder, Automation Studio, and triggered campaigns.'
    },
    {
      name: 'Email Campaign Management',
      emoji: '📧',
      description: 'Managed 9M+ merchant programs and 2M+ subscriber campaigns with advanced personalisation and optimisation.'
    },
    {
      name: 'Technical Implementation',
      emoji: '💻',
      description: 'Proficient in HTML, CSS, JavaScript, SQL, AMPscript, and Liquid for dynamic email templates and data workflows.'
    },
    {
      name: 'Localisation & Dynamic Content',
      emoji: '🌍',
      description: 'Building multilingual, highly personalised journeys using SFMC, AMPscript, Liquid, and dynamic content blocks—automatically rendering experiences in each customer\'s preferred language, region, and lifecycle stage.'
    },
    {
      name: 'Lifecycle Marketing',
      emoji: '🔄',
      description: 'Designing customer journeys across onboarding, engagement, retention, and win-back stages.'
    },
    {
      name: 'Data & Analytics',
      emoji: '📊',
      description: 'SQL query writing, BigQuery analysis, behavioural segmentation, and A/B testing frameworks.'
    },
    {
      name: 'CRM Strategy',
      emoji: '🎯',
      description: 'Building audience segments, personalisation strategies, and multi-channel campaign orchestration.'
    },
    {
      name: 'Cross-functional Collaboration',
      emoji: '👥',
      description: 'Operating at the intersection of UX, product, data science, and experimentation teams.'
    },
    {
      name: 'Project Management',
      emoji: '📋',
      description: 'Managing complex initiatives with Jira, coordinating stakeholders, and delivering results on time.'
    }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Key Skills
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Combining marketing automation expertise, technical implementation, and data-driven strategy
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
