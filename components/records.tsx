const RECORDS = [
  {
    title: "Smooth Gipsy Jazz",
    cover: "/sgj.webp",
    pitch: "Nylon strings over swing. The warmest of the three.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
  {
    title: "Nova Flamenco",
    cover: "/nf.webp",
    pitch: "The sound that names everything else. Flamenco crossing the Atlantic.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
  {
    title: "The City of Suicide Birds",
    cover: "/csb.webp",
    pitch: "The darkest and most electronic. Textures beneath the guitar.",
    href: "https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k",
  },
];

export default function Records() {
  return (
    <section id="records" data-chapter="Records" className="relative py-28 md:py-40">
      <div className="container">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6">03 — Discography</p>
            <h2 className="display text-huge text-cream">
              Three records,
              <br />
              <span className="text-ember">one language</span>
            </h2>
          </div>
          <a
            href="https://open.spotify.com/artist/0Zk9tqQkGFdxAJTvVKGvJj"
            target="_blank"
            rel="noopener noreferrer"
            className="mono border-b border-ember pb-1 text-[0.65rem] text-ember transition-opacity hover:opacity-70"
          >
            Everything on Spotify →
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
                  alt={`${r.title} cover art`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-900 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="mono translate-y-3 text-[0.6rem] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Listen
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
