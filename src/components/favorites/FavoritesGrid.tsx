"use client";

import { useEffect } from "react";
import { usePromptStore } from "@/store";
import { ImageCard } from "../ui/images/ImageCard";
import { SadIcon } from "../ui/icons/SadIcon";

export const FavoritesGrid = () => {
  const { favorites, loadFavorites } = usePromptStore();
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <>
      {favorites.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <div className="opacity-20">
            <SadIcon/>
          </div>
          <h3 className="text-3xl text-white font-semibold mb-14 absolute mt-28">
            No favorites yet
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {favorites.map((favorite) => (
            <ImageCard key={favorite} image={favorite} isInFavorite />
          ))}
        </div>
      )}
    </>
  );
};
