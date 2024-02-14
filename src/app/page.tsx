import APOD from "@/components/content/APOD";
import { getImage, getImages } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const image: APODImage = await getImage();
  const images: APODImage[] = await getImages();

  return (
    <main className="flex flex-col items-center justify-between bg-background min-h-[100vh] h-fit pb-8">
      <APOD />
      <h2 className="font-semibold text-2xl mt-4">More Images</h2>
      <div className="w-full h-auto grid grid-flow-dense grid-cols-1 p-4 sm:p-6 md:p-8 md:grid-cols-2 lg:p-12 lg:grid-cols-3">
        {images.map((image, index) => (
          <Link href={`/${image.date}`} key={index} passHref>
            <div className="w-full h-fit flex flex-col justify-start items-start space-y-2 p-4 rounded-lg hover:bg-secondary hover-text-secondary-foreground">
              <Image src={image.url} alt={image.title} width={600} height={400} className="w-full h-auto rounded-sm" />
              <h3 className="text-xl font-bold my-4">{image.title}</h3>
              <p className="text-sm text-muted-foreground">{format(parseISO(image.date), 'MMMM dd, yyyy')}</p>
              <p className="w-full max-h-[120px] text-wrap truncate ...">{image.explanation}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
