"use client";

import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CliClientsAndCTA from "@/components/ClientsAndCTA";
import "@/styles/scroll-pinning.css";
import SpecialtiesSection from "../../components/SpecialtiesSection";
import Image from "next/image";
import { getImageUrl } from "@/utils/getImageUrl";
import { useEffect } from "react";
import { initFacebookPixel } from "@/lib/facebookPixel";

export default function HomePage() {
  useEffect(() => {
    initFacebookPixel("827790063665854");
  }, []);

  return (
    <div className="scroll-container">
      <div className="background-image">
        <Image
          src={getImageUrl("v1782287805/13_rqd2sm.jpg", 2400)}
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <section className="section">
        {/* Foreground content */}
        <Hero />

        <div className="hero-spacer" />
        <FeaturedProjects />
      </section>

      <div className="background-image">
        <Image
          src={getImageUrl("he6bh5.jpg")}
          alt="Background"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <section className="section">
        {/* Foreground content */}
        <SpecialtiesSection />
      </section>
      <div className="spacer" />

      <section className="section">
        <CliClientsAndCTA />
      </section>
    </div>
  );
}
