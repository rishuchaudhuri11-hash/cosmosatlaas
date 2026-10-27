import type { SceneKind } from "@/components/space/scenes";
import type { Certainty } from "./types";

export type StoryAct = "cosmos" | "earth" | "life" | "today" | "future" | "physics";

export interface StoryStage {
  id: string;
  act: StoryAct;
  when: string;
  title: string;
  certainty: Certainty;
  image: string;
  scene?: SceneKind;
  visual?: string;
  lede: string;
  body: string[];
  points: string[];
}

export const ACTS: { id: StoryAct; label: string; hindi: string }[] = [
  { id: "cosmos", label: "The universe", hindi: "Brahmand" },
  { id: "earth", label: "Earth forms", hindi: "Prithvi" },
  { id: "life", label: "Life", hindi: "Jeevan" },
  { id: "today", label: "Today", hindi: "Aaj" },
  { id: "future", label: "The future", hindi: "Bhavishya" },
  { id: "physics", label: "Physics", hindi: "Siddhant" },
];

export const stages: StoryStage[] = [
  {
    id: "first-fraction",
    act: "cosmos",
    when: "Before 1 second",
    title: "A hot, dense beginning",
    certainty: "model",
    image: "/story/plasma.jpg",
    scene: "hero",
    lede: "The universe we can observe was once hotter and denser than any star. That is a conclusion from expansion, the microwave background, and the abundances of the lightest nuclei — not a film of an explosion in a room.",
    body: [
      "Running the expansion backward, distances shrink and the temperature rises. General relativity plus the measured expansion describe this well back to a fraction of a second. Earlier than that, the model is incomplete: inflation is a successful hypothesis for why the universe is so smooth and flat, but the field that drove it has not been identified in a laboratory.",
      "There is no center in the usual picture. Every region expands away from every other. “The Big Bang” is the name of this early state and the model that follows, not a point sitting in pre-existing space that blew up like a bomb.",
    ],
    points: [
      "Age of the observable universe: about 13.8 billion years (Planck, rounded).",
      "Inflation is a model, not a photographed event.",
      "We do not have a tested theory of the very first instant.",
    ],
  },
  {
    id: "first-nuclei",
    act: "cosmos",
    when: "Minutes",
    title: "The first nuclei",
    certainty: "verified",
    image: "/story/plasma.jpg",
    lede: "In the first minutes, the universe was a nuclear furnace that made hydrogen, helium, and a trace of lithium. Almost every heavier atom was made later, inside stars.",
    body: [
      "By about one second, protons, neutrons, electrons, and photons filled the cosmos. As it cooled, protons and neutrons locked into light nuclei. The predicted mix — roughly three quarters hydrogen and one quarter helium by mass — matches what astronomers measure in the oldest gas. That agreement is one of the strongest checks of the hot early universe.",
      "Carbon, oxygen, iron, and the calcium in bone did not exist yet. Those nuclei require stars, and the heaviest of them require supernovae or colliding neutron stars. You are later than this chapter by the lifetime of many stars.",
    ],
    points: [
      "Big Bang nucleosynthesis is a measured success, not a guess about the idea of a beginning.",
      "Heavier elements are stellar products.",
      "A free neutron decays in about 15 minutes; the timing of this era matters.",
    ],
  },
  {
    id: "first-light",
    act: "cosmos",
    when: "380,000 years",
    title: "The first light we can still see",
    certainty: "verified",
    image: "/story/plasma.jpg",
    scene: "web",
    lede: "When the universe cooled enough for electrons to join nuclei, it became transparent. That light is still arriving. We call it the cosmic microwave background.",
    body: [
      "Before recombination, light scattered off free electrons the way fog scatters a headlamp. Afterward, photons streamed freely. Expansion has stretched them from visible and infrared heat into microwaves, about 2.7 kelvin above absolute zero.",
      "The map is almost perfectly even, with ripples of about one part in a hundred thousand. Those ripples are the seeds of galaxies. ESA’s Planck satellite measured them with enough precision to fix the age, the ordinary-matter density, and the dark-matter density — as parameters of the model, with published uncertainties.",
    ],
    points: [
      "This is the oldest light, not a photograph of the first second.",
      "The sky is not perfectly smooth; the spots grew into the cosmic web.",
      "The background is evidence, not an illustration.",
    ],
  },
  {
    id: "dark-ages",
    act: "cosmos",
    when: "Millions of years",
    title: "A dark universe",
    certainty: "model",
    image: "/story/first-stars.jpg",
    lede: "After the first light faded from view into the infrared, and before the first stars, the universe was dark gas. Gravity was already pulling the slightly denser places inward.",
    body: [
      "Ordinary matter was mostly hydrogen and helium. Dark matter, which does not glow and does not collide the way atoms do, had already begun to clump. Gas fell into those clumps. This era is inferred. We do not have a telescope image labeled “cosmic dark ages,” because there was almost nothing shining.",
      "The James Webb Space Telescope looks for the galaxies that formed as the dark ages ended. A candidate is not the same as a confirmed distance. Redshift has to be checked, ideally with a spectrum.",
    ],
    points: [
      "Dark here means no starlight, not a different universe.",
      "Dark matter’s gravity is part of the standard account; its particle identity is still unknown.",
    ],
  },
  {
    id: "first-stars",
    act: "cosmos",
    when: "A few hundred million years",
    title: "The first stars",
    certainty: "model",
    image: "/story/first-stars.jpg",
    scene: "galaxy",
    lede: "The first stars formed from pristine gas. Models say many were enormous and brief. Their light split hydrogen atoms apart again — reionization — and their deaths began the supply of heavier elements.",
    body: [
      "No one has a confirmed spectrum of a pure Population III star, the name for stars made of only the Big Bang’s ingredients. What we see instead are very distant galaxies, already chemically a little richer, and the ionizing background they left.",
      "A star’s fate is mostly its mass. The Sun is a slow, modest furnace. A star tens of times heavier lives only millions of years and can leave a neutron star or a black hole. The first heavy stars are a theoretical population, not a catalog of named objects.",
    ],
    points: [
      "Starlight is nuclear fusion, not chemical fire.",
      "Elements past helium start here.",
      "“First star” is a class, not a single celebrity object we have named.",
    ],
  },
  {
    id: "cosmic-web",
    act: "cosmos",
    when: "Billions of years",
    title: "Galaxies and the web",
    certainty: "verified",
    image: "/story/web.jpg",
    scene: "web",
    lede: "Gravity did not make a uniform fog of galaxies. It made filaments, knots, and huge empty voids. That pattern is mapped by galaxy surveys.",
    body: [
      "The Milky Way is one large spiral in a small group, with Andromeda as the other giant. The Local Group sits on the outskirts of the Virgo Cluster, inside a larger flow toward a mass concentration called the Great Attractor, inside a still larger region named Laniakea. Boundaries of superclusters depend on the definition. They are not walls.",
      "Surveys such as SDSS show walls and voids hundreds of millions of light-years across. The illustration on this page is a teaching image of that pattern, not a map of a particular patch of sky.",
    ],
    points: [
      "Open the Structures section for Laniakea, Boötes void, and the Bullet Cluster.",
      "Most of the mass in these maps is dark matter, inferred from motion and lensing.",
    ],
  },
  {
    id: "solar-nebula",
    act: "earth",
    when: "4.57 billion years ago",
    title: "A cloud becomes a system",
    certainty: "approximate",
    image: "/story/disk.jpg",
    scene: "solar",
    lede: "The Solar System formed from a cold molecular cloud that collapsed, probably nudged by a nearby dying star. The Sun gathered most of the mass. A disk of gas and dust made the planets.",
    body: [
      "The oldest solid pieces we can date, calcium–aluminum inclusions in meteorites, are about 4.567 billion years old. That is the practical start of the Solar System’s clock. The Sun ignited as a protostar and then a hydrogen-fusing star. The disk did not last long on a cosmic calendar — a few million years for the gas.",
      "Close to the young Sun, only rock and metal could condense. Farther out, ice could stay solid. That temperature line is why the inner planets are small and rocky and the outer ones could grow huge and hold hydrogen. The eight planets, the asteroid belt, and the Kuiper belt are the leftovers and the winners of that disk.",
    ],
    points: [
      "Meteorites are the archives. Earth rocks have been melted and recycled.",
      "The Sun is an ordinary G dwarf, not a rare giant.",
      "The 3D solar system on this site compresses distance on purpose and says so.",
    ],
  },
  {
    id: "earth-accretes",
    act: "earth",
    when: "About 4.54 billion years ago",
    title: "Earth gathers itself",
    certainty: "approximate",
    image: "/story/disk.jpg",
    scene: "body",
    visual: "earth",
    lede: "Dust became pebbles, pebbles became planetesimals, and planetesimals crashed together until a planet remained. Earth was born molten.",
    body: [
      "Each impact delivered heat. Iron sank and became the core. Silicate rock floated and became the mantle and a first crust. This separation is why Earth has a magnetic field: a liquid iron outer core, stirred by heat and rotation, runs a dynamo. The field is older than complex life and is still not permanent on geological timescales — it reverses.",
      "The age 4.54 billion years is the age of the planet as dated from meteorites and Earth’s lead isotopes, not the age of the oldest rock you can hold. The oldest crust has been destroyed. The oldest minerals, Jack Hills zircons, are about 4.4 billion years old and hint that liquid water already existed.",
    ],
    points: [
      "Core, mantle, crust: ordered by density while the planet was molten.",
      "A magnetosphere deflects much of the solar wind. It is not a force field in the movie sense.",
      "The first crust is gone.",
    ],
  },
  {
    id: "moon-impact",
    act: "earth",
    when: "Tens of millions of years after Earth began",
    title: "The impact that made the Moon",
    certainty: "model",
    image: "/story/impact.jpg",
    scene: "body",
    visual: "moon",
    lede: "The leading model says a Mars-sized body, sometimes called Theia, struck the young Earth. Debris thrown into orbit gathered into the Moon.",
    body: [
      "The evidence is chemical and dynamical: the Moon’s rocks are depleted in volatile elements, its oxygen isotopes are strikingly like Earth’s, and the angular momentum of the Earth–Moon system is high. Simulations can reproduce a Moon, but the size, speed, and angle of the impactor are not uniquely fixed. “Theia” is a name for a body we do not have a separate sample of.",
      "The Moon is not a captured asteroid. It is large relative to Earth, and that is unusual. Its gravity steadies Earth’s axial tilt over long spans, which moderates climate swings. That is a real dynamical effect, not a mystical one. Tides were stronger when the Moon was closer. It is still receding, a few centimeters a year, measured by laser reflectors left by Apollo.",
    ],
    points: [
      "Giant impact is the best model, not a witnessed event.",
      "Moon rocks from Apollo are the ground truth the model has to match.",
      "The Moon is moving away. Days are slowly lengthening.",
    ],
  },
  {
    id: "oceans",
    act: "earth",
    when: "By about 4.4 to 4.0 billion years ago",
    title: "Water, air, and a heavy rain of rock",
    certainty: "approximate",
    image: "/story/ocean.jpg",
    lede: "Earth gained an atmosphere and oceans early. Where the water came from — the inner disk, later asteroids, or both — is still argued. A single short “late heavy bombardment” of the whole inner system is no longer a settled story.",
    body: [
      "Zircons suggest liquid water on the surface very early. The oldest sedimentary rocks, in Greenland and elsewhere, are younger, around 3.8 billion years, and already show a hydrologic cycle: weather, erosion, oceans. The air was not the air you breathe. Free oxygen was scarce. Nitrogen and carbon dioxide were more important. The sky would not have looked blue in the modern way.",
      "Impacts continued. Some were basin-forming. The idea that they all peaked in a brief cataclysm around 3.9 billion years ago is a hypothesis that lunar samples and dynamical models have made controversial. Safer sentence: the early Earth was struck often, and the crust was repeatedly wounded and healed.",
    ],
    points: [
      "Oceans before oxygen.",
      "Water’s source is not pinned to one delivery.",
      "Bombardment happened; the famous short spike might not have.",
    ],
  },
  {
    id: "young-planet",
    act: "earth",
    when: "4 to 2.5 billion years ago",
    title: "A planet that can recycle itself",
    certainty: "approximate",
    image: "/story/ocean.jpg",
    scene: "body",
    visual: "earth",
    lede: "Plate tectonics — rigid plates that are born at ridges and destroyed in trenches — is how Earth stays geologically alive. When it fully began is not agreed. By the Archean, continents existed in some form.",
    body: [
      "Other rocky planets show why this matters. Mars froze its tectonics. Venus’s surface was resurfaced by volcanism but does not show Earth-style plates. Earth’s carbon cycle buries carbon dioxide in rock and returns it through volcanoes. Over very long times that thermostat is part of why the climate did not permanently freeze or boil, even while the Sun slowly brightened.",
      "The continents of that time were not Asia or Africa. Those shapes are recent. Cratons — the old hearts of continents — survive inside them. The names Vaalbara and Kenorland are reconstructions, useful and uncertain.",
    ],
    points: [
      "Tectonics is a hypothesis for the early Earth with a date that moves as evidence improves.",
      "A living geology is part of why Earth is not Mars.",
    ],
  },
  {
    id: "origin-of-life",
    act: "life",
    when: "Before 3.5 billion years ago",
    title: "Life starts — the step we have not reproduced",
    certainty: "hypothesis",
    image: "/story/ocean.jpg",
    lede: "Life was present on Earth by the time the oldest convincing fossils and chemical traces appear. How chemistry became a cell is not known. That ignorance is part of the page, not a gap to fill with a story.",
    body: [
      "A living cell needs a boundary, a way to copy information, and a metabolism that spends energy. Modern cells use membranes, DNA and RNA, and proteins. Which of those came first is a research argument: RNA world, metabolism-first, or something less tidy. Hydrothermal vents, tidal pools, and mineral surfaces are proposed settings. None is demonstrated as the historical site.",
      "The oldest claims — carbon isotopes, stromatolites, microfossils — are debated case by case. A cautious reading: by about 3.5 billion years ago, microbial life is well supported, and earlier hints exist. “Life began on day one of the oceans” is a slogan, not a date.",
    ],
    points: [
      "No laboratory has made a cell from scratch that matches the historical event.",
      "LUCA, the last universal common ancestor, was already a sophisticated microbe, not the first life.",
      "We have one example of life: Earth’s. Do not generalize it into a law.",
    ],
  },
  {
    id: "microbes-oxygen",
    act: "life",
    when: "3.5 to 2.4 billion years ago",
    title: "A microbial world, then oxygen",
    certainty: "verified",
    image: "/story/ocean.jpg",
    lede: "For most of Earth’s history the biosphere was microbial. Photosynthesis that releases oxygen changed the air, the oceans, and the rocks.",
    body: [
      "Cyanobacteria, or their ancestors, learned to split water and dump oxygen as waste. At first the oxygen was swallowed by iron and other chemistry — you can see that in banded iron formations. Around 2.4 billion years ago the sinks filled and oxygen accumulated in the atmosphere. This Great Oxidation Event is written in sulfur isotopes and red beds. It was slow and uneven, not a single Tuesday.",
      "Oxygen was also a poison to many anaerobes and opened a path, much later, to animals that burn fuel quickly. The ozone layer, which blocks the harshest ultraviolet light, is a later consequence of that oxygen. Complex animals still had to wait.",
    ],
    points: [
      "Stromatolites are layered microbial structures, some of them still growing in a few salty bays.",
      "Oxygen is a biological product on this planet, which is why astronomers treat it as a possible clue — not a proof — on other worlds.",
    ],
  },
  {
    id: "complex-cells",
    act: "life",
    when: "Roughly 1.8 to 0.6 billion years ago",
    title: "Complex cells, then bodies",
    certainty: "approximate",
    image: "/story/cambrian.jpg",
    lede: "Eukaryotes — cells with a nucleus — are built from a merger. An archaeal host and a bacterial guest that became the mitochondrion. Every animal, plant, and fungus inherits that event.",
    body: [
      "The date is soft. Fossils and molecular clocks do not agree tightly. Multicellular bodies come later and more than once: animals, plants, fungi, and several algal lines invented “being large” separately. Ediacaran organisms, from about 575 million years ago, are the first widely accepted large, complicated life. Many of them do not fit modern groups. They are not failed dinosaurs. They are their own chapter.",
      "Snowball Earth glaciations, when ice may have reached low latitudes, fall in this span. How complete the freeze was, and what it did to life, is model-dependent. Life clearly persisted.",
    ],
    points: [
      "Mitochondria were once free-living bacteria. That is supported, not a metaphor.",
      "Multicellular does not mean human-shaped. It means cells that stay together and divide labor.",
    ],
  },
  {
    id: "animals",
    act: "life",
    when: "About 539 million years ago",
    title: "Animals become obvious",
    certainty: "verified",
    image: "/story/cambrian.jpg",
    lede: "In the Cambrian, animals with shells, limbs, and eyes show up in the fossil record in force. It is a radiation of body plans, not the invention of life, and not a single morning.",
    body: [
      "The Burgess Shale and Chengjiang preserve soft bodies as well as shells. Trilobites, early arthropods, worms, and the first vertebrates’ relatives are here. Causes that are discussed — oxygen, genetics of body plans, ecology, the end of extreme ice — are not mutually exclusive, and none is a complete explanation.",
      "Fish follow. Jaws are a later invention. A lineage of lobe-finned fish is the one that, much later, includes the ancestors of land vertebrates. Sharks are not “older than dinosaurs and unchanged.” They are an old group that has kept evolving.",
    ],
    points: [
      "The Cambrian is about 539 million years ago, not “half of Earth’s life.” Microbes had already been here for billions of years.",
      "Most Cambrian branches left no direct human ancestor. We are one twig.",
    ],
  },
  {
    id: "land",
    act: "life",
    when: "About 470 million years ago to 66 million years ago",
    title: "Land, forests, and the age of reptiles",
    certainty: "verified",
    image: "/story/cambrian.jpg",
    lede: "Plants, arthropods, and then vertebrates came ashore. Forests changed the air again. Reptiles, including dinosaurs, dominated many land ecosystems for a long time. They were not a failed draft of mammals.",
    body: [
      "The first forests are Devonian and Carboniferous. Coal is their buried carbon. Tetrapods — limbed vertebrates — are about 375 million years old in the fossils we have. Dinosaurs appear in the Triassic, after the end-Permian mass extinction, the most severe known, about 252 million years ago. Birds are living dinosaurs in the phylogenetic sense. The non-bird dinosaurs ended 66 million years ago when an asteroid struck what is now the Yucatán, with volcanic turmoil in the Deccan as a background stress. Both are real; the impact is the killing blow in the current evidence.",
      "Mammals are older than that impact. They were mostly small while dinosaurs were large. After the extinction they diversified. Whales, bats, horses, and primates are later branches of that recovery. None of it was aimed at producing a human.",
    ],
    points: [
      "Five or six major mass extinctions, depending on the count. Life did not reset to microbes each time.",
      "66 million years since the last non-bird dinosaurs. Written human history is a thin film on that.",
      "Evolution has no ladder with a human on the top rung. It has a tree.",
    ],
  },
  {
    id: "humans",
    act: "life",
    when: "The last 7 million years",
    title: "A primate that talks and keeps records",
    certainty: "verified",
    image: "/story/earth-now.jpg",
    lede: "Humans are apes. The hominin line splits from the chimpanzee line around 6 to 7 million years ago. Homo sapiens appears in Africa by about 300,000 years ago. That is anatomy and genetics, not a ranking of worth.",
    body: [
      "Australopithecines walked upright and had small brains. The genus Homo is associated with larger brains and, in time, stone tools that were already older than Homo in some finds. Several human species overlapped: Neanderthals, Denisovans, and others. People today whose ancestors left Africa carry a small fraction of Neanderthal DNA. That is a measured admixture, not a myth.",
      "Behavior that looks like ours — art, burial, complex tools — builds through the last few hundred thousand years and is obvious in the last 50,000. Farming begins around 12,000 years ago in more than one place. Cities, writing, and science are younger than that. Every living person is equally “modern” in species terms. There is no scientific march from “primitive races” to a finished European. That picture was ideology. The evidence is a tree of populations, all recent.",
    ],
    points: [
      "Species: Homo sapiens. Family: great apes.",
      "Origin of our species: Africa.",
      "Civilization is a cultural stack on a biological body that is much older.",
    ],
  },
  {
    id: "world-now",
    act: "today",
    when: "Now",
    title: "The world as it is",
    certainty: "verified",
    image: "/story/earth-now.jpg",
    scene: "body",
    visual: "earth",
    lede: "Eight billion people share one rocky planet with a thin atmosphere, one large moon, and a star that is middle-aged. The biosphere is richer than at any time humans have recorded, and it is being cut back by us at the same time.",
    body: [
      "Measured globally, the surface is warmer than the late nineteenth century by a little more than 1 degree Celsius. The cause of that rise is the greenhouse gases from burning fossil carbon and from land-use change. That is the conclusion of the measurements and of the IPCC’s assessment, not a political slogan. What societies do about it is a choice. The physics of the greenhouse effect is not.",
      "A proposed geological epoch called the Anthropocene was not formally ratified by the International Union of Geological Sciences in 2024. The absence of that label does not remove the signal in ice, sediment, and the living world. Cities, farms, roads, and satellites are new on a planet that spent billions of years without them.",
    ],
    points: [
      "One world in this catalog is confirmed to host life. This one.",
      "Earth is not the physical center of the universe. It is the center of the only history we have.",
    ],
  },
  {
    id: "cosmos-now",
    act: "today",
    when: "The last century of instruments",
    title: "What we have actually found",
    certainty: "verified",
    image: "/story/web.jpg",
    scene: "galaxy",
    lede: "No page can list every star. Gaia has measured on the order of a billion sources in the Milky Way alone. This atlas keeps the objects that teach the categories, and it refuses to invent the rest.",
    body: [
      "What the last century added, in plain inventory: an expanding universe; a microwave background; dark matter as a gravitational fact still missing a particle; dark energy as the name of accelerated expansion; thousands of confirmed exoplanets; gravitational waves from colliding black holes and neutron stars; images of the plasma around two black holes; a flight through the plume of Enceladus; samples from asteroids and from the Moon; and, in April 2026, Artemis II, a crewed lunar flyby.",
      "What we have not found: a second biosphere, a signal that is clearly technological, the particle of dark matter, or a completed theory that joins gravity to quantum field theory. Those are open, not hidden.",
    ],
    points: [
      "Use Catalog to browse every profile loaded on this site.",
      "Use Search for a name. If it is not here, the honest result is “not in this release.”",
      "Catalogs grow. A blank cell is better than a fabricated mass.",
    ],
  },
  {
    id: "near-future",
    act: "future",
    when: "Centuries to a few million years",
    title: "The near future is not a prophecy",
    certainty: "model",
    image: "/story/earth-now.jpg",
    lede: "Physics can say what the Sun and the orbits will do. It cannot say what people will choose. Treat climate paths, technologies, and civilizations as scenarios.",
    body: [
      "On a human scale, the next centuries depend on emissions, land use, and whether industrial society stays capable. Orbital mechanics will keep the planets on their tracks either way. Asteroid impacts large enough to matter are rare and, for the first time, a surveyed risk: catalogs of near-Earth objects are incomplete at small sizes and much better at the sizes that would cause a global disaster.",
      "On a million-year scale, ice ages return if the climate system is left to the orbital cycles that paced them — unless greenhouse gases have already pushed the system out of that range for a very long time. That “unless” is an active research statement, not a calendar date you can circle.",
    ],
    points: [
      "No credible physics predicts a sudden end of the Sun in our lifetimes.",
      "Prediction of society is not a deliverable of astrophysics.",
    ],
  },
  {
    id: "sun-ages",
    act: "future",
    when: "About 1 to 5 billion years",
    title: "The Sun gets brighter, then huge",
    certainty: "model",
    image: "/story/red-giant.jpg",
    scene: "body",
    visual: "sun",
    lede: "The Sun is about halfway through its main-sequence life. It fuses hydrogen into helium in the core. As the core composition changes, the Sun must burn a little hotter to stay in balance. Earth feels that.",
    body: [
      "In roughly a billion years, models say the brighter Sun will make a runaway greenhouse more likely and complex life on the surface much harder. The number is model-dependent and not a deadline printed on the Sun. In about five billion years the core hydrogen runs low, the Sun swells into a red giant, and later it sheds its outer layers and leaves a white dwarf.",
      "Whether the red giant’s surface reaches Earth’s orbit depends on how much mass the Sun loses, because planets drift outward as the star lightens. “Earth is swallowed” and “Earth survives as a burnt rock” are both discussed. Habitability is over long before that argument matters. The oceans do not wait for the red giant.",
    ],
    points: [
      "White dwarf: Earth-sized, no fusion, cooling for billions of years more.",
      "The Sun will not become a black hole. It is not massive enough.",
      "The illustration is a teaching view, not a forecast photograph.",
    ],
  },
  {
    id: "galaxy-merger",
    act: "future",
    when: "About 4 to 5 billion years",
    title: "Andromeda and the Milky Way",
    certainty: "model",
    image: "/story/web.jpg",
    scene: "galaxy",
    lede: "Andromeda is moving toward the Milky Way. A merger of the two galaxies is the expected future. Stars almost never strike each other. Gas does, and orbits are rearranged.",
    body: [
      "The approaching speed and the sideways speed both matter. Measurements over the last decade favor a merger, possibly a glancing one first. The date, often quoted near 4 to 5 billion years, is an estimate. The Sun will still be a main-sequence star or just leaving it, depending on the exact clocks. Night skies would change over hundreds of millions of years. Nobody will watch it as a single night.",
      "The merged system is sometimes nicknamed Milkomeda. Nicknames are not observations. The black holes in the two centers may eventually merge as well, on a still longer delay, and radiate gravitational waves.",
    ],
    points: [
      "Galaxy collisions are common in the universe. We see them underway elsewhere, including the Antennae.",
      "Local gravity — the Solar System — is not torn apart by the merger.",
    ],
  },
  {
    id: "fate",
    act: "future",
    when: "Trillions of years and after",
    title: "How a universe can end — as a model",
    certainty: "hypothesis",
    image: "/story/web.jpg",
    scene: "blackhole",
    lede: "If dark energy stays constant, expansion accelerates forever. Galaxies beyond the local group leave the observable range. Stars burn out. This “heat death” is a leading long-term model, not a measurement of the ending.",
    body: [
      "Bound systems stay bound. The Local Group can merge into one elliptical galaxy of aging stars. Gas for new stars runs down. Stellar remnants — white dwarfs, neutron stars, black holes — and planets remain. Proton decay, which would eventually dissolve ordinary matter, has not been observed. If protons are stable, remnants last longer still.",
      "Black holes, in theory, evaporate by Hawking radiation over times so long that writing the number of years is a kind of theater. That radiation has not been seen from any astrophysical black hole. Other futures exist on paper: a big rip if dark energy grows, a recollapse if it does not behave as we think. Current data favor continued acceleration. They do not let anyone announce the last day.",
    ],
    points: [
      "Heat death means maximum disorder and no free energy, not a fire.",
      "The observable universe’s fate is a different question from whether anything exists outside it.",
      "Honest status: hypothesis, tied to the behavior of dark energy.",
    ],
  },
  {
    id: "gravity-speed",
    act: "physics",
    when: "A law and a speed limit",
    title: "Gravity, and the speed of light",
    certainty: "verified",
    image: "/story/spacetime.jpg",
    scene: "solar",
    lede: "Gravity is the interaction that dominates planets, stars, and the expansion. Light in vacuum sets the speed limit for information. Nothing with mass reaches that speed.",
    body: [
      "Newton’s law is accurate enough to fly a spacecraft to Neptune. Einstein’s general relativity is what you need when time and distance themselves are the subject: the orbit of Mercury’s perihelion, the bending of starlight, the clocks on GPS satellites, gravitational waves, and black holes. Both are used, in the regimes where they were tested.",
      "The speed of light in vacuum is 299,792,458 meters per second exactly, because the meter is defined from it. Sunlight is about 8 minutes old. Light from Proxima Centauri is 4.24 years old. A radio message to a civilization there would take that long each way. The bench below does the arithmetic for a few real distances.",
    ],
    points: [
      "There is gravity in orbit. Astronauts are falling the whole time.",
      "Faster than light signaling is not an available technology, and it is not a small engineering gap.",
    ],
  },
  {
    id: "relativity-time",
    act: "physics",
    when: "1905 and 1915",
    title: "Time is not a single clock",
    certainty: "verified",
    image: "/story/spacetime.jpg",
    lede: "Special relativity says moving clocks and clocks in different gravitational potentials do not stay in step. This is measured. It is not a film trick, and it is not a machine for visiting your ancestors.",
    body: [
      "Two facts from special relativity, for constant speeds: moving clocks run slow as seen from the other frame, and lengths along the motion contract. The factor is gamma, 1 over the square root of 1 minus v squared over c squared. At everyday speeds gamma is 1 for any practical purpose. At 87 percent of light speed, a traveler’s clock advances about half as much as a stay-at-home clock.",
      "General relativity adds gravity: a clock deeper in a gravitational well runs slower. GPS works only because both effects are corrected. Muons created by cosmic rays reach the ground in numbers that match time dilation. Hafele and Keating flew atomic clocks around the world in 1971. The shifts matched the theory.",
    ],
    points: [
      "The twin “paradox” is a difference in paths through spacetime, not a contradiction.",
      "You do not feel your own clock running slow. You see the other one differ.",
      "Use the slider. It is the formula, not a spaceship.",
    ],
  },
  {
    id: "quantum",
    act: "physics",
    when: "The small scale",
    title: "Quantum theory",
    certainty: "verified",
    image: "/story/spacetime.jpg",
    lede: "Quantum mechanics is the tested theory of atoms, light, chemistry, and the chips in a phone. It is not a license to treat consciousness as a particle, and it does not say that nothing is real until a person looks.",
    body: [
      "The working rules: energy levels in a bound system come in discrete spectra; light is emitted and absorbed in quanta; matter has a wavelength; and the theory predicts probabilities, which experiments confirm to extraordinary precision. The double slit with single electrons is a real experiment. An interference pattern builds one detection at a time. That is strange. It is also repeatable.",
      "The uncertainty principle limits how sharply certain pairs of quantities can be specified together. It is not a statement that instruments are clumsy. Quantum field theory extends this to particles as excitations of fields. The Standard Model — quarks, leptons, force carriers, the Higgs — is the most accurate particle theory we have. It does not include gravity. Joining the two is an open problem, not a finished chapter with a secret answer.",
    ],
    points: [
      "Quantum computers are real devices for certain problems. They are not magic oracles.",
      "Entanglement correlates measurements. It does not send a usable message faster than light.",
      "“Observation” in the theory means an interaction that records an outcome, not a human gaze.",
    ],
  },
  {
    id: "time-travel",
    act: "physics",
    when: "What the equations allow",
    title: "Time travel, said plainly",
    certainty: "theoretical",
    image: "/story/spacetime.jpg",
    lede: "Forward time travel, in the limited sense of a clock that ages less, is real and small unless the speed or the gravity is extreme. Travel into the past is not an established phenomenon. It appears in some mathematical solutions that demand conditions nobody has produced.",
    body: [
      "Special relativity lets a fast traveler return to find that more time has passed at home. That is forward-only, and the energy cost climbs without bound as speed approaches c. General relativity allows closed curves in some solutions — Gödel’s rotating universe, traversable wormholes kept open with negative energy. Those are theoretical. Negative energy of the required kind and amount is not an engineering material on the shelf. Wormholes are not a discovered network of tunnels.",
      "A usable signal to your own past would threaten the order of cause and effect. That is why physicists treat it as a pathology to be ruled out or confined, not as a vehicle class. Science fiction can ignore the bill. This atlas will not. If a past-directed machine is ever demonstrated, the page changes. It has not been.",
    ],
    points: [
      "GPS time corrections are the everyday cousin of “time travel,” and they are microseconds.",
      "No experiment has sent information into the past.",
      "Speed will not get a massive object to c, let alone past it.",
    ],
  },
  {
    id: "dark-side",
    act: "physics",
    when: "The unfinished parts",
    title: "Dark matter, dark energy, and the open list",
    certainty: "model",
    image: "/story/web.jpg",
    scene: "web",
    lede: "Most of the universe’s inventory is not the stuff we are made of. That sentence is solid as bookkeeping. It is not yet a parts list.",
    body: [
      "Galaxies spin and galaxy clusters lens light as if they hold several times more mass than the atoms account for. On the scale of the cosmic microwave background, the same extra density is required. That is dark matter. Candidates — heavy particles, lighter axions, and a few modifications of gravity — are tested by searches that have mostly produced limits. A limit is a result.",
      "Since the late 1990s, distant supernovae, the microwave background, and baryon acoustic oscillations agree that expansion is speeding up. Dark energy is the name of that driver. A cosmological constant fits. Its expected size from particle theory is grotesquely different from the measured density. That mismatch is a live problem. So is quantum gravity. So is the origin of the matter–antimatter imbalance. So is life elsewhere. A finished encyclopedia would be a lie.",
    ],
    points: [
      "Ordinary matter is about 5 percent of the present energy budget. The figure is a model fit, quoted here as an order of magnitude.",
      "Dark energy does not blow the Solar System apart.",
      "The next discovery is allowed to embarrass this paragraph.",
    ],
  },
];
