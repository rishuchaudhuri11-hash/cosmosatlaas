export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: title === "COSMOS ATLAS" ? title : `${title} — COSMOS ATLAS` },
      { name: "description", content: description },
    ],
  };
}
