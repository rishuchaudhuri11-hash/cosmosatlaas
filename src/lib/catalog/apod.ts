import { createServerFn } from "@tanstack/react-start";

export interface ApodLive {
  mode: "live";
  title: string;
  date: string;
  explanation: string;
  url: string;
  mediaType: string;
  credit: string;
}

export interface ApodFallback {
  mode: "fallback";
  reason: string;
  title: string;
  date: string;
  explanation: string;
  href: string;
}

export type ApodResult = ApodLive | ApodFallback;

const fallback: ApodFallback = {
  mode: "fallback",
  reason: "NASA’s Astronomy Picture of the Day did not respond in time. The card below is a curated, dated release — not a live image.",
  title: "Artemis II lunar science data",
  date: "7 October 2026",
  explanation:
    "NASA released more than 800 gigabytes from the April 2026 crewed lunar flyby, including images, video, and crew audio, into the Planetary Data System.",
  href: "https://www.nasa.gov/blogs/missions/2026/10/07/nasa-releases-artemis-ii-lunar-science-data-images/",
};

export const fetchApod = createServerFn({ method: "GET" }).handler(async (): Promise<ApodResult> => {
  try {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
      signal: AbortSignal.timeout(4500),
      headers: { accept: "application/json" },
    });
    if (!response.ok) return { ...fallback, reason: `NASA APOD returned status ${response.status}. Showing a curated release instead.` };
    const data = (await response.json()) as {
      title?: string;
      date?: string;
      explanation?: string;
      url?: string;
      hdurl?: string;
      media_type?: string;
      copyright?: string;
    };
    if (!data.title || !data.date || !data.explanation || !data.url) return fallback;
    return {
      mode: "live",
      title: data.title,
      date: data.date,
      explanation: data.explanation,
      url: data.url,
      mediaType: data.media_type ?? "other",
      credit: data.copyright ? `${data.copyright} / NASA APOD` : "NASA Astronomy Picture of the Day",
    };
  } catch {
    return fallback;
  }
});
