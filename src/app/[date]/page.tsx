import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '../actions';

export default async function Page({ params }: { params: { date: string } }) {
	const { date } = params;
	const image: APODImage = await getImage(date);

	return (
		<main className="flex flex-col items-center justify-between bg-muted min-h-[100vh] h-fit">
			<div className="w-full max-w-5xl h-auto flex flex-col bg-muted pb-4 items-center justify-start">
				<h1 className="w-full p-2 pb-4 bg-primary text-primary-foreground text-4xl font-bold text-center">{image.title}</h1>
				<h2 className="w-full p-2 bg-accent text-accent-foreground text-lg font-semibold text-center">{format(parseISO(image.date), 'MMMM dd, yyyy')}</h2>
				<div className="w-full flex flex-col items-center bg-popover text-popover-foreground p-4 lg:rounded-b-xl">
					{image.media_type === 'video' && (
						<iframe
							width={560}
							height={315}
							src={image.url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className={`w-full max-w-4xl h-auto rounded-xl`}></iframe>
					)}
					{image.media_type === 'image' && (
						<img
							src={image.url}
							alt="Astronomy picture of the day"
							width={800}
							height={450}
							className={`w-full max-w-4xl h-auto rounded-3xl`}
						/>
					)}
					{image.copyright && (
						<caption className={`w-full font-extralight text-sm mt-4 px-2`}>
							&copy; {image.copyright}
						</caption>
					)}
				</div>
				<div className="w-full p-4 flex flex-col justify-start items-center text-lg text-foreground">
					<p className="w-full px-2 max-w-4xl">{image.explanation}</p>
				</div>
				<div className="w-full p-4 space-x-2 flex justify-center items-center">
					<Link href={`/`}>
						<Button variant="default">Go Back</Button>
					</Link>
					{(image.media_type === 'image') && (
						<Link href={image.hdurl || image.url}>
							<Button variant="outline">View Image</Button>
						</Link>
					)}
				</div>
			</div>
		</main>
	)
}
