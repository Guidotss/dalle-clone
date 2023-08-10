"use client";

import { useEffect } from 'react';
import { usePromptStore } from "@/store";
import { ImageCard } from "./ImageCard";
import "animate.css"; 

export const ImagesGrid = () => {
  const { history, loadPrompts, loadFavorites } = usePromptStore();

  useEffect(() =>  {
    loadPrompts(); 
  },[]); 

  useEffect(() =>  {
    loadFavorites();
  },[]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-3">
      {history?.map((image) => (
        <ImageCard
          key={image}
          image={image}
        />
      ))}
    </div>
  );
};
