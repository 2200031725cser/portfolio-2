import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      <div className="flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
          PORTFOLIO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {["about", "skills", "projects", "education", "certifications", "publications", "Resume", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-black dark:text-white hover:text-blue-500 transition"
            >
              {item}
            </a>
          ))}

          {/* 🌗 Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
          >
            <motion.div
              layout
              className="bg-white w-4 h-4 rounded-full shadow-md"
              animate={{ x: dark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </button>

        </div>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black dark:text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 backdrop-blur-xl bg-white/10 dark:bg-black/40"
        >
          {["about", "skills", "projects", "education", "certifications", "publications","Resume", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="capitalize text-black dark:text-white text-lg hover:text-blue-500 transition"
            >
              {item}
            </a>
          ))}

          {/* Toggle in mobile */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                dark ? "translate-x-6" : ""
              }`}
            />
          </button>
        </motion.div>
      )}

    </nav>
  );
}