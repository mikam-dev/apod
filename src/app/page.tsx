import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default async function Home() {
  const data: APODImage = await getImage();

  return (
    <main className="flex bg-background min-h-[100vh] pb-8 flex-col items-center justify-between">
      <Hero>
        <div className="w-full md:w-[50%] p-4">
          <Image src={data.url} alt={data.title} width={600} height={400} className="w-full max-w-2xl h-auto" />
        </div>
        <div className="w-full md:w-[50%] p-4">
          <h1 className="text-4xl font-bold mt-4 text-center md:text-start">{data.title}</h1>
          <p className="mt-4">{data.explanation}</p>
        </div>
      </Hero>
    </main>
  );
}

const getImage = async () => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  try {
    const res = await fetch(`${baseUrl}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
