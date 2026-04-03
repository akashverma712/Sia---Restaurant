import { Star } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonial = () => (
  <section className="relative py-24 md:py-48 bg-black overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.4 }}
        className="relative p-8 md:p-16 rounded-[2rem] bg-white/[0.035] backdrop-blur-3xl border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.9)] transition-all duration-500 group"
      >
        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(197,160,89,0.25),transparent_70%)]" />

        <motion.div
          variants={item}
          className="text-[#c5a059]/20 text-[80px] md:text-[120px] absolute top-4 md:top-6 left-6 md:left-10 font-serif"
        >
          “
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center mb-6 md:mb-8 relative z-10"
        >
          <div className="relative">
            <Star size={28} className="text-[#c5a059] opacity-80 md:opacity-80" />
            <div className="absolute inset-0 blur-xl bg-[#c5a059]/30 rounded-full" />
          </div>
        </motion.div>

        <motion.h3
          variants={item}
          className="relative z-10 text-xl md:text-4xl font-serif italic leading-relaxed text-white/90"
        >
          A sanctuary of taste and light, where every dish feels curated,
          every moment becomes a memory worth reliving.
        </motion.h3>

        <motion.div
          variants={item}
          className="relative z-10 w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto my-6 md:my-10"
        />

        <motion.p
          variants={item}
          className="relative z-10 text-xs md:text-sm uppercase tracking-[0.45em] text-[#c5a059]/80"
        >
          Elite Traveler Guide
        </motion.p>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-black to-transparent" />
  </section>
);

export default Testimonial;