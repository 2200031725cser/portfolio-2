import { motion } from "framer-motion";

// ✅ import logos
import Microsoftaz from "../assets/certifications/Microsoftaz.png";
import Microsoftai from "../assets/certifications/Microsoftai.png";
import Unity from "../assets/certifications/Unity.png";
import salesforce from "../assets/certifications/salesforce.png";
import Automation from "../assets/certifications/Automation.png";
import Aviatrix from "../assets/certifications/Aviatrix.png";
import oracle from "../assets/certifications/oracle.png";
import aws from "../assets/certifications/aws.png";

const certifications = [
  {
    name: "Microsoft Azure Fundamentals(AZ-900)",
    image: Microsoftaz,
  },
  {
    name: "Microsoft Azure AI Fundamentals(AI-900)",
    image: Microsoftai,
  },
  {
    name: "Unity Certified User: Programmer",
    image: Unity,
  },
  {
    name: "Salesforce Certified AI Associate",
    image: salesforce,
  },
  {
    name: "Certified Essentials Automation Professional",
    image: Automation,
  },
  {
    name: "Multicloud Network Associate",
    image: Aviatrix,
  },
  {
    name: "Oracle Cloud Infrastructure 2024 AI Foundations Associate (1Z0-1122-24)",
    image: oracle,
  },
  {
    name: "AWS APAC - Solutions Architecture Job Simulation",
    image: aws,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 px-6 text-black dark:text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-center">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 p-6 rounded-2xl 
                       backdrop-blur-xl 
                       bg-white/10 dark:bg-white/5 
                       border border-white/20
                       shadow-[0_0_25px_rgba(59,130,246,0.15)]
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                       transition duration-300"
          >
            
            {/* 🖼️ Logo */}
            <img
              src={cert.image}
              alt={cert.name}
              className="w-14 h-14 object-contain"
            />

            {/* 📄 Text */}
            <h3 className="text-lg md:text-xl font-semibold">
              {cert.name}
            </h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}