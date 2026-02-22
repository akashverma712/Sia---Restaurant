import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Menu", "Banquet", "Pool", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50
          transition-all duration-700
          ${
            isScrolled
              ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4"
              : "bg-transparent py-8"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO ONLY */}
          <div
            onClick={() => scrollTo("home")}
            className="cursor-pointer group"
          >
            <img
              src="/sia.png"
              alt="SIA Restaurant"
              className="
                h-14 md:h-16 w-auto
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-14">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="
                  group relative
                  text-[11px] uppercase tracking-[0.3em]
                  text-white/70 hover:text-white
                  transition
                "
              >
                {item}
                <span
                  className="
                    absolute left-1/2 -bottom-2 h-px w-0
                    -translate-x-1/2
                    bg-white
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50 bg-black
          transition-transform duration-700 ease-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center gap-12">
          {links.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="
                text-4xl font-serif text-white
                opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]
                hover:text-gray-300 transition
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;