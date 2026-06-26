import { MapPin, Phone, Clock3 } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function TopbarArea({ scrolled }) {
  return (
    <div
      className={`fixed top-0 left-0 z-[99999] hidden w-full border-b border-white/10 bg-[#7d8770]/90 text-[#f7f2eb] backdrop-blur-md lg:block transition-all duration-500  ${
        scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-8">
        {/* Left */}
        <div className="flex items-center gap-8 text-[12px] tracking-wide">
          <a
            href="#"
            className="flex items-center gap-2 transition duration-300 hover:text-[#c5ae86]"
          >
            <MapPin size={14} />
            <span>4 Dockland Street, London</span>
          </a>

          <a
            href="tel:+447947995687"
            className="flex items-center gap-2 transition duration-300 hover:text-[#c5ae86]"
          >
            <Phone size={14} />
            <span>+44 7947 995687</span>
          </a>

          <div className="flex items-center gap-2 text-[#f7f2eb]/90">
            <Clock3 size={14} />
            <span>Mon – Fri • 9:00 AM – 5:00 PM</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="/contact"
            className="rounded-full border border-[#c5ae86] px-5 py-1.5 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#c5ae86] hover:text-[#342d28]"
          >
            Book Now
          </a>

          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bolfis.london?igsh=N2poMmx2czg1cDc2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c5ae86]"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://youtube.com/shorts/wU5ywl91iYk?si=IY2NfmGsVhzHeBZo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c5ae86]"
            >
              <FaYoutube size={16} />
            </a>

            <a
              href="https://x.com/BolfisD32384"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c5ae86]"
            >
              <FaXTwitter size={15} />
            </a>

            <a
              href="https://www.facebook.com/share/xXKFxKGUJmc8pKwy/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c5ae86]"
            >
              <FaFacebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
