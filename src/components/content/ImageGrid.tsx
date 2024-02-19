import { format, parseISO } from "date-fns";
import Link from "next/link";
import Photo from "./Photo";
import Video from "./Video";

export async function ImageGrid({ images }: { images: APODImage[] }) {

	return (
		<>
			<h2 className="w-full text-center bg-background font-semibold text-2xl pb-2 pt-2 mt-8 sm:pt-4 sm:mt-10 md:pt-6 md:mt-12 lg:text-3xl lg:mt-16 xl:mt-20">More Images</h2>
			<section className="w-full h-auto bg-background grid grid-flow-dense grid-cols-1 p-4 sm:p-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
				{images && images.map((image, index) => (
					<Link href={`/${image.date}`} key={index} passHref>
						<div className="w-full h-fit flex flex-col justify-start items-start space-y-2 p-4 rounded-xl hover:bg-secondary hover-text-secondary-foreground">
							{image.media_type === 'video' && (
								<Video title={image.title} url={image.url} />
							)}
							{image.media_type === 'image' && (
								<Photo title={image.title} url={image.url} />
							)}
							<h3 className="text-xl font-bold my-4">{image.title}</h3>
							<p className="text-sm text-muted-foreground">{format(parseISO(image.date), 'MMMM dd, yyyy')}</p>
							<p className="w-full text-wrap">
								{image.explanation.split(' ', 35).join(' ') + '...'}
							</p>
						</div>
					</Link>
				))}
			</section>
		</>
	)
}

export default ImageGrid