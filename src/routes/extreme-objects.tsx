import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/extreme-objects")({
  head: () => pageHead("Extreme objects", "Quasars, magnetars, mergers, and stars that misbehave."),
  component: function ExtremeRoute() {
    return (
      <CategoryScreen
        eyebrow="Extreme objects"
        title="The limits of matter"
        lede="Some objects are here because they break an everyday intuition: a magnetic field that cracks a neutron star, a merger that forges gold, a radio flash from another galaxy, a star that dims for dusty reasons."
        categories={["extreme"]}
        notes={[
          { heading: "Engines", body: "Quasars and radio galaxies are black holes being fed, seen at different angles. SS 433 is a stellar-mass cousin with jets at a quarter of the speed of light." },
          { heading: "Dense matter", body: "Magnetars, pulsars, and the neutron-star merger GW170817 are ways of studying matter denser than an atomic nucleus. The 2017 kilonova is the public evidence that gold-making collisions happen." },
          { heading: "What it was not", body: "Tabby’s Star is in this list as a lesson. The dips were real. The megastructure was a speculation. Dust won." },
        ]}
      />
    );
  },
});
