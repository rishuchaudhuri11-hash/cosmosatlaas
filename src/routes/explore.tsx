import { createFileRoute } from "@tanstack/react-router";
import { ExploreView } from "@/components/explore-view";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/explore")({
  head: () => pageHead("Explorer", "Navigate a labeled cosmic map: distances, a teaching sketch, and a schematic galaxy."),
  component: ExploreView,
});
