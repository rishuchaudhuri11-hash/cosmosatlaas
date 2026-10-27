import { createFileRoute } from "@tanstack/react-router";
import { LearnPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learn")({
  head: () => pageHead("Learn", "Lessons that keep analogy, observation, and theory in separate sentences."),
  component: LearnPage,
});
