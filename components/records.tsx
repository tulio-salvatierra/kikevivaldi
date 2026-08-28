const RECORDS = [
  {
    title: "Smooth Gipsy Jazz",
    cover: "/sgj.webp",
    pitch: "Cuerdas de nylon sobre swing. El disco mas caluroso de los tres.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
  {
    title: "Nova Flamenco",
    cover: "/nf.webp",
    pitch: "El sonido que da nombre a todo. Flamenco que cruza el Atlantico.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
  {
    title: "The City of Suicide Birds",
    cover: "/csb.webp",
    pitch: "Lo mas electronico y oscuro. Texturas bajo la guitarra.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
];

export default function Records() {
  return (
    <section id="discos" data-chapter="Discos" className="relative py-28 md:py-40">
      <div className="container">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6">03 — Discografia</p>
            <h2 className="display text-huge text-cream">
              Tres discos,
              <br />
              <span className="text-ember">un mismo idioma</span>
            </h2>
          </div>
          <a
            href="https://open.spotify.com/artist/0Zk9tqQkGFdxAJTvVKGvJj"
            target="_blank"
            rel="noopener noreferrer"
            className="mono border-b border-ember pb-1 text-[0.65rem] text-ember transition-opacity hover:opacity-70"
          >
            Todo en Spotify →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {RECORDS.map((r, i) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={r.cover}
                  alt={`Portada de ${r.title}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="mono translate-y-3 text-[0.6rem] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Escuchar
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="mono text-[0.6rem] text-ember">
                  0{i + 1}
                </span>
                <h3 className="display text-2xl text-cream transition-colors duration-300 group-hover:text-ember">
                  {r.title}
                </h3>
              </div>
              <p className="mt-2 pl-8 text-sm font-light leading-relaxed text-cream-dim">
                {r.pitch}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
