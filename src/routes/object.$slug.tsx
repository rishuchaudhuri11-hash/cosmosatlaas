import { createFileRoute } from "@tanstack/react-router";
import { ObjectProfile } from "@/components/object-profile";
import { Shell } from "@/components/shell";
import { getObject } from "@/lib/catalog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/object/$slug")({
  head: ({ params }) => {
    const object = getObject(params.slug);
    return pageHead(object?.name ?? "Not in this atlas", object?.summary ?? "This name is not in the loaded catalog.");
  },
  component: ObjectRoute,
});

function ObjectRoute() {
  const { slug } = Route.useParams();
  const object = getObject(slug);
  if (!object) {
    return (
      <Shell>
        <div className="mx-auto max-w-xl px-4 py-24">
          <h1 className="font-display text-4xl">Not in this atlas</h1>
          <p className="mt-3 text-mist">“{slug}” is not one of the loaded profiles. Surveys hold far more stars than a reading atlas can.</p>
          <a href="/catalog" className="mt-6 inline-flex h-12 items-center bg-solar px-5 text-sm text-void">
            Browse the catalog
          </a>
        </div>
      </Shell>
    );
  }
  return <ObjectProfile object={object} />;
}
