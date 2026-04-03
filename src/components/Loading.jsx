import { useState, useEffect } from "react";
import {
  UtensilsCrossed,
  Wine,
  Menu as MenuIcon,
  GlassWater,
} from "lucide-react";

export default function Loading({ onFinish }) {
  const [loadingState, setLoadingState] = useState("loading");
  const [isExiting, setIsExiting] = useState(false);
  const [bgIcons, setBgIcons] = useState([]);
  const [scrambleIcons, setScrambleIcons] = useState([]);

  const availableIcons = [UtensilsCrossed, Wine, MenuIcon, GlassWater];

  useEffect(() => {
    const zones = [
      { top: [0, 20], left: [0, 20] },
      { top: [0, 20], left: [80, 100] },
      { top: [80, 100], left: [0, 20] },
      { top: [80, 100], left: [80, 100] },
    ];

    const icons = Array.from({ length: 16 }).map((_, i) => {
      const zone = zones[i % 4];
      return {
        id: i,
        Icon:
          availableIcons[
            Math.floor(Math.random() * availableIcons.length)
          ],
        top: Math.random() * (zone.top[1] - zone.top[0]) + zone.top[0],
        left: Math.random() * (zone.left[1] - zone.left[0]) + zone.left[0],
        size: Math.random() * 15 + 20,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 4,
      };
    });

    const scramble = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      Icon:
        availableIcons[
          Math.floor(Math.random() * availableIcons.length)
        ],
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
    }));

    setBgIcons(icons);
    setScrambleIcons(scramble);

    const t1 = setTimeout(() => setLoadingState("fading"), 2500);
    const t2 = setTimeout(() => setLoadingState("opening"), 3500);
    const t3 = setTimeout(() => setIsExiting(true), 5200);
    const t4 = setTimeout(() => onFinish(), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  const isOpening = loadingState === "opening";

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0f1a] flex items-center justify-center transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute w-[500px] h-[500px] bg-[#c5a059]/10 blur-3xl rounded-full" />

      {!isOpening &&
        bgIcons.map(({ id, Icon, top, left, size, delay, duration }) => (
          <div
            key={id}
            className="absolute text-[#c5a059] opacity-0 animate-float-fade"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Icon size={size} />
          </div>
        ))}

      {loadingState === "loading" &&
        scrambleIcons.map(({ id, Icon, x, y, rotate }) => (
          <div
            key={id}
            className="absolute text-[#c5a059] animate-scramble"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
            }}
          >
            <Icon size={20} />
          </div>
        ))}

      {!isOpening && (
        <div className="flex flex-col items-center z-10">
          <svg
            viewBox="0 0 100 100"
            className="w-28 h-28 stroke-[#c5a059] fill-none animate-bell-drop"
          >
            <path
              d="M20,70 L80,70 C80,70 80,40 50,40 C20,40 20,70 20,70 Z"
              className="animate-draw visible-stroke"
            />
            <circle
              cx="50"
              cy="32"
              r="3"
              fill="#c5a059"
              className="animate-fadeIn"
            />
            <line
              x1="15"
              y1="75"
              x2="85"
              y2="75"
              className="animate-draw visible-stroke"
            />
          </svg>

          <p className="mt-6 text-[10px] tracking-[0.6em] uppercase text-[#c5a059] animate-pulse">
            Refining the Experience
          </p>
        </div>
      )}

      {isOpening && (
        <img
          src="/sia.png"
          alt="logo"
          className="absolute w-40 opacity-0 animate-logoReveal"
        />
      )}

      <div className="absolute inset-0 flex pointer-events-none">
        <div
          className={`relative w-1/2 bg-gradient-to-r from-[#0d121d] to-[#0a0f1a]
          transition-all duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]
          ${
            isOpening ? "-translate-x-full scale-105" : ""
          }`}
        >
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c5a059] rounded-full" />
        </div>

        <div
          className={`relative w-1/2 bg-gradient-to-l from-[#0d121d] to-[#0a0f1a]
          transition-all duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]
          ${
            isOpening ? "translate-x-full scale-105" : ""
          }`}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c5a059] rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes bell-drop {
          0% { transform: translateY(-80px); opacity: 0; }
          60% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(0); }
        }
        .animate-bell-drop {
          animation: bell-drop 1.2s ease forwards;
        }

        @keyframes scramble {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        .animate-scramble {
          animation: scramble 1s ease forwards;
        }

        @keyframes logoReveal {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-logoReveal {
          animation: logoReveal 1.5s ease forwards;
        }

        .visible-stroke {
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @keyframes draw {
          from { stroke-dasharray: 0 300; }
          to { stroke-dasharray: 200 300; }
        }
        .animate-draw {
          animation: draw 2.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes float-fade {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(-20px); opacity: 0.2; }
        }
        .animate-float-fade {
          animation: float-fade 5s linear infinite;
        }
      `}</style>
    </div>
  );
}