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

/** Each panel is one "page" of the bio, paired with an image. */
const PAGES = [
  {
    kicker: "The origin",
    image: "/media/portrait.jpg",
    caption: "Nova Flamenco",
    fit: "object-top",
    body: [
      "Kike Vivaldy is the stage name of a Colombian guitarist based in Texas, whose musical expression is born from the meeting point of flamenco passion, jazz sensitivity, and the rich rhythms of Latin music.",
      "He comes from Cartagena de Indias — a city shaped by the Caribbean, by cultural diversity, and by a deep musical tradition. That blend of roots and influences runs through everything he plays.",
    ],
  },
  {
    kicker: "The style",
    image: "/media/festival.jpg",
    caption: "Gypsy Jazz Festival",
    fit: "object-center",
    body: [
      "His instrument is the guitar, but his vision reaches past traditional performance. The style he calls Nova Flamenco joins the strength and character of flamenco guitar with Latin Jazz, Smooth Jazz, blues, rock, and contemporary sound.",
      "Within that combination he has found his own voice: a guitar that can be passionate, romantic, elegant, intense, or deeply emotional.",
    ],
  },
  {
    kicker: "The intent",
    image: "/media/four-seasons.jpg",
    caption: "Four Seasons — lobby set",
    fit: "object-center",
    body: [
      "For Kike Vivaldy, the guitar is more than an instrument. It is a way of telling stories.",
      "His music looks for a direct connection with whoever is listening — to carry emotion without needing words, and to turn every melody into an experience.",
    ],
  },
  {
    kicker: "The bridge",
    image: "/media/band.jpg",
    caption: "Live set",
    fit: "object-center",
    body: [
      "He represents a generation of Latin American musicians who refuse to choose between their roots and their influences, and instead fold both into a single artistic identity.",
      "From Cartagena to Texas, his guitar is the bridge.",
    ],
    creed: ["Flamenco in the heart.", "Jazz in the soul.", "Latin in the blood."],
  },
];

export default function Story() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [paged, setPaged] = useState(false);

  // Paging is a large-screen affordance. On phones — and for anyone who asked
  // for reduced motion — the panels simply stack and read top to bottom.
  useEffect(() => {
    const decide = () => {
      const wide = window.matchMedia("(min-width: 1024px)").matches;
      const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPaged(wide && !quiet);
    };
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);

  useEffect(() => {
    if (!paged) return;
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(0.999, Math.max(0, -rect.top / scrollable));
      setActive(Math.floor(p * PAGES.length));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [paged]);

  return (
    <>
      <section
        id="story"
        data-chapter="Story"
        ref={ref}
        className={paged ? "relative h-[420vh]" : "relative py-28 md:py-32"}
      >
        <div
          className={
            paged
              ? "sticky top-0 flex h-screen items-center overflow-hidden"
              : ""
          }
        >
          <div className="container w-full">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              {/* copy column */}
              <div className="lg:col-span-6">
                <p className="eyebrow mb-6">01 — Story</p>
                <h2 className="display text-huge mb-12 text-cream">
                  Born between
                  <br />
                  <span className="text-ember">breeze and rhythm</span>
                </h2>

                {/* All pages stay in the DOM so the full bio is crawlable;
                    paging only changes what's visible. */}
                <div className={paged ? "relative min-h-[26rem]" : "space-y-16"}>
                  {PAGES.map((page, i) => {
                    const on = !paged || i === active;
                    return (
                      <article
                        key={page.kicker}
                        aria-hidden={paged && !on}
                        className={
                          paged
                            ? "absolute inset-0 transition-all duration-700 ease-out"
                            : ""
                        }
                        style={
                          paged
                            ? {
                                opacity: on ? 1 : 0,
                                transform: `translateY(${on ? 0 : 18}px)`,
                                pointerEvents: on ? "auto" : "none",
                              }
                            : undefined
                        }
                      >
                        <p className="mono mb-4 text-[0.6rem] text-ember">
                          {String(i + 1).padStart(2, "0")} · {page.kicker}
                        </p>
                        <div className="space-y-5 text-lg font-light leading-relaxed text-cream-dim">
                          {page.body.map((para) => (
                            <p key={para.slice(0, 24)}>{para}</p>
                          ))}
                        </div>
                        {page.creed && (
                          <p className="display mt-7 text-2xl leading-tight text-cream md:text-3xl">
                            {page.creed.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                            <span className="block text-ember">
                              Nova Flamenco.
                            </span>
                          </p>
                        )}
                      </article>
                    );
                  })}
                </div>

                {/* pager — only meaningful while pinned */}
                {paged && (
                  <div className="mt-10 flex items-center gap-3">
                    {PAGES.map((p, i) => (
                      <span
                        key={p.kicker}
                        className={`h-px transition-all duration-500 ${
                          i === active ? "w-10 bg-ember" : "w-5 bg-ink-line"
                        }`}
                      />
                    ))}
                    <span className="mono ml-2 text-[0.55rem] text-cream-dim/50">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(PAGES.length).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              {/* image column — cross-fades with the copy */}
              <div className="lg:col-span-6">
                <div
                  className={
                    paged
                      ? "relative aspect-[4/5] w-full overflow-hidden"
                      : "grid gap-4"
                  }
                >
                  {PAGES.map((page, i) => {
                    const on = !paged || i === active;
                    return (
                      <figure
                        key={page.image + i}
                        className={paged ? "absolute inset-0" : "overflow-hidden"}
                        style={
                          paged
                            ? {
                                opacity: on ? 1 : 0,
                                transition: "opacity 900ms ease-out",
                              }
                            : undefined
                        }
                      >
                        <img
                          src={page.image}
                          alt={page.caption}
                          loading={i === 0 ? "eager" : "lazy"}
                          className={`w-full object-cover ${page.fit} ${
                            paged ? "h-full" : "aspect-[4/5]"
                          }`}
                          style={
                            paged
                              ? {
                                  transform: `scale(${on ? 1.02 : 1.08})`,
                                  transition: "transform 1600ms cubic-bezier(0.16,1,0.3,1)",
                                }
                              : undefined
                          }
                        />
                        <figcaption className="mono absolute bottom-3 left-3 text-[0.55rem] text-cream/70">
                          {page.caption}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats land as their own beat once the pin releases */}
      <div className="container pb-24 pt-4 md:pb-32">
        <div className="grid max-w-2xl grid-cols-3 gap-6">
          <Stat value={10} suffix="+" label="Years playing" />
          <Stat value={3} label="Records" />
          <Stat value={2} label="Continents" />
        </div>
      </div>
    </>
  );
}
