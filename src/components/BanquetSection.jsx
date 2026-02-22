import React from "react";

const BanquetSection = () => {
  return (
    <section
      id="banquet"
      className="bg-zinc-950 py-32 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
                alt="SIA Banquet Hall"
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-amber-500/30 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-bold">
              Event Spaces
            </span>

            <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">
              The <br />
              <span className="italic text-white/70">Banquet</span>
            </h2>

            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Sindri’s most prestigious venue for weddings, receptions and
              corporate gatherings. Where modern luxury meets flawless service.
            </p>

            <div className="grid grid-cols-2 gap-6 text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-amber-500" />
                <span>Fully AC Hall</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-amber-500" />
                <span>Large Parking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-amber-500" />
                <span>Premium Catering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-amber-500" />
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
