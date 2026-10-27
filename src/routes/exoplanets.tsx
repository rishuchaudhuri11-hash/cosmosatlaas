import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/exoplanets")({
  head: () => pageHead("Exoplanets", "Worlds around other stars, with discovery methods and missing data left visible."),
  component: function ExoplanetsRoute() {
    return (
      <CategoryScreen
        eyebrow="Exoplanets"
        title="Other suns, other worlds"
        lede="Thousands of planets are confirmed. This atlas keeps a set that shows the methods: wobble, transit, direct image, pulsar timing. A habitable-zone orbit is not a detection of life."
        categories={["exoplanet"]}
        notes={[
          { heading: "How they are found", body: "A transit dims the star. A radial velocity wobbles it. Direct imaging photographs a young giant far from its star. Pulsar timing finds planets around a dead star. Each method is blind to most planets." },
          { heading: "What “Earth-like” is allowed to mean", body: "A measured radius near Earth’s, and starlight that could allow liquid water, is a start. Mass, atmosphere, and a surface are often missing. This site says “not available” instead of inventing them." },
          { heading: "Biosignatures", body: "A gas that life can make is not life until geology and the instrument are ruled out. K2-18 b is the cautionary page. TRAPPIST-1 is the system page." },
        ]}
      />
    );
  },
});
