"use client";

import { FC } from "react";
import Image from "next/image";
import { usePromptStore } from "@/store";

interface ImageCardProps {
  image: string;
  isInFavorite?: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({ image, isInFavorite }) => {
  const { deleteImage, addFavorites } = usePromptStore();

  const handleAddFavorite = (image: string) => {
    addFavorites(image);
  };

  return (
    <div className={`w-full h-fulflex`}>
      <figure>
        <Image
          className={`animate__animated animate__fadeIn rounded-lg`}
          src={image}
          width={300}
          height={300}
          alt={image}
          loader={({ src }) => src}
          unoptimized
          priority
        />
      </figure>
      <div className="flex justify-between text-white mt-2">
        <button
          className={` border-[1px] px-4 py-1  font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-300 ease-in-out ${
            !isInFavorite ? "" : "w-full"
          }`}
          onClick={() => deleteImage(image)}
        >
          Delete
        </button>
        <button
          className={`${
            !isInFavorite
              ? "hover:bg-white hover:text-black transition-colors duration-300 ease-in-out border-[1px] font-semibold px-4 py-1 rounded-md"
              : ""
          }`}
          onClick={() => handleAddFavorite(image)}
        >
          {isInFavorite ? "" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};
