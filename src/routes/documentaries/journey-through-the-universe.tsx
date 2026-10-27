import { createFileRoute } from "@tanstack/react-router";
import { JourneyView } from "@/components/journey-view";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/documentaries/journey-through-the-universe")({
  head: () => pageHead("A journey through the universe", "Fourteen chapters from the first nuclei to the far future."),
  component: JourneyView,
});
