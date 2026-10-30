"use client";

import { useEffect, useRef, useState } from "react";

type VisibleRange = {
  first: number;
  last: number;
};

function measureTrack(track: HTMLUListElement, total: number) {
  const item = track.firstElementChild;
  if (!item || total === 0 || track.clientWidth === 0) return null;

  const itemWidth = item.getBoundingClientRect().width;
  if (itemWidth === 0) return null;

  const computed = window.getComputedStyle(track);
  const gap = Number.parseFloat(computed.columnGap) || 0;
  const step = itemWidth + gap;
  const visible = Math.min(
    total,
    Math.max(1, Math.round((track.clientWidth + gap) / step)),
  );
  const maximumFirst = Math.max(0, total - visible);
  const direction = computed.direction === "rtl" ? -1 : 1;
  const offset = Math.max(
    0,
    Math.min(track.scrollWidth - track.clientWidth, direction * track.scrollLeft),
  );
  const first = Math.min(maximumFirst, Math.round(offset / step));

  return {
    first,
    last: Math.min(total - 1, first + visible - 1),
    maximumFirst,
    step,
    direction,
    offset,
  };
}

export function useProjectGallery(total: number, locale: string) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pendingIndex = useRef<number | null>(null);
  const [visibleRange, setVisibleRange] = useState<VisibleRange | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || total === 0) return;

    pendingIndex.current = null;
    let frame: number | null = null;
    let observedWidth = track.clientWidth;

    const update = () => {
      frame = null;
      const metrics = measureTrack(track, total);
      if (!metrics) return;

      if (
        pendingIndex.current !== null &&
        Math.abs(metrics.offset - pendingIndex.current * metrics.step) < 2
      ) {
        pendingIndex.current = null;
      }

      setVisibleRange((previous) =>
        previous?.first === metrics.first && previous.last === metrics.last
          ? previous
          : { first: metrics.first, last: metrics.last },
      );
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(() => {
      if (track.clientWidth !== observedWidth) {
        pendingIndex.current = null;
        observedWidth = track.clientWidth;
      }
      scheduleUpdate();
    });

    observer.observe(track);
    track.addEventListener("scroll", scheduleUpdate, { passive: true });

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
      pendingIndex.current = null;
    };
  }, [locale, total]);

  const move = (change: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const metrics = measureTrack(track, total);
    if (!metrics) return;

    const index = Math.max(
      0,
      Math.min(metrics.maximumFirst, (pendingIndex.current ?? metrics.first) + change),
    );
    pendingIndex.current = index;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    track.scrollTo({
      left: metrics.direction * index * metrics.step,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  const clearPending = () => {
    pendingIndex.current = null;
  };

  return {
    trackRef,
    visibleRange,
    previousDisabled: visibleRange === null || visibleRange.first === 0,
    nextDisabled: total < 2 || visibleRange?.last === total - 1,
    previous: () => move(-1),
    next: () => move(1),
    clearPending,
  };
}
