import { useMemo, useState } from "react";
import { ACTS, stages, type StoryAct } from "@/lib/catalog/story";
import { Eyebrow, Shell } from "./shell";
import { SpaceHost } from "./space/space-host";

const STATUS: Record<string, string> = {
  verified: "Measured",
  approximate: "Approximate",
  model: "Model",
  hypothesis: "Hypothesis",
  theoretical: "Theoretical",
  candidate: "Not established",
};

const LIGHT = [
  { id: "moon", label: "Earth to Moon", seconds: 1.3 },
  { id: "sun", label: "Sun to Earth", seconds: 499 },
  { id: "mars", label: "Earth to Mars (typical)", seconds: 750 },
  { id: "neptune", label: "Sun to Neptune", seconds: 1.5e4 },
  { id: "proxima", label: "Sun to Proxima Centauri", seconds: 4.24 * 365.25 * 24 * 3600 },
  { id: "galaxy", label: "Across the Milky Way disk", seconds: 1e5 * 365.25 * 24 * 3600 },
] as const;

function formatDuration(seconds: number) {
  if (seconds < 90) return `${seconds.toFixed(1)} seconds`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)} minutes`;
  if (seconds < 86400 * 2) return `${(seconds / 3600).toFixed(1)} hours`;
  if (seconds < 86400 * 800) return `${(seconds / 86400).toFixed(1)} days`;
  return `${(seconds / (86400 * 365.25)).toFixed(2)} years`;
}

export function StoryPage() {
  const [act, setAct] = useState<StoryAct>("cosmos");
  const inAct = stages.filter((stage) => stage.act === act);
  const [id, setId] = useState(stages[0].id);
  const stage = stages.find((item) => item.id === id) ?? stages[0];

  const pickAct = (next: StoryAct) => {
    setAct(next);
    const first = stages.find((item) => item.act === next);
    if (first) setId(first.id);
  };

  const index = stages.findIndex((item) => item.id === stage.id);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Eyebrow>Ye duniya kaise bani</Eyebrow>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-6xl">How everything came to be</h1>
        <p className="mt-4 max-w-2xl text-mist">
          From the first nuclei to this afternoon, then outward into the future and the laws underneath. Each stage says whether it is measured, a model, or still a hypothesis. Illustrations are teaching images. The 3D views are models, not telescope photographs.
        </p>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Acts">
          {ACTS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={act === item.id}
              className={`h-11 shrink-0 border px-3 text-sm ${act === item.id ? "border-solar text-ink" : "border-line text-mist"}`}
              onClick={() => pickAct(item.id)}
            >
              {item.label}
              <span className="ml-2 font-mono text-[10px] uppercase text-amber">{item.hindi}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[16rem_1fr]">
          <ol className="flex gap-2 overflow-x-auto lg:block lg:max-h-[40rem] lg:space-y-2 lg:overflow-y-auto">
            {inAct.map((item, itemIndex) => (
              <li key={item.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  className={`w-56 border px-3 py-3 text-left lg:w-full ${item.id === stage.id ? "border-solar" : "border-line"}`}
                  onClick={() => setId(item.id)}
                >
                  <span className="font-mono text-[10px] uppercase text-amber">
                    {itemIndex + 1} · {item.when}
                  </span>
                  <span className="mt-1 block text-sm text-ink">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <article className="border border-line bg-midnight">
            <figure className="relative">
              <img
                src={stage.image}
                alt={`${stage.title}, a teaching illustration rather than a photograph`}
                className="h-56 w-full object-cover sm:h-80"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-void/80 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-mist">
                Illustration · not a photograph · {STATUS[stage.certainty]}
              </figcaption>
            </figure>
            {stage.scene && (
              <div className="h-64 border-t border-line">
                <SpaceHost
                  kind={stage.scene}
                  visual={stage.visual}
                  label="A 3D teaching model for this stage. The writing does not depend on it."
                />
              </div>
            )}
            <div className="p-5">
              <p className="font-mono text-xs uppercase text-cyan">
                {stage.when} · {STATUS[stage.certainty]}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">{stage.title}</h2>
              <p className="mt-4 text-ink">{stage.lede}</p>
              {stage.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-4 grid gap-2">
                {stage.points.map((point) => (
                  <li key={point} className="border border-line px-3 py-2 text-sm text-ink">
                    {point}
                  </li>
                ))}
              </ul>
              <Bench stageId={stage.id} />
              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  className="h-11 flex-1 border border-line text-sm disabled:opacity-40"
                  disabled={index <= 0}
                  onClick={() => {
                    const prev = stages[index - 1];
                    setAct(prev.act);
                    setId(prev.id);
                  }}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="h-11 flex-1 bg-solar text-sm text-void disabled:opacity-40"
                  disabled={index >= stages.length - 1}
                  onClick={() => {
                    const next = stages[index + 1];
                    setAct(next.act);
                    setId(next.id);
                  }}
                >
                  Next stage
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Shell>
  );
}

function Bench({ stageId }: { stageId: string }) {
  if (stageId === "gravity-speed") return <LightBench />;
  if (stageId === "relativity-time") return <DilationBench />;
  if (stageId === "time-travel" || stageId === "dark-side") return <HorizonBench />;
  return null;
}

function LightBench() {
  const [id, setId] = useState<(typeof LIGHT)[number]["id"]>("sun");
  const row = LIGHT.find((item) => item.id === id) ?? LIGHT[1];
  return (
    <section className="mt-6 border border-line p-4" aria-label="Light travel time">
      <h3 className="font-display text-2xl">Light-travel bench</h3>
      <p className="mt-1 text-sm text-mist">How old the light is, or how long a signal takes at c. Distances are representative, not today’s exact spacecraft range.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {LIGHT.map((item) => (
          <button key={item.id} type="button" className={`h-11 border px-3 text-sm ${item.id === id ? "border-solar text-ink" : "border-line text-mist"}`} onClick={() => setId(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-lg text-cyan">{formatDuration(row.seconds)}</p>
    </section>
  );
}

function DilationBench() {
  const [percent, setPercent] = useState(50);
  const beta = percent / 100;
  const gamma = useMemo(() => 1 / Math.sqrt(1 - beta * beta), [beta]);
  const shipYears = 10;
  const home = shipYears * gamma;
  return (
    <section className="mt-6 border border-line p-4" aria-label="Time dilation">
      <h3 className="font-display text-2xl">Time-dilation bench</h3>
      <p className="mt-1 text-sm text-mist">
        Special relativity, constant speed, no turnaround included. A ship clock reads {shipYears} years. The stay-at-home clock reads more. This does not open a path into the past.
      </p>
      <label className="mt-3 block text-sm text-mist">
        Speed: {percent}% of light
        <input className="mt-2 w-full accent-solar" type="range" min={0} max={99} value={percent} onChange={(event) => setPercent(Number(event.target.value))} />
      </label>
      <p className="mt-3 font-mono text-sm text-cyan">γ = {gamma.toFixed(3)}</p>
      <p className="mt-2 text-sm text-ink">
        {shipYears} years on the ship ↔ {home.toFixed(2)} years at home.
      </p>
    </section>
  );
}

function HorizonBench() {
  const [mass, setMass] = useState(10);
  const rsKm = 2.95 * mass;
  return (
    <section className="mt-6 border border-line p-4" aria-label="Schwarzschild radius">
      <h3 className="font-display text-2xl">Horizon bench</h3>
      <p className="mt-1 text-sm text-mist">
        Schwarzschild radius for a non-spinning black hole: Rs = 2GM/c². About 2.95 km per solar mass. Spinning holes differ. This is not a time machine and not the telescope image.
      </p>
      <label className="mt-3 block text-sm text-mist">
        Mass: {mass} solar masses
        <input className="mt-2 w-full accent-solar" type="range" min={1} max={1000} value={mass} onChange={(event) => setMass(Number(event.target.value))} />
      </label>
      <p className="mt-3 font-mono text-lg text-cyan">{rsKm.toLocaleString()} km</p>
      <p className="mt-2 text-sm text-mist">Sagittarius A* is about 4 million solar masses, so its horizon is on the order of 12 million kilometers — still smaller than Mercury’s orbit.</p>
    </section>
  );
}
