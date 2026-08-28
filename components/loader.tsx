"use client";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "./audio-provider";

/**
 * Entry loader.
 *
 * Doubles as the user gesture browsers require before audio can play —
 * one click both dismisses the loader and starts the track, so we never
 * fight autoplay policy or ambush anyone with sound.
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const { start } = useAudio();
  const [progress, setProgress] = useState(0);
  const [armed, setArmed] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Lock scroll while the loader is up.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Preload the heavy hero assets, reporting real progress where we can.
  useEffect(() => {
    let cancelled = false;
    const assets = [
      "/media/hero-scrub.mp4",
      "/media/hero-poster.jpg",
      "/media/four-seasons.jpg",
      "/media/festival.jpg",
    ];
    let done = 0;

    const bump = () => {
      done += 1;
      if (!cancelled) setProgress(Math.round((done / assets.length) * 100));
    };

    assets.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const v = document.createElement("video");
        v.preload = "auto";
        v.muted = true;
        v.src = src;
        v.addEventListener("loadeddata", bump, { once: true });
        v.addEventListener("error", bump, { once: true });
      } else {
        const img = new Image();
        img.src = src;
        img.onload = bump;
        img.onerror = bump;
      }
    });

    // Never strand the visitor if something 404s or the network stalls.
    const failsafe = window.setTimeout(() => {
      if (!cancelled) setProgress(100);
    }, 6000);

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = window.setTimeout(() => setArmed(true), 350);
      return () => window.clearTimeout(t);
    }
  }, [progress]);

  const enter = () => {
    if (!armed || leaving) return;
    start();
    setLeaving(true);
    window.setTimeout(onDone, 900);
  };

  // Allow keyboard entry too.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && armed) {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed, leaving]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-900 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* six strings, filling left→right as assets land */}
      <div className="w-[min(78vw,30rem)]">
        <div className="mb-10 flex flex-col gap-[7px]">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const threshold = (i + 1) * 16;
            const lit = progress >= threshold;
            return (
              <div key={i} className="relative h-px w-full bg-ink-line">
                <div
                  className="absolute inset-y-0 left-0 bg-ember transition-[width] duration-500 ease-out"
                  style={{
                    width: lit ? "100%" : `${Math.min(100, (progress / threshold) * 100)}%`,
                    opacity: 0.35 + i * 0.13,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline justify-between">
          <span className="mono text-[0.65rem] text-cream-dim">
            {armed ? "Ready" : "Tuning"}
          </span>
          <span className="mono text-[0.65rem] text-cream-dim">
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={enter}
        disabled={!armed}
        aria-label="Enter the site and play music"
        className={`mt-14 border border-ember px-9 py-3 transition-all duration-500 ${
          armed
            ? "translate-y-0 opacity-100 hover:bg-ember hover:text-ink"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span className="mono text-[0.7rem] tracking-[0.25em] text-ember transition-colors hover:text-ink">
          Enter
        </span>
      </button>

      <p className="mono mt-5 text-[0.6rem] text-cream-dim/60">
        with sound
      </p>
    </div>
  );
}
