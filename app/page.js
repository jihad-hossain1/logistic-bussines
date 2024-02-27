import About from "@/src/components/About/About";
import News from "@/src/components/News/News";
import HomeSlider from "@/src/components/Slider/HomeSlider";
import ServiceSlider from "@/src/components/Slider/ServiceSlider";
import Team from "@/src/components/Team/Team";
import Features from "@/src/components/feature/Features";

const HomePage = () => {
  return (
    <section>
      <HomeSlider />
      <Features />
      <About />
      <ServiceSlider />
      <Team />
      <News />
    </section>
  );
};

export default HomePage;
