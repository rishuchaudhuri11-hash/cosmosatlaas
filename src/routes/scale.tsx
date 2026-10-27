import { createFileRoute } from "@tanstack/react-router";
import { ScaleExplorer } from "@/components/scale-explorer";
import { Eyebrow, Shell } from "@/components/shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/scale")({
  head: () => pageHead("Scale", "A logarithmic ladder from protons to the observable universe."),
  component: function ScalePage() {
    return (
      <Shell>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Eyebrow>From the invisible to the infinite</Eyebrow>
          <h1 className="mt-3 font-display text-5xl">Scale</h1>
          <p className="mt-4 max-w-2xl text-mist">
            Each stop is a different kind of thing. The control moves along powers of ten. It is not a camera flying through a geographically accurate map.
          </p>
          <div className="mt-8">
            <ScaleExplorer />
          </div>
        </div>
      </Shell>
    );
  },
});
