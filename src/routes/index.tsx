import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "COSMOS ATLAS",
      "A cinematic encyclopedia of the universe, from particles to galaxies, with source-backed profiles and interactive 3D.",
    ),
  component: HomePage,
});
