'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const poolImages = [
  { id: 1, image: "/img.png", span: "row-span-2" },
  { id: 2, image: "/img2.png", span: "col-span-2" },
  { id: 3, image: "/img3.png" },
  { id: 4, image: "/img7.png", span: "row-span-2 col-span-2" },
  { id: 5, image: "/img5.png"},
  { id: 6, image: "/img6.png", span: "row-span-2" },
  { id: 7, image: "/img4.png" },
  { id: 8, image: "/img8.png", span: "col-span-2" },
  { id: 9, image: "/img9.png" },
];

const PoolSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const shuffledIndexes = useMemo(() => {
    const order = [...Array(poolImages.length).keys()];
    return order.sort(() => Math.random() - 0.5);
  }, []);

  const itemVariant = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 40,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="pool"
      className="py-32 md:py-40 bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic mb-8 leading-tight">
            Poolside <span className="not-italic text-amber-500">Cafe</span>
          </h2>

          <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
            Dhanbad’s most exclusive open-air experience — sunset vibes,
            curated music, and a poolside vibe crafted for indulgence.
          </p>
        </div>

        {/* RIGHT — BENTO GRID */}
        <div ref={ref}>
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
              auto-rows-[140px] sm:auto-rows-[160px]
              gap-4 sm:gap-6
              grid-flow-dense
            "
          >
            {poolImages.map((item, index) => {
              const randomOrderIndex = shuffledIndexes[index];

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={randomOrderIndex}
                  className={`
                    relative overflow-hidden rounded-xl
                    border border-white/10
                    bg-black/50 backdrop-blur-md
                    ${item.span ?? ""}
                  `}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-full h-full object-cover
                   
                      hover:scale-105
                      transition duration-700 ease-out
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PoolSection;