import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { objects } from "@/lib/catalog";
import type { CategoryId } from "@/lib/catalog";
import { Eyebrow, Shell } from "./shell";

const FILTERS: { id: "all" | CategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "star", label: "Stars" },
  { id: "planet", label: "Planets" },
  { id: "dwarf-planet", label: "Dwarf planets" },
  { id: "moon", label: "Moons" },
  { id: "exoplanet", label: "Exoplanets" },
  { id: "galaxy", label: "Galaxies" },
  { id: "nebula", label: "Nebulae" },
  { id: "black-hole", label: "Black holes" },
  { id: "small-body", label: "Small bodies" },
  { id: "cluster", label: "Structures" },
  { id: "extreme", label: "Extreme" },
];

export function CatalogBrowser() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return objects
      .filter((item) => filter === "all" || item.category === filter)
      .filter((item) => {
        if (!query) return true;
        const hay = [item.name, item.classification, item.summary, item.aliases.join(" "), item.catalogId ?? ""].join(" ").toLowerCase();
        return hay.includes(query);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [filter, q]);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Eyebrow>Catalog</Eyebrow>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Everything this atlas holds</h1>
        <p className="mt-4 max-w-2xl text-mist">
          {objects.length} profiles are loaded. Gaia alone lists on the order of a billion stars, and the NASA Exoplanet Archive updates faster than a page can be rewritten. This is the named set you can open, compare, and read — not a claim that the sky has been finished.
        </p>
        <label className="mt-6 block text-sm text-mist">
          Filter by name
          <input value={q} onChange={(event) => setQ(event.target.value)} className="mt-2 h-12 w-full border border-line bg-void px-3 text-ink" placeholder="Vega, Titan, Laniakea" />
        </label>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((item) => (
            <button key={item.id} type="button" className={`h-11 shrink-0 border px-3 text-sm ${filter === item.id ? "border-solar text-ink" : "border-line text-mist"}`} onClick={() => setFilter(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs uppercase text-cyan">{list.length} shown</p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {list.map((item) => (
            <li key={item.slug}>
              <Link to="/object/$slug" params={{ slug: item.slug }} className="block h-full border border-line bg-midnight p-4 hover:border-solar">
                <span className="font-mono text-[10px] uppercase text-amber">{item.category.replace("-", " ")}</span>
                <span className="mt-1 block font-display text-2xl">{item.name}</span>
                <span className="mt-1 block text-sm text-mist">{item.classification}</span>
                <span className="mt-2 block text-sm text-mist">{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
