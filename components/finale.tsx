const LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/kike_vivaldy10/" },
  { label: "YouTube", href: "https://www.youtube.com/@kikevivaldy" },
  { label: "Spotify", href: "https://open.spotify.com/artist/0Zk9tqQkGFdxAJTvVKGvJj" },
  { label: "TikTok", href: "https://www.tiktok.com/@kikevivaldy" },
];

export default function Finale() {
  return (
    <section
      id="contact"
      data-chapter="Contact"
      className="relative overflow-hidden"
    >
      <div className="relative flex min-h-screen flex-col justify-end">
        <img
          src="/media/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

        <div className="container relative pb-14 pt-32">
          <p className="eyebrow mb-8">05 — Contact</p>

          <h2 className="display mb-10 text-colossal text-cream">
            Let&apos;s make
            <br />
            <span className="text-ember">something beautiful</span>
          </h2>

          <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="mailto:Kike.vivaldyguitar@gmail.com"
              className="mono border border-ember bg-ember px-10 py-4 text-center text-[0.7rem] text-ink transition-colors duration-300 hover:bg-transparent hover:text-ember"
            >
              Book a concert
            </a>
            <a
              href="mailto:Kike.vivaldyguitar@gmail.com"
              className="mono text-[0.7rem] text-cream-dim transition-colors hover:text-cream"
            >
              Kike.vivaldyguitar@gmail.com
            </a>
          </div>

          {/* footer */}
          <div className="rule mb-8" />
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="display text-3xl text-cream">KIKE VIVALDY</div>
              <p className="mono mt-3 text-[0.6rem] text-cream-dim/60">
                Nova Flamenco · Midland, TX
              </p>
            </div>

            <nav aria-label="Social media" className="flex flex-wrap gap-x-8 gap-y-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[0.65rem] text-cream-dim transition-colors duration-300 hover:text-ember"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <p className="mono mt-12 text-[0.55rem] text-cream-dim/35">
            © {new Date().getFullYear()} Kike Vivaldy — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
