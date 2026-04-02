import { motion } from "framer-motion";

import weather from "../assets/weather.png";
import book from "../assets/book.png";
import bus from "../assets/bus.png";

const projects = [
  {
    title: "Weather Forecast",
    desc: "A simple weather forecast application where you can search for any location and get real-time temperature and forecast details. The background images also change dynamically according to the time of day and temperature.",
    github: "https://github.com/2200031725cser/weather-forecast",
    image: weather,
  },
  {
    title: "Online Book Store",
    desc: "Full-featured e-commerce platform with user authentication and payment processing.",
    github: "https://github.com/2200031725cser/mern_stack_online_book_store",
    demo: "https://64acfe9e1360c149c010d1c6--rad-pastelito-4cbb81.netlify.app/",
    image: book,
  },
  {
    title: "Bus Reservation System",
    desc: "A simple bus reservation system where users can search for available buses, view schedules, and book tickets.",
    github: "https://github.com/2200031725cser/Bus-Reservation-System",
    image: bus,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 text-black dark:text-white"
    >
      {/* Title */}
      <h2 className="text-5xl font-bold mb-16 text-center">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="rounded-3xl overflow-hidden 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-white/5 
                       border border-white/20 
                       shadow-[0_0_25px_rgba(59,130,246,0.15)]
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                       transition duration-300"
          >
            {/* 🖼️ Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover 
                           transition duration-500 
                           group-hover:scale-110"
              />
            </div>

            {/* 📄 Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>

              {/* 🔗 Buttons */}
              <div className="flex gap-3">

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm 
                             backdrop-blur-md 
                             bg-white/20 dark:bg-white/10 
                             border border-white/20 
                             hover:bg-white/30 transition"
                >
                  GitHub
                </a>

                {p.demo && (
  <a
    href={p.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 rounded-lg text-sm 
               bg-blue-500 text-white 
               hover:bg-blue-600 transition"
  >
    Live Demo
  </a>
)}

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
