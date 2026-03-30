import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  // 🎯 Track mouse (target position)
  useEffect(() => {
    const handleMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // 🌊 Smooth interpolation (lerp)
  useEffect(() => {
    let animationFrame;

    const smoothMove = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.08,
        y: prev.y + (target.y - prev.y) * 0.08,
      }));

      animationFrame = requestAnimationFrame(smoothMove);
    };

    smoothMove();
    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return (
    <section className="relative pt-24 h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* 🎯 Smooth Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition"
        style={{
          background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(59,130,246,0.18), transparent 80%)`,
        }}
      />

      {/* 🔥 Content */}
      <div className="relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Hi, I'm <span className="text-blue-500"> Balla Mahesh</span> 👋
        </motion.h1>

        {/* Typing */}
        <TypeAnimation
          sequence={[
            "I am Specialized in full-stack development, I build webpages that are both beautiful and functional.",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-300 mt-4"
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mt-8 justify-center"
        >
          <a
            href="https://github.com/2200031725cser"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl 
                       shadow-lg hover:shadow-blue-500/50 
                       hover:scale-110 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/balla-mahesh-b3066831b/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-500 rounded-2xl 
                       hover:bg-white hover:text-black 
                       transition duration-300 hover:scale-110"
          >
            LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}