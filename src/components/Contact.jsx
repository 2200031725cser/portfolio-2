import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong!");
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 text-black dark:text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Open to internships and opportunities 🚀
      </p>

      {/* 💎 Glass Form Container */}
      <div className="max-w-md mx-auto backdrop-blur-xl bg-white/10 dark:bg-white/5 p-8 rounded-3xl border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">

        <form onSubmit={sendEmail} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/20 dark:bg-white/10 
                       outline-none border border-white/20 
                       focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/20 dark:bg-white/10 
                       outline-none border border-white/20 
                       focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="p-3 rounded-lg bg-white/20 dark:bg-white/10 
                       outline-none border border-white/20 
                       focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 py-3 rounded-xl 
                       hover:bg-blue-700 
                       transition duration-300 
                       shadow-lg hover:shadow-blue-500/30 
                       hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ Success Message */}
        {sent && (
          <p className="text-green-400 mt-4">
            Message sent successfully!
          </p>
        )}

      </div>

      {/* Divider */}
      <p className="text-gray-400 my-6">or</p>

      {/* Direct Email */}
      <a
        href="mailto:mahesh120522@rediffmail.com"
        className="inline-block px-8 py-4 rounded-2xl 
                   backdrop-blur-lg bg-white/10 dark:bg-white/5 
                   border border-white/20 
                   hover:scale-105 transition"
      >
        Send Direct Email
      </a>

    </motion.section>
  );
}