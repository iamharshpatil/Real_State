"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <Image
        src="/chair.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-24 h-24"
      />
    ),
    title: "Designed By ELIE SAAB"
  },

  {
    icon: (
      <Image
        src="/golf.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-24 h-24"
      />
    ),
    title: "Scenic Golf Course and tranquil and reflective Yamuna River"
  },

  {
    icon: (
      <Image
        src="/hotel.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-24 h-24"
      />
    ),
    title: "3 & 4 Bedroom Residences"
  }
];


export default function LocationDetails() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#F8F8F8] via-[#E8E3D5] to-[#D4A574]">

  <div className="max-w-6xl mx-auto">

    {/* THREE FEATURES */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8
            , delay: index * 0.1 }}
          className="flex flex-col items-center text-center"
        >

          {/* ICON – BIGGER LIKE IMAGE 1 */}
          <div className="mb-6">
            <div className="w-28 h-28 flex items-center justify-center">
              {feature.icon}
            </div>
          </div>

          {/* TEXT STYLE LIKE IMAGE 1 */}
          <h3 className="text-lg text-gray-900 max-w-[260px] leading-[1.6] font-serif">
            {feature.title}
          </h3>

        </motion.div>
      ))}

    </div>

        {/* MAIN HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -50 , x: -50 }}
          whileInView={{ opacity: 1, y: 0 , x:0 }}
          transition={{ duration: 1 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 tracking-wide">
            A LANDMARK ADDRESS IN NOIDA
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-semibold font-serif">
            SECTOR - 98, NOIDA
          </p>
        </motion.div>

        {/* DESCRIPTION LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-600 mb-6 text-lg font-serif"
        >
          Center stage in the Luxury Branded Residences hub of Noida
        </motion.p>

        {/* DESCRIPTION PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-600 max-w-4xl mx-auto mb-10 text-lg font-serif leading-relaxed"
        >
          A location befitting world class branded residences, the spectacular views of scenic Golf Course on one side and tranquil and reflective Yamuna River on the other side add more to the luxury quotient.
        </motion.p>

        {/* CALL TO ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <button className="px-10 py-2 bg-black text-white text-sm font-serif tracking-widest hover:bg-gray-800 transition-colors">
            LOCATION AV
          </button>
          <button className="px-10 py-2 border border-black text-black text-sm font-serif tracking-widest hover:bg-black hover:text-white transition-colors">
            VIRTUAL MAP
          </button>
        </motion.div>

      </div>
    </section>
  );
}
