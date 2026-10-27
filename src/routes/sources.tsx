import { createFileRoute } from "@tanstack/react-router";
import { SourcesPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sources")({
  head: () => pageHead("Sources", "How facts are chosen, labeled, and left blank."),
  component: SourcesPage,
});
