import { createFileRoute } from "@tanstack/react-router";
import { DocsIndex } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/documentaries/")({
  head: () => pageHead("Cosmic Journeys", "A text-first documentary you can step through."),
  component: DocsIndex,
});
