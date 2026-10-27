import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/small-bodies")({
  head: () => pageHead("Small bodies", "Asteroids, comets, dwarf planets, and the two interstellar visitors."),
  component: function SmallBodiesRoute() {
    return (
      <CategoryScreen
        eyebrow="Small bodies"
        title="What the planets did not sweep up"
        lede="Asteroids, comets, and dwarf planets are leftover building blocks and survivors. Their orbits start uncertain and get sharper as more observations arrive. An early risk is not a prediction of impact."
        categories={["small-body", "dwarf-planet"]}
        notes={[
          { heading: "Asteroids", body: "Most are rubble piles. Samples from Itokawa, Ryugu, and Bennu are the ground truth. Psyche may be metal-rich. DART showed a kinetic impact can move a small moon." },
          { heading: "Comets", body: "Comets bring ice and dust in from the cold. Rosetta orbited 67P. Halley is the famous short-period comet. Hale–Bopp was a giant long-period visitor. Not every comet matches Earth’s ocean water." },
          { heading: "Visitors", body: "ʻOumuamua and Borisov came from other stars. Borisov was a comet. ʻOumuamua is still odd, and the working explanation is natural outgassing, not a spacecraft." },
        ]}
      />
    );
  },
});
