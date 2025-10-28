import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import "@/styles/globals.css";
import FinishingExpertise from "@/components/FinishingExpertise";
import Animated from "@/components/Animated";

export default function HomePage() {
  return (
    <main>
      <Animated animation="fade-up">
        <Hero />
      </Animated>
      <Animated animation="fade-up">
        <FeaturedProjects />
      </Animated>
      <Animated animation="fade-up">
        <FinishingExpertise />
      </Animated>
    </main>
  );
}
