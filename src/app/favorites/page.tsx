import { FavoritesGrid, OpenAiIcon } from "@/components";
import Link from "next/link";

export default function Pag() {
  return (
    <main>
      <header className="mb-10">
        <div className="flex gap-2">
          <OpenAiIcon />
          <Link href="/">
            <h1 className="text-white text-4xl font-semibold tracking-wide">
              DALL·E
            </h1>
          </Link>
        </div>
      </header>
      <section className="flex flex-col justify-center items-center mt-32 w-full">
        <header>
          <h3 className="text-5xl text-white font-semibold mb-14">Favorites</h3>
        </header>
        <FavoritesGrid />
      </section>
    </main>
  );
}
