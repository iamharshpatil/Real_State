"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GallerySlider() {

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  ];

  const [index, setIndex] = useState(1);

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const getPrev = () =>
    images[(index - 1 + images.length) % images.length];

  const getNext = () =>
    images[(index + 1) % images.length];

  return (
    <div className="relative flex justify-center items-center gap-4 w-full">
        

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-2 z-20 bg-white/80 hover:bg-[#C9A227] text-black
                   w-12 h-12 rounded-full flex items-center justify-center"
      >
        ❮
      </button>

      {/* ===== LEFT IMAGE – 10% ===== */}
      <motion.div
        key={getPrev()}
        className="w-[10%] opacity-50 overflow-hidden"
        animate={{ x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 1, 0.5, 1]
        }}
      >
        <img
          src={getPrev()}
          className="w-full h-[980px] object-cover rounded-xl"
        />
      </motion.div>

      {/* ===== CENTER IMAGE – 80% ===== */}
      <motion.div
        key={images[index]}
        className="w-[80%] z-10 overflow-hidden"
        animate={{ x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 1, 0.5, 1]
        }}
      >
        <img
          src={images[index]}
          className="w-full h-[1080px] object-cover rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* ===== RIGHT IMAGE – 10% ===== */}
      <motion.div
        key={getNext()}
        className="w-[10%] opacity-50 overflow-hidden"
        animate={{ x: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 1, 0.5, 1]
        }}
      >
        <img
          src={getNext()}
          className="w-full h-[980px] object-cover rounded-xl"
        />
      </motion.div>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-2 z-20 bg-white/80 hover:bg-[#C9A227] text-black
                   w-12 h-12 rounded-full flex items-center justify-center"
      >
        ❯
      </button>

    </div>
  );
}
