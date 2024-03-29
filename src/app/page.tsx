import APOD from "@/components/content/APOD";
import ImageGrid from "@/components/content/ImageGrid";
import { getImage, getRandomImages } from "./actions";

export default async function Page() {
  const image: APODImage = await getImage();
  const images: APODImage[] = await getRandomImages();

  return (
    <>
      <APOD defaultImage={image} />
      <ImageGrid images={images} />
    </>
  );
}
