import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Publications from "./components/Publications";
import Resume from "./components/Resume";

function App() {
  const [dark, setDark] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 🔥 Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = window.scrollY / totalHeight;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Mouse Spotlight
  useEffect(() => {
    const handleMove = (e) => {
      setPosition((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.1,
        y: prev.y + (e.clientY - prev.y) * 0.1,
      }));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={dark ? "dark" : ""}>

      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 z-[100] transition-all duration-150"
        style={{ width: `${scroll * 100}%` }}
      />

      {/* 🎯 Mouse Spotlight */}
      {dark && (
        <div
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `radial-gradient(
              600px at ${position.x}px ${position.y}px,
              rgba(59,130,246,0.15),
              transparent 80%
            )`,
          }}
        />
      )}

      {/* Background */}
      <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

        <Navbar dark={dark} setDark={setDark} />

        <div className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Publications />
          <Resume />
          <Contact />
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;