"use client";

import { useEffect, useRef, useState } from "react";

const NAME = "VIVALDY";

// Matches Tailwind's `md`, so the behaviour below and the height classes on
// the section stay in agreement.
const WIDE = "(min-width: 768px)";

/**
 * Hero: the page's thesis.
 *
 * On desktop, scrolling scrubs the real performance footage frame by frame
 * rather than playing it — the visitor turns the clip like a film reel, and the
 * all-keyframe encode makes seeking instant.
 *
 * Mobile browsers refuse to drive a video that way: iOS will not decode or seek
 * a clip that has never played, and it drops seeks issued while another is in
 * flight. So phones get the honest version instead — the clip simply loops in a
 * single-screen hero, with the name shown outright rather than revealed by
 * scroll.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const paneRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [revealed, setRevealed] = useState(0);
  // null until mounted: the server cannot know the viewport, so behaviour is
  // decided after hydration while the layout itself stays pure CSS.
  const [wide, setWide] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(WIDE);
    const apply = () => setWide(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (wide === null) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mobile: loop the clip and show the name outright. No scrubbing at all.
    if (!wide) {
      setRevealed(NAME.length);
      video.loop = true;
      if (quiet) return; // poster only, nothing to play

      const play = () => {
        video.play().catch(() => {
          /* Low Power Mode; the gesture listeners below retry. */
        });
      };

      // Pause while offscreen so a looping clip is not draining the battery
      // through the rest of the page.
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? play() : video.pause()),
        { threshold: 0.01 },
      );
      io.observe(section);

      // Returning from another tab or app leaves the clip paused on iOS.
      const onVisibility = () => {
        if (document.hidden) video.pause();
        else play();
      };

      window.addEventListener("touchstart", play, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      play();

      return () => {
        io.disconnect();
        window.removeEventListener("touchstart", play);
        document.removeEventListener("visibilitychange", onVisibility);
        video.pause();
      };
    }

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      // Measure the sticky pane rather than innerHeight: on mobile the URL bar
      // collapsing changes innerHeight mid-scroll and skews the progress.
      const pane = paneRef.current?.offsetHeight || window.innerHeight;
      const scrollable = section.offsetHeight - pane;
      if (scrollable <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      targetRef.current = p;
      setRevealed(Math.floor(p * NAME.length * 1.35));
    };

    // Safari is reluctant to decode a video that has never played, so nudge
    // play/pause once to prime it before the first seek. Harmless elsewhere.
    let primed = false;
    const prime = () => {
      if (primed) return;
      primed = true;
      const p = video.play();
      const settle = () => {
        video.pause();
        onScroll();
      };
      if (p && typeof p.then === "function") {
        p.then(settle).catch(() => {
          // Autoplay refused; let the next real gesture try again.
          primed = false;
        });
      } else {
        settle();
      }
    };

    // A currentTime write issued while a seek is in flight can be dropped, so
    // only ever have one outstanding. The watchdog covers seeked never firing.
    let seeking = false;
    let seekAt = 0;
    const onSeeking = () => {
      seeking = true;
      seekAt = performance.now();
    };
    const onSeeked = () => {
      seeking = false;
    };

    const seekTo = (t: number) => {
      if (typeof video.fastSeek === "function") {
        // The clip is all-keyframe, so fastSeek lands exactly and costs less.
        video.fastSeek(t);
      } else {
        video.currentTime = t;
      }
    };

    // Ease toward the target so the scrub glides instead of snapping.
    const tick = () => {
      const duration = video.duration;
      if (duration && !Number.isNaN(duration) && video.readyState >= 1) {
        // Advance every frame even while a seek is pending, so the eased
        // position never falls behind the scroll.
        currentRef.current += (targetRef.current - currentRef.current) * 0.12;
        const t = Math.min(currentRef.current * duration, duration - 0.05);
        const stalled = seeking && performance.now() - seekAt > 250;
        if ((!seeking || stalled) && Math.abs(video.currentTime - t) > 0.03) {
          seekTo(t);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("loadedmetadata", onScroll);
    // Reduced-motion users get no scrubbing and no priming: with the video
    // never played the poster stays up, which is the still frame we want.
    if (!quiet) {
      // touchstart/pointerdown are the gestures iOS accepts for playback.
      window.addEventListener("touchstart", prime, { passive: true });
      window.addEventListener("pointerdown", prime);
      prime();
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("touchstart", prime);
      window.removeEventListener("pointerdown", prime);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [wide]);

  // The tall scroll track exists only to drive the scrub, so phones get a
  // single screen instead of three of pinned, looping video.
  return (
    <section
      ref={sectionRef}
      id="home"
      data-chapter="Home"
      className="relative h-[100svh] md:h-[320vh]"
    >
      <div
        ref={paneRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden vignette md:h-screen"
      >
        {/* disableRemotePlayback keeps iOS from offering AirPlay on a
            decorative clip; x5-playsinline covers Android WeChat/QQ browsers
            that would otherwise force a fullscreen native player. */}
        <video
          ref={videoRef}
          src="/media/hero-scrub.mp4"
          poster="/media/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          disableRemotePlayback
          x5-playsinline=""
          controls={false}
          className="h-full w-full object-cover"
        />

        {/* scrim: keeps type legible and off his face */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />

        {/* copy locked lower-left, never centred over him */}
        <div className="absolute inset-x-0 bottom-0 p-6 pb-16 md:pb-20 lg:pl-44 lg:pr-16">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Colombian guitarist · Nova Flamenco</p>

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
              I don&apos;t play her — I listen to her speak. Flamenco, jazz and
              the Caribbean in a single guitar.
            </p>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 md:bottom-8 md:right-14">
          <span className="mono text-[0.6rem] text-cream-dim/70">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-ember to-transparent" />
        </div>
      </div>
    </section>
  );
}
