import AboutSection from "./components/about/about-section";
import Cta from "./components/cta/cta";
import HeroSection from "./components/hero/hero-section";
import PropertySection from "./components/property/property-section";
import ReviewSection from "./components/review/review-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertySection />
      <AboutSection />
      <ReviewSection />
      <Cta />
    </main>
  );
}
