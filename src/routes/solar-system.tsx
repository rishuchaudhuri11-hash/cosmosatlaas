import { createFileRoute } from "@tanstack/react-router";
import { SolarPage } from "@/components/solar-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solar-system")({
  head: () => pageHead("Solar System", "An interactive model with compressed orbits and a true relative-size comparison."),
  component: SolarPage,
});
