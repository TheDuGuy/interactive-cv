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
      title: 'Senior Product Marketing Manager',
      company: 'Handshake',
      period: 'Aug 2020 - Present',
      highlights: [
        'Drive demand and quality supply side adoption of the marketplace',
        'Feed superior understanding of users into the product development process',
        'Beat competition of traditional wholesalers and marketplaces',
        'Build on Handshake\'s brand through best-in-class content and events'
      ],
      achievements: [
        'Successfully drove marketplace adoption',
        'Developed comprehensive go-to-market strategies',
        'Led cross-functional teams to deliver key initiatives'
      ]
    },
    {
      title: 'Product Marketing Lead',
      company: 'Contiamo',
      period: 'Apr 2018 - Jun 2020',
      highlights: [
        'Set up Contiamo\'s product marketing function from scratch',
        'Worked at the intersection between product development, sales, and marketing',
        'Responsible for shaping product direction and communication',
        'Brought insights from customer feedback and market research'
      ],
      achievements: [
        'Established product marketing framework',
        'Grew team from 15 to 35 people',
        'Launched multiple successful product campaigns'
      ]
    },
    {
      title: 'Senior Marketing Manager',
      company: 'Contiamo',
      period: 'Aug 2017 - Apr 2018',
      highlights: [
        'Developed Contiamo\'s marketing strategy during growth phase',
        'Responsible for all marketing and website content design',
        'Developed written content and product release comms',
        'Detailed platform complexity for easy consumption'
      ]
    },
    {
      title: 'Customer Solutions Architect',
      company: 'Cisco',
      period: 'Mar 2017 - Aug 2017',
      highlights: [
        'Responsible for selling, managing, and delivering bespoke data science-driven solutions',
        'Combined strategic thinking with customers',
        'Managed data science or engineering resources',
        'Delivered projects efficiently'
      ]
    },
    {
      title: 'Project Manager, Digital Strategy',
      company: 'Cisco',
      period: 'Jun 2015 - Mar 2017',
      highlights: [
        'Specialized in innovative technologies that enable Cisco\'s sales team',
        'Scouted innovative startups and ran proof-of-concepts',
        'Managed major transitional projects in account management and sales forecasting',
        'Contributed to Cisco\'s digital sales strategy development'
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
