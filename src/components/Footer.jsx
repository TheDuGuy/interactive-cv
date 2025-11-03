import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
             Edou Mota
            </h3>
            <p className="text-gray-400 text-sm">
              Building products that make a difference
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 group"
            >
              <FaLinkedin className="text-xl text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 group"
            >
              <FaGithub className="text-xl text-gray-300 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all duration-200 group"
            >
              <FaTwitter className="text-xl text-gray-300 group-hover:text-blue-300 transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <HiHeart className="text-red-500" /> using React & Tailwind
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
