"use client";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "./audio-provider";

const CHAPTERS = [
  { id: "inicio", label: "Inicio" },
  { id: "historia", label: "Historia" },
  { id: "sonido", label: "Sonido" },
  { id: "discos", label: "Discos" },
  { id: "shows", label: "Shows" },
  { id: "contacto", label: "Contacto" },
];

/** Left-edge chapter rail — doubles as the site's only nav. */
export function ChapterRail() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Secciones"
      className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 pl-5 lg:flex"
    >
      {CHAPTERS.map((c, i) => {
        const on = active === c.id;
        return (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-500 ${
                on ? "w-8 bg-ember" : "w-3 bg-ink-line group-hover:w-5"
              }`}
            />
            <span
              className={`mono text-[0.58rem] transition-colors duration-300 ${
                on ? "text-ember" : "text-cream-dim/40 group-hover:text-cream-dim"
              }`}
            >
              {String(i + 1).padStart(2, "0")} {c.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

/** Corner readout — treats the page like a film print being spooled through. */
export function FrameCounter() {
  const [frame, setFrame] = useState(0);
  const { playing, toggle } = useAudio();

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setFrame(Math.round(p * 1440));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-4">
      <span className="mono text-[0.58rem] text-cream-dim/50">
        {String(frame).padStart(4, "0")} / 1440
      </span>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Silenciar musica" : "Reproducir musica"}
        className="flex items-end gap-[2px] transition-opacity hover:opacity-70"
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="w-[2px] bg-ember transition-all duration-300"
            style={{
              height: playing ? `${5 + ((i * 7) % 11)}px` : "3px",
              opacity: playing ? 1 : 0.35,
              animation: playing
                ? `pulse-bar 900ms ease-in-out ${i * 120}ms infinite alternate`
                : "none",
            }}
          />
        ))}
      </button>
      <style jsx global>{`
        @keyframes pulse-bar {
          from {
            transform: scaleY(0.45);
          }
          to {
            transform: scaleY(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes pulse-bar {
            from,
            to {
              transform: scaleY(1);
            }
          }
        }
      `}</style>
    </div>
  );
}

/** Custom cursor — desktop pointer devices only. */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("cursor-host");

    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 2}px, ${
          e.clientY - 2
        }px, 0)`;
      }
      const loop = () => {
        rx += (e.clientX - rx) * 0.16;
        ry += (e.clientY - ry) * 0.16;
        if (ring.current) {
          ring.current.style.transform = `translate3d(${rx - 16}px, ${
            ry - 16
          }px, 0)`;
        }
        raf = requestAnimationFrame(loop);
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    const grow = () => ring.current?.classList.add("scale-150", "bg-ember/10");
    const shrink = () =>
      ring.current?.classList.remove("scale-150", "bg-ember/10");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-host");
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-1 w-1 rounded-full bg-ember lg:block"
      />
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 rounded-full border border-ember/50 transition-transform duration-200 lg:block"
      />
    </>
  );
}
