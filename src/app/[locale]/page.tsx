import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CliClientsAndCTA from "@/components/ClientsAndCTA";
import IsolaionComponent from "@/components/insulationCompponent";
import "@/styles/scroll-pinning.css";
import SpecialtiesSection from "../../components/SpecialtiesSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="scroll-container">
      {/* Background */}
      <div className="background-image">
        <Image
          src="https://res.cloudinary.com/ddncjeozb/image/upload/v1767936515/G35_eadrzq.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <section className="section">
        {/* Foreground content */}
        <Hero />
        <div className="spacer" />
        <FeaturedProjects />
      </section>

      <div className="background-image">
        <Image
          src="https://res.cloudinary.com/ddncjeozb/image/upload/v1767867786/he6bh5.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <section className="section ">
        <IsolaionComponent />
        <div className="spacer" />

        {/* Foreground content */}
        <SpecialtiesSection />
      </section>

      <section className="section">
        <CliClientsAndCTA />
      </section>
    </div>
  );
}
