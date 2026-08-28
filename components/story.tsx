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
    <section id="historia" data-chapter="Historia" className="relative py-28 md:py-40">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* text column */}
          <div className="lg:col-span-6 lg:pt-10">
            <p className="eyebrow mb-6">01 — Historia</p>
            <h2 className="display text-huge mb-10 text-cream">
              Nacido entre
              <br />
              <span className="text-ember">brisa y ritmo</span>
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-cream-dim">
              <p>
                Naci en Cartagena de Indias, donde el mar y la musica viven
                juntos. La guitarra llego a mis manos cuando era apenas un nino,
                y desde entonces se volvio mi forma de entender el mundo.
              </p>
              <p>
                Con el tiempo, encontre en el flamenco un idioma que sentia
                propio, aunque naci lejos de Andalucia. Lo fusione con mis raices
                del Caribe y descubri algo nuevo:{" "}
                <em className="text-cream not-italic">Nova Flamenco</em>. Viaje,
                toque en calles, restaurantes y escenarios intimos. Cada lugar,
                una historia.
              </p>
              <p>
                No busco ser virtuoso. Busco que alguien cierre los ojos al
                escucharme y se sienta vivo.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <Stat value={10} suffix="+" label="Anos tocando" />
              <Stat value={3} label="Discos" />
              <Stat value={2} label="Continentes" />
            </div>
          </div>

          {/* editorial image column — deliberately uneven, not a uniform grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <figure className="col-span-8 overflow-hidden">
                <img
                  src="/media/four-seasons.jpg"
                  alt="Kike Vivaldy tocando en el lobby del Four Seasons"
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
                  alt="Retrato de estudio de Kike Vivaldy"
                  loading="lazy"
                  className="aspect-square w-full object-cover object-top transition-[filter] duration-700"
                />
              </figure>

              <figure className="col-span-12 mt-2 overflow-hidden">
                <img
                  src="/media/festival.jpg"
                  alt="Kike Vivaldy tocando en el Gypsy Jazz Festival"
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
