// import { useEffect, useRef } from "react";

// export default function StarBackground() {
//   const starsRef = useRef(null);

//   useEffect(() => {
//     const container = starsRef.current;

//     // Prevent duplicates on hot reload
//     container.innerHTML = "";

//     for (let i = 0; i < 200; i++) {
//       const star = document.createElement("span");

//       const size = Math.random() * 2 + 1;
//       const duration = Math.random() * 10 + 5;

//       star.className = "absolute rounded-full bg-white opacity-80";

//       star.style.left = Math.random() * 100 + "vw";
//       star.style.top = Math.random() * 100 + "vh";
//       star.style.width = `${size}px`;
//       star.style.height = `${size}px`;
//       star.style.animation = `moveStars ${duration}s linear infinite`;

//       container.appendChild(star);
//     }
//   }, []);

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#b8c2cc_0%,#6f7a86_100%)]">
//       <div ref={starsRef} className="absolute inset-0"></div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

export default function GoldenParticles() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;

    if (!container) return;

    container.innerHTML = "";

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("span");

      const size = Math.random() * 2 + 1;
      const duration = 6 + Math.random() * 8;

      star.className = "gold-star";

      star.style.left = Math.random() * 100 + "vw";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${-Math.random() * duration}s`;

      container.appendChild(star);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5a3b1e_0%,#3b2a1a_40%,#2a1a0f_100%)]" />

      {/* Soft luxury glow */}
      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#c5ae86]/20 blur-[180px]" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#ffd27a]/10 blur-[160px]" />

      <div className="absolute top-20 right-0 h-[450px] w-[450px] rounded-full bg-[#8b5e3c]/20 blur-[180px]" />

      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 h-[200%]" />
    </div>
  );
}
