"use client";

import { usePromptStore } from "@/store";
import { ImageCard } from "../ui/images/ImageCard";
import { useEffect } from "react";

export const FavoritesGrid = () => {
  const { favorites, loadFavorites } = usePromptStore();
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {favorites.map((favorite) => (
        <ImageCard key={favorite} image={favorite} isInFavorite/>
      ))}
    </div>
  );
};
