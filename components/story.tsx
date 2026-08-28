"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up once, when scrolled into view. */
function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(value);
          return;
        }

        const dur = 1300;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          // easeOutExpo
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="border-t border-ink-line pt-5">
      <div className="display text-5xl text-ember md:text-6xl">
        {n}
        {suffix}
      </div>
      <div className="mono mt-2 text-[0.6rem] text-cream-dim/70">{label}</div>
    </div>
  );
}

export default function Story() {
  return (
    <section id="story" data-chapter="Story" className="relative py-28 md:py-40">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* text column */}
          <div className="lg:col-span-6 lg:pt-10">
            <p className="eyebrow mb-6">01 — Story</p>
            <h2 className="display text-huge mb-10 text-cream">
              Born between
              <br />
              <span className="text-ember">breeze and rhythm</span>
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-cream-dim">
              <p>
                I was born in Cartagena de Indias, where the sea and the music
                live side by side. The guitar reached my hands when I was barely
                a child, and it has been how I understand the world ever since.
              </p>
              <p>
                In time I found in flamenco a language that felt like my own,
                though I was born far from Andalusia. I fused it with my
                Caribbean roots and found something new:{" "}
                <em className="text-cream not-italic">Nova Flamenco</em>. I
                travelled, and played on streets, in restaurants and on intimate
                stages. Every place, a story.
              </p>
              <p>
                I am not trying to be a virtuoso. I want someone to close their
                eyes as they listen, and feel alive.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <Stat value={10} suffix="+" label="Years playing" />
              <Stat value={3} label="Records" />
              <Stat value={2} label="Continents" />
            </div>
          </div>

          {/* editorial image column — deliberately uneven, not a uniform grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <figure className="col-span-8 overflow-hidden">
                <img
                  src="/media/four-seasons.jpg"
                  alt="Kike Vivaldy playing in the Four Seasons lobby"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[0.15] transition-[filter,transform] duration-700 hover:scale-[1.02] hover:grayscale-0"
                />
                <figcaption className="mono mt-2 text-[0.55rem] text-cream-dim/50">
                  Four Seasons — lobby set
                </figcaption>
              </figure>

              <figure className="col-span-4 self-end overflow-hidden">
                <img
                  src="/media/portrait.jpg"
                  alt="Studio portrait of Kike Vivaldy"
                  loading="lazy"
                  className="aspect-square w-full object-cover object-top transition-[filter] duration-700"
                />
              </figure>

              <figure className="col-span-12 mt-2 overflow-hidden">
                <img
                  src="/media/festival.jpg"
                  alt="Kike Vivaldy playing at the Gypsy Jazz Festival"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <figcaption className="mono mt-2 text-[0.55rem] text-cream-dim/50">
                  Gypsy Jazz Festival
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
