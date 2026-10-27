import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getObject } from "@/lib/catalog";
import { Shell, Eyebrow } from "./shell";
import { SpaceHost } from "./space/space-host";

const ORDER = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

export function SolarPage() {
  const [mode, setMode] = useState<"orbit" | "size">("orbit");
  const [selected, setSelected] = useState("earth");
  const object = getObject(selected);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Eyebrow>Solar System</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Eight planets and the star they share</h1>
        <p className="mt-4 max-w-2xl text-mist">
          Orbit view compresses distances and enlarges planets so the outer worlds stay visible. Size view uses true relative radii among the planets. The Sun is omitted from that row because it is about ten times Jupiter’s radius and would hide the comparison. Neither view is a photograph.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" className={`h-11 border px-3 text-sm ${mode === "orbit" ? "border-solar" : "border-line text-mist"}`} onClick={() => setMode("orbit")}>
            Orbital overview
          </button>
          <button type="button" className={`h-11 border px-3 text-sm ${mode === "size" ? "border-solar" : "border-line text-mist"}`} onClick={() => setMode("size")}>
            Relative size
          </button>
          <button type="button" className="h-11 border border-line px-3 text-sm text-mist" onClick={() => setSelected("earth")}>
            Reset focus
          </button>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_18rem]">
          <div className="stage border border-line">
            <SpaceHost
              kind="solar"
              solarMode={mode}
              selected={selected}
              onSelect={setSelected}
              label="Interactive solar system. If 3D cannot start, use the list."
            />
          </div>
          <aside className="border border-line p-4">
            <ul className="grid gap-2">
              {ORDER.map((slug) => (
                <li key={slug}>
                  <button
                    type="button"
                    className={`h-11 w-full border px-3 text-left text-sm ${selected === slug ? "border-solar" : "border-line text-mist"}`}
                    onClick={() => setSelected(slug)}
                  >
                    {getObject(slug)?.name}
                  </button>
                </li>
              ))}
            </ul>
            {object && (
              <div className="mt-4">
                <h2 className="font-display text-2xl">{object.name}</h2>
                <p className="mt-2 text-sm text-mist">{object.minute}</p>
                <Link to="/object/$slug" params={{ slug: object.slug }} className="mt-3 inline-flex h-11 items-center text-sm text-cyan">
                  Open profile
                </Link>
              </div>
            )}
          </aside>
        </div>
        <p className="mt-6 text-sm text-mist">
          Moons, dwarf planets, asteroids, and comets live in their own wings: <a className="text-cyan" href="/moons">moons</a>, <a className="text-cyan" href="/small-bodies">small bodies</a>.
        </p>
      </div>
    </Shell>
  );
}
