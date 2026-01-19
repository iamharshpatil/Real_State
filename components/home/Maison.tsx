"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const features = [
  {
    icon: (
      <Image
        src="/1.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-15 h-15"
      />
    ),
    title: "Rs. 40,000 Cr. Assets Under Management."
  },

  {
    icon: (
      <Image
        src="/2.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-15 h-15"
      />
    ),
    title: "6.5 million sq.ft. (Delivered) OC Received"
  },

  {
    icon: (
      <Image
        src="/3.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-15 h-15"
      />
    ),
    title: "2 crore sq.ft. Under Development"
  },
  {
    icon: (
      <Image
        src="/4.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-15 h-15"
      />
    ),
    title: "Development Potential of 7 crore sq.ft. over the next five years"
  },
  {
    icon: (
      <Image
        src="/5.png"
        width={24}
        height={24}
        alt="feature icon"
        className="w-15 h-15"
      />
    ),
    title: "30,000+ Happy Customers"
  }
];
export default function Maison() {

    
  return (
    <section className="relative bg-linear-to-bl from-[#D4A574] via-[#E8E3D5] to-[#D4A574] py-24 px-6 overflow-hidden">
      
      {/* ===== WATERMARK BACKGROUND - FULL SECTION COVER ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/watermark.png"
          alt="ELIE SAAB watermark"
          className="w-full h-full object-contain opacity-[0.15]"
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto text-black">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          ABOUT SMARTWORLD
        </motion.h2>

        <div className="flex flex-col gap-8">

          {/* PARA 1 - LEFT TO RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="font-serif text-center max-w-5xl mx-auto leading-[1.9]"
          >
           Smartworld Developers is a next-gen real estate brand that has emerged among India's most influential luxury developers with its focus on scale, innovation, speed and delivery. In just over 4 years, it has an impressive portfolio that includes refined low-rise developments, ultra-luxury high-rises, and intemational branded living.

 </motion.p>

          {/* PARA 2 - RIGHT TO LEFT */}
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-center max-w-5xl mx-auto leading-[1.9]"
          >
           Smartworld now brings its vision to Noida a city poised for global lifestyle and retail experiences. With a track record of creating thriving communities and iconic projects. Smartworld is set to transform the way Noida lives, works and shops.

   </motion.p>

        </div>

        {/* ===== IMAGE GALLERY ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Living Spaces", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
            { title: "Dining Areas", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
            { title: "Bedrooms", src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-serif text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
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

        {/* ===== ENQUIRE SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          className="text-center mt-16 mb-10"
        >
           <button
  className="
    relative overflow-hidden
    px-12 py-4
    border border-black/40
    tracking-[0.25em]
    text-sm
    group
  "
>

  {/* Gold Hover Layer */}
  <span className="
    absolute inset-0
    bg-[#D4A574]
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500
    z-0
  "/>

  {/* Button Text */}
  <span className="
    relative z-10
    text-black
    group-hover:text-white
    transition-colors duration-500
  ">
    ENQUIRE NOW
  </span>

</button>
{/* ===== FORM FIELDS – ALIGNED LIKE IMAGE ===== */}
{/* ===== FORM FIELDS – ROW ALIGNED ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1}}
  className="
    w-full max-w-5xl
    grid grid-cols-1 md:grid-cols-3
    gap-30 mt-30
    text-left
  "
>

  {/* NAME */}
  <div className="flex flex-col gap-2">
    <span className="font-serif text-black tracking-wide">
      Name
    </span>

    <input
      type="text"
      className="
        w-full bg-transparent
        outline-none
        font-serif
        pb-2
      "
    />

    <div className="w-full h-[1px] bg-black/40" />
  </div>


  {/* EMAIL */}
  <div className="flex flex-col gap-2">
    <span className="font-serif text-black tracking-wide">
      Email Address
    </span>

    <input
      type="email"
      className="
        w-full bg-transparent
        outline-none
        font-serif
        pb-2
      "
    />

    <div className="w-full h-[1px] bg-black/40" />
  </div>


  {/* PHONE */}
  <div className="flex flex-col gap-2">
    <span className="font-serif text-black tracking-wide">
      Phone Number
    </span>

    <input
      type="tel"
      className="
        w-full bg-transparent
        outline-none
        font-serif
        pb-2
      "
    />

    <div className="w-full h-[1px] bg-black/40" />
  </div>

</motion.div>
<button
  className="
    relative overflow-hidden
    px-8 py-2
    border border-black/40
    tracking-[0.25em]
    text-sm
    group mt-20
  "
>

  {/* Gold Hover Layer */}
  <span className="
    absolute inset-0
    bg-[#D4A574]
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500
    z-0
  "/>

  {/* Button Text */}
  <span className="
    relative z-10
    text-black
    group-hover:text-white
    transition-colors duration-500
  ">
    SUBMIT
  </span>

</button>

</motion.div>


      </div>

    </section>
  );
}