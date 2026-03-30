import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-10 px-6 text-center 
                 backdrop-blur-xl 
                 bg-white/5 dark:bg-white/5 
                 border-t border-white/10"
    >
      {/* Name */}
      <h3 className="text-xl font-semibold mb-2">
        Balla Mahesh
      </h3>

      {/* Tagline */}
      <p className="text-gray-400 text-sm mb-4">
        Building scalable and impactful digital experiences 🚀
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">

        <a
          href="https://github.com/2200031725cser"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/balla-mahesh-b3066831b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:mahesh120522@rediffmail.com"
          className="hover:text-blue-400 transition"
        >
          Email
        </a>

      </div>

      {/* Divider */}
      <div className="w-24 h-[1px] bg-white/20 mx-auto mb-4"></div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        © 2026 Balla Mahesh. All rights reserved.
      </p>
    </motion.footer>
  );
}