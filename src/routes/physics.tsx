import { createFileRoute } from "@tanstack/react-router";
import { PhysicsPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/physics")({
  head: () => pageHead("Physics", "Gravity, light, orbits, expansion, dark matter, and dark energy — with the analogies labeled."),
  component: PhysicsPage,
});
