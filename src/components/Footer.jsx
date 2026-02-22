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
    <footer
      id="contact"
      className="relative bg-[#0b0b0b] text-white"
    >
      {/* warm top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-20 md:grid-cols-3">
        {/* BRAND / STORY */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <img
              src="/sia.png"
              alt="SIA Restaurant Logo"
              className="h-14 w-auto object-contain"
            />
            <span className="text-2xl font-serif tracking-[0.4em]">
              SIA
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 mb-10">
            A refined dining destination in the heart of Sindri —
            where flavors meet elegance, celebrations feel grand,
            and evenings slow down by the poolside.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-gray-400">
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
              href="#"
              aria-label="Facebook"
              className="hover:text-amber-500 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-amber-500 transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* VISIT US */}
        <div className="text-center md:text-left">
          <h6 className="text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-8">
            Visit Us
          </h6>

          <div className="space-y-6 text-sm text-gray-400">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Clock size={15} className="text-amber-500" />
              <span>Open Daily • 10:00 AM – 10:00 PM</span>
            </div>

            <div className="flex items-start justify-center md:justify-start gap-4">
              <MapPin size={15} className="text-amber-500 mt-1" />
              <span>
                Sindri, Dhanbad – 828122  
                <br />
                Jharkhand, India
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
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

        {/* EXPERIENCES */}
        <div className="text-center md:text-left">
          <h6 className="text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-8">
            Experiences
          </h6>

          <ul className="space-y-4 text-sm text-gray-400">
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

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-[10px] uppercase tracking-[0.35em] text-gray-500">
          © 2026 SIA Restaurant • Dining • Celebrations • Poolside
        </div>
      </div>
    </footer>
  );
};

export default Footer;