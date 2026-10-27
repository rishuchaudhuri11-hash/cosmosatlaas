import { createFileRoute } from "@tanstack/react-router";
import { CatalogBrowser } from "@/components/catalog-browser";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/catalog")({
  head: () => pageHead("Catalog", "Every star, world, nebula, galaxy, and structure loaded in Cosmos Atlas."),
  component: CatalogBrowser,
});
