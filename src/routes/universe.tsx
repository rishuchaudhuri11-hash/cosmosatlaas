import { createFileRoute } from "@tanstack/react-router";
import { UniversePage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/universe")({
  head: () => pageHead("The universe", "Expansion, the microwave background, dark matter, dark energy, and open questions."),
  component: UniversePage,
});
