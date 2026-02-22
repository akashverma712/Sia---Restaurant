import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import PoolSection from "./components/PoolSection";
import BanquetSection from "./components/BanquetSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <PoolSection />
      <MenuSection />
      <BanquetSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
