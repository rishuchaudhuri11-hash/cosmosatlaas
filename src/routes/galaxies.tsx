import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/galaxies")({
  head: () => pageHead("Galaxies", "Spirals, ellipticals, dwarfs, and mergers — the island universes this atlas profiles."),
  component: function GalaxiesRoute() {
    return (
      <CategoryScreen
        eyebrow="Galaxies"
        title="Islands of stars"
        lede="A galaxy is a gravitationally bound system of stars, gas, dust, and dark matter. The Milky Way is one. There are more galaxies than the catalog can name. These are the ones that teach the types."
        categories={["galaxy"]}
        notes={[
          { heading: "Shapes", body: "Spirals have disks and arms. Bars are common, including in the Milky Way. Ellipticals are rounder and older. Irregulars are disturbed, often by a neighbor. The shape is a view plus a history, not a species in the biological sense." },
          { heading: "Arms", body: "Spiral arms are traffic jams more than fixed ribbons. Stars pass through them. Gas piles up and forms new stars, which is why the arms look blue and bright." },
          { heading: "Mergers", body: "Galaxies collide often on cosmic timescales. Stars rarely hit. Gas does. The Antennae, Centaurus A, and the future Milky Way–Andromeda encounter are the same subject at different times." },
        ]}
      />
    );
  },
});
