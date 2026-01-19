"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 50);

      if (currentScroll > lastScrollY && currentScroll > 150) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 transition-all duration-500 ease-in-out
          ${isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="mx-auto px-10 py-10 flex justify-between items-center">

          {/* LEFT */}
          <div className="hidden md:flex gap-8">
            {["The Project", "The Brand", "The Developer"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[20px] tracking-wide text-white font-serif hover:text-[#C9A227]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CENTER */}
          <div className="text-white font-serif text-2xl">
            LUXURY ESTATES
          </div>

          {/* RIGHT */}
          <div className="flex gap-8 items-center">

            <button className="hidden md:flex text-white">
              <span className="text-[20px] font-serif">ENQUIRE NOW</span>
            </button>

            <a href="tel:+919999999999" className="hidden md:flex text-white">
              <Phone className="w-5 h-5" />
            </a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[350px] bg-black/40 z-40
          transition-transform duration-500
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-10 pt-40">
          <div className="flex flex-col gap-8">
            {[
              "About Project",
              "Connectivity",
              "Gallery",
              "Amenities",
              "About Smartworld",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-[22px] font-serif hover:text-[#C9A227]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
