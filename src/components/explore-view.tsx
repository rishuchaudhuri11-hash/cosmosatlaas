import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { objects } from "@/lib/catalog";
import { useAtlas } from "@/lib/atlas-store";
import { Shell, Eyebrow } from "./shell";
import { SpaceHost } from "./space/space-host";

type Mode = "distance" | "sketch" | "immersive";

const sketch = [
  { slug: "milky-way", place: "You are inside this disk" },
  { slug: "large-magellanic-cloud", place: "Satellite, schematic offset" },
  { slug: "andromeda-galaxy", place: "Nearest large galaxy" },
  { slug: "triangulum-galaxy", place: "Third large Local Group member" },
  { slug: "virgo-cluster", place: "Nearest rich cluster — much farther" },
];

export function ExploreView() {
  const [mode, setMode] = useState<Mode>("sketch");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("milky-way");
  const introSeen = useAtlas((s) => s.introSeen);
  const setIntroSeen = useAtlas((s) => s.setIntroSeen);
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    setShowIntro(!introSeen);
  }, [introSeen]);

  const distanceObjects = useMemo(
    () =>
      objects
        .filter((item) => item.metrics?.distanceLy && item.metrics.distanceLy > 0.01)
        .sort((a, b) => (a.metrics?.distanceLy ?? 0) - (b.metrics?.distanceLy ?? 0)),
    [],
  );
  const filtered = distanceObjects.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  const current = objects.find((item) => item.slug === selected);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Eyebrow>Observable universe explorer</Eyebrow>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">The observatory floor</h1>
        <p className="mt-4 max-w-2xl text-mist">
          Drag to look around. Scroll to zoom. Pick an object from the list. Reset with the mode buttons. This is not a claim that the universe has been individually mapped.
        </p>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Visualization mode">
          {(
            [
              ["distance", "Scientific distance ladder"],
              ["sketch", "Educational map"],
              ["immersive", "Immersive galaxy"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={mode === id}
              className={`h-11 border px-3 text-sm ${mode === id ? "border-solar text-ink" : "border-line text-mist"}`}
              onClick={() => setMode(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {showIntro && (
          <div className="mt-4 border border-amber bg-midnight p-4" role="note">
            <p className="text-sm text-ink">First visit: the sketch is a teaching diagram. Distances in the ladder are real catalog values plotted on a log axis, without sky coordinates. The galaxy you can spin is a schematic.</p>
            <button
              type="button"
              className="mt-3 h-11 border border-line px-3 text-sm"
              onClick={() => {
                setIntroSeen(true);
                setShowIntro(false);
              }}
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_20rem]">
          <div className="border border-line bg-void">
            {mode === "distance" ? (
              <DistanceLadder
                items={filtered}
                selected={selected}
                onSelect={setSelected}
              />
            ) : (
              <div className="stage">
                <SpaceHost
                  kind={mode === "immersive" ? "galaxy" : "web"}
                  label={mode === "immersive" ? "Schematic spiral galaxy." : "Schematic cosmic web. Positions are not catalog coordinates."}
                />
              </div>
            )}
            <p className="border-t border-line px-4 py-3 text-sm text-mist">
              {mode === "distance" && "Radial distance from Earth only. Right ascension and declination are not plotted. The axis is logarithmic."}
              {mode === "sketch" && "Educational cosmic map. Separations are compressed and rearranged so the Local Group and Virgo can be discussed together."}
              {mode === "immersive" && "Immersive exploration of a schematic galaxy, not a flight through measured star positions."}
            </p>
          </div>
          <aside className="border border-line p-4">
            <label className="block text-sm text-mist">
              Find in this view
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-2 h-11 w-full border border-line bg-void px-3 text-ink"
                placeholder="Andromeda, M87, Crab"
              />
            </label>
            <ul className="mt-4 max-h-64 space-y-2 overflow-auto">
              {(mode === "sketch" ? sketch.map((item) => objects.find((object) => object.slug === item.slug)).filter((x) => x !== undefined) : filtered).map((item) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    className={`w-full border px-3 py-2 text-left text-sm ${selected === item.slug ? "border-solar" : "border-line"}`}
                    onClick={() => setSelected(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            {current && (
              <div className="mt-4 border-t border-line pt-4">
                <h2 className="font-display text-2xl">{current.name}</h2>
                <p className="mt-1 font-mono text-xs text-cyan">{current.classification}</p>
                <p className="mt-3 text-sm text-mist">{current.summary}</p>
                <dl className="mt-3 grid gap-2 text-sm">
                  {current.facts.slice(0, 3).map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-mist">{fact.label}</dt>
                      <dd className="font-mono text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/object/$slug" params={{ slug: current.slug }} className="mt-4 inline-flex h-11 items-center text-sm text-cyan">
                  Explore this object
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </Shell>
  );
}

function DistanceLadder({
  items,
  selected,
  onSelect,
}: {
  items: { slug: string; name: string; metrics?: { distanceLy?: number } }[];
  selected: string;
  onSelect: (slug: string) => void;
}) {
  const min = Math.log10(4);
  const max = Math.log10(4.4e10);
  return (
    <div className="stage overflow-auto p-4">
      <svg viewBox="0 0 640 280" role="img" aria-label="Logarithmic distances from Earth" className="h-full w-full">
        <line x1="40" y1="150" x2="600" y2="150" stroke="#2a2e36" />
        {items.slice(0, 18).map((item) => {
          const ly = item.metrics?.distanceLy ?? 1;
          const x = 40 + ((Math.log10(ly) - min) / (max - min)) * 560;
          const active = item.slug === selected;
          return (
            <g key={item.slug} onClick={() => onSelect(item.slug)} className="cursor-pointer">
              <circle cx={x} cy={150} r={active ? 7 : 4} fill={active ? "#ff653e" : "#79d8ff"} />
              <text x={x} y={active ? 120 : 132} textAnchor="middle" fill="#f5f3ee" fontSize="11">
                {item.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
