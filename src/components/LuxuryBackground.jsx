import { useEffect, useRef } from "react";
import "./TopbarArea.css";

const LuxuryStarfield = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let interval;

    // CREATE STAR
    const createStar = (initial = false) => {
      const star = document.createElement("div");
      star.classList.add("star");

      let rand = Math.random();
      let duration;

      if (rand < 0.4) {
        star.classList.add("far");
        duration = 18 + Math.random() * 10;
      } else if (rand < 0.75) {
        star.classList.add("mid");
        duration = 12 + Math.random() * 8;
      } else {
        star.classList.add("near");
        duration = 8 + Math.random() * 6;
      }

      star.style.left = Math.random() * 100 + "vw";
      star.style.top = initial ? Math.random() * 100 + "vh" : "-10vh";

      star.style.animationDuration = `${duration}s`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // INITIAL LOAD
    for (let i = 0; i < 140; i++) {
      createStar(true);
    }

    // CONTINUOUS FLOW
    interval = setInterval(() => createStar(false), 120);

    // CLEANUP (IMPORTANT)
    return () => {
      clearInterval(interval);
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="stars-container" />;
};

export default LuxuryStarfield;
