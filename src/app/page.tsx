import APOD from "@/components/content/APOD";
import { getImages } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const image: APODImage = await getImage();
  const images: APODImage[] = await getImages();

  return (
    <main className="flex flex-col items-center justify-between bg-background min-h-[100vh] h-fit pb-8">
      <APOD />
      <h2 className="font-semibold text-2xl mt-4">More Images</h2>
      <div className="w-full h-auto grid grid-flow-dense grid-cols-1 p-4 sm:p-6 md:p-8 md:grid-cols-2 lg:p-12 lg:grid-cols-3">
        {images && images.map((image, index) => (
          <Link href={`/${image.date}`} key={index} passHref>
            <div className="w-full h-fit flex flex-col justify-start items-start space-y-2 p-4 rounded-lg hover:bg-secondary hover-text-secondary-foreground">
              {image.media_type === 'video' && (
                <iframe
                  width={560}
                  height={315}
                  src={image.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={`w-full max-w-xl mb-2 rounded-xl`}></iframe>
              )}
              {image.media_type === 'image' && (
                <Image
                  src={image.url}
                  alt="Astronomy picture of the day"
                  width={800}
                  height={450}
                  priority
                  className={`w-full max-w-xl h-auto mb-2 rounded-xl`}
                />
              )}
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
