/**
 * ⚠️ VERIFY BEFORE PRODUCTION
 * These dates were transcribed from the "Acoustic Nights" promo poster.
 * Confirm with Kike that the tour is real and current before this goes
 * live on kikevivaldy.com — publishing unconfirmed dates misleads fans.
 * Set SHOWS to [] to render the "no dates announced" state instead.
 */
const SHOWS = [
  { date: "JUN 06", city: "Miami", region: "Florida" },
  { date: "JUN 14", city: "Austin", region: "Texas" },
  { date: "JUN 20", city: "Las Vegas", region: "Nevada" },
  { date: "JUN 28", city: "Nashville", region: "Tennessee" },
  { date: "JUL 11", city: "Chicago", region: "Illinois" },
  { date: "JUL 19", city: "Los Angeles", region: "California" },
  { date: "AUG 01", city: "New York City", region: "New York" },
  { date: "AUG 16", city: "Phoenix", region: "Arizona" },
  { date: "SEP 05", city: "Orlando", region: "Florida" },
  { date: "SEP 20", city: "Denver", region: "Colorado" },
];

const BOOKING = "mailto:Kike.vivaldyguitar@gmail.com";

export default function Shows() {
  return (
    <section id="shows" data-chapter="Shows" className="relative py-28 md:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">04 — En vivo</p>
            <h2 className="display text-huge mb-8 text-cream">
              Acoustic
              <br />
              <span className="text-ember">Nights</span>
            </h2>
            <p className="max-w-sm text-lg font-light leading-relaxed text-cream-dim">
              Una guitarra, una sala pequena y nada entre la musica y la gente.
            </p>

            <a
              href={BOOKING}
              className="mono mt-10 inline-block border border-ember px-8 py-3 text-[0.65rem] text-ember transition-colors duration-300 hover:bg-ember hover:text-ink"
            >
              Reservar una fecha
            </a>
          </div>

          <div className="lg:col-span-7">
            {SHOWS.length === 0 ? (
              <p className="mono text-[0.7rem] text-cream-dim/60">
                Proximas fechas por anunciar.
              </p>
            ) : (
              <ul>
                {SHOWS.map((s) => (
                  <li key={`${s.date}-${s.city}`}>
                    <a
                      href={BOOKING}
                      className="group flex items-baseline gap-6 border-t border-ink-line py-5 transition-colors duration-300 hover:border-ember/40 md:gap-10"
                    >
                      <span className="mono w-16 shrink-0 text-[0.65rem] text-ember">
                        {s.date}
                      </span>
                      <span className="display flex-1 text-2xl text-cream transition-colors duration-300 group-hover:text-ember md:text-3xl">
                        {s.city}
                      </span>
                      <span className="mono hidden text-[0.6rem] text-cream-dim/50 sm:block">
                        {s.region}
                      </span>
                      <span className="mono translate-x-[-6px] text-[0.7rem] text-ember opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  </li>
                ))}
                <li className="border-t border-ink-line" />
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
