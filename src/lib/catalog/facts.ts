import type { Certainty, Fact, SourceRef } from "./types";

export function fact(
  label: string,
  value: string,
  status: Certainty = "approximate",
  note?: string,
): Fact {
  return note ? { label, value, status, note } : { label, value, status };
}

export function src(org: string, title: string, url: string, year?: string): SourceRef {
  return { org, title, url, year };
}

export const FACTSHEET = "https://nssdc.gsfc.nasa.gov/planetary/factsheet/";
export const NASA_SS = "https://science.nasa.gov/solar-system/";
export const NASA_UNIVERSE = "https://science.nasa.gov/universe/";
export const EXOPLANET_ARCHIVE = "https://exoplanetarchive.ipac.caltech.edu/";
export const EHT = "https://eventhorizontelescope.org/";
export const PLANCK = "https://www.cosmos.esa.int/web/planck";
export const HUBBLE = "https://hubblesite.org/";
export const WEBB = "https://webbtelescope.org/";
