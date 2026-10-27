import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/moons")({
  head: () => pageHead("Moons", "Natural satellites, from the Moon to the ocean worlds and the irregular ones."),
  component: function MoonsRoute() {
    return (
      <CategoryScreen
        eyebrow="Moons"
        title="Worlds that orbit worlds"
        lede="A moon is a natural satellite. Some are round and differentiated. Some are rubble. A few hide oceans. The count changes as surveys find smaller ones — this list is the set with a story, not a promise of completeness."
        categories={["moon"]}
        notes={[
          { heading: "Ours", body: "Earth’s Moon is large for the planet it orbits. The giant-impact model is the leading account. Laser reflectors measure it drifting away by centimeters a year." },
          { heading: "Oceans", body: "Europa and Enceladus are the strongest cases for liquid water in contact with rock today. Titan has liquids on the surface, but they are methane and ethane, plus a possible water ocean underneath. An ocean is not a biosphere." },
          { heading: "Odd ones", body: "Iapetus is two-toned. Hyperion tumbles. Miranda looks shattered. Mimas wears a giant crater. Each one is a piece of evidence about impacts, tides, or dust — not a mascot." },
        ]}
      />
    );
  },
});
