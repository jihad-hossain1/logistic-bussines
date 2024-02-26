import About from "@/src/components/About/About";
import HomeSlider from "@/src/components/Slider/HomeSlider";
import ServiceSlider from "@/src/components/Slider/ServiceSlider";
import Features from "@/src/components/feature/Features";

const HomePage = () => {
  return (
    <>
      <HomeSlider />
      <Features />
      <About />
      <ServiceSlider />
    </>
  );
};

export default HomePage;
