import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getObject, relatedObjects, type CelestialObject } from "@/lib/catalog";
import { useAtlas } from "@/lib/atlas-store";
import { Shell } from "./shell";
import { SpaceHost } from "./space/space-host";

const STATUS = {
  verified: "Verified",
  approximate: "Approximate",
  model: "Model-dependent",
  hypothesis: "Hypothesis",
  theoretical: "Theoretical",
  candidate: "Not established",
} as const;

export function ObjectProfile({ object }: { object: CelestialObject }) {
  const [level, setLevel] = useState<"minute" | "understand" | "deep">("minute");
  const saved = useAtlas((state) => state.saved);
  const toggle = useAtlas((state) => state.toggle);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const related = relatedObjects(object.slug);
  const text = level === "minute" ? object.minute : level === "understand" ? object.understand : object.deep;

  return (
    <Shell>
      <article className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-mist">
          <Link to="/" className="hover:text-ink">Atlas</Link>
          <span aria-hidden="true"> / </span>
          <span>{object.classification}</span>
        </p>
        <header className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-amber">{object.category.replace("-", " ")}</p>
            <h1 className="mt-3 font-display text-5xl text-ink md:text-6xl">{object.name}</h1>
            {object.aliases.length > 0 && (
              <p className="mt-3 text-sm text-mist">Also called {object.aliases.join(", ")}</p>
            )}
            {object.catalogId && <p className="mt-1 font-mono text-xs text-cyan">{object.catalogId}</p>}
            <p className="mt-5 max-w-xl text-lg text-mist">{object.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="h-12 border border-line px-4 text-sm"
                onClick={() => {
                  setReady(true);
                  toggle(object.slug);
                }}
              >
                {ready && saved.includes(object.slug) ? "Saved in this browser" : "Save in this browser"}
              </button>
              <Link to="/compare" search={{ a: object.slug }} className="inline-flex h-12 items-center px-4 text-sm text-cyan">
                Compare
              </Link>
            </div>
          </div>
          <div className="border border-line bg-midnight">
            <div className="stage">
              <SpaceHost kind="body" visual={object.visual} label={object.visualKindLabel} />
            </div>
            <p className="border-t border-line px-4 py-3 text-sm text-mist">{object.visualKindLabel}</p>
          </div>
        </header>

        <section className="mt-10" aria-label="Key facts">
          <h2 className="font-display text-2xl">Key facts</h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {object.facts.map((item) => (
              <div key={item.label} className="border border-line bg-graphite p-4">
                <dt className="font-mono text-xs uppercase text-mist">{item.label}</dt>
                <dd className="mt-2 text-lg text-ink">{item.value}</dd>
                <dd className="mt-2 text-xs text-cyan">{STATUS[item.status]}{item.note ? ` — ${item.note}` : ""}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[16rem_1fr]">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Depth">
            {(
              [
                ["minute", "In a minute"],
                ["understand", "Understand it"],
                ["deep", "Science deep dive"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={level === id}
                className={`h-12 border px-3 text-left text-sm ${level === id ? "border-solar text-ink" : "border-line text-mist"}`}
                onClick={() => setLevel(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div role="tabpanel" className="border border-line p-5">
            <p className="text-base leading-relaxed text-ink">{text}</p>
          </div>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {object.discovery && (
            <section className="border border-line p-5">
              <h2 className="font-display text-2xl">How it was found</h2>
              <p className="mt-3 text-sm text-mist">{object.discovery}</p>
            </section>
          )}
          {object.structure && (
            <section className="border border-line p-5">
              <h2 className="font-display text-2xl">Inside</h2>
              <p className="mt-3 text-sm text-mist">{object.structure}</p>
            </section>
          )}
        </div>
        {object.scale && (
          <section className="mt-6 border border-line p-5">
            <h2 className="font-display text-2xl">Scale</h2>
            <p className="mt-3 text-sm text-mist">{object.scale}</p>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl">Related</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to="/object/$slug" params={{ slug: item.slug }} className="block border border-line p-4 hover:border-solar">
                    <span className="font-mono text-xs text-cyan">{item.category}</span>
                    <span className="mt-1 block text-lg">{item.name}</span>
                    <span className="mt-2 block text-sm text-mist">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-display text-2xl">Evidence and sources</h2>
          <ul className="mt-4 grid gap-3">
            {object.sources.map((source) => (
              <li key={source.url} className="border border-line p-4">
                <p className="text-sm text-amber">{source.org}{source.year ? ` · ${source.year}` : ""}</p>
                <a className="mt-1 block text-ink underline decoration-line underline-offset-4" href={source.url}>
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LearningResource",
              name: object.name,
              description: object.summary,
              isAccessibleForFree: true,
              learningResourceType: "Encyclopedia entry",
            }),
          }}
        />
      </article>
    </Shell>
  );
}

export function missingObject(slug: string) {
  return !getObject(slug);
}
