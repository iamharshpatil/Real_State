"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ResidencesShowcase() {

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  ];

  return (
    <section className="bg-gradient-to-bl from-[#D4A574] via-[#E8E3D5] to-[#D4A574] text-white min-h-screen flex flex-col">

      {/* ===== TEXT CONTENT ===== */}
      <div className="max-w-[1200px] mx-auto px-6 pt-2 pb-10 text-center">

  {/* ===== HEADING ===== */}
  <motion.h1
  initial={{ opacity: 0, y: -70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }}   // 👈 IMPORTANT
  className="
    text-3xl md:text-4xl
    tracking-[0.25em]
    font-serif
    text-black
    mb-8 mt-40
  "
>
  CURATED AMENITIES
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  viewport={{ once: false, amount: 0.2 }}   // 👈 IMPORTANT
  className="
    text-black
    leading-relaxed
    font-serif
    tracking-wide
    max-w-5xl
    mx-auto
  "
>
  The Residences presents a curated suite of exquisite amenities —  
  a vibrant kids’ play area and pool, a state-of-the-art mini theatre,  
  a rejuvenating wellness spa, a fully equipped fitness studio and  
  tranquil swimming pools with cascading features.  

  Each element is crafted with artistry and elegance to create  
  a truly refined luxury lifestyle.
</motion.p>

</div>


      {/* ===== IMAGE SWIPER ===== */}
      <div className="mt-16 flex-1">

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="w-[90%] h-full"
        >

          {images.map((img, i) => (
            <SwiperSlide key={i}>

              <div className="w-full h-[75vh] relative">

                <img
                  src={img}
                  className="w-full h-full object-cover"
                />

                {/* Luxury Label */}
                <div className="
                  absolute top-6 right-6
                  bg-white text-black
                  px-5 py-2
                  text-[11px]
                  tracking-[0.25em]
                ">
                  RESIDENCE — 0{i + 1}
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10" />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
      {/* ===== BOTTOM TAGLINE + LINE + DOWNLOAD BUTTON ===== */}

<div className="max-w-[1200px] mx-auto py-16 flex flex-col items-center">

{/* Luxury Tagline */}
<p className="
    text-black
    tracking-[0.28em] 
    text-sm 
    md:text-base 
    mb-8 
    text-center 
    font-light
">
  A VISION REALISED IN EVERY DETAIL, EVERY CORNER
</p>

{/* Luxury Line Divider */}
<div className="w-[2px] h-[80px] bg-gradient-to-b from-black/60 to-transparent mb-8" />

{/* Animated Download Button */}
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
    DOWNLOAD BROCHURE
  </span>

</button>

</div>


    </section>
  );
}
