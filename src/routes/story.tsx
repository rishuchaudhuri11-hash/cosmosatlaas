import { createFileRoute } from "@tanstack/react-router";
import { StoryPage } from "@/components/story-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/story")({
  head: () =>
    pageHead(
      "How everything came to be",
      "Stage by stage: the early universe, Earth, life, the present, the future, and the physics of gravity, light, quantum theory, and time.",
    ),
  component: StoryPage,
});
