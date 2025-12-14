import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CliClientsAndCTA from "@/components/ClientsAndCTA";
import IsolaionComponent from "@/components/insulationCompponent";
import "@/styles/scroll-pinning.css";
import SpecialtiesSection from "../../components/SpecialtiesSection";

export default function HomePage() {
  return (
    <div className="scroll-pinning-container">
      <div className="scroll-pinning-section">
        <Hero />
      </div>
      <div className="scroll-pinning-section">
        <FeaturedProjects />
      </div>
      <div className="scroll-pinning-section">
        <IsolaionComponent />
      </div>
      <div className="scroll-pinning-section">
        <SpecialtiesSection />
      </div>
      <div className="scroll-pinning-section">
        <CliClientsAndCTA />
      </div>
    </div>
  );
}
