import {
  HeaderGenerateImageSection,
  ImagesGrid,
  OpenAiIcon,
} from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <OpenAiIcon />
            <h1 className="text-white md:text-4xl text-2xl font-semibold tracking-wide">
              DALL·E
            </h1>
          </div>
          <Link href="/favorites" className="text-white text-2xl">
            Favorites
          </Link>
        </div>
      </header>
      <section className="flex flex-col justify-center items-center mt-10 w-full">
        <HeaderGenerateImageSection />
        <section className="w-full flex items-center justify-center">
          <ImagesGrid />
        </section>
      </section>
    </main>
  );
}
