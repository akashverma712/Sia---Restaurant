import React from "react";

const BanquetSection = () => {
  return (
    <section
      id="banquet"
      className="bg-zinc-950 py-20 md:py-32 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

          <div className="relative group">
            <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/img10.png"
                alt="SIA Banquet Hall"
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-amber-500/30 hidden md:block" />
          </div>

          <div className="space-y-6 md:space-y-8">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-bold">
              Event Spaces
            </span>

            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-tight">
              The <br />
              <span className="italic text-white/70">Banquet</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              Sindri’s most prestigious venue for enjoyment, parties, and
              corporate gatherings. Where modern luxury meets flawless service.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/60 font-bold">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-1 bg-amber-500 rounded-full" />
                <span>Fully AC Hall</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-1 bg-amber-500 rounded-full" />
                <span>Family Gathering</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-1 bg-amber-500 rounded-full" />
                <span>Premium Catering</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-1 bg-amber-500 rounded-full" />
                <span>Poolside View</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BanquetSection;