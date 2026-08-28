"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AudioState = {
  ready: boolean;
  playing: boolean;
  /** Called once from the loader's enter button — satisfies the browser gesture requirement. */
  start: () => void;
  toggle: () => void;
};

const Ctx = createContext<AudioState | null>(null);

export function useAudio() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAudio must be used inside <AudioProvider>");
  return ctx;
}

const TARGET_VOLUME = 0.55;
const FADE_MS = 1400;

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = new Audio("/audio/kike-theme.mp3");
    el.loop = true;
    el.preload = "auto";
    el.volume = 0;
    ref.current = el;

    const onReady = () => setReady(true);
    el.addEventListener("canplaythrough", onReady);
    // Don't let a missing/slow file block the loader forever.
    el.addEventListener("error", onReady);

    return () => {
      el.removeEventListener("canplaythrough", onReady);
      el.removeEventListener("error", onReady);
      el.pause();
      if (fadeRef.current) window.clearInterval(fadeRef.current);
    };
  }, []);

  const fadeTo = useCallback((target: number) => {
    const el = ref.current;
    if (!el) return;
    if (fadeRef.current) window.clearInterval(fadeRef.current);

    const steps = 28;
    const from = el.volume;
    const delta = (target - from) / steps;
    let i = 0;

    fadeRef.current = window.setInterval(() => {
      i += 1;
      const next = Math.min(1, Math.max(0, from + delta * i));
      el.volume = next;
      if (i >= steps) {
        if (fadeRef.current) window.clearInterval(fadeRef.current);
        if (target === 0) el.pause();
      }
    }, FADE_MS / steps);
  }, []);

  const start = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // Respect users who prefer reduced motion — don't force ambient audio on them.
    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (quiet) return;

    el.volume = 0;
    el.play()
      .then(() => {
        setPlaying(true);
        fadeTo(TARGET_VOLUME);
      })
      .catch(() => {
        // Autoplay still refused (rare after a gesture) — leave it to the toggle.
        setPlaying(false);
      });
  }, [fadeTo]);

  const toggle = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play()
        .then(() => {
          setPlaying(true);
          fadeTo(TARGET_VOLUME);
        })
        .catch(() => setPlaying(false));
    } else {
      setPlaying(false);
      fadeTo(0);
    }
  }, [fadeTo]);

  // Pause when the tab is hidden; resume if it was playing.
  useEffect(() => {
    const onVis = () => {
      const el = ref.current;
      if (!el || el.paused) return;
      if (document.hidden) el.pause();
      else el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const value = useMemo(
    () => ({ ready, playing, start, toggle }),
    [ready, playing, start, toggle]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
