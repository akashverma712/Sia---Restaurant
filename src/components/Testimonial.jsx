import { Star } from "lucide-react";

/* Small twinkling stars */
const StarsBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        className="absolute h-[2px] w-[2px] rounded-full bg-white/60 animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
        }}
      />
    ))}
  </div>
);

/* Shooting stars */
const ShootingStars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <span
        key={i}
        className="absolute h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40 animate-shooting"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 2.5}s`,
        }}
      />
    ))}
  </div>
);

const Testimonial = () => (
  <section className="relative py-56 bg-black text-center overflow-hidden">
    {/* star layers */}
    <StarsBackground />
    <ShootingStars />

    {/* warm glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_70%)]" />

    {/* content */}
    <div className="relative z-10 px-6">
      <Star
        size={48}
        className="
          mx-auto mb-14
          text-amber-400
          animate-pulse
          drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]
        "
      />

      <h3 className="text-4xl md:text-6xl font-serif italic max-w-5xl mx-auto leading-snug text-white">
        “A sanctuary of taste and light, where every dish feels curated,
        every moment unforgettable.”
      </h3>

      <p className="mt-14 text-xs uppercase tracking-[0.4em] text-amber-500">
        Elite Traveler Guide
      </p>
    </div>

    {/* bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
  </section>
);

export default Testimonial;