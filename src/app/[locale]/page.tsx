"use client";

import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CliClientsAndCTA from "@/components/ClientsAndCTA";
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
    <main className="tw:bg-[#faf8f4]">
      <Hero />
      <FeaturedProjects />
      <SpecialtiesSection />

      <div aria-hidden="true" className="tw:relative tw:h-56 tw:w-full tw:overflow-hidden tw:bg-[#ded9cf] tw:sm:h-72 tw:lg:h-80">
          <Image
            src={getImageUrl("he6bh5.jpg")}
            alt=""
            fill
            sizes="100vw"
            className="tw:object-cover tw:object-[center_60%]"
          />
      </div>

      <CliClientsAndCTA />
    </main>
  );
}
