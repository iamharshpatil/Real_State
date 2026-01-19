"use client";
import GallerySlider from "./GallerySlider";
import { motion, AnimatePresence } from "framer-motion";

export default function Connectivity() {

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  ];

  const connectivityPoints = [
    "APPROX 15 MINUTES TO SOUTH DELHI",
    "DIRECT ACCESS TO NOIDA-GREATER NOIDA EXPRESSWAY",
    "APPROX 45 MINUTES TO IGI AIRPORT",
    "APPROX 45 MINUTES TO FROM INTERNATIONAL AIRPORT",
  ];

  return (
    <section className="pt-20 px-6 bg-gradient-to-br from-[#D4A574] via-[#E8E3D5] to-[#D4A574] relative overflow-hidden">

      {/* ===== HEADING ===== */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-black mb-4 tracking-wider">
          CONNECTIVITY
        </h2>
        <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
      </motion.div>

      {/* ===== CONNECTIVITY POINTS ===== */}
      <div className="relative flex justify-between items-center w-full max-w-6xl mx-auto my-16">

        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        {connectivityPoints.map((point, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center w-1/4 px-4"
            initial={
              i % 2 === 0
                ? { opacity: 0, y: -120 }
                : { opacity: 0, y: 120 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="w-6 h-6 bg-[#C9A227] rounded-full mb-6 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-black font-bold">✓</span>
            </motion.div>

            <p className="text-black text-[10px] md:text-[12px] font-serif">
              {point}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== ARCHITECTURE TEXT ===== */}
      <motion.h2
        className="text-3xl md:text-4xl font-serif text-black text-center mt-24 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        AN ARCHITECTURAL MARVEL
      </motion.h2>

      <motion.p
        className="max-w-5xl mx-auto text-center text-black mb-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        The architecture reflects a refined sense of elegance and balance, shaped by a thoughtful and contemporary approach. With a focus on timeless appeal and subtle sophistication, the overall expression conveys a sense of quiet luxury and considered refinement.
      </motion.p>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-8 mb-20 justify-center"
        >
          <button className="px-10 py-2 bg-black text-white text-sm font-serif tracking-widest hover:bg-gray-800 transition-colors">
            LOCATION AV
          </button>
          <button className="px-10 py-2 border border-black text-black text-sm font-serif tracking-widest hover:bg-black hover:text-white transition-colors">
            VIRTUAL MAP
          </button>
        </motion.div>
      <GallerySlider />
    </section>
  );
}
