import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/stars")({
  head: () => pageHead("Stars", "Stellar evolution depends on mass. Red dwarfs, suns, supergiants, and remnants."),
  component: StarsRoute,
});

function StarsRoute() {
  return (
    <>
      <CategoryScreen
        eyebrow="Stars"
        title="A lifecycle is not universal"
        lede="The Sun is a G dwarf. Most stars are smaller. A few are enormous and brief. The remnant — white dwarf, neutron star, or black hole — follows initial mass, with room for binaries to intervene."
        categories={["star"]}
        notes={[
          {
            heading: "Birth",
            body: "Stars form in molecular clouds. Orion is the nearest bright example. A collapsing core becomes a protostar, then a main-sequence star if it can fuse hydrogen.",
          },
          {
            heading: "Main sequence",
            body: "Hydrostatic equilibrium is the long balance between gravity and the pressure fed by fusion. The proton–proton chain powers the Sun. Hotter stars lean on the CNO cycle.",
          },
          {
            heading: "Death",
            body: "Low-mass stars shed their envelopes as planetary nebulae and leave white dwarfs. Massive stars can explode and leave neutron stars or black holes. The boundaries are approximate.",
          },
        ]}
      />
      <MassNote />
    </>
  );
}

function MassNote() {
  const [mass, setMass] = useState(1);
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <section className="border border-line p-5">
        <h2 className="font-display text-3xl">Choose a starting mass</h2>
        <label className="mt-4 block text-sm text-mist">
          {mass.toFixed(2)} solar masses
          <input className="mt-2 w-full accent-solar" type="range" min={0.05} max={40} step={0.05} value={mass} onChange={(event) => setMass(Number(event.target.value))} />
        </label>
        <p className="mt-4 text-sm text-ink">{track(mass)}</p>
        <a href="/physics#fusion" className="mt-3 inline-flex h-11 items-center text-sm text-cyan">Fusion lesson</a>
      </section>
    </div>
  );
}

function track(mass: number) {
  if (mass < 0.08) return "Not a star. Below about 0.08 solar masses, hydrogen fusion does not run. Brown dwarfs occupy the gap under that line.";
  if (mass < 0.5) return "Red dwarf. A long main sequence, possibly longer than the age of the universe. Not the Sun’s red-giant script.";
  if (mass < 8) return "Sun-like. Main sequence, red giant, planetary nebula, white dwarf. Timing changes steeply with mass.";
  if (mass < 20) return "Massive. A short life, a supergiant phase, then usually a core-collapse supernova and a neutron star. Companions can rewrite this.";
  return "Very massive. A black hole is a common model outcome, but winds and pair instability mean the slider is not a promise.";
}
