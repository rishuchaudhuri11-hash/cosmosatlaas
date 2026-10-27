import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cosmic-structures")({
  head: () => pageHead("Cosmic structures", "Groups, clusters, superclusters, walls, and voids."),
  component: function StructuresRoute() {
    return (
      <CategoryScreen
        eyebrow="Structures"
        title="The web, not a ladder"
        lede="Gravity gathered matter into filaments and knots and left voids. Supercluster boundaries depend on the definition. Many of them are not bound and will not stay together."
        categories={["cluster"]}
        notes={[
          { heading: "Where we are", body: "The Local Group sits on the edge of the Virgo Cluster’s influence, inside the Laniakea flow, which itself feels the Shapley Supercluster farther away. The Great Attractor is a region, not a monster black hole." },
          { heading: "Evidence for dark matter", body: "The Bullet Cluster shows hot gas and lensing mass in different places after a collision. That is hard to explain if the extra gravity is only a change to Newton’s law in a simple way. It still does not name the particle." },
          { heading: "Voids and walls", body: "The Boötes void is underdense, not empty. The Sloan Great Wall is a filament of clusters, not a solid. Lengths change with the algorithm that connects the dots." },
        ]}
      />
    );
  },
});
