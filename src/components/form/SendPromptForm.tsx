export const SendPromptForm = () => {
  return (
    <form className="flex items-center justify-center gap-1">
      <input
        type="text"
        className="bg-dark_gray text-white p-4 rounded-md mt-5 w-full focus:outline-none focus:ring-turquoise focus:ring-[1px] focus:border-transparent"
        placeholder="Enter a prompt..."
      />
      <button className="bg-blue-900 py-4 px-6 rounded-lg mt-5 text-white hover:bg-blue-950 transition-colors duration-300 ease-in-out">
        Search
      </button>
    </form>
  );
};
