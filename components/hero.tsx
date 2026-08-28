"use client";

import { useEffect, useRef, useState } from "react";

const NAME = "VIVALDY";

/**
 * Hero: the page's thesis.
 *
 * Scrolling scrubs the real performance footage frame by frame rather than
 * playing it — the visitor turns the clip like a film reel. The video is
 * encoded all-keyframe so seeking is instant.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      targetRef.current = p;
      setRevealed(Math.floor(p * NAME.length * 1.35));
    };

    // Ease toward the target so the scrub glides instead of snapping.
    const tick = () => {
      const duration = video.duration;
      if (duration && !Number.isNaN(duration)) {
        currentRef.current += (targetRef.current - currentRef.current) * 0.12;
        const t = currentRef.current * duration;
        if (Math.abs(video.currentTime - t) > 0.01) {
          video.currentTime = t;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (quiet) {
      // No scrubbing for reduced-motion users — just show a still frame.
      video.currentTime = 0.1;
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      data-chapter="Inicio"
      className="relative h-[320vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden vignette">
        <video
          ref={videoRef}
          src="/media/hero-scrub.mp4"
          poster="/media/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        {/* scrim: keeps type legible and off his face */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />

        {/* copy locked lower-left, never centred over him */}
        <div className="absolute inset-x-0 bottom-0 p-6 pb-16 md:pb-20 lg:pl-44 lg:pr-16">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Guitarrista colombiano · Nova Flamenco</p>

            <h1 className="display text-colossal text-cream">
              <span className="block">KIKE</span>
              <span className="block text-ember" aria-label={NAME}>
                {NAME.split("").map((ch, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="inline-block transition-all duration-500 ease-out"
                    style={{
                      opacity: i < revealed ? 1 : 0.3,
                      transform: `translateY(${i < revealed ? 0 : 8}px)`,
                      transitionDelay: `${i * 25}ms`,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-cream-dim md:text-xl">
              No la toco: la escucho hablar. Flamenco, jazz y Caribe en una
              sola guitarra.
            </p>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 md:bottom-8 md:right-14">
          <span className="mono text-[0.6rem] text-cream-dim/70">Desliza</span>
          <div className="h-8 w-px bg-gradient-to-b from-ember to-transparent" />
        </div>
      </div>
    </section>
  );
}
