"use client";
import { useEffect } from "react";

export default function SiennaAccessibility() {
  useEffect(() => {
    console.log("🟦 Loading Sienna Accessibility Widget...");

    // מחיקה של כל גרסה ישנה כדי למנוע כפילויות
    const existing = document.querySelector(
      'script[src*="sienna-accessibility"]'
    );
    if (existing) {
      console.warn("⚠️ Widget already loaded, skipping reload.");
      return;
    }

    // יצירת תג סקריפט חדש
    const s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js";
    s.defer = true;
    s.onload = () => console.log("✅ Sienna widget loaded successfully!");
    s.onerror = (err) => console.error("❌ Failed to load Sienna widget:", err);

    document.body.appendChild(s);
  }, []);

  return null;
}
