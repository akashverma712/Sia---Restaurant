import { useState } from "react";
import Loading from "./components/Loading";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import PoolSection from "./components/PoolSection";
import BanquetSection from "./components/BanquetSection";
import LocationSection from "./components/LocationSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="bg-black text-white relative">
      <Navbar />
      <Hero />
      <Features />
      <LocationSection />
      <PoolSection />
      <MenuSection />
      <BanquetSection />

      <Testimonial />
      <Footer />

      {!loadingDone && (
        <Loading onFinish={() => setLoadingDone(true)} />
      )}
    </div>
  );
}