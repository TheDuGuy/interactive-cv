import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
        >
          <img
            src="/profile.jpg"
            alt="Edou Mota"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Edou Mota
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
        >
          Senior Growth Marketer, Marketing Automation Manager
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Passionate about building products that drive business growth and deliver exceptional user experiences.
          Expert in product marketing, go-to-market strategy, and cross-functional collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <HiMail className="text-blue-400" />
            <span>edou.mota@me.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <HiLocationMarker className="text-purple-400" />
            <span>Greater London, UK / Remote</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/edou-mota-b6489a27/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 group"
          >
            <FaLinkedin className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://github.com/TheDu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 group"
          >
            <FaGithub className="text-2xl text-gray-300 group-hover:text-purple-400 transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
