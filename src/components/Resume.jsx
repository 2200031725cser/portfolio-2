import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-32 px-6 text-black dark:text-white text-center"
    >
      <h2 className="text-5xl font-bold mb-12">
        Resume
      </h2>

      {/* 💎 Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6 rounded-3xl 
                   backdrop-blur-xl 
                   bg-white/10 dark:bg-white/5 
                   border border-white/20 
                   shadow-[0_0_30px_rgba(59,130,246,0.15)]"
      >

        {/* 📄 PDF Preview */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden mb-6">
          <iframe
            src="https://drive.google.com/file/d/19V1EWEHZl1urdjt8MxwdaT5j0l6gbhHJ/preview"
            title="Resume"
            className="w-full h-full"
          />
        </div>

        {/* 🔗 Buttons */}
        <div className="flex justify-center gap-4">

          <a
            href="https://drive.google.com/file/d/19V1EWEHZl1urdjt8MxwdaT5j0l6gbhHJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl 
                       bg-blue-500 text-white 
                       hover:bg-blue-600 transition"
          >
            View Full
          </a>

          <a
            href="https://drive.google.com/file/d/19V1EWEHZl1urdjt8MxwdaT5j0l6gbhHJ/view?usp=sharing"
            download
            className="px-6 py-3 rounded-xl 
                       backdrop-blur-md 
                       bg-white/20 dark:bg-white/10 
                       border border-white/20 
                       hover:bg-white/30 transition"
          >
            Download
          </a>

        </div>

      </motion.div>
    </section>
  );
}