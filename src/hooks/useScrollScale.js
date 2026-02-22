import { useEffect, useState } from "react";

const useScrollScale = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const target = Math.min(position / windowHeight, 1);

      // smooth interpolation
      current += (target - current) * 0.08;
      setScrollProgress(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
};

export default useScrollScale;