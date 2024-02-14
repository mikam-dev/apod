import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default async function Home() {
  const image: APODImage = await getImage();
  const images: APODImage[] = await getImages();

  return (
    <main className="flex flex-col items-center justify-between bg-background min-h-[100vh] h-fit pb-8">
      <Hero>
        <div className="w-full md:w-[50%] p-4">
          <Image src={image.url} alt={image.title} width={600} height={400} className="w-full max-w-2xl h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-[50%] p-4">
          <h1 className="text-4xl font-bold mt-4 text-center md:text-start md:mt-0">{image.title}</h1>
          <p className="text-lg mt-4 text-center md:text-start">{image.date}</p>
          <p className="mt-4 text-ellipsis">{image.explanation}</p>
        </div>
      </Hero>
      <h2 className="font-semibold text-2xl">More Images</h2>
      <div className="w-full h-auto flex flex-row-reverse flex-wrap-reverse justify-evenly items-start p-4 sm:p-6 md:p-8 lg:p-12">
        {images.map((image, index) => (
          <div key={index} className="w-full h-fit flex flex-col justify-start items-start space-y-2 p-4 rounded-lg sm:w-1/2 lg:w-1/3 hover:bg-accent">
            <Image src={image.url} alt={image.title} width={600} height={400} className="w-full h-auto" />
            <h3 className="text-xl font-bold my-4">{image.title}</h3>
            <p className="text-sm text-muted-foreground">{image.date}</p>
            <p className="w-full max-h-[120px] text-wrap truncate ...">{image.explanation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const getImage = async (date?: string) => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  if (!date) {
    const today = new Date();
    date = today.toISOString().split('T')[0];
  }

  try {
    const image = await fetch(`${baseUrl}&date=${date}`, {
      method: 'GET',
      next: { revalidate: 600 }
    }).then((image) => image.json());

    return image;
  } catch (error) {
    console.error(error);
  }
}

const getImages = async (startDate?: string, endDate?: string) => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  if (!startDate || !endDate) {
    const yesterday = new Date();

    yesterday.setDate(yesterday.getDate() - 1);

    const twelveDaysAgo = new Date(yesterday);

    twelveDaysAgo.setDate(twelveDaysAgo.getDate() - 11);

    startDate = twelveDaysAgo.toISOString().split('T')[0];
    endDate = yesterday.toISOString().split('T')[0];
  }

  try {
    const images = await fetch(`${baseUrl}&start_date=${startDate}&end_date=${endDate}`, {
      method: 'GET',
      next: { revalidate: 600 }
    }).then((images) => images.json());

    return images;
  } catch (error) {
    console.error(error);
  }
}
