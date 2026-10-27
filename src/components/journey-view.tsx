import { useState } from "react";
import { chapters } from "@/lib/catalog";
import { Shell, Eyebrow } from "./shell";
import { SpaceHost } from "./space/space-host";
import type { VisualKind } from "@/lib/catalog";

export function JourneyView() {
  const [index, setIndex] = useState(0);
  const chapter = chapters[index];
  const visual = sceneFor(chapter.visual);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Eyebrow>Cosmic Journeys</Eyebrow>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">A journey through the universe</h1>
        <p className="mt-3 max-w-2xl text-sm text-mist">
          Chapter {index + 1} of {chapters.length}. Move with the buttons or the chapter list. Narration is text, so silence still teaches.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-[16rem_1fr]">
          <ol className="max-h-[32rem] space-y-2 overflow-auto">
            {chapters.map((item, itemIndex) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`w-full border px-3 py-2 text-left text-sm ${itemIndex === index ? "border-solar text-ink" : "border-line text-mist"}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span className="font-mono text-xs">{item.kicker}</span>
                  <span className="mt-1 block">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <article className="border border-line">
            <div className="stage">
              <SpaceHost kind={visual.kind} visual={visual.visual} label={chapter.caption} />
            </div>
            <div className="p-5">
              <p className="font-mono text-xs uppercase text-amber">{chapter.kicker}</p>
              <h2 className="mt-2 font-display text-3xl">{chapter.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink">{chapter.narration}</p>
              <p className="mt-4 border border-line bg-midnight p-3 text-sm text-cyan">{chapter.caption}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" className="h-12 border border-line px-4 text-sm" disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))}>
                  Previous
                </button>
                <button
                  type="button"
                  className="h-12 bg-solar px-4 text-sm text-void disabled:opacity-40"
                  disabled={index === chapters.length - 1}
                  onClick={() => setIndex((value) => Math.min(chapters.length - 1, value + 1))}
                >
                  Next chapter
                </button>
                <a href={chapter.href} className="inline-flex h-12 items-center px-4 text-sm text-cyan">
                  Go deeper
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Shell>
  );
}

function sceneFor(visual: (typeof chapters)[number]["visual"]): { kind: "body" | "web" | "galaxy" | "blackhole"; visual?: VisualKind } {
  if (visual === "web" || visual === "timeline") return { kind: visual === "web" ? "web" : "body", visual: "star" };
  if (visual === "earth-life") return { kind: "body", visual: "earth" };
  if (visual === "black-hole") return { kind: "blackhole" };
  if (visual === "galaxy-irregular") return { kind: "galaxy" };
  return { kind: "body", visual };
}
