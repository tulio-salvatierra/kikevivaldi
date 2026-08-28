"use client";

import { useEffect, useRef, useState } from "react";

const SOUNDS = [
  {
    name: "Flamenco",
    blurb:
      "The root. Compas, palmas and the Andalusian duende I adopted as a language of my own.",
  },
  {
    name: "Smooth Jazz",
    blurb:
      "The freedom. Open harmonies, improvisation and room to breathe.",
  },
  {
    name: "Electro Fusion",
    blurb: "The present. Electronic textures beneath nylon strings.",
  },
];

export default function Sound() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(0.999, Math.max(0, -rect.top / scrollable));
      setActive(Math.floor(p * SOUNDS.length));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="sound" data-chapter="Sound" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* pinned backdrop with slow drift */}
        <img
          src="/media/festival.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          style={{
            transform: `scale(${1.05 + active * 0.03})`,
            transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div className="absolute inset-0 bg-ink/70" />

        <div className="container relative">
          <p className="eyebrow mb-10">02 — The sound</p>

          <ul className="space-y-6 md:space-y-10">
            {SOUNDS.map((s, i) => {
              const on = i === active;
              const passed = i < active;
              return (
                <li
                  key={s.name}
                  className="transition-all duration-700"
                  style={{
                    opacity: on ? 1 : passed ? 0.28 : 0.14,
                    transform: `translateX(${on ? 0 : -10}px)`,
                  }}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="mono text-[0.6rem] text-ember">
                      0{i + 1}
                    </span>
                    <h3
                      className={`display text-huge transition-colors duration-700 ${
                        on ? "text-ember" : "text-cream"
                      }`}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <p
                    className="mt-3 max-w-lg pl-12 text-base font-light leading-relaxed text-cream-dim transition-all duration-700 md:text-lg"
                    style={{
                      opacity: on ? 1 : 0,
                      maxHeight: on ? "8rem" : "0",
                    }}
                  >
                    {s.blurb}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
