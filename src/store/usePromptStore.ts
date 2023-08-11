import { toast } from "react-hot-toast";
import { create } from "zustand";

interface PromptStore {
  prompts: string[];
  history: string[];
  favorites: string[];
  loading: boolean;
  setLoading: () => void;
  sendPrompt: (prompt: string) => Promise<void>;
  loadPrompts: () => void;
  loadFavorites: () => void;
  deleteAll: () => void;
  deleteImage: (image: string) => void;
  addFavorites: (image: string) => void;
}

export const usePromptStore = create<PromptStore>((set, get) => ({
  prompts: [],
  history: [],
  favorites: [],
  loading: false,

  sendPrompt: async (prompt: string) => {
    try {
      const { setLoading } = get();

      setLoading();

      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.ok) {
        setLoading();
        set((state) => {
          if (state.prompts.includes(prompt)) {
            return {
              prompts: [...state.prompts],
              history: [...state.history, data.imageUrl],
            };
          }
          return {
            prompts: [...state.prompts, prompt],
            history: [...state.history, data.imageUrl],
          };
        });
        localStorage.setItem("history", JSON.stringify(get().history));
        localStorage.setItem("promps", JSON.stringify(get().prompts));
      }
    } catch (error) {
      console.log(error);
    }
  },
  setLoading: () => set((state) => ({ loading: !state.loading })),
  loadPrompts: () => {
    const history = localStorage.getItem("history");
    const promps = localStorage.getItem("promps");

    if (history && promps) {
      set({ history: JSON.parse(history), prompts: JSON.parse(promps) });
    }
  },

  deleteAll: () => {
    localStorage.removeItem("history");
    localStorage.removeItem("promps");
    localStorage.removeItem("favorites");
    set({ history: [], prompts: [], favorites: [] });
  },

  deleteImage: (image: string) => {
    const { history } = get();
    const newHistory = history.filter((item) => item !== image);
    const newFavorites = get().favorites.filter((item) => item !== image);
    set({
      history: newHistory,
      favorites: newFavorites,
    });
    localStorage.setItem("history", JSON.stringify(get().history));
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },

  addFavorites: (image: string) => {
    const { favorites } = get();
    if (favorites.includes(image)) {
      toast.error("Image already in favorites", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 2000,
      });
      return;
    }
    toast.success("Image added to favorites", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 2000,
    });
    set({ favorites: [...favorites, image] });
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  loadFavorites: () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      set({ favorites: JSON.parse(favorites) });
    }
  },
}));
