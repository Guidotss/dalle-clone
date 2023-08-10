"use client";
import { useState } from "react";
import { usePromptStore } from "@/store";
import { Loader } from "../ui/icons/Loader";

export const SendPromptForm = () => {
  const [input, setInput] = useState<string>("");
  const { sendPrompt, prompts, loading } = usePromptStore();

  const handleSendPrompt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input == "") return;
    sendPrompt(input);
    setInput("");
  };

  const handleClickPrompt = (prompt: string) => {
    sendPrompt(prompt);
  };

  return (
    <div className="flex flex-col w-full md:w-[500px]">
      <form
        className="flex items-center justify-center gap-1"
        onSubmit={handleSendPrompt}
      >
        <input
          type="text"
          className="bg-dark_gray text-white p-4 rounded-md mt-5 w-full focus:outline-none focus:ring-turquoise focus:ring-[1px] focus:border-transparent"
          placeholder="Enter a prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={`${
            loading ? "bg-white bg-opacity-10" : "bg-blue-900"
          } py-4 px-6 rounded-lg mt-5 text-white hover:bg-blue-950 transition-colors duration-300 ease-in-out`}
          type="submit"
          disabled={loading}
        >
          {loading ? <Loader /> : "Search"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        {prompts?.map((prompt, index) => (
          <span
            key={index}
            className="text-white text-sm cursor-pointer px-3 py-2 border-[1px] rounded-lg hover:opacity-70 transition-opacity duration-300 ease-in-out"
            onClick={() => handleClickPrompt(prompt)}
          >
            {prompt}
          </span>
        ))}
      </div>
    </div>
  );
};
