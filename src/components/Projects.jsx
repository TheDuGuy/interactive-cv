import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-effect p-6 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      <ul className="space-y-2 mb-6">
        {project.features.map((feature, i) => (
          <li key={i} className="text-gray-300 text-sm flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            <HiExternalLink className="text-lg" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass-effect hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            <HiCode className="text-lg" />
            View Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Channel Automation Flow Builder',
      tech: 'React, React Flow, Tailwind CSS, Vite',
      description: 'A visual workflow builder for designing email, SMS, and push notification sequences with drag-and-drop functionality. Built to help marketing teams plan and visualize complex multi-channel campaigns.',
      features: [
        'Drag-and-drop interface with FigJam-inspired UI design',
        'Support for email, SMS, push notifications, and wait/delay nodes',
        'Inline editing with real-time updates',
        'Password protection for secure collaboration',
        'JSON export for integration with marketing automation platforms',
        'Fully responsive design with mobile support'
      ],
      liveUrl: 'https://email-sequence-visualiser.vercel.app',
      githubUrl: 'https://github.com/TheDuGuy/email-sequence-visualiser-'
    },
    {
      title: 'GTM Strategy Generator',
      tech: 'React, Tailwind CSS, Vite',
      description: 'Interactive tool for generating personalized go-to-market strategies based on product type, target market, and business goals. Provides positioning statements, ICP definitions, channel recommendations, and phased execution plans.',
      features: [
        'Step-by-step questionnaire for product and market insights',
        'AI-powered positioning statement generation',
        'Detailed ICP profiles with decision-makers and sales cycles',
        'Channel recommendations based on budget and target market',
        'Tactical playbooks aligned with primary business goals',
        'Exportable strategy documents for team collaboration'
      ],
      liveUrl: 'https://gtm-strategy-generator.vercel.app',
      githubUrl: 'https://github.com/TheDuGuy/gtm-strategy-generator'
    },
    {
      title: 'Lead Scoring Calculator',
      tech: 'React, Tailwind CSS, Vite',
      description: 'An interactive tool for calculating and visualizing lead scores based on multiple criteria including engagement, demographics, and company fit. Helps sales and marketing teams prioritize their pipeline.',
      features: [
        'Multi-dimensional scoring across engagement, demographics, and company fit',
        'Real-time score calculation with visual feedback',
        'Color-coded priority indicators (hot, warm, cold)',
        'Detailed breakdown of scoring components',
        'Clean, intuitive interface for quick lead assessment',
        'Fully responsive design'
      ],
      liveUrl: 'https://lead-scoring-calculator-swart.vercel.app',
      githubUrl: 'https://github.com/TheDuGuy/lead-scoring-calculator'
    },
    {
      title: 'A/B Test Analyzer',
      tech: 'React, Recharts, Tailwind CSS, Vite',
      description: 'Statistical analysis tool for A/B tests with confidence intervals, significance testing, and visual comparison. Built to help product managers and marketers make data-driven decisions with confidence.',
      features: [
        'Statistical significance testing with p-value calculations',
        'Confidence interval visualization',
        'Relative uplift and conversion rate comparisons',
        'Interactive charts showing test performance',
        'Sample size recommendations',
        'Clear visual indicators for test conclusions'
      ],
      liveUrl: 'https://ab-test-analyzer-brown.vercel.app',
      githubUrl: 'https://github.com/TheDuGuy/ab-test-analyzer'
    },
    {
      title: 'Customer Journey Map',
      tech: 'React, Tailwind CSS, Vite',
      description: 'Interactive visualization tool for mapping and analyzing customer journeys with touchpoints, pain points, and opportunities. Helps teams understand and optimize the end-to-end customer experience.',
      features: [
        'Visual journey mapping across multiple stages',
        'Track touchpoints, emotions, and pain points',
        'Identify opportunities for improvement',
        'Customizable journey stages and phases',
        'Export and share journey maps',
        'Real-time editing and updates'
      ],
      liveUrl: 'https://customer-journey-map-two.vercel.app',
      githubUrl: 'https://github.com/TheDuGuy/customer-journey-map'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Personal projects showcasing technical skills and product thinking
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
