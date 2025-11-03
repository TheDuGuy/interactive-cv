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
      name: 'Storytelling',
      emoji: '📖',
      description: 'Crafting compelling narratives that engage audiences and communicate complex concepts through cohesive stories.'
    },
    {
      name: 'Technical Copywriting',
      emoji: '✍️',
      description: 'Creating clear, impactful technical content that bridges the gap between developers and stakeholders.'
    },
    {
      name: 'Cross-functional Communication',
      emoji: '👥',
      description: 'Operating at the intersection of marketing, sales, product, and customer success to drive alignment.'
    },
    {
      name: 'Problem Solving',
      emoji: '💡',
      description: 'Breaking down complex challenges and developing innovative solutions quickly and effectively.'
    },
    {
      name: 'User Advocacy',
      emoji: '📢',
      description: 'Understanding and championing user needs, ensuring products solve real problems for customers.'
    },
    {
      name: 'Coding (CSS, HTML, JS, Python)',
      emoji: '💻',
      description: 'Hands-on technical skills to understand product pain points and position solutions effectively.'
    },
    {
      name: 'Market & Competitor Analysis',
      emoji: '📊',
      description: 'Leading market research to identify opportunities and understand competitive positioning.'
    },
    {
      name: 'Project Management',
      emoji: '📋',
      description: 'Managing complex initiatives with diligence and laser-focused project management skills.'
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
          A diverse skill set combining technical expertise, strategic thinking, and exceptional communication
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
