import { createFileRoute } from "@tanstack/react-router";
import { CompareLab } from "@/components/compare-lab";
import { pageHead } from "@/lib/seo";

type CompareSearch = { a?: string; b?: string };

export const Route = createFileRoute("/compare")({
  validateSearch: (search: Record<string, unknown>): CompareSearch => ({
    a: typeof search.a === "string" ? search.a : undefined,
    b: typeof search.b === "string" ? search.b : undefined,
  }),
  head: () => pageHead("Compare", "Side-by-side measurements on a logarithmic scale, with missing values left missing."),
  component: function CompareRoute() {
    const { a, b } = Route.useSearch();
    return <CompareLab initialA={a} initialB={b} />;
  },
});
