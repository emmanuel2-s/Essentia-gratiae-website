import { useState, useEffect } from "react";
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
      <main>
        <RouterPage scrolled={scrolled} />
      </main>
    </>
  );
}

export default App;
