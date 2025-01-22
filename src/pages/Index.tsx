import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Creative Developer & Designer";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;