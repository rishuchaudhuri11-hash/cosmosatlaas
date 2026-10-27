export type Certainty =
  | "verified"
  | "approximate"
  | "model"
  | "hypothesis"
  | "theoretical"
  | "candidate";

export type CategoryId =
  | "star"
  | "planet"
  | "dwarf-planet"
  | "moon"
  | "exoplanet"
  | "galaxy"
  | "nebula"
  | "black-hole"
  | "small-body"
  | "cluster"
  | "extreme";

export type VisualKind =
  | "sun"
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "moon"
  | "io"
  | "europa"
  | "ganymede"
  | "callisto"
  | "titan"
  | "enceladus"
  | "triton"
  | "phobos"
  | "pluto"
  | "ceres"
  | "asteroid"
  | "comet"
  | "star"
  | "red-giant"
  | "neutron"
  | "galaxy-spiral"
  | "galaxy-barred"
  | "galaxy-elliptical"
  | "galaxy-irregular"
  | "nebula-emission"
  | "nebula-planetary"
  | "nebula-remnant"
  | "black-hole"
  | "exoplanet"
  | "cluster";

export interface Fact {
  label: string;
  value: string;
  status: Certainty;
  note?: string;
}

export interface SourceRef {
  org: string;
  title: string;
  url: string;
  year?: string;
}

export interface Metrics {
  radiusKm?: number;
  massKg?: number;
  tempK?: number;
  distanceLy?: number;
  spanLy?: number;
}

export interface CelestialObject {
  slug: string;
  name: string;
  aliases: string[];
  category: CategoryId;
  classification: string;
  catalogId?: string;
  summary: string;
  minute: string;
  understand: string;
  deep: string;
  facts: Fact[];
  discovery?: string;
  structure?: string;
  scale?: string;
  related: string[];
  sources: SourceRef[];
  visual: VisualKind;
  visualKindLabel: string;
  metrics?: Metrics;
  keywords?: string[];
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  minute: string;
  analogy: string;
  deep: string;
  equation?: string;
  misconception: string;
  related: string[];
  sources: SourceRef[];
  queries: string[];
}

export interface Mission {
  slug: string;
  name: string;
  status: "completed" | "active" | "in-development";
  years: string;
  summary: string;
  targets: string[];
  sources: SourceRef[];
}

export interface TimelineEvent {
  id: string;
  era: string;
  when: string;
  title: string;
  body: string;
  certainty: Certainty;
  href?: string;
}

export interface Chapter {
  id: string;
  title: string;
  kicker: string;
  narration: string;
  caption: string;
  href: string;
  visual: VisualKind | "timeline" | "earth-life" | "web";
}

export interface DiscoveryItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  org: string;
}

export interface SearchHit {
  kind: "object" | "lesson" | "mission" | "chapter" | "page";
  title: string;
  href: string;
  category: string;
  summary: string;
}
