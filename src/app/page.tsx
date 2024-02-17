import APOD from "@/components/content/APOD";
import ImageGrid from "@/components/content/ImageGrid";
import { getImage, getRandomImages } from "./actions";

export default async function Page() {
  const image: APODImage = await getImage();
  const images: APODImage[] = await getRandomImages();

  return (
    <main className="flex flex-col items-center justify-between bg-background min-h-[100vh] h-fit pb-8">
      <APOD defaultImage={image} />
      <ImageGrid images={images} />
    </main>
  );
}
