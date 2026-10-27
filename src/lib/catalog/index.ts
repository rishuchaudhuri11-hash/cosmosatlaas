import { archiveObjects } from "./objects-archive";
import { deepObjects } from "./objects-deep";
import { exoObjects } from "./objects-exo";
import { smallObjects } from "./objects-small";
import { solarObjects } from "./objects-solar";
import { starObjects } from "./objects-stars";
import { chapters, discoveries, lessons, missions, timeline } from "./learn";
import type { CategoryId, CelestialObject, SearchHit } from "./types";

export const objects: CelestialObject[] = [
  ...solarObjects,
  ...smallObjects,
  ...starObjects,
  ...deepObjects,
  ...exoObjects,
  ...archiveObjects,
];

const bySlug = new Map(objects.map((o) => [o.slug, o]));

export function getObject(slug: string) {
  return bySlug.get(slug);
}

export function relatedObjects(slug: string) {
  const o = bySlug.get(slug);
  if (!o) return [];
  return o.related.map((id) => bySlug.get(id)).filter((x): x is CelestialObject => Boolean(x));
}

export function objectsIn(categories: CategoryId[]) {
  const set = new Set(categories);
  return objects.filter((o) => set.has(o.category));
}

export interface PageMeta {
  path:
    | "/"
    | "/explore"
    | "/universe"
    | "/scale"
    | "/solar-system"
    | "/galaxies"
    | "/stars"
    | "/exoplanets"
    | "/black-holes"
    | "/nebulae"
    | "/moons"
    | "/small-bodies"
    | "/cosmic-structures"
    | "/extreme-objects"
    | "/physics"
    | "/astrobiology"
    | "/missions"
    | "/discoveries"
    | "/documentaries"
    | "/documentaries/journey-through-the-universe"
    | "/learn"
    | "/compare"
    | "/search"
    | "/sources"
    | "/about"
    | "/story"
    | "/catalog";
  title: string;
  description: string;
  nav?: string;
}

export const pages: PageMeta[] = [
  { path: "/", title: "COSMOS ATLAS", description: "Explore everything. Understand the universe." },
  {
    path: "/explore",
    title: "Observatory explorer",
    description: "A navigable cosmic map with honest labels for what is measured and what is schematic.",
    nav: "Explore",
  },
  {
    path: "/universe",
    title: "The universe",
    description: "Expansion, the Big Bang model, dark matter, dark energy, and what remains open.",
    nav: "Universe",
  },
  {
    path: "/scale",
    title: "Scale of the universe",
    description: "From particles to the observable universe, on a logarithmic ladder.",
  },
  {
    path: "/solar-system",
    title: "Solar System",
    description: "An interactive model of the Sun and planets, with distances labeled as compressed.",
    nav: "Solar System",
  },
  { path: "/galaxies", title: "Galaxies", description: "How galaxies are classified, and profiles of the ones this atlas includes.", nav: "Galaxies" },
  { path: "/stars", title: "Stars", description: "Stellar life cycles depend on mass. Follow a star from birth to remnant." },
  { path: "/exoplanets", title: "Exoplanets", description: "A curated set of worlds from the NASA Exoplanet Archive, with missing values left missing." },
  { path: "/black-holes", title: "Black holes", description: "Horizons, shadows, and an educational simulation that is not the telescope image.", nav: "Black Holes" },
  { path: "/nebulae", title: "Nebulae", description: "Clouds, remnants, and planetary nebulae — photographs are not complete 3D shapes." },
  { path: "/moons", title: "Moons", description: "Natural satellites, from the Moon to the ocean worlds." },
  { path: "/small-bodies", title: "Small bodies", description: "Asteroids, comets, and dwarf planets, including why orbits start uncertain." },
  { path: "/cosmic-structures", title: "Cosmic structures", description: "Groups, clusters, filaments, and voids." },
  { path: "/extreme-objects", title: "Extreme objects", description: "Quasars, pulsars, and the limits of matter." },
  { path: "/physics", title: "Physics", description: "Interactive lessons on gravity, light, expansion, and dark matter.", nav: "Learn" },
  { path: "/astrobiology", title: "Astrobiology", description: "Habitability, ocean worlds, and the difference between a clue and a discovery." },
  { path: "/missions", title: "Missions", description: "Completed, active, and in-development exploration — labeled separately." },
  { path: "/discoveries", title: "The Observatory", description: "Source-linked discoveries and a NASA Astronomy Picture of the Day feed when it is reachable.", nav: "Discoveries" },
  { path: "/documentaries", title: "Cosmic Journeys", description: "A text-first documentary you can step through." },
  {
    path: "/documentaries/journey-through-the-universe",
    title: "A journey through the universe",
    description: "Fourteen chapters from the first nuclei to the far future.",
  },
  { path: "/learn", title: "Learn", description: "Lessons that separate analogy, observation, and theory." },
  { path: "/compare", title: "Compare", description: "Side-by-side measurements on a logarithmic scale, with uncertainty labeled." },
  { path: "/search", title: "Search", description: "Search the atlas that is actually loaded, not a pretend full-sky catalog." },
  { path: "/sources", title: "Sources and method", description: "How facts are chosen, labeled, and left blank." },
  { path: "/about", title: "About", description: "What Cosmos Atlas is for, and what a single website cannot contain." },
  {
    path: "/story",
    title: "How everything came to be",
    description: "Stage by stage from the first nuclei to life, the present, the future, and the physics underneath.",
    nav: "The story",
  },
  {
    path: "/catalog",
    title: "Catalog",
    description: "Every profile loaded in this atlas, filtered by category.",
    nav: "Catalog",
  },
];

const pageHits: SearchHit[] = [
  { kind: "page", title: "Scale of the universe", href: "/scale", category: "Tool", summary: "Logarithmic sizes from protons to the observable universe." },
  { kind: "page", title: "Compare the cosmos", href: "/compare", category: "Tool", summary: "Compare two catalogued worlds or stars." },
  { kind: "page", title: "Cosmic timeline", href: "/universe", category: "Cosmology", summary: "From the first minutes to modern astronomy." },
  { kind: "page", title: "Kuiper Belt and Oort Cloud", href: "/small-bodies", category: "Solar System", summary: "Dwarf planets, comets, and the caveats around the Oort cloud." },
  { kind: "page", title: "How do black holes work?", href: "/black-holes", category: "Lesson", summary: "Horizons, accretion, lensing, and what has actually been observed." },
  { kind: "page", title: "Nearest star system", href: "/object/proxima-centauri", category: "Star", summary: "Proxima Centauri, 4.24 light-years away." },
];

export function searchCatalog(raw: string): SearchHit[] {
  const q = raw.trim().toLowerCase();
  if (q.length < 1) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const scored: { hit: SearchHit; score: number }[] = [];

  const consider = (hit: SearchHit, hay: string, boost = 0) => {
    const h = hay.toLowerCase();
    if (!terms.every((t) => h.includes(t) || hit.title.toLowerCase().includes(t))) return;
    let score = boost;
    if (hit.title.toLowerCase() === q) score += 100;
    else if (hit.title.toLowerCase().includes(q)) score += 40;
    if (h.includes(q)) score += 15;
    score += terms.length;
    scored.push({ hit, score });
  };

  for (const o of objects) {
    consider(
      {
        kind: "object",
        title: o.name,
        href: `/object/${o.slug}`,
        category: o.classification,
        summary: o.summary,
      },
      [o.name, o.slug, o.aliases.join(" "), o.catalogId ?? "", o.classification, o.summary, o.category, ...(o.keywords ?? [])].join(" "),
      5,
    );
  }
  for (const l of lessons) {
    consider(
      { kind: "lesson", title: l.title, href: `/physics#${l.slug}`, category: "Physics", summary: l.summary },
      [l.title, l.summary, l.minute, l.queries.join(" "), l.misconception].join(" "),
      3,
    );
  }
  for (const m of missions) {
    consider(
      { kind: "mission", title: m.name, href: "/missions", category: "Mission", summary: m.summary },
      [m.name, m.summary, m.status, m.years].join(" "),
    );
  }
  for (const c of chapters) {
    consider(
      {
        kind: "chapter",
        title: c.title,
        href: "/documentaries/journey-through-the-universe",
        category: "Documentary",
        summary: c.caption,
      },
      [c.title, c.narration, c.caption].join(" "),
    );
  }
  for (const p of pageHits) consider(p, [p.title, p.summary, p.category].join(" "));
  for (const p of pages) {
    if (p.path === "/search") continue;
    consider(
      { kind: "page", title: p.title, href: p.path, category: "Section", summary: p.description },
      [p.title, p.description, p.nav ?? ""].join(" "),
    );
  }

  scored.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const out: SearchHit[] = [];
  for (const row of scored) {
    const key = row.hit.href + row.hit.title;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row.hit);
    if (out.length >= 40) break;
  }
  return out;
}

export function suggest(raw: string) {
  return searchCatalog(raw).slice(0, 6);
}

export * from "./learn";
export * from "./types";
