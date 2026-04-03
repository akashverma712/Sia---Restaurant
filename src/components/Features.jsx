import { Star, MapPin, PartyPopper, Waves } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const data = [
  { label: "Rating", value: 4.4, suffix: "★", icon: Star },
  { label: "Guest Capacity", value: 100, suffix: "+", icon: PartyPopper },
  { label: "Vibe", value: "Premium", icon: Waves },
  { label: "Location", value: "Dhanbad", icon: MapPin },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;

    const step = (timestamp, startTime) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount((value * progress).toFixed(value % 1 !== 0 ? 1 : 0));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };

    requestAnimationFrame((t) => step(t, t));
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Features = () => {
  return (
    <section className="relative bg-zinc-950 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-28 md:pb-40 -mt-[60vh] sm:-mt-[80vh] md:-mt-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
        >
          {data.map((f, i) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const rotateX = useTransform(y, [-50, 50], [10, -10]);
            const rotateY = useTransform(x, [-50, 50], [-10, 10]);

            const handleMouseMove = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const px = e.clientX - rect.left - rect.width / 2;
              const py = e.clientY - rect.top - rect.height / 2;
              x.set(px);
              y.set(py);
            };

            const reset = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.div
                key={i}
                variants={item}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                whileHover={{ scale: 1.04 }}
                className="
                  group relative text-center
                  bg-white/[0.04] backdrop-blur-2xl
                  border border-white/10
                  rounded-2xl sm:rounded-3xl
                  p-6 sm:p-8 md:p-10
                  overflow-hidden
                  transition-all duration-500
                  hover:border-amber-500/50
                  hover:shadow-[0_30px_100px_-20px_rgba(245,158,11,0.35)]
                "
              >
                <motion.div
                  className="
                    absolute inset-0 rounded-2xl sm:rounded-3xl
                    bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18),transparent_70%)]
                  "
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="
                    relative mx-auto mb-4 sm:mb-6 flex 
                    h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 
                    items-center justify-center
                    rounded-full bg-white/5
                    group-hover:bg-white/10
                    transition-all
                  "
                >
                  <f.icon
                    size={24}
                    className="
                      text-white/80
                      group-hover:scale-110
                      transition-all duration-300
                    "
                  />
                </motion.div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wide text-white">
                  {typeof f.value === "number" ? (
                    <Counter value={f.value} suffix={f.suffix} />
                  ) : (
                    f.value
                  )}
                </h3>

                <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gray-400">
                  {f.label}
                </p>

                <span
                  className="
                    absolute bottom-0 left-1/2 h-px w-12 sm:w-16
                    -translate-x-1/2 bg-amber-500/70
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;