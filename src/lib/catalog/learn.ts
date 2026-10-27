import type { Chapter, DiscoveryItem, Lesson, Mission, TimelineEvent } from "./types";
import { EHT, NASA_UNIVERSE, PLANCK, src } from "./facts";

const nasa = src("NASA", "Universe overview", NASA_UNIVERSE);

export const lessons: Lesson[] = [
  {
    slug: "gravity",
    title: "Gravity",
    summary: "The attraction that gives weight to mass and bends the paths of planets, stars, and light.",
    minute:
      "Every mass attracts every other mass. Near Earth that attraction is weight. In space it is what keeps the Moon in orbit and what gathers galaxies.",
    analogy:
      "Analogy, not a mechanism: a heavy ball on a stretched sheet makes a dip that other balls roll toward. Real gravity is not a sheet in a third dimension sitting in a laboratory. The picture is only a map of how paths curve.",
    deep:
      "Newton’s law is precise enough for most spacecraft trajectories. Einstein’s general relativity replaces the force with curved spacetime and is required near the Sun’s limb for light bending, for gravitational waves, and for black holes. The equivalence principle — that gravitational mass and inertial mass match — is tested, not assumed forever without experiment.",
    equation: "F = G M m / r²",
    misconception: "There is no gravity in space. Orbiting astronauts are falling, continuously, around Earth. The sensation of weightlessness is free fall, not the absence of gravity.",
    related: ["earth", "moon", "sagittarius-a"],
    sources: [nasa],
    queries: ["what is gravity", "why do things orbit", "no gravity in space"],
  },
  {
    slug: "orbits",
    title: "Orbits",
    summary: "A repeating fall. An object moves sideways fast enough that the body it falls toward curves away underneath it.",
    minute:
      "The Moon is falling toward Earth and missing. Planets do the same around the Sun. The shape is an ellipse with the star at one focus, in the two-body ideal.",
    analogy:
      "Analogy: a ball thrown horizontally from a high mountain, imagined by Newton. Throw it faster and the landing point moves farther until the ground has curved away as much as the ball has fallen. Real mountains and air drag are not part of the ideal.",
    deep:
      "Kepler’s laws describe the geometry. They follow from an inverse-square force. Real orbits precess, feel other planets, and lose energy to tides or atmospheric drag. Escape speed is the speed at which a trajectory no longer closes. It is not the speed needed to leave a planet’s gravity “instantly.”",
    equation: "T² = (4π² / GM) a³",
    misconception: "Orbits need continuous rocket thrust. Once above the atmosphere, a spacecraft coasts. Thrust changes the orbit; it does not hold the craft up like a helicopter.",
    related: ["earth", "moon", "halley"],
    sources: [nasa],
    queries: ["how do orbits work", "orbital mechanics", "escape velocity"],
  },
  {
    slug: "fusion",
    title: "Nuclear fusion in stars",
    summary: "Stars shine because light nuclei combine into heavier ones, releasing energy from a small change in mass.",
    minute:
      "In the Sun’s core, hydrogen becomes helium. The mass of the products is slightly less than the mass of the ingredients. The difference leaves as energy.",
    analogy:
      "Analogy: joining two stiff springs so the pair sits lower than the separate springs. You get the height difference back as heat. Nuclei are not springs; the binding is the strong force and electromagnetism.",
    deep:
      "The proton–proton chain dominates in the Sun. The CNO cycle dominates in hotter, more massive stars. Fusion requires quantum tunneling because the nuclei repel. Hydrostatic equilibrium is the balance of this energy’s pressure against gravity. Elements heavier than iron are not net fusion fuel; they are made in supernovae and neutron-star mergers by processes that consume energy.",
    equation: "E = Δm c²",
    misconception: "The Sun is burning like a coal fire. Chemical burning cannot power the Sun for billions of years. The nineteenth century already knew that. The energy is nuclear.",
    related: ["sun", "betelgeuse", "ring-nebula"],
    sources: [nasa],
    queries: ["how does the sun shine", "nuclear fusion", "why do stars shine"],
  },
  {
    slug: "spectrum",
    title: "The electromagnetic spectrum",
    summary: "Light is a small slice of a much wider family of waves, from radio to gamma rays. Different telescopes see different physics.",
    minute:
      "A radio dish, an infrared telescope, and an X-ray satellite can look at the same galaxy and record different processes: cold gas, warm dust, and million-degree plasma.",
    analogy:
      "Analogy: listening to an orchestra with filters that pass only the bass, then only the flutes. You are not seeing a different concert, and neither filter is the whole music. The filters here are wavelength bands.",
    deep:
      "Wavelength, frequency, and photon energy describe the same light. A spectrum of lines is a barcode of atoms and their motion. Broadband pictures are not spectra. False-color composites map invisible bands onto visible colors so people can see them; the color is a key, not the hue an eye would see.",
    equation: "E = h f = h c / λ",
    misconception: "If it was not photographed in visible light, it is not real data. Radio, infrared, ultraviolet, X-ray, and gamma-ray detections are measurements. They are not all photographs, and they should not be captioned as if they were.",
    related: ["orion-nebula", "crab-nebula", "sun"],
    sources: [src("NASA", "Imagine the Universe — electromagnetic spectrum", "https://imagine.gsfc.nasa.gov/science/toolbox/emspectrum1.html")],
    queries: ["electromagnetic spectrum", "why infrared", "false color"],
  },
  {
    slug: "redshift",
    title: "Redshift",
    summary: "A stretch in the wavelength of light. It can come from motion, from gravity, or from the expansion of space.",
    minute:
      "When a source recedes, its spectral lines shift toward longer wavelengths. Cosmological redshift is that idea applied to expanding space, and it is how distances to galaxies are estimated once a ladder is calibrated.",
    analogy:
      "Analogy: the Doppler shift of a siren. Pitch drops as the ambulance leaves. For galaxies beyond the local group the dominant effect is expansion, which is similar in the formula and different in the cause — space itself stretches, the galaxy is not always “moving through” a static grid.",
    deep:
      "z = Δλ / λ. For small speeds, z ≈ v/c. At high redshift the approximation fails and the conversion to distance depends on the cosmological model. Gravitational redshift is a third, distinct effect, measured in white dwarfs and in the galactic center. Do not add them blindly.",
    equation: "z = Δλ / λ",
    misconception: "Reddening by dust is redshift. Dust makes objects dimmer and redder by removing blue light. It does not shift spectral lines the way redshift does.",
    related: ["andromeda-galaxy", "3c-273"],
    sources: [nasa],
    queries: ["what is redshift", "doppler", "expanding universe"],
  },
  {
    slug: "lensing",
    title: "Gravitational lensing",
    summary: "Mass bends the path of light. The result can be a brightened image, a distorted arc, or multiple images of one object.",
    minute:
      "Einstein’s theory predicts that mass curves spacetime, and light follows those curves. A foreground galaxy cluster can stretch a background galaxy into an arc.",
    analogy:
      "Analogy: a footstep in a clear pool bends the tiles underneath. The tiles did not move. In lensing, the background galaxy did not grow wings; its light was deflected.",
    deep:
      "Strong lensing makes arcs and Einstein rings. Weak lensing is a statistical shear used to map dark matter. Microlensing briefly brightens a star when a compact mass crosses the line of sight; it has discovered some planets and isolated masses. A lens model is an inference from the image, not a photograph of dark matter itself.",
    equation: "α ≈ 4GM / (c² b)",
    misconception: "The Event Horizon Telescope photograph shows the event horizon. It shows a ring of radio emission around a shadow. Lensing shapes that ring. The horizon is smaller than the shadow and is not a surface that glows.",
    related: ["m87-star", "sagittarius-a", "coma-cluster"],
    sources: [src("Event Horizon Telescope", "Collaboration site", EHT)],
    queries: ["gravitational lensing", "how do black holes work", "einstein ring"],
  },
  {
    slug: "expansion",
    title: "Cosmic expansion",
    summary: "On the largest scales, distances between unbound galaxy clusters grow with time. Space is not exploding into a pre-existing room.",
    minute:
      "Galaxies beyond the Local Group are receding, and more distant ones recede faster. That pattern is the Hubble–Lemaître law. The expansion has no center in the ordinary sense; every observer sees the same pattern.",
    analogy:
      "Analogy: raisins in rising dough. Each raisin sees the others moving away, and none is the center of the loaf. The analogy fails if you ask what the dough expands into. In cosmology that question is not required by the mathematics.",
    deep:
      "The rate today, H0, is about 70 km/s per megaparsec, but local and early-universe measurements disagree at a level the community takes seriously — the Hubble tension. Dark energy is the name for whatever makes the expansion accelerate. The cosmological constant is one model, not a detected particle.",
    equation: "v ≈ H0 d",
    misconception: "Everything, including atoms and the Solar System, is swelling. Bound systems are held by gravity or other forces. Expansion is measured between systems that are not bound to each other.",
    related: ["local-group", "virgo-cluster", "3c-273"],
    sources: [src("ESA", "Planck", PLANCK), nasa],
    queries: ["expanding universe", "hubble constant", "dark energy"],
  },
  {
    slug: "dark-matter",
    title: "Dark matter",
    summary: "Mass that does not glow, inferred because galaxies and clusters move as if they contain far more matter than the stars and gas we see.",
    minute:
      "Galaxy rotation curves stay fast far from the center. Clusters lens light more strongly than their galaxies can explain. Both point to additional mass.",
    analogy:
      "Analogy: seeing a wind shake trees and inferring air you cannot see. The inference can be right while the nature of the “air” is still unknown. Dark matter may be a particle, or gravity may need a revision. The observations are not optional either way.",
    deep:
      "The cosmic microwave background and the growth of structure favor a cold, non-baryonic component in the standard model. Laboratory searches have not identified the particle. Modified-gravity proposals exist and have to pass the same tests, including the bullet-cluster-style separations of gas and lensing mass. This atlas does not pretend the particle has been found.",
    misconception: "Dark matter is the same thing as dark energy. They solve different problems: extra attractive mass, and accelerated expansion. The word “dark” only means we do not see the light.",
    related: ["coma-cluster", "milky-way", "virgo-cluster"],
    sources: [nasa, src("ESA", "Planck", PLANCK)],
    queries: ["what is dark matter", "rotation curve"],
  },
  {
    slug: "dark-energy",
    title: "Dark energy",
    summary: "The name for the cause of accelerated cosmic expansion. Its physical nature is unknown.",
    minute:
      "Distant supernovae, the cosmic microwave background, and galaxy clustering agree that expansion sped up over the last several billion years. Whatever causes that is called dark energy.",
    analogy:
      "Analogy: a bookkeeping term in a budget for a deficit you have measured but not traced to a thief. The deficit is real in the books. Naming it is not the same as catching it.",
    deep:
      "A cosmological constant is the simplest description and fits current data well. Its expected size from particle physics is wildly different from the measured density — the cosmological-constant problem. Time-varying models are tested and not required by the basic data set. Do not draw dark energy as a purple fog filling a room.",
    misconception: "Dark energy pulls galaxies apart like a wind inside the Solar System. Its effect is negligible anywhere gravity or electromagnetism already binds a system.",
    related: ["coma-cluster"],
    sources: [src("ESA", "Planck", PLANCK)],
    queries: ["what is dark energy", "cosmological constant"],
  },
  {
    slug: "spectroscopy",
    title: "Spectroscopy",
    summary: "Splitting light into wavelengths to read composition, temperature, and motion.",
    minute:
      "A prism or a grating turns starlight into a spectrum. Bright and dark lines match atoms and ions measured in laboratories. The shift of those lines is a speed.",
    analogy:
      "Analogy: a barcode. The pattern identifies the item. A smear of color without lines is a much weaker clue, like a smudged barcode.",
    deep:
      "Absorption lines form when a cooler gas sits in front of a continuum. Emission lines form in hot thin gas. Line width can mean rotation, turbulence, or pressure. Spectroscopy, not morphology alone, classified the Sun as G2V and showed nebulae contain ionized gas.",
    equation: "Δλ / λ = v / c   (low speed)",
    misconception: "A color camera image is a spectrum. Filters are coarse bins. A true spectrum resolves lines.",
    related: ["sun", "ring-nebula", "51-pegasi-b"],
    sources: [nasa],
    queries: ["what is spectroscopy", "spectral lines"],
  },
  {
    slug: "light-speed",
    title: "The speed of light",
    summary: "The speed limit for information, and the reason looking out is looking back.",
    minute:
      "Light in vacuum travels at 299,792,458 meters per second. Sunlight is about 8 minutes old. Nothing with mass reaches that speed, and no usable signal outruns it.",
    analogy:
      "Analogy: a cosmic speed limit posted on every road, not a record someone might break with a better engine. Adding more energy makes a massive object heavier to push, not faster than light.",
    deep:
      "The meter is defined from this speed, so the number is exact by convention. The invariance — every inertial observer measures the same c — is the postulate special relativity is built on, and it is tested. Light slows in glass or air. That is not a violation. The limit is the vacuum speed.",
    equation: "c = 299,792,458 m/s",
    misconception: "Radio waves are slower than light. They are light, at a longer wavelength, and they travel at c in vacuum.",
    related: ["sun", "proxima-centauri"],
    sources: [nasa],
    queries: ["speed of light", "how long does sunlight take", "faster than light"],
  },
  {
    slug: "relativity",
    title: "Relativity and time",
    summary: "Moving clocks and clocks in gravity do not stay in step. The effect is measured. It is not a ride into the past.",
    minute:
      "Special relativity (1905) covers constant speeds. General relativity (1915) covers gravity as curved spacetime. GPS, muon lifetimes, and flying atomic clocks all match the formulas.",
    analogy:
      "Analogy: two hikers who take different trails between the same camps walk different distances. Clocks take different paths through spacetime and accumulate different proper time. The trail is not a trick of the watch.",
    deep:
      "Gamma is 1 over the square root of 1 minus v²/c². At ordinary speeds it is indistinguishable from 1. Near c it grows without bound. Gravitational time dilation makes a clock deeper in a well run slow relative to a higher one. Both corrections are in the GPS system because both are larger than the accuracy the system needs.",
    equation: "γ = 1 / √(1 − v²/c²)",
    misconception: "The twin paradox is a contradiction. The traveling twin changes frames or feels acceleration on the turnaround. The two paths are not symmetric, and both agree on who aged less when they meet.",
    related: ["earth", "sagittarius-a"],
    sources: [nasa],
    queries: ["time dilation", "special relativity", "general relativity", "twin paradox"],
  },
  {
    slug: "quantum",
    title: "Quantum theory",
    summary: "The tested rules of atoms, light, and matter on the small scale. Probabilities, not a claim that nothing is real.",
    minute:
      "Energy in a bound system comes in spectra. Light is emitted in quanta. Particles have a wavelength. The theory predicts probabilities that experiments confirm to extraordinary precision.",
    analogy:
      "Analogy: a coin you cannot see until it lands, except the landing pattern of many throws makes stripes no classical coin can make. The double-slit experiment with single electrons is that pattern. The analogy breaks if you start talking about wishes.",
    deep:
      "The uncertainty principle is a property of the quantities, not of clumsy instruments. Quantum field theory treats particles as excitations of fields. The Standard Model is the particle content that fits collider data. It does not include gravity. Entanglement correlates outcomes. It does not carry a message faster than light. “Observation” means a recorded interaction, not a human stare.",
    equation: "Δx · Δp ≥ ℏ / 2",
    misconception: "Quantum mechanics says consciousness creates reality. It says measurements have outcomes with calculable probabilities. Laboratory devices record those outcomes with no one in the room.",
    related: ["sun", "sirius-b"],
    sources: [nasa],
    queries: ["quantum mechanics", "uncertainty principle", "entanglement", "double slit"],
  },
  {
    slug: "time-travel",
    title: "Time travel",
    summary: "Clocks that age less are real. Visiting the past is not an established phenomenon.",
    minute:
      "A fast traveler returns to a home clock that has run further ahead. That is forward-only, and the energy cost climbs without bound as speed approaches the speed of light. Signals into one’s own past have never been demonstrated.",
    analogy:
      "Analogy: taking a shorter path through a city so your watch shows less time than a friend’s. You still arrive after you left. You do not walk into yesterday’s newspaper.",
    deep:
      "General relativity allows closed timelike curves in some mathematical worlds — Gödel’s rotating universe, wormholes held open by negative energy. Those conditions are not available as engineering materials, and the solutions may be unphysical. Physicists treat backward causation as a pathology to exclude, not as a vehicle. If an experiment ever sends information to the past, this paragraph is wrong. None has.",
    misconception: "Reaching the speed of light would let you travel in time as in a film. A massive body cannot reach c. The slowing of the traveler’s clock is a forward offset, paid for with enormous energy.",
    related: ["sun", "sagittarius-a"],
    sources: [nasa],
    queries: ["is time travel possible", "wormhole", "can we go back in time"],
  },
];

export const missions: Mission[] = [
  {
    slug: "apollo-11",
    name: "Apollo 11",
    status: "completed",
    years: "16–24 July 1969",
    summary: "First crewed landing on the Moon. Neil Armstrong and Buzz Aldrin walked on the surface while Michael Collins orbited in Columbia.",
    targets: ["moon"],
    sources: [src("NASA", "Apollo 11", "https://www.nasa.gov/mission/apollo-11/")],
  },
  {
    slug: "voyager",
    name: "Voyager 1 and 2",
    status: "active",
    years: "Launched 1977",
    summary: "The twin outer-planet flybys. Voyager 2 is still the only spacecraft to visit Uranus and Neptune. Both continue into interstellar space as operating probes.",
    targets: ["jupiter", "saturn", "uranus", "neptune"],
    sources: [src("NASA", "Voyager", "https://science.nasa.gov/mission/voyager/")],
  },
  {
    slug: "hubble",
    name: "Hubble Space Telescope",
    status: "active",
    years: "Launched 1990",
    summary: "An ultraviolet, visible, and near-infrared observatory in low Earth orbit. Its images and spectra underpin a large part of modern extragalactic astronomy.",
    targets: ["andromeda-galaxy", "eagle-nebula", "crab-nebula"],
    sources: [src("NASA", "Hubble", "https://science.nasa.gov/mission/hubble/")],
  },
  {
    slug: "cassini",
    name: "Cassini–Huygens",
    status: "completed",
    years: "2004–2017 at Saturn",
    summary: "Orbited Saturn for 13 years. Huygens landed on Titan in 2005. The mission ended with a deliberate plunge into Saturn so the spacecraft would not contaminate Enceladus or Titan.",
    targets: ["saturn", "titan", "enceladus"],
    sources: [src("NASA", "Cassini", "https://science.nasa.gov/mission/cassini/")],
  },
  {
    slug: "new-horizons",
    name: "New Horizons",
    status: "active",
    years: "Flyby of Pluto in 2015",
    summary: "First reconnaissance of Pluto and, later, the Kuiper-belt object Arrokoth. The spacecraft continues to return heliophysics data from the outer heliosphere.",
    targets: ["pluto"],
    sources: [src("NASA", "New Horizons", "https://science.nasa.gov/mission/new-horizons/")],
  },
  {
    slug: "jwst",
    name: "James Webb Space Telescope",
    status: "active",
    years: "Science operations since 2022",
    summary: "An infrared observatory at the Sun–Earth L2 region. It studies the early universe, exoplanet atmospheres, and dust-hidden star formation. It does not replace Hubble; it sees different wavelengths.",
    targets: ["carina-nebula", "eagle-nebula", "trappist-1e"],
    sources: [src("STScI", "Webb", "https://webbtelescope.org/")],
  },
  {
    slug: "perseverance",
    name: "Perseverance",
    status: "active",
    years: "Landed 2021",
    summary: "A Mars rover in Jezero crater caching samples. A later mission would be required to bring those samples to Earth; that campaign’s schedule has changed and is not listed here as a fixed arrival.",
    targets: ["mars"],
    sources: [src("NASA", "Mars 2020", "https://science.nasa.gov/mission/mars-2020-perseverance/")],
  },
  {
    slug: "osiris-rex",
    name: "OSIRIS-REx",
    status: "completed",
    years: "Sample returned 2023",
    summary: "Mapped Bennu and returned a sample to Utah on 24 September 2023. The spacecraft continues as OSIRIS-APEX toward a different asteroid.",
    targets: ["bennu"],
    sources: [src("NASA", "OSIRIS-REx", "https://science.nasa.gov/mission/osiris-rex/")],
  },
  {
    slug: "artemis-ii",
    name: "Artemis II",
    status: "completed",
    years: "1–11 April 2026",
    summary:
      "First crewed Artemis flight. Four astronauts flew around the Moon on Orion and reached a human distance record from Earth. It was a flyby, not a landing. NASA released the lunar science data set on 7 October 2026.",
    targets: ["moon"],
    sources: [
      src("NASA", "Artemis II", "https://www.nasa.gov/mission/artemis-ii/", "2026"),
      src(
        "NASA",
        "Artemis II science data release",
        "https://www.nasa.gov/blogs/missions/2026/10/07/nasa-releases-artemis-ii-lunar-science-data-images/",
        "2026",
      ),
    ],
  },
  {
    slug: "europa-clipper",
    name: "Europa Clipper",
    status: "active",
    years: "Launched October 2024",
    summary: "En route to Jupiter to fly by Europa repeatedly and investigate the ice shell and ocean. It is not a life-detection lander.",
    targets: ["europa", "jupiter"],
    sources: [src("NASA", "Europa Clipper", "https://science.nasa.gov/mission/europa-clipper/")],
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "hot",
    era: "Cosmic",
    when: "Before 1 second",
    title: "A hot, dense early universe",
    body: "The standard model starts from a state that was hotter and denser than anything we can reproduce, and expanding. Inflation, a brief earlier acceleration, is a successful but still theoretical addition. We do not have a photograph of this era.",
    certainty: "model",
    href: "/universe",
  },
  {
    id: "nucleosynthesis",
    era: "Cosmic",
    when: "About 1–20 minutes",
    title: "The first nuclei",
    body: "Protons and neutrons fused into helium, with traces of deuterium and lithium. The predicted abundances match observations well enough to be a pillar of the Big Bang model. Heavier elements were not made here.",
    certainty: "verified",
    href: "/universe",
  },
  {
    id: "cmb",
    era: "Cosmic",
    when: "About 380,000 years",
    title: "The cosmic microwave background",
    body: "Electrons joined nuclei and the universe became transparent. The afterglow is now microwaves at 2.725 K. Maps by COBE, WMAP, and Planck measure the fluctuations that seeded later structure.",
    certainty: "verified",
    href: "/documentaries/journey-through-the-universe",
  },
  {
    id: "dark-ages",
    era: "Cosmic",
    when: "Hundreds of millions of years",
    title: "Cosmic dark ages",
    body: "After the microwave background and before the first stars, there was little new light. This era is inferred. It is a target for radio observations of hydrogen, not a fully mapped landscape.",
    certainty: "model",
    href: "/documentaries/journey-through-the-universe",
  },
  {
    id: "first-stars",
    era: "Cosmic",
    when: "Within the first billion years",
    title: "First stars and galaxies",
    body: "Gravity gathered gas into the first stars, which were likely massive and short-lived. Webb has found luminous galaxies surprisingly early. How typical they were is still being worked out. Dates of “first light” are approximate.",
    certainty: "approximate",
    href: "/galaxies",
  },
  {
    id: "solar-system",
    era: "Solar System",
    when: "About 4.6 billion years ago",
    title: "The Sun and planets form",
    body: "A molecular cloud collapsed. The Sun ignited at the center. Planets assembled from a disk of gas and dust. Meteorites date the process; they are not a film of it.",
    certainty: "approximate",
    href: "/solar-system",
  },
  {
    id: "earth-life",
    era: "Earth",
    when: "After about 4.5 billion years ago",
    title: "Earth, oceans, and life",
    body: "Earth formed, the Moon-forming impact is the leading model, oceans condensed, and life was present by at least 3.5 billion years ago. The origin of life is unsolved. It is a terrestrial fact, not evidence that life is common.",
    certainty: "approximate",
    href: "/astrobiology",
  },
  {
    id: "modern",
    era: "Human",
    when: "1609–present",
    title: "Telescopes to spacecraft",
    body: "Galileo’s telescope, spectroscopy, photography, radio astronomy, space telescopes, and gravitational-wave detectors are successive new ways of measuring, not a single invention. Human timescales on this timeline are a hairline at the end.",
    certainty: "verified",
    href: "/missions",
  },
];

export const chapters: Chapter[] = [
  {
    id: "before-stars",
    title: "Before the stars",
    kicker: "Chapter 1",
    narration:
      "The universe we can describe was once hot enough that atoms could not hold together. Expansion cooled it. This is a physical history reconstructed from the microwave background, light-element abundances, and the later distribution of galaxies. It is not an eyewitness film, and it does not start with a location in a larger room.",
    caption: "A hot early phase is part of the model. Inflation remains a well-motivated addition with unfinished details.",
    href: "/universe",
    visual: "timeline",
  },
  {
    id: "first-atoms",
    title: "The first atoms",
    kicker: "Chapter 2",
    narration:
      "Within minutes, the expanding plasma made hydrogen and helium nuclei. Hundreds of thousands of years later, electrons joined those nuclei. The universe became transparent, and the cosmic microwave background is the light from that moment, stretched by later expansion into microwaves.",
    caption: "Primordial nucleosynthesis and recombination are two different epochs. Helium came first; neutral atoms much later.",
    href: "/physics",
    visual: "timeline",
  },
  {
    id: "dark-ages",
    title: "The cosmic dark ages",
    kicker: "Chapter 3",
    narration:
      "After recombination, there were no stars yet. Hydrogen gas sat in the dark, slightly denser in some places than others because of earlier fluctuations. Those differences were tiny. Gravity had not yet built galaxies. Evidence for this era is indirect.",
    caption: "“Dark” means little starlight, not a lack of matter.",
    href: "/universe",
    visual: "web",
  },
  {
    id: "first-stars",
    title: "The first stars",
    kicker: "Chapter 4",
    narration:
      "Where gas grew dense enough, it collapsed and ignited. The first stars formed from hydrogen and helium alone, without the carbon and oxygen that later generations inherited. They are expected to have been massive. Individual first stars have not been watched as a class we can point to with certainty.",
    caption: "Population III stars are a prediction. Claims of a single detection should be read against the paper, not a headline.",
    href: "/stars",
    visual: "star",
  },
  {
    id: "first-galaxies",
    title: "The first galaxies",
    kicker: "Chapter 5",
    narration:
      "Stars gathered into galaxies. Webb has found bright, compact galaxies in the first few hundred million years, earlier and sometimes more massive than many models preferred. That tension is useful. It does not repeal expansion or the microwave background.",
    caption: "A distant galaxy image is light that left long ago. It is not a current portrait.",
    href: "/galaxies",
    visual: "galaxy-irregular",
  },
  {
    id: "elements",
    title: "Stellar elements",
    kicker: "Chapter 6",
    narration:
      "Stars fuse lighter nuclei into carbon, oxygen, and heavier elements up to iron. Supernovae and merging neutron stars make and scatter many of the rest. The calcium in bone and the iron in hemoglobin were assembled in stars that died before the Sun formed. That sentence is a summary of nuclear astrophysics, and it is one of the best-tested stories in the science.",
    caption: "Not every element has the same origin. Hydrogen is mostly primordial. Gold is not made in the Sun.",
    href: "/stars",
    visual: "red-giant",
  },
  {
    id: "disks",
    title: "The birth of planetary systems",
    kicker: "Chapter 7",
    narration:
      "Around young stars, disks of gas and dust settle into planets, moons, and leftover small bodies. We see disks with radio telescopes and, in a few cases, planets still embedded in them. The Solar System is one outcome, not the blueprint.",
    caption: "A protoplanetary disk is observed. The step-by-step assembly of a given planet inside it is modeled.",
    href: "/solar-system",
    visual: "sun",
  },
  {
    id: "solar-system",
    title: "Our Solar System",
    kicker: "Chapter 8",
    narration:
      "Eight planets, a swarm of moons, dwarf planets, asteroids, and comets orbit the Sun. Distances are so large that any picture you can hold has compressed them. The model in this atlas says so on the frame. Voyager, Cassini, New Horizons, and the Mars rovers are how we turned points of light into worlds.",
    caption: "The Oort cloud is a reasoned reservoir of distant comets, not a photographed shell.",
    href: "/solar-system",
    visual: "jupiter",
  },
  {
    id: "earth",
    title: "A planet that supports life",
    kicker: "Chapter 9",
    narration:
      "Earth is the only world where life is confirmed. Oceans, a magnetic field, plate tectonics, and a particular atmospheric history all matter. None of them is a universal rule we have checked on a second example. When we call another world habitable, we mean it might allow liquid water under assumptions, not that it has a biosphere.",
    caption: "Oxygen in Earth’s air is largely biological. Oxygen elsewhere would still need context.",
    href: "/astrobiology",
    visual: "earth-life",
  },
  {
    id: "search-life",
    title: "The search for life",
    kicker: "Chapter 10",
    narration:
      "Mars shows ancient water. Europa and Enceladus show evidence for oceans now. Titan has methane seas. Exoplanet astronomers look for atmospheric gases that might be hard to explain without life, and they are learning how often geology mimics those gases. No confirmed detection of extraterrestrial life exists.",
    caption: "A biosignature is a clue that has to survive alternatives. It is not a photograph of an organism.",
    href: "/astrobiology",
    visual: "europa",
  },
  {
    id: "black-holes",
    title: "Black holes",
    kicker: "Chapter 11",
    narration:
      "When enough mass is packed into a small region, light cannot climb out. Stellar-mass black holes are dead massive stars. Supermassive ones sit in galaxy centers. We see them through orbits, through X-rays from infalling gas, through gravitational waves, and, for two of them, through horizon-scale radio images. A black hole does not require a bright disk at every moment.",
    caption: "The shadow is larger than the event horizon. Hawking radiation is a prediction, negligible for known black holes.",
    href: "/black-holes",
    visual: "black-hole",
  },
  {
    id: "web",
    title: "The galactic web",
    kicker: "Chapter 12",
    narration:
      "Galaxies gather into groups, groups into clusters, and clusters line filaments around voids. The pattern is called the cosmic web. It grew from the small fluctuations in the microwave background under the pull of gravity, including dark matter. Filament boundaries are smoother in the real sky than in a textbook diagram.",
    caption: "A cluster is not a solid object. Most of the volume of the universe is nearly empty voids.",
    href: "/cosmic-structures",
    visual: "web",
  },
  {
    id: "horizon",
    title: "The observable horizon",
    kicker: "Chapter 13",
    narration:
      "Light has had about 13.8 billion years to reach us. Because space has expanded, the region we can see is about 93 billion light-years across, not 13.8. That region is the observable universe. It is not a claim that nothing exists beyond it. We simply cannot have received a signal from farther away yet.",
    caption: "Age and diameter answer different questions. Both numbers are model-dependent at a precision finer than the round figures used here.",
    href: "/universe",
    visual: "web",
  },
  {
    id: "future",
    title: "The far future",
    kicker: "Chapter 14",
    narration:
      "If dark energy behaves like a cosmological constant, expansion will continue to accelerate. Galaxies outside our local bound group will redshift out of reach. Stars will eventually exhaust their fuel. Heat death, a big rip, or a recollapse are scenarios with very different evidence behind them. Only the acceleration itself is measured. The far future is an extrapolation.",
    caption: "Scenarios are not schedules. The atlas labels them as theoretical.",
    href: "/universe",
    visual: "timeline",
  },
];

export const discoveries: DiscoveryItem[] = [
  {
    id: "artemis-data",
    date: "7 October 2026",
    title: "Artemis II lunar science data released",
    summary:
      "NASA published more than 800 gigabytes from the April 2026 crewed lunar flyby, including imagery, audio, and crew-annotated notes, through the Planetary Data System.",
    href: "https://www.nasa.gov/blogs/missions/2026/10/07/nasa-releases-artemis-ii-lunar-science-data-images/",
    org: "NASA",
  },
  {
    id: "artemis-ii",
    date: "1–11 April 2026",
    title: "Artemis II flew around the Moon",
    summary:
      "Four astronauts traveled beyond low Earth orbit for the first time since Apollo 17. The mission was a lunar flyby and a test of Orion, not a landing.",
    href: "https://www.nasa.gov/mission/artemis-ii/",
    org: "NASA",
  },
  {
    id: "sgr-image",
    date: "12 May 2022",
    title: "EHT image of Sagittarius A*",
    summary:
      "The Event Horizon Telescope resolved the ring around the Milky Way’s central black hole, a dynamical object that changes on minute timescales.",
    href: "https://eventhorizontelescope.org/",
    org: "Event Horizon Telescope",
  },
  {
    id: "webb-first",
    date: "12 July 2022",
    title: "Webb’s first full-color images",
    summary:
      "The James Webb Space Telescope released its first science images, including infrared views of nebulae and a deep field. Infrared data are not visible-light photographs recolored at random.",
    href: "https://webbtelescope.org/",
    org: "NASA / ESA / CSA",
  },
  {
    id: "m87-image",
    date: "10 April 2019",
    title: "First image of a black hole’s shadow",
    summary:
      "The EHT published the M87* ring. The result tests general relativity at the horizon scale of a six-billion-solar-mass black hole.",
    href: "https://eventhorizontelescope.org/",
    org: "Event Horizon Telescope",
  },
];

export const universeTopics = [
  {
    id: "what",
    title: "What is the universe?",
    body: "In this atlas the universe means all of space, time, matter, and energy that physics can in principle describe. The observable universe is the part from which light has had time to reach us. They are not synonyms. We have no measurement that places a center, and the standard models do not need one.",
  },
  {
    id: "age",
    title: "Age",
    body: "The best global fit, combining the Planck satellite’s microwave-background data with the standard cosmological model, gives an age of about 13.8 billion years. The uncertainty on that fit is much smaller than a billion years. A different model would move the number. The age is not the time since a point exploded at one location.",
  },
  {
    id: "bang",
    title: "The Big Bang model",
    body: "The model says the observable universe was hotter and denser in the past and has been expanding and cooling. Evidence: the cosmic microwave background, the abundances of light elements, and the redshift–distance relation. It does not, by itself, explain why there is a universe, and it does not require a prior explosion in empty space.",
  },
  {
    id: "inflation",
    title: "Inflation",
    body: "A brief early phase of accelerated expansion would explain why the microwave background is so uniform and why space looks geometrically flat. Specific inflation models differ, and a decisive detection of primordial gravitational waves has not been confirmed. Treat inflation as a strong framework with open details, not as a filmed prologue.",
  },
  {
    id: "cmb",
    title: "Cosmic microwave background",
    body: "A 2.725 kelvin bath of microwaves filling the sky, the cooled light from when the universe became transparent. Tiny hotter and colder spots match a spectrum of fluctuations. Planck mapped them with high precision. The map is a baby picture of density, not of galaxies already formed.",
  },
  {
    id: "geometry",
    title: "Geometry",
    body: "On the largest scales, space is close to flat: angles in a big triangle add to about 180 degrees. Planck constrains the curvature to be very small. “Flat” does not mean the universe is a disk, and it does not by itself prove the universe is infinite.",
  },
  {
    id: "web",
    title: "The cosmic web",
    body: "Galaxies trace filaments and clusters around voids. The pattern is what gravity does to slightly uneven dark matter and gas over billions of years. Supercluster names, including Laniakea, describe basins of gravitational flow. Their edges are definitions.",
  },
  {
    id: "futures",
    title: "Possible futures",
    body: "Continued acceleration, a coasting expansion, or a recollapse depend on dark energy’s behavior, which is measured only over the span of cosmic history we can see. Heat death is an extrapolation in which stars burn out and black holes eventually evaporate through Hawking radiation — the last step is theoretical and unfathomably remote. No scenario here is a scheduled event.",
  },
  {
    id: "open",
    title: "Open questions",
    body: "What is dark matter? What is dark energy? Why is the universe so close to flat and so uniform? How did supermassive black holes grow so quickly? Is inflation the right prologue? Is there one universe or a larger multiverse? The last of these is speculative: there is no confirmed observation of another universe. An honest atlas leaves these open.",
  },
];

export const astroTopics = [
  {
    title: "What “life” means here",
    body: "Astrobiology uses a working definition tied to chemistry we can recognize: a system that metabolizes, reproduces, and evolves. That definition is provisional. It is built from the one biosphere we know.",
  },
  {
    title: "Habitability is not habitation",
    body: "A habitable zone is the range of orbits where a rocky planet with a suitable atmosphere might sustain liquid water on its surface. Many such planets will be barren. Worlds outside that zone, including icy moons, can have liquid water under ice. The phrase is a filter for telescopes, not a census of life.",
  },
  {
    title: "Extremophiles",
    body: "Life on Earth occupies acidic springs, deep rock, and high radiation environments. That widens the range of conditions worth searching. It does not show that life starts easily, because every extremophile is still part of the same terrestrial origin.",
  },
  {
    title: "Mars",
    body: "Rovers have established ancient liquid water and organic molecules in rocks. Organic molecules are not organisms. No conclusive fossil or living community has been reported by NASA as a confirmed discovery.",
  },
  {
    title: "Ocean worlds",
    body: "Europa and Enceladus are the strongest Solar System cases for present-day liquid water in contact with rock. Enceladus’s plume has been sampled in flight. Neither moon has a confirmed biosphere.",
  },
  {
    title: "Biosignatures and technosignatures",
    body: "A biosignature is a measurement better explained by life than by geology or instrument error. Pairs of gases, seasonal changes, and context all matter. Technosignatures, such as radio transmissions, are a different search. A null result is a limit on the search, not a proof of solitude.",
  },
  {
    title: "Drake and Fermi",
    body: "The Drake equation organizes ignorance into factors. It is not a measurement. The Fermi question — if life is common, where is everybody? — has many proposed answers, from rarity of life to the limits of our searches. None is established.",
  },
];

export const physicsOrder = [
  "gravity",
  "orbits",
  "light-speed",
  "relativity",
  "quantum",
  "time-travel",
  "fusion",
  "spectrum",
  "redshift",
  "lensing",
  "expansion",
  "dark-matter",
  "dark-energy",
  "spectroscopy",
];
