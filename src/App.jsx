import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopbarArea from "./components/TopbarArea";
import RouterPage from "./utils/RouterPage";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // same duration as your loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <TopbarArea scrolled={scrolled} />
      <Navbar scrolled={scrolled} />
      <main className="pt]">
        <RouterPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
