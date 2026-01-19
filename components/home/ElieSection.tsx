"use client";
import { motion } from "framer-motion";

export default function Maison() {
  return (
    <section
      className="
        relative
        w-full
        py-20
        bg-gradient-to-br from-[#D4A574] via-[#E8E3D5] to-[#D4A574]
        overflow-hidden
      "
    >

      {/* ===== WATERMARK IMAGE BACKGROUND ===== */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          pointer-events-none
        "
      >
        <img
          src="/watermark.png"            // 👈 public folder se direct
          alt="ELIE SAAB watermark"
          className="
            w-[80%] md:w-[60%]
            opacity-[0.08]
            object-contain
          "
        />
      </div>


      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="
            text-black
            text-3xl md:text-4xl
            font-serif
            tracking-[0.2em]
            text-center
            mb-14
          "
        >
          DESIGNED BY ELIE SAAB
        </motion.h2>


        <div className="flex flex-col gap-8">

          {/* PARA 1 */}
          <motion.p
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="
              text-black
              text-center
              max-w-5xl
              mx-auto
              font-serif
              leading-[1.9]
            "
          >
            The ELIE SAAB Maison furniture collection is the result of the creative collaboration between Elie Saab and Carlo Colombo, brought to life under license by Corporate Brand – A++ Group. It translates the Maison's distinctive aesthetic into the world of interiors, blending cultural heritage with modern contemporary design to create a refined and global vision of living.
          </motion.p>


          {/* PARA 2 */}
          <motion.p
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-black
              text-center
              max-w-5xl
              mx-auto
              font-serif
              leading-[1.9]
            "
          >
            Crafted in Italy, every piece reflects a continuous pursuit of excellence in craftsmanship, fabrics, textures, and finishes. With its organic shapes and harmonious proportions, the collection embodies ELIE SAAB's vision of the home as a living expression of elegance and emotion — a complete interior world spanning living and dining areas, bedrooms, offices, outdoor spaces, kitchens, wardrobes, rugs, and décor. Residents will have the privilege of working alongside the ELIE SAAB Maison team to configure and personalise their interiors, with bespoke consultation and exclusive terms reserved for owners.
          </motion.p>

        </div>

      </div>
    </section>
  );
}
