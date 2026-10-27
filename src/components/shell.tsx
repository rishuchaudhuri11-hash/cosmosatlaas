import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useId, useState, type ReactNode } from "react";
import { suggest } from "@/lib/catalog";
import { cn } from "@/lib/cn";

const LINKS = [
  ["/story", "The story"],
  ["/explore", "Explore"],
  ["/catalog", "Catalog"],
  ["/solar-system", "Solar System"],
  ["/stars", "Stars"],
  ["/exoplanets", "Exoplanets"],
  ["/black-holes", "Black Holes"],
  ["/nebulae", "Nebulae"],
  ["/moons", "Moons"],
  ["/small-bodies", "Small bodies"],
  ["/galaxies", "Galaxies"],
  ["/cosmic-structures", "Structures"],
  ["/universe", "Universe"],
  ["/documentaries", "Journeys"],
  ["/compare", "Compare"],
  ["/physics", "Physics"],
  ["/discoveries", "Discoveries"],
  ["/sources", "Sources"],
  ["/about", "About"],
] as const;

const PRIMARY = LINKS.slice(0, 7);

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-void text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const listId = useId();
  const hits = query.trim().length > 0 ? suggest(query) : [];
  const path = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        const target = event.target as HTMLElement | null;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="shrink-0 font-display text-sm tracking-wide text-ink">
          COSMOS ATLAS
        </Link>
        <nav className="ml-2 hidden min-w-0 flex-1 items-center gap-4 overflow-x-auto lg:flex" aria-label="Primary">
          {PRIMARY.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={cn("shrink-0 text-sm", path === href ? "text-ink" : "text-mist hover:text-ink")}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ink"
            aria-label="Search the atlas"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" aria-hidden="true" />
          </button>
          <a href="/story" className="hidden h-11 items-center px-3 text-sm text-cyan sm:inline-flex">
            The story
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="max-h-[70vh] overflow-y-auto border-t border-line px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1">
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href} className={cn("flex h-11 items-center", path === href ? "text-solar" : "text-ink")} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {searchOpen && (
        <div className="border-t border-line bg-midnight px-4 py-4">
          <form
            className="mx-auto max-w-2xl"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.assign(`/search?q=${encodeURIComponent(query)}`);
            }}
          >
            <label className="sr-only" htmlFor={listId}>
              Search planets, stars, missions, and ideas
            </label>
            <input
              id={listId}
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Mars, Sagittarius A*, how do black holes work"
              className="h-12 w-full border border-line bg-void px-3 text-ink outline-none"
            />
          </form>
          {hits.length > 0 && (
            <ul className="mx-auto mt-3 max-w-2xl border border-line">
              {hits.map((hit) => (
                <li key={hit.href + hit.title} className="border-b border-line last:border-b-0">
                  <a href={hit.href} className="block px-3 py-3 hover:bg-graphite">
                    <span className="font-mono text-xs uppercase text-cyan">{hit.category}</span>
                    <span className="mt-1 block text-ink">{hit.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-midnight">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg">COSMOS ATLAS</p>
          <p className="mt-2 text-sm text-mist">Explore everything. Understand the universe.</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm md:col-span-3 md:grid-cols-3">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a className="inline-flex h-11 items-center text-mist hover:text-ink" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-mist">
          A curated, source-backed atlas. It is not a complete census of the universe. Measurements stay approximate when the underlying work says they are.
        </p>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-widest text-amber">{children}</p>;
}

export function ButtonLink({
  href,
  children,
  tone = "solid",
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "ghost";
}) {
  const className = cn(
    "inline-flex h-12 items-center justify-center px-5 text-sm",
    tone === "solid" ? "bg-solar text-void hover:bg-amber" : "border border-line text-ink hover:border-solar",
  );
  if (href.startsWith("/object/")) {
    const slug = href.replace("/object/", "");
    return (
      <Link to="/object/$slug" params={{ slug }} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
