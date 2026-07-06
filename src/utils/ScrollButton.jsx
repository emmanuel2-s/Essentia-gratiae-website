import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,

          behavior: "smooth",
        })
      }
      className={`fixed bottom-6 right-8 h-14 w-14 px-2 rounded-full bg-[#1E3A34] text-white shadow-xl duration-500 z-50 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp size={35} />
    </button>
  );
}
