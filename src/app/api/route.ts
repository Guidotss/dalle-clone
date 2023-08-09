import { Configuration, OpenAIApi } from "openai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return new Response(
      JSON.stringify({ ok: false, message: "Bad request, prompt is required" }),
      {
        status: 400,
      }
    );
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY ?? "",
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data.data[0].url;

    return new Response(JSON.stringify({ ok: true, imageUrl }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
