"use client";
import { useEffect } from "react";

export default function SiennaAccessibility() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="sienna-accessibility"]'
    );
    if (existing) {
      return;
    }

    const s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js";
    s.defer = true;

    document.body.appendChild(s);
  }, []);

  return null;
}
