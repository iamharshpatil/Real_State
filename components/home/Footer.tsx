export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#D4A574]  via-[#E8E3D5] to-[#F8F8F8] text-black py-12 px-6">
      
      {/* ===== CENTERED CONTENT ===== */}
      <div className="max-w-7xl mx-auto flex justify-center">

        <div className="text-center max-w-2xl">
          <h2 className="font-serif text-xl tracking-widest mb-4">
            ELIE SAAB RESIDENCES
          </h2>

          <p className="text-black/80 text-sm leading-relaxed">
            A landmark collaboration of luxury fashion and architectural excellence, 
            bringing couture-inspired living to India.
          </p>
        </div>

      </div>


      {/* ===== BOTTOM BAR ===== */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-black/20 text-center text-black/60 text-xs">
         © COPYRIGHT SMARTWORLD DEVELOPERS PVT. LTD. {new Date().getFullYear()} | Disclaimer
      </div>

    </footer>
  );
}
