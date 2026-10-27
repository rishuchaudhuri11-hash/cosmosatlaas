import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { objectsIn } from "@/lib/catalog";
import { Eyebrow, Shell } from "@/components/shell";
import { SpaceHost } from "@/components/space/space-host";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/black-holes")({
  head: () => pageHead("Black holes", "Stellar and supermassive black holes, with a simulation that is not the telescope image."),
  component: BlackHolePage,
});

function BlackHolePage() {
  const [mass, setMass] = useState(1);
  const list = objectsIn(["black-hole"]);
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Eyebrow>Black holes</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">A shadow is not a surface</h1>
        <p className="mt-4 max-w-2xl text-mist">
          The dark sphere is the teaching stand-in for a shadow. The orange ring is an example of hot plasma around a black hole that is being fed. Many black holes are not fed, and this is not the Event Horizon Telescope image of M87* or Sagittarius A*.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="stage border border-line">
            <SpaceHost kind="blackhole" label="Educational black-hole model with an illustrative disk." />
          </div>
          <div className="border border-line p-5">
            <label className="block text-sm text-mist">
              Mass relative to a 10-solar-mass stellar black hole: {mass}
              <input className="mt-3 w-full accent-solar" type="range" min={1} max={1000} value={mass} onChange={(event) => setMass(Number(event.target.value))} />
            </label>
            <p className="mt-4 text-sm text-ink">
              The Schwarzschild radius grows in proportion to mass. At {mass} times this reference, the horizon is {mass} times wider. Sagittarius A* is hundreds of thousands of times more massive than a typical stellar black hole; M87* is billions of solar masses. The picture does not resize in kilometers — the slider is the measurement.
            </p>
            <p className="mt-3 font-mono text-sm text-cyan">Rs = 2GM / c²</p>
            <p className="mt-3 text-sm text-mist">Hawking radiation is a theoretical prediction. For every black hole in this atlas it is far too faint to observe.</p>
          </div>
        </div>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {list.map((item) => (
            <li key={item.slug}>
              <Link to="/object/$slug" params={{ slug: item.slug }} className="block border border-line p-4 hover:border-solar">
                <span className="font-display text-2xl">{item.name}</span>
                <span className="mt-2 block text-sm text-mist">{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
