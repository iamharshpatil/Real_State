"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
];

export default function LuxuryHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-screen w-full">

      {/* MAIN SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay, Keyboard, EffectFade]}
        navigation
        keyboard={{ enabled: true }}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={(s) => setActive(s.activeIndex)}
        className="h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              <Image
                src={src}
                alt="luxury"
                fill
                className="object-cover"
                priority
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LUXURY TEXT AREA */}
      <div className="absolute left-10 bottom-20 text-white z-20">
        <p className="tracking-[0.3em] text-xs mb-3">
          PREMIUM RESIDENCES
        </p>

        <h1 className="text-4xl md:text-6xl font-light">
          Crafted for  
          Timeless Living
        </h1>
      </div>

      {/* COUNTER + PROGRESS */}
      <div className="absolute bottom-20 right-10 text-white z-20">
        <span className="text-sm tracking-widest">
          {active + 1} / {images.length}
        </span>

        <div className="w-24 h-[1px] bg-white/40 mt-2">
          <div
            className="h-[1px] bg-white transition-all duration-500"
            style={{
              width: `${((active + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Arrow Styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 22px;
          font-weight: 200;
        }
      `}</style>
    </section>
  );
}
