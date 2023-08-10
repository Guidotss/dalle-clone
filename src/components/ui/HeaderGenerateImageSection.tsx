"use client";
import { usePromptStore } from "@/store";
import { SendPromptForm } from "../form/SendPromptForm";

export const HeaderGenerateImageSection = () => {
  const { deleteAll } = usePromptStore();

  return (
    <header className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-turquoise text-2xl font-semibold tracking-wide">
          DALL·E is a simple image generation API.
        </h2>
        <SendPromptForm />
      </div>
      <div className="flex  justify-end md:px-48 mt-10 md:mt-0">
        <span
          className="text-white text-lg underline underline-offset-4 decoration-turquoise cursor-pointer"
          onClick={() => deleteAll()}
        >
          Delete All
        </span>
      </div>
    </header>
  );
};
