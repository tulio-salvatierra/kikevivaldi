"use client";

import { useState } from "react";
import { AudioProvider } from "./audio-provider";
import Loader from "./loader";
import SmoothScroll from "./smooth-scroll";
import { ChapterRail, FrameCounter, Cursor } from "./chrome";
import Hero from "./hero";
import Story from "./story";
import Sound from "./sound";
import Records from "./records";
import Shows from "./shows";
import Finale from "./finale";

export default function SiteShell() {
  const [entered, setEntered] = useState(false);

  return (
    <AudioProvider>
      {!entered && <Loader onDone={() => setEntered(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      >
        <SmoothScroll />
        <Cursor />
        <ChapterRail />
        <FrameCounter />

        <main>
          <Hero />
          <Story />
          <Sound />
          <Records />
          <Shows />
          <Finale />
        </main>
      </div>
    </AudioProvider>
  );
}
