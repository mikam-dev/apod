import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
// import Image from 'next/image';
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
		<main className="flex flex-col items-center justify-between bg-muted min-h-[100vh] h-fit">
			<div className="w-full max-w-5xl h-auto flex flex-col bg-muted pb-4 items-center justify-start">
				<h1 className="w-full p-2 pb-4 bg-primary text-primary-foreground text-4xl font-bold text-center">{image.title}</h1>
				<h2 className="w-full p-2 bg-accent text-accent-foreground text-lg font-semibold text-center">{format(parseISO(image.date), 'MMMM dd, yyyy')}</h2>
				<div className="w-full flex flex-col items-center bg-popover text-popover-foreground lg:p-4 lg:rounded-b-xl">
					{image.media_type === 'video' && (
						<iframe
							width={560}
							height={315}
							src={image.url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className={`w-full max-w-4xl h-auto lg:rounded-xl`}></iframe>
					)}
					{image.media_type === 'image' && (
						/* eslint-disable-next-line */
						<img
							src={image.url}
							alt={image.title}
							width={800}
							height={450}
							className={`w-full max-w-4xl h-auto lg:rounded-2xl`}
						/>
						// <Image
						// 	src={image.url}
						// 	alt={image.title}
						// 	width={800}
						// 	height={450}
						// 	className={`w-full max-w-4xl h-auto lg:rounded-2xl`}
						// />
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
								<sup><ExternalLink className="ml-1 p-0 w-3 h-3" /></sup>
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
			</div>
		</main>
	)
}
