import { Link } from "@tanstack/react-router";
import { chapters, discoveries, lessons, timeline } from "@/lib/catalog";
import { ButtonLink, Eyebrow, Footer, Header } from "./shell";
import { ScaleExplorer } from "./scale-explorer";
import { SpaceHost } from "./space/space-host";

const TILES = [
  ["/galaxies", "Galaxies", "Spirals, dwarfs, and the island we live in."],
  ["/stars", "Stars", "Mass decides the life, and the remnant."],
  ["/solar-system", "Planets", "Eight worlds, with distances told honestly."],
  ["/black-holes", "Black holes", "Shadows, jets, and what is only a model."],
  ["/nebulae", "Nebulae", "Nurseries, shells, and wreckage."],
  ["/exoplanets", "Exoplanets", "A curated sample. Unknowns stay unknown."],
] as const;

export function HomePage() {
  return (
    <div className="bg-void text-ink">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-void">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#ff653e_0%,#3a140c_28%,#050607_62%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void to-transparent" />
          <div className="absolute inset-0">
            <SpaceHost kind="hero" label="A dark plain and a glowing limb. The copy below does not depend on this view." />
          </div>
          <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 pb-16 pt-28">
            <div className="hero-copy max-w-3xl">
              <Eyebrow>A living atlas of the cosmos</Eyebrow>
              <h1 className="mt-4 font-display text-5xl text-ink sm:text-7xl">
                BEYOND EVERYTHING
                <br />
                YOU KNOW.
              </h1>
              <p className="mt-5 max-w-xl text-base text-ink sm:text-lg">
                Journey from the smallest building blocks of matter to the largest structures in existence. Explore celestial objects, witness cosmic phenomena, and uncover the story of a universe approximately 13.8 billion years old.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/story">How the world began</ButtonLink>
                <ButtonLink href="/explore" tone="ghost">Explore in 3D</ButtonLink>
              </div>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {[
                ["/story", "How Earth began"],
                ["/stars", "Stellar evolution"],
                ["/black-holes", "Event horizons"],
                ["/catalog", "Full catalog"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="inline-flex h-11 items-center border border-line bg-void/70 px-3 font-mono text-xs uppercase tracking-wider text-amber">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-mist">Scroll</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <Eyebrow>From the invisible to the infinite</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">The scale of everything</h2>
          <p className="mt-4 max-w-2xl text-mist">These are levels of size, not a single family of objects. The ladder is logarithmic. Nothing here is a map.</p>
          <div className="mt-8">
            <ScaleExplorer compact />
          </div>
          <Link to="/scale" className="mt-6 inline-flex h-11 items-center text-sm text-cyan">Open the full scale explorer</Link>
        </section>

        <section className="border-y border-line bg-midnight">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
            <div className="stage border border-line">
              <SpaceHost kind="galaxy" label="A schematic spiral. It is not a photograph of the Milky Way from outside." />
            </div>
            <div className="flex flex-col justify-center">
              <Eyebrow>Enter the universe</Eyebrow>
              <h2 className="mt-3 font-display text-4xl">A map that knows what it is not</h2>
              <p className="mt-4 text-mist">
                The explorer can show a distance ladder, a teaching sketch of the Local Group, or an immersive galaxy. It will not pretend that every object in the sky has a measured seat in a 3D catalog.
              </p>
              <div className="mt-6">
                <ButtonLink href="/explore">Open the explorer</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <Eyebrow>Explore the celestial world</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">Choose a door</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map(([href, title, copy]) => (
              <li key={href}>
                <a href={href} className="flex h-full flex-col border border-line bg-graphite p-5 hover:border-solar">
                  <span className="font-display text-2xl">{title}</span>
                  <span className="mt-3 text-sm text-mist">{copy}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-midnight">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Eyebrow>Our cosmic address</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">Nested, not nested perfectly</h2>
            <ol className="mt-8 grid gap-3">
              {[
                ["Earth", "A rocky planet. The only confirmed biosphere.", "/object/earth"],
                ["Solar System", "Eight planets and a great many smaller bodies around one star.", "/solar-system"],
                ["Milky Way", "A barred spiral. The Sun is far from the center.", "/object/milky-way"],
                ["Local Group", "Andromeda, the Milky Way, and their dwarfs. Edges are dynamical.", "/object/local-group"],
                ["Virgo’s neighborhood", "The nearest rich cluster is farther out. We are not inside it.", "/object/virgo-cluster"],
              ].map(([title, copy, href], index) => (
                <li key={title}>
                  <a href={href} className="grid gap-2 border border-line p-4 sm:grid-cols-[4rem_1fr] hover:border-amber">
                    <span className="font-mono text-xs text-cyan">0{index + 1}</span>
                    <span>
                      <span className="block font-display text-2xl">{title}</span>
                      <span className="mt-1 block text-sm text-mist">{copy}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <Eyebrow>The universe through time</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">Not a single clock</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {timeline.slice(0, 4).map((event) => (
              <li key={event.id} className="border border-line p-5">
                <p className="font-mono text-xs text-amber">{event.when}</p>
                <h3 className="mt-2 font-display text-2xl">{event.title}</h3>
                <p className="mt-2 text-sm text-mist">{event.body}</p>
              </li>
            ))}
          </ol>
          <Link to="/universe" className="mt-6 inline-flex h-11 items-center text-sm text-cyan">Read the cosmology desk</Link>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Eyebrow>Cosmic Journeys</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">A documentary you can step through</h2>
            <p className="mt-4 max-w-2xl text-mist">Written narration is the default. Nothing important is locked behind sound that this release does not have.</p>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.slice(0, 6).map((chapter) => (
                <li key={chapter.id} className="border border-line p-4">
                  <p className="font-mono text-xs text-cyan">{chapter.kicker}</p>
                  <h3 className="mt-2 font-display text-xl">{chapter.title}</h3>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <ButtonLink href="/documentaries/journey-through-the-universe">Start the journey</ButtonLink>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <Eyebrow>Extreme objects</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">Where the rules get sharp</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["/object/sagittarius-a", "Sagittarius A*", "Four million suns, and a shadow imaged in 2022."],
              ["/object/crab-pulsar", "Crab Pulsar", "A city-sized star spinning thirty times a second."],
              ["/object/3c-273", "3C 273", "The quasar that stopped looking like a star."],
            ].map(([href, title, copy]) => (
              <li key={href}>
                <a href={href} className="block h-full border border-line p-5 hover:border-solar">
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-mist">{copy}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-graphite">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <Eyebrow>The observatory</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">Dated, linked, not invented</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {discoveries.slice(0, 2).map((item) => (
                <li key={item.id} className="border border-line bg-void p-5">
                  <p className="font-mono text-xs text-amber">{item.date} · {item.org}</p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist">{item.summary}</p>
                  <a className="mt-3 inline-flex h-11 items-center text-sm text-cyan" href={item.href}>Source</a>
                </li>
              ))}
            </ul>
            <Link to="/discoveries" className="mt-6 inline-flex h-11 items-center text-sm text-cyan">Enter the observatory</Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <Eyebrow>Learn the physics</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">Analogies are labeled as analogies</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {lessons.slice(0, 3).map((lesson) => (
              <li key={lesson.slug} className="border border-line p-5">
                <h3 className="font-display text-2xl">{lesson.title}</h3>
                <p className="mt-2 text-sm text-mist">{lesson.summary}</p>
                <a className="mt-3 inline-flex text-sm text-cyan" href={`/physics#${lesson.slug}`}>Open lesson</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-line bg-midnight">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
            <div>
              <Eyebrow>Compare</Eyebrow>
              <h2 className="mt-3 font-display text-4xl">Earth beside Mars. A star beside a star.</h2>
              <p className="mt-4 text-mist">Logarithmic bars, plain language, and a refusal to plot a blank as zero.</p>
              <div className="mt-6"><ButtonLink href="/compare">Open the bench</ButtonLink></div>
            </div>
            <div className="border border-line p-5">
              <p className="font-mono text-xs text-cyan">Your next discovery</p>
              <ul className="mt-4 grid gap-3">
                {[
                  ["/object/europa", "Europa", "An ocean inferred, not photographed."],
                  ["/object/andromeda-galaxy", "Andromeda", "The nearest large galaxy."],
                  ["/documentaries/journey-through-the-universe", "The long story", "Fourteen chapters, one scroll at a time."],
                ].map(([href, title, copy]) => (
                  <li key={href}>
                    <a href={href} className="block hover:text-amber">
                      <span className="font-display text-xl">{title}</span>
                      <span className="mt-1 block text-sm text-mist">{copy}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="max-w-3xl font-display text-4xl sm:text-6xl">The universe is larger than our questions.</h2>
          <p className="mt-5 max-w-xl text-mist">Every observation opens another door. Continue exploring the objects, forces, and mysteries that shape our cosmic story.</p>
          <div className="mt-8"><ButtonLink href="/explore">Continue your journey</ButtonLink></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
