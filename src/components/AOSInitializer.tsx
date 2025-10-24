"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-out-cubic",
    });

    const handleRouteChange = () => AOS.refresh();
    window.addEventListener("scroll", handleRouteChange);
    return () => window.removeEventListener("scroll", handleRouteChange);
  }, []);

  return null;
}
