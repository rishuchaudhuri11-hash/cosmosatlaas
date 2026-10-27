import { createFileRoute } from "@tanstack/react-router";
import { CategoryScreen } from "@/components/category-screen";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/nebulae")({
  head: () => pageHead("Nebulae", "Star-forming clouds, planetary shells, and supernova wreckage."),
  component: function NebulaeRoute() {
    return (
      <CategoryScreen
        eyebrow="Nebulae"
        title="Clouds, shells, and wrecks"
        lede="A nebula is gas and dust, lit in different ways. The pink is often hydrogen. The blue is often dust scattering starlight. A dark shape is often dust in front, not a hole."
        categories={["nebula"]}
        notes={[
          { heading: "Emission", body: "Hot stars ionize hydrogen. When electrons recombine, the gas glows at specific wavelengths. Orion, the Lagoon, and the Tarantula are this kind of cloud, and they are where stars are being made." },
          { heading: "Planetary nebulae", body: "The name is historical and wrong. These are the last winds of sun-like stars, ionized by the exposed core that will cool as a white dwarf. The Helix and the Ring are nearby examples of the Sun’s distant future." },
          { heading: "Remnants", body: "A supernova remnant is the blast wave, not the star. The Crab is young and has a pulsar. The Veil is older. Cassiopeia A has a neutron star that is not a bright radio pulsar. They are not the same object photographed at different ages only." },
        ]}
      />
    );
  },
});
