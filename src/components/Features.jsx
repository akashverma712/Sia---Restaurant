import { Star, MapPin, PartyPopper, Waves } from "lucide-react";

const data = [
  { label: "Rating", value: "4.4 ★", icon: Star },
  { label: "Guest Capacity", value: "100+", icon: PartyPopper },
  { label: "Vibe", value: "Premium", icon: Waves },
  { label: "Location", value: "Dhanbad", icon: MapPin },
];

const Features = () => (
  <section
    className="
      relative bg-zinc-950
      pt-24 pb-32
      -mt-[100vh]
    "
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {data.map((f, i) => (
          <div
            key={i}
            className="
              group relative text-center
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-3xl p-10
              transition-all duration-500
              hover:-translate-y-2 hover:border-amber-500/40
              hover:shadow-[0_25px_80px_-25px_rgba(245,158,11,0.35)]
            "
          >
            {/* icon */}
            <div
              className="
                mx-auto mb-6 flex h-16 w-16 items-center justify-center
                rounded-full bg-white/5
                group-hover:bg-white/10
                transition-all
              "
            >
              <f.icon
                size={28}
                className="
                  text-white/80
                  group-hover:scale-110
                  transition-all
                "
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif tracking-wide text-white">
              {f.value}
            </h3>

            <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-gray-400">
              {f.label}
            </p>

            {/* bottom accent */}
            <span
              className="
                absolute bottom-0 left-1/2 h-px w-12
                -translate-x-1/2 bg-white/30
                opacity-0 group-hover:opacity-100
                transition
              "
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;