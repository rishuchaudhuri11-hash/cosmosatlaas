import { createFileRoute } from "@tanstack/react-router";
import { DiscoveriesPage } from "@/components/desk-pages";
import { fetchApod } from "@/lib/catalog/apod";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/discoveries")({
  loader: () => fetchApod(),
  head: () => pageHead("The Observatory", "A NASA Astronomy Picture of the Day when the feed answers, and source-linked discoveries."),
  component: function DiscoveriesRoute() {
    const apod = Route.useLoaderData();
    return <DiscoveriesPage apod={apod} />;
  },
});
