import { motion } from "framer-motion";

const people = [
  { img: "/owner1.png" },
  { img: "/owner2.png" },
];

const LocationSection = () => {
  return (
    <section className="relative py-20 md:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full md:w-1/2"
        >
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full">
            {people.map((person, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 0.8 },
                  },
                }}
                className="flex justify-center w-full md:w-auto"
              >
                <motion.img
                  src={person.img}
                  alt="Owner"
                  whileHover={{ scale: 1.08 }}
                  className="w-full md:w-[280px] max-w-[280px] h-auto max-h-[420px] object-cover rounded-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
                />
              </motion.div>
            ))}
          </div>

          <p className="text-lg md:text-xl font-serif tracking-[0.4em] text-[#c5a059] text-center">
            OWNERS OF SIA RESTAURANT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 h-[320px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.95)]"
        >
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          <iframe
            title="Sia Restaurant Location"
            src="https://www.google.com/maps?q=23.6795787,86.4818859&z=18&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default LocationSection;