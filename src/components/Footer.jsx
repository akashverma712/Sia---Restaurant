import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#0b0b0b] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 grid gap-12 sm:gap-16 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-5 sm:mb-6">
            <img
              src="/sia.png"
              alt="SIA Restaurant Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-serif tracking-[0.3em] sm:tracking-[0.4em]">
              SIA
            </span>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm mx-auto sm:mx-0 mb-8 sm:mb-10">
            A refined dining destination in the heart of Sindri —
            where flavors meet elegance, celebrations feel grand,
            and evenings slow down by the poolside.
          </p>

          <div className="flex justify-center sm:justify-start gap-5 sm:gap-6 text-gray-400">
            <a
              href="https://www.instagram.com/sia.restaurant.sindri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-500 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573532016785"
              aria-label="Facebook"
              className="hover:text-amber-500 transition"
            >
              <Facebook size={18} />
            </a>
           
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h6 className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-amber-400 mb-6 sm:mb-8">
            Visit Us
          </h6>

          <div className="space-y-5 sm:space-y-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <Clock size={15} className="text-amber-500" />
              <span>Open Daily • 10:00 AM – 10:00 PM</span>
            </div>

            <div className="flex items-start justify-center sm:justify-start gap-3 sm:gap-4">
              <MapPin size={15} className="text-amber-500 mt-1" />
              <span>
                Sindri, Dhanbad – 828122
                <br />
                Jharkhand, India
              </span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <Phone size={15} className="text-amber-500" />
              <a
                href="tel:+919931188180"
                className="hover:text-white transition"
              >
                +91 99311 88180
              </a>
            </div>
          </div>
        </div>

        <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
          <h6 className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-amber-400 mb-6 sm:mb-8">
            Experiences
          </h6>

          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
            {[
              "Fine Dining Restaurant",
              "Luxury Banquet Hall",
              "Poolside Café",
              "Private Celebrations",
            ].map((item) => (
              <li key={item} className="hover:text-white transition">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 text-center text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gray-500">
          © 2026 SIA Restaurant • Dining • Celebrations • Poolside
        </div>
      </div>
    </footer>
  );
};

export default Footer;