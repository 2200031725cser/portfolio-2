import { motion } from "framer-motion";

const publications = [
  {
    title: "Research Paper on Evaluating Game Engines: A Comparative Study of Development Efficiency and User Experience Design Capabilities",
    desc: "Conducted a comparative study of Unity and Unreal Engine, evaluating development efficiency, performance, and UX design through prototype implementation and user testing.Identified Unity as optimal for rapid, cross-platform development and Unreal Engine for high-fidelity, immersive applications, providing practical insights for engine selection based on project needs.",
    link: "https://ijsrem.com/download/evaluating-game-engines-a-comparative-study-of-development-efficiency-and-user-experience-design-capabilities/",
    year: "2025",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-32 px-6 text-black dark:text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-center">
        Publications
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">

        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-white/5 
                       border border-white/20 
                       shadow-[0_0_20px_rgba(59,130,246,0.15)] 
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                       transition duration-300"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {pub.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {pub.desc}
                </p>

                <p className="text-xs text-gray-500">
                  {pub.year}
                </p>
              </div>

              {/* 🔗 View Button */}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg 
                           bg-blue-500 text-white 
                           hover:bg-blue-600 transition text-sm"
              >
                View
              </a>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}