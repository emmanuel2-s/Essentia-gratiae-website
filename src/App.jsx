import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopbarArea from "./components/TopbarArea";
import RouterPage from "./utils/RouterPage";
// import LuxuryBackground from "./components/LuxuryBackground";
// import "./App.css";
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopbarArea scrolled={scrolled} />
      <Navbar scrolled={scrolled} />
      <main className="pt-[140px]">
        <RouterPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
