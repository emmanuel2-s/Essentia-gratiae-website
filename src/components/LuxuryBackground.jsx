import { useEffect, useRef } from "react";
import "./TopbarArea.css";

export default function StarField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const createStar = (initial = false) => {
      const star = document.createElement("div");

      const type = Math.random();

      if (type < 0.3) {
        star.className = "streak";
      } else if (type < 0.6) {
        star.className = "star";
      } else if (type < 0.8) {
        star.className = "streak-green";
      } else {
        star.className = "star-green";
      }

      star.style.left = Math.random() * 100 + "vw";
      star.style.top = initial ? Math.random() * 100 + "vh" : "-10vh";

      const duration = 2 + Math.random() * 3;

      star.style.animationDuration = `${duration}s`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // Initial stars
    for (let i = 0; i < 120; i++) {
      createStar(true);
    }

    // Continuous stars
    const interval = setInterval(() => {
      createStar(false);
    }, 50);

    return () => {
      clearInterval(interval);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="stars" />;
}
