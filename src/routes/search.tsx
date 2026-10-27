import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

type SearchParams = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => pageHead("Search", "Search the profiles, lessons, and sections that are actually loaded."),
  component: function SearchRoute() {
    const { q } = Route.useSearch();
    return <SearchPage q={q} />;
  },
});
