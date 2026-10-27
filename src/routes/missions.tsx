import { createFileRoute } from "@tanstack/react-router";
import { MissionsPage } from "@/components/desk-pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/missions")({
  head: () => pageHead("Missions", "Completed, active, and in-development exploration, labeled separately."),
  component: MissionsPage,
});
