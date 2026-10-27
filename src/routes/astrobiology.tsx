import { createFileRoute } from "@tanstack/react-router";
import { AstroPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/astrobiology")({
  head: () => pageHead("Astrobiology", "Habitability, ocean worlds, and the difference between a clue and a discovery of life."),
  component: AstroPage,
});
