import { motion } from "framer-motion";

// ✅ Correct Icons
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiC
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C", icon: <SiC /> }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-black dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="flex flex-col items-center justify-center gap-3 p-6 
                       rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-white/5 
                       border border-white/20 
                       shadow-[0_0_20px_rgba(59,130,246,0.15)] 
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
                       transition duration-300"
          >
            {/* Icon */}
            <div className="text-3xl text-blue-500">
              {skill.icon}
            </div>

            {/* Text */}
            <p className="font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}