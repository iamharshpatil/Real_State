"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Landmark() {
  return (
    <section className="bg-gradient-to-br from-[#D4A574]  via-[#E8E3D5] to-[#F8F8F8]  py-28 px-10">

  <div className="mx-auto max-w-full flex flex-col items-center">
    <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Image
            src="/swxeliesaab.png"  
            alt="Landmark"
            width={480}
            height={480}
            className="object-contain"
          />
        </motion.div>

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-[20px] font-serif text-black mb-6 text-center"
    >
      A Landmark Collaboration
    </motion.h2>

    <motion.div
      className="space-y-7 text-[16px] font-serif flex flex-col items-center text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >

      {/* 1 – LEFT */}
      <motion.p 
        className="max-w-5xl text-center"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Smartworld and ELIE SAAB have joined forces to craft a first-of-its-kind
        living experience in India. Each home is conceived as a composition of
        sculpted forms, softened light and enduring details brought into harmony
        through thoughtful design.  From facades that rise with quiet confidence to interiors that breathe
        with balance and luminosity, every space is considered, measured and
        refined. This is where Art meets Architecture.
      </motion.p>


      {/* 3 – RIGHT */}
      <motion.p 
        className="max-w-5xl text-center"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        Founded in Lebanon in 1982, ELIE SAAB is one of the world's leading
        Haute Couture lifestyle brands. As one of the first international
        members of France's prestigious Chambre Syndicale, the House has
        established a global presence with flagship boutiques in major fashion
        capitals including Paris, London, Milan, Dubai, Beirut and other key
        cities around the world.
      </motion.p>

    </motion.div>
  </div>
</section>
  );
}
