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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
              ? "bg-black/85 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              : "bg-transparent py-6"
          }
        `}
      >
        {/* cinematic top light */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative w-full flex items-center justify-between">
          
          {/* LEFT LOGO (more left now) */}
          <div className="pl-4 md:pl-8">
            <div
              onClick={() => scrollTo("home")}
              className="cursor-pointer group relative"
            >
              <img
                src="/sia.png"
                alt="SIA Restaurant"
                className="h-14 md:h-16 w-auto transition duration-500 group-hover:scale-110"
              />

              {/* glow */}
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition bg-[#c5a059]" />
            </div>
          </div>

          {/* CENTER NAV LINKS */}
          <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="
                  group relative
                  text-[11px] uppercase tracking-[0.4em]
                  text-white/60 hover:text-white
                  transition duration-300
                "
              >
                {item}

                {/* underline + glow */}
                <span
                  className="
                    absolute left-1/2 -bottom-2 h-[1px] w-0
                    -translate-x-1/2
                    bg-gradient-to-r from-transparent via-[#c5a059] to-transparent
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                {/* subtle glow dot */}
                <span className="absolute -bottom-3 left-1/2 w-1 h-1 bg-[#c5a059] rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition" />
              </button>
            ))}
          </div>

          {/* RIGHT MENU BUTTON */}
          <div className="pr-4 md:pr-8">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white/80 hover:text-white transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50
          bg-black/95 backdrop-blur-2xl
          transition-all duration-700 ease-out
          ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110 pointer-events-none"
          }
        `}
      >
        {/* CLOSE */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition hover:rotate-90 duration-300"
          >
            <X size={30} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="h-full flex flex-col items-center justify-center gap-12">
          {links.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="
                text-4xl md:text-5xl font-serif tracking-wide
                text-white/90
                opacity-0 animate-[fadeUp_0.7s_ease-out_forwards]
                hover:text-[#c5a059] hover:scale-110
                transition duration-300
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* luxury radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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