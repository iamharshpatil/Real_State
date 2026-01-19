"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* BACKGROUND IMAGE */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Luxury Residence"
        fill
        className="object-cover"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="absolute bottom-24 left-8 md:left-16 text-white max-w-2xl">

        <div className="w-20 h-[1px] bg-[#c9a227] mb-6" />

        <p className="tracking-[0.35em] text-xs font-serif mb-3 uppercase">
          Signature Residences
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Where Luxury  
          Meets Comfort
        </h1>

        <p className="text-white/80 mb-8 font-serif">
          Experience a new era of sophisticated living  
          crafted with timeless architecture.
        </p>

        <button
  className="
    relative overflow-hidden
    px-12 py-4
    border border-white/40
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
    text-white
    group-hover:text-black
    transition-colors duration-500
  ">
    EXPLORE
  </span>

</button>

      </div>

    </section>
  );
}
