import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech in Computer Science",
    place: "Koneru Lakshmaiah University",
    year: "2022 - 2026",
    score: "CGPA: 8.66",
  },
  {
    title: "Intermediate",
    place: "Sri Chaitanya Junior College",
    year: "2020 - 2022",
    score: "Marks: 745/1000",
  },
  {
    title: "SSC",
    place: "Sri Chaitanya High School",
    year: "2019 - 2020",
    score: "CGPA: 10/10",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6 text-black dark:text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-center">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-white/5 
                       border border-white/20 
                       shadow-[0_0_25px_rgba(59,130,246,0.15)] 
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                       transition duration-300
                       relative"
          >
            
            {/* Blue Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl"></div>

            <h3 className="text-xl font-semibold mb-1">
              {edu.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {edu.place}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {edu.year} • {edu.score}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}