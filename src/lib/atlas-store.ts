import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AtlasState {
  saved: string[];
  toggle: (slug: string) => void;
  labels: boolean;
  setLabels: (value: boolean) => void;
  introSeen: boolean;
  setIntroSeen: (value: boolean) => void;
}

export const useAtlas = create<AtlasState>()(
  persist(
    (set, get) => ({
      saved: [],
      toggle: (slug) => {
        const saved = get().saved;
        set({
          saved: saved.includes(slug) ? saved.filter((item) => item !== slug) : [...saved, slug],
        });
      },
      labels: true,
      setLabels: (labels) => set({ labels }),
      introSeen: false,
      setIntroSeen: (introSeen) => set({ introSeen }),
    }),
    { name: "cosmos-atlas" },
  ),
);
