import { Link } from "@tanstack/react-router";
import { objectsIn, type CategoryId } from "@/lib/catalog";
import { Shell, Eyebrow } from "./shell";

export function CategoryScreen({
  eyebrow,
  title,
  lede,
  categories,
  notes,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  categories: CategoryId[];
  notes: { heading: string; body: string }[];
}) {
  const list = objectsIn(categories);
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl font-display text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-mist">{lede}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {notes.map((note) => (
              <section key={note.heading} className="border border-line p-5">
                <h2 className="font-display text-2xl">{note.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{note.body}</p>
              </section>
            ))}
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-cyan">{list.length} profiles in this release</p>
            <ul className="mt-3 grid gap-3">
              {list.map((item) => (
                <li key={item.slug}>
                  <Link to="/object/$slug" params={{ slug: item.slug }} className="block border border-line bg-midnight p-4 hover:border-solar">
                    <span className="font-display text-xl">{item.name}</span>
                    <span className="mt-1 block text-sm text-mist">{item.classification}</span>
                    <span className="mt-2 block text-sm text-mist">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {list.length === 0 && <p className="mt-4 text-sm text-mist">No profiles are loaded for this filter yet.</p>}
          </div>
        </div>
      </div>
    </Shell>
  );
}
