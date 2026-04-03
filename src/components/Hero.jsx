import useScrollScale from "../hooks/useScrollScale";
import { UtensilsCrossed, Wine, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scroll = useScrollScale();
  
  const ease = 1 - Math.pow(1 - scroll, 3);

  
  const scale = 1 + Math.min(ease * 0.15, 0.15);
  const blur = Math.min(ease * 3, 3); 
  const translateY = ease * 30;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="relative h-[200vh] bg-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center isolate">

        <motion.img
          src="/landing.png"
          alt="SIA Restaurant"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            scale,
            filter: `blur(${blur}px)`,
          }}
        />

        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95 z-10" />

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]" />

        <motion.div className="absolute inset-0 z-10 pointer-events-none">

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-[18%] left-[12%]"
          >
            <UtensilsCrossed className="text-amber-500/20" size={42} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-[42%] left-[8%]"
          >
            <ChefHat className="text-amber-500/20" size={36} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-[18%] left-[14%]"
          >
            <Wine className="text-amber-500/20" size={38} />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-[18%] right-[12%]"
          >
            <UtensilsCrossed className="text-amber-500/20" size={42} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-[42%] right-[8%]"
          >
            <ChefHat className="text-amber-500/20" size={36} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-[18%] right-[14%]"
          >
            <Wine className="text-amber-500/20" size={38} />
          </motion.div>

        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 text-center px-6 will-change-transform"
          style={{
            transform: `translateY(${translateY}px) translateZ(0)`, // 🔥 GPU FIX
          }}
        >
          <motion.p
            variants={item}
            className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-amber-400 mb-8"
          >
            SIA Restaurant · Banquet · Pool Cafe
          </motion.p>

          <h1 className="font-serif leading-none">
            <motion.span
              variants={item}
              className="block text-white text-6xl sm:text-7xl md:text-[120px]"
            >
              SIA
            </motion.span>

            <motion.span
              variants={item}
              className="block italic text-amber-500 text-4xl sm:text-5xl md:text-[70px] mt-4"
            >
              Luxury Dining
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-10 max-w-xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed"
          >
            Sindri’s most elegant destination for curated flavours,
            grand celebrations, and unforgettable poolcafe evenings.
          </motion.p>

          <motion.div variants={item} className="mt-14 flex justify-center">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                group relative px-12 py-4 rounded-full
                bg-amber-500 text-black
                text-xs uppercase tracking-[0.3em] font-bold
                overflow-hidden
              "
            >
              <span className="flex items-center gap-2 relative z-10">
                View Menu
                <UtensilsCrossed size={16} />
              </span>

              <motion.span
                className="absolute inset-0 bg-white/20 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          SCROLL
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;