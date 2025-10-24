import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import "@/styles/globals.css";
import FinishingExpertise from "@/components/FinishingExpertise";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <FinishingExpertise />
    </main>
  );
}
