import { useState } from "react";
import { astroTopics, discoveries, lessons, missions, physicsOrder, searchCatalog, timeline, universeTopics } from "@/lib/catalog";
import type { ApodResult } from "@/lib/catalog/apod";
import { Shell, Eyebrow } from "./shell";

export function UniversePage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Cosmology</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">The universe itself</h1>
        <p className="mt-4 max-w-2xl text-mist">
          A desk for the largest questions, with the model, the evidence, and the open problems kept in separate sentences.
        </p>
        <div className="mt-10 grid gap-4">
          {universeTopics.map((topic) => (
            <section key={topic.id} id={topic.id} className="border border-line p-5">
              <h2 className="font-display text-2xl">{topic.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{topic.body}</p>
            </section>
          ))}
        </div>
        <h2 className="mt-12 font-display text-3xl">Through time</h2>
        <ol className="mt-4 grid gap-3">
          {timeline.map((event) => (
            <li key={event.id} className="grid gap-2 border border-line p-4 md:grid-cols-[12rem_1fr]">
              <p className="font-mono text-xs text-amber">{event.when}<br />{event.certainty}</p>
              <div>
                <h3 className="font-display text-xl">{event.title}</h3>
                <p className="mt-2 text-sm text-mist">{event.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  );
}

export function PhysicsPage() {
  const [band, setBand] = useState(bands[2]);
  const [mass, setMass] = useState(1);
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Physics of the universe</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">How the machinery works</h1>
        <section className="mt-10 border border-line p-5" aria-label="Electromagnetic spectrum">
          <h2 className="font-display text-3xl">Spectrum</h2>
          <p className="mt-2 text-sm text-mist">Select a band. The colors of the buttons are labels, not the only way to tell the bands apart — the name is always written.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {bands.map((item) => (
              <button key={item.name} type="button" className={`h-11 border px-3 text-sm ${band.name === item.name ? "border-solar text-ink" : "border-line text-mist"}`} onClick={() => setBand(item)}>
                {item.name}
              </button>
            ))}
          </div>
          <p className="mt-4 font-mono text-sm text-cyan">{band.range}</p>
          <p className="mt-2 text-sm text-mist">{band.reveals}</p>
        </section>
        <section className="mt-6 border border-line p-5">
          <h2 className="font-display text-3xl">A star’s path depends on its mass</h2>
          <p className="mt-2 text-sm text-mist">Initial mass is the main fork. Composition and companions change the details. This is a simplified track, not a single lifecycle for every star.</p>
          <label className="mt-4 block text-sm text-mist">
            Starting mass: {mass.toFixed(2)} solar masses
            <input className="mt-2 w-full accent-solar" type="range" min={0.05} max={40} step={0.05} value={mass} onChange={(event) => setMass(Number(event.target.value))} />
          </label>
          <p className="mt-4 text-ink">{pathway(mass)}</p>
        </section>
        <div className="mt-10 grid gap-6">
          {physicsOrder.map((slug) => {
            const lesson = lessons.find((item) => item.slug === slug);
            if (!lesson) return null;
            return (
              <article key={slug} id={slug} className="border border-line p-5">
                <h2 className="font-display text-3xl">{lesson.title}</h2>
                <p className="mt-3 text-ink">{lesson.minute}</p>
                <p className="mt-3 border border-line bg-midnight p-3 text-sm text-amber">Analogy — {lesson.analogy}</p>
                <p className="mt-3 text-sm text-mist">{lesson.deep}</p>
                {lesson.equation && <p className="mt-3 font-mono text-sm text-cyan">{lesson.equation}</p>}
                <p className="mt-3 text-sm text-ink">Misconception: {lesson.misconception}</p>
                <ul className="mt-3 text-sm text-mist">
                  {lesson.sources.map((source) => (
                    <li key={source.url}>
                      <a className="text-cyan" href={source.url}>{source.org} — {source.title}</a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

const bands = [
  { name: "Radio", range: "meters to kilometers", reveals: "Cold hydrogen, pulsars, and the cosmic microwave background’s long-wavelength cousins. Radio dishes are not cameras." },
  { name: "Microwave", range: "millimeters", reveals: "The cosmic microwave background, and some of the coldest dust." },
  { name: "Infrared", range: "micrometers", reveals: "Warm dust and stars hidden inside clouds. Webb’s deep fields are infrared measurements." },
  { name: "Visible", range: "about 400–700 nanometers", reveals: "What human eyes and many cameras record. A thin slice of the information a star emits." },
  { name: "Ultraviolet", range: "shorter than violet", reveals: "Hot stars and some escaping planetary atmospheres. Much of it is blocked before it reaches the ground." },
  { name: "X-ray", range: "atomic scales", reveals: "Million-degree gas in clusters and near black holes. Chandra and XMM-Newton see this, not a visible photograph." },
  { name: "Gamma ray", range: "nuclear scales and beyond", reveals: "The most energetic explosions and some pulsar emission. Detections are counts and directions, rarely pictures." },
];

function pathway(mass: number) {
  if (mass < 0.08) return "Below about 0.08 solar masses, the core never sustains hydrogen fusion. The object is a brown dwarf or a planet, not a star. The boundary moves with composition.";
  if (mass < 0.5) return "A red dwarf. It will burn hydrogen slowly for longer than the present age of the universe. It may never become a red giant in the way the Sun will.";
  if (mass < 8) return "A Sun-like track: main sequence, red giant, planetary nebula, white dwarf. The Sun is on this track. The timing depends on mass.";
  if (mass < 20) return "A massive star. Expect a supergiant phase and a core-collapse supernova. The usual remnant in this rough window is a neutron star. Binaries and mass loss can change that.";
  return "A very massive star. Many models end in a black hole. Above roughly 30–40 solar masses, winds, pair instability, and companions scramble any single prediction. Do not treat the slider as a destiny.";
}

export function AstroPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Astrobiology</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Life, as far as the evidence goes</h1>
        <p className="mt-4 max-w-2xl text-mist">No result in this atlas claims that extraterrestrial life has been found.</p>
        <div className="mt-8 grid gap-4">
          {astroTopics.map((topic) => (
            <section key={topic.title} className="border border-line p-5">
              <h2 className="font-display text-2xl">{topic.title}</h2>
              <p className="mt-3 text-sm text-mist">{topic.body}</p>
            </section>
          ))}
        </div>
      </div>
    </Shell>
  );
}

export function MissionsPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Human exploration</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Missions, with their status written on them</h1>
        <ul className="mt-8 grid gap-4">
          {missions.map((mission) => (
            <li key={mission.slug} className="border border-line p-5">
              <p className="font-mono text-xs uppercase text-amber">{mission.status.replace("-", " ")} · {mission.years}</p>
              <h2 className="mt-2 font-display text-2xl">{mission.name}</h2>
              <p className="mt-2 text-sm text-mist">{mission.summary}</p>
              <a className="mt-3 inline-flex text-sm text-cyan" href={mission.sources[0]?.url}>{mission.sources[0]?.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

export function DiscoveriesPage({ apod }: { apod: ApodResult }) {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>The observatory</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">What has actually been released</h1>
        <section className="mt-8 border border-line">
          {apod.mode === "live" && apod.mediaType === "image" ? (
            <img src={apod.url} alt={apod.title} className="max-h-[32rem] w-full object-cover" />
          ) : (
            <div className="bg-midnight p-6">
              <p className="font-mono text-xs text-amber">{apod.mode === "live" ? "Live entry is not a still image" : "Curated fallback"}</p>
            </div>
          )}
          <div className="p-5">
            <p className="font-mono text-xs text-cyan">
              {apod.mode === "live" ? `Live from NASA Astronomy Picture of the Day · ${apod.date}` : apod.reason}
            </p>
            <h2 className="mt-2 font-display text-3xl">{apod.title}</h2>
            <p className="mt-3 text-sm text-mist">{apod.mode === "live" ? apod.explanation : apod.explanation}</p>
            <a className="mt-3 inline-flex h-11 items-center text-sm text-cyan" href={apod.mode === "live" ? apod.url : apod.href}>
              {apod.mode === "live" ? apod.credit : "NASA source"}
            </a>
          </div>
        </section>
        <h2 className="mt-12 font-display text-3xl">Selected releases</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {discoveries.map((item) => (
            <li key={item.id} className="border border-line p-5">
              <p className="font-mono text-xs text-amber">{item.date} · {item.org}</p>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-mist">{item.summary}</p>
              <a className="mt-3 inline-flex text-sm text-cyan" href={item.href}>Original source</a>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

export function AboutPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">A gateway, not a finished sky</h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-mist">
          <p>Cosmos Atlas is a cinematic encyclopedia: the story of how the universe, the Earth, and life came to be, the physics underneath, and a source-backed catalog of worlds. It is not a dump of every star. Gaia has measured on the order of a billion sources. Those belong in a survey archive. This site keeps the objects that teach a category, and it labels what is measured, modeled, or still unknown.</p>
          <p>The story runs stage by stage — first nuclei, first stars, the Moon-forming impact, oxygen, animals, humans, the present, and the future of the Sun and the expansion. Illustrations are marked as illustrations. 3D views are models.</p>
          <p>Profiles separate a one-minute account, a working explanation, and a deeper note. Bookmarks stay in this browser. There is no account.</p>
        </div>
      </div>
    </Shell>
  );
}

export function SourcesPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Method</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Sources and restraint</h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-mist">
          <p>Planet masses and sizes follow NASA’s planetary fact sheets. Exoplanet discovery methods and the refusal to invent radii come from the public NASA Exoplanet Archive style of record: if the archive would leave a cell blank, this atlas does too.</p>
          <p>Black-hole masses for Sagittarius A* and M87* are cited from stellar orbits and the Event Horizon Telescope papers, with the known tension between mass methods left visible. Cosmology figures lean on ESA’s Planck results and are rounded.</p>
          <p>The Astronomy Picture of the Day panel calls NASA’s public endpoint. If that call fails or is rate-limited, the page says so and shows a dated NASA release instead of a fabricated image.</p>
          <p>Status words — verified, approximate, model-dependent, hypothesis, theoretical — are part of the content model. They are not decoration.</p>
        </div>
      </div>
    </Shell>
  );
}

export function LearnPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Learn</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Lessons with the seams showing</h1>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <li key={lesson.slug}>
              <a href={`/physics#${lesson.slug}`} className="block h-full border border-line p-5 hover:border-solar">
                <h2 className="font-display text-2xl">{lesson.title}</h2>
                <p className="mt-2 text-sm text-mist">{lesson.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

export function DocsIndex() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Cosmic Journeys</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Documentary library</h1>
        <p className="mt-4 text-mist">One journey is ready. More chapters can be added as records without rebuilding the player.</p>
        <a href="/documentaries/journey-through-the-universe" className="mt-6 inline-flex h-12 items-center bg-solar px-5 text-sm text-void">
          A journey through the universe
        </a>
      </div>
    </Shell>
  );
}

export function SearchPage({ q }: { q: string }) {
  const hits = q ? searchCatalog(q) : [];
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Search</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Search the loaded atlas</h1>
        <form className="mt-6" action="/search">
          <label className="sr-only" htmlFor="q">Query</label>
          <input id="q" name="q" defaultValue={q} className="h-12 w-full border border-line bg-void px-3" />
        </form>
        {q && hits.length === 0 && <p className="mt-6 text-mist">Nothing in this release matches “{q}”. Try Mars, Kepler-452b, or redshift.</p>}
        <ul className="mt-6 grid gap-3">
          {hits.map((hit) => (
            <li key={hit.href + hit.title}>
              <a href={hit.href} className="block border border-line p-4 hover:border-solar">
                <span className="font-mono text-xs uppercase text-cyan">{hit.kind} · {hit.category}</span>
                <span className="mt-1 block font-display text-2xl">{hit.title}</span>
                <span className="mt-2 block text-sm text-mist">{hit.summary}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
