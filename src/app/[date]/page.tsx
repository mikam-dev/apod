import Photo from '@/components/content/Photo';
import Video from '@/components/content/Video';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getImage } from '../actions';

export async function generateMetadata(
	{ params }: { params: { date: string } }
): Promise<Metadata> {
	// read route params
	const date = params.date

	// fetch data
	const image: APODImage = await getImage(date);

	return {
		title: image.title,
		description: image.explanation.split(' ', 20).join(' ') + '...',
	}
}

export default async function Page({ params }: { params: { date: string } }) {
	const { date } = params;
	const image: APODImage = await getImage(date);

	return (
		<>
			<>
				<h1 className="w-full max-w-5xl p-2 pb-4 bg-primary text-primary-foreground text-3xl font-bold text-center sm:text-4xl">{image.title}</h1>
				<h2 className="w-full max-w-5xl p-2 bg-accent text-accent-foreground text-md font-semibold text-center sm:text-lg">{format(parseISO(image.date), 'MMMM dd, yyyy')}</h2>
			</>
			<article className="w-full max-w-5xl h-auto flex flex-col bg-muted pb-4 items-center justify-start">
				<div className="w-full flex flex-col items-center bg-popover text-popover-foreground lg:p-4 lg:rounded-b-xl">
					{image.media_type === 'video' && (
						<Video title={image.title} url={image.url} className="rounded-none lg:rounded-2xl" />
					)}
					{image.media_type === 'image' && (
						<Photo title={image.title} url={image.url} className="rounded-none lg:rounded-2xl" />
					)}
					{image.copyright && (
						<caption className={`w-full font-extralight text-sm my-4 px-2 lg:mb-0`}>
							&copy; {image.copyright}
						</caption>
					)}
				</div>
				<div className="w-full p-4 flex flex-col justify-start items-center text-lg text-foreground space-y-2">
					{(image.media_type === 'image') && (
						<Link href={image.hdurl || image.url}>
							<Button variant="outline" className="text-sm pr-2 mb-2">
								View Image
								<sup>
									<ExternalLink className="ml-1 p-0 w-3 h-3" />
								</sup>
							</Button>
						</Link>
					)}
					<p className="w-full px-2 max-w-4xl">{image.explanation}</p>
				</div>
				<div className="w-full p-4 space-x-2 flex justify-center items-center">
					<Link href={`/`}>
						<Button variant="default">Go Back</Button>
					</Link>
				</div>
			</article>
		</>
	)
}
