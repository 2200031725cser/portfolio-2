import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 text-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto 
                      backdrop-blur-xl 
                      bg-white/10 dark:bg-white/5 
                      p-10 rounded-3xl 
                      border border-white/20 
                      shadow-xl">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Computer Science student specializing in Full StackDevelopment andUI/UX Design with hands‑on experience in Python, Django, and 
          MERN stack projects. Skilled in creating responsive web apps and efficient databases, with certifications in Azure Fundamentals and Unity 
          Programming.
        </p>

      </div>
    </motion.section>
  );
}