import { useState } from "react";

export const SCALE_STEPS = [
  { id: "proton", title: "Proton", size: "about 0.84 femtometers", note: "A nucleon, not a little planet. The number is a charge radius from scattering experiments.", href: "/physics" },
  { id: "atom", title: "Atom", size: "about 0.1 nanometers", note: "Mostly empty space in the planetary picture, which is itself only a model. Electron clouds are not orbits.", href: "/physics" },
  { id: "molecule", title: "Small molecule", size: "nanometers", note: "Water is a few angstroms across. DNA’s width is about 2 nanometers. These are different objects, not one rung.", href: "/astrobiology" },
  { id: "human", title: "Human", size: "about 1.7 meters", note: "The scale we notice. It is a poor unit for stars and a generous one for cells.", href: "/object/earth" },
  { id: "earth", title: "Earth", size: "12,742 km across", note: "Mean diameter. Mountains and atmospheres are details at this zoom.", href: "/object/earth" },
  { id: "jupiter", title: "Jupiter", size: "139,822 km across", note: "About 11 Earth diameters. Still a point beside the Sun.", href: "/object/jupiter" },
  { id: "sun", title: "Sun", size: "1.39 million km across", note: "About 109 Earth diameters. A ordinary-sized star, not a large one.", href: "/object/sun" },
  { id: "system", title: "Solar System to Neptune", size: "about 30 AU", note: "Neptune’s orbit, not a hard edge. The Oort cloud, if the model is right, is vastly farther and is not a mapped shell.", href: "/solar-system" },
  { id: "proxima", title: "Proxima Centauri", size: "4.24 light-years", note: "The nearest star. Light takes longer to get there than any human lifetime so far.", href: "/object/proxima-centauri" },
  { id: "galaxy", title: "Milky Way disk", size: "on the order of 100,000 light-years", note: "A characteristic scale, not a wall. The dark halo is larger and has no crisp boundary.", href: "/object/milky-way" },
  { id: "local", title: "Local Group", size: "a few million light-years", note: "Andromeda, the Milky Way, and their dwarf companions. Membership is dynamical.", href: "/object/local-group" },
  { id: "virgo", title: "Virgo Cluster", size: "tens of millions of light-years away", note: "The nearest rich cluster. This step mixes a distance with a size on purpose and says so.", href: "/object/virgo-cluster" },
  { id: "web", title: "Filaments and voids", size: "hundreds of millions of light-years", note: "The cosmic web. Boundaries of superclusters depend on the definition.", href: "/cosmic-structures" },
  { id: "observable", title: "Observable universe", size: "about 93 billion light-years across", note: "The region from which light has reached us, enlarged by expansion. Not a measurement of everything that exists.", href: "/universe" },
];

export function ScaleExplorer({ compact = false }: { compact?: boolean }) {
  const [index, setIndex] = useState(compact ? 4 : 6);
  const step = SCALE_STEPS[index];
  const fraction = index / (SCALE_STEPS.length - 1);

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">Logarithmic ladder</p>
          <h3 className="mt-2 font-display text-3xl text-ink">{step.title}</h3>
        </div>
        <p className="font-mono text-sm text-amber">{step.size}</p>
      </div>
      <input
        className="mt-6 w-full accent-solar"
        type="range"
        min={0}
        max={SCALE_STEPS.length - 1}
        value={index}
        aria-valuetext={`${step.title}, ${step.size}`}
        aria-label="Scale step"
        onChange={(event) => setIndex(Number(event.target.value))}
      />
      <div className="mt-3 flex justify-between font-mono text-xs text-mist">
        <span>Smaller</span>
        <span>Larger</span>
      </div>
      <div className="mt-6 border border-line bg-graphite p-4">
        <div className="flex h-16 items-end">
          <div className="bg-solar" style={{ width: `${8 + fraction * 92}%`, height: `${12 + fraction * 88}%` }} />
        </div>
        <p className="mt-4 text-sm text-mist">{step.note}</p>
        <p className="mt-3 text-sm text-mist">
          The bar is a position on the ladder, not a picture drawn to scale. Consecutive steps often differ by factors of a thousand or more. A linear drawing cannot show them together.
        </p>
        {!compact && (
          <a href={step.href} className="mt-4 inline-flex h-11 items-center text-sm text-cyan">
            Open this scale
          </a>
        )}
      </div>
      {!compact && (
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {SCALE_STEPS.map((item, itemIndex) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setIndex(itemIndex)}
                className={`flex h-11 w-full items-center justify-between border px-3 text-left text-sm ${itemIndex === index ? "border-solar text-ink" : "border-line text-mist"}`}
              >
                <span>{item.title}</span>
                <span className="font-mono text-xs">{itemIndex + 1}</span>
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
