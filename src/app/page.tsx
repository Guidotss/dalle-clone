import { OpenAiIcon, SendPromptForm } from "@/components";


export default function Home() {
  return (
    <main>
      <header>
          <div className="flex items-center gap-2">
            <OpenAiIcon/>
            <h1 className="text-white text-4xl font-semibold tracking-wide">DALL·E</h1>
          </div>
      </header>
      <section className="flex flex-col justify-center items-center mt-10">
        <header>
          <h2 className="text-turquoise text-2xl font-semibold tracking-wide">DALL·E is a simple image generation API.</h2>
          <SendPromptForm/>
        </header>
      </section>
    </main>
  )
}
