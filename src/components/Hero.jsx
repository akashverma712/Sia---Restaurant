import useScrollScale from "../hooks/useScrollScale";

const Hero = () => {
  const scroll = useScrollScale();

  // cinematic curves
  const scale = 1 + scroll * 0.22;
  const opacity = 1 - scroll * 0.85;
  const blur = scroll * 6;

  return (
    <section
      id="home"
      className="relative h-[200vh] bg-black overflow-hidden"
    >
      {/* STICKY FRAME */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">

        {/* BACKGROUND IMAGE */}
        <img
          src="/landing.png"
          alt="SIA Restaurant Banquet Pool Cafe"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
          }}
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

        {/* SOFT GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_65%)]" />

        {/* CONTENT */}
        <div
          className="relative z-10 text-center px-6 will-change-opacity"
          style={{ opacity }}
        >
          {/* FULL BRAND LINE */}
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.45em] text-amber-400 mb-8">
            SIA Restaurant · Banquet · Pool Cafe
          </p>

          {/* HERO TITLE */}
          <h1 className="font-serif leading-none">
            <span className="block text-white text-6xl sm:text-7xl md:text-[120px] tracking-wide">
              SIA
            </span>
            <span className="block italic text-amber-500 text-4xl sm:text-5xl md:text-[70px] mt-4">
              Luxury Dining
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-10 max-w-xl mx-auto text-sm sm:text-base text-white/70 leading-relaxed">
            Sindri’s most elegant destination for curated flavours,
            grand celebrations, and unforgettable poolside evenings.
          </p>

          {/* CTA — ONLY VIEW MENU */}
          <div className="mt-14 flex justify-center">
            <a
              href="#menu"
              className="
                px-12 py-4 rounded-full
                bg-amber-500 text-black
                text-xs uppercase tracking-[0.3em] font-bold
                transition-all duration-300
                hover:bg-amber-400 hover:scale-105
              "
            >
              View Menu
            </a>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest"
          style={{ opacity: 1 - scroll * 2 }}
        >
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;