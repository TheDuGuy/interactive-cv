import { motion } from 'framer-motion';

const AboutMe = () => {
  const interests = [
    { emoji: '🎾', label: 'Playing Tennis' },
    { emoji: '🚴', label: 'Biking with Kids' },
    { emoji: '🎬', label: 'Watching Movies' },
    { emoji: '📚', label: 'Reading' },
    { emoji: '🔨', label: 'DIY Projects' },
    { emoji: '🪵', label: 'Woodworking' }
  ];

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              A bit more about me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          {/* Journey */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🌍</span>
              My Journey
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Born in the beautiful island nation of{' '}
              <a
                href="https://www.google.com/maps/place/São+Tomé+and+Príncipe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-green-300 underline decoration-dotted transition-colors"
              >
                São Tomé and Príncipe 🏝️
              </a>
              , raised in the vibrant city of <span className="text-blue-400 font-semibold">Lisbon, Portugal</span>,
              and now calling the <span className="text-blue-400 font-semibold">United Kingdom</span> home.
              This multicultural background has shaped my perspective and approach to building
              products that resonate with diverse audiences across the globe.
            </p>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span>
              When I'm not working...
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span className="text-4xl mb-2">{interest.emoji}</span>
                  <span className="text-gray-300 text-sm text-center">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote or Personal Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 italic text-center">
              "I love traveling the world, experiencing nature, and great food.
              Nothing beats spending quality time with my family in the woods on our bikes,
              or getting my hands dirty with DIY and woodworking projects."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
