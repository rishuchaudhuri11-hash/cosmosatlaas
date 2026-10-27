import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About", "What Cosmos Atlas is for, and what no single website can contain."),
  component: AboutPage,
});
