import { getImage } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

export default async function APODPage({ params }: { params: { date: string } }) {
	const { date } = params;
	const image: APODImage = await getImage(date);

	if (!image) return (
		<div className="w-full h-[92vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted md:bg-gradient-to-r">
			<svg className="animate-spin h-12 w-12 text-foreground" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
			</svg>
		</div>
	)

	return (
		<main className="flex flex-col items-center justify-between bg-secondary min-h-[100vh] h-fit">
			<div className="w-full max-w-6xl h-auto flex flex-col bg-muted bg-opacity-60 py-4 items-center justify-start">
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
						className={`w-full max-w-4xl h-auto mb-2 p-4 rounded-3xl`}
					/>
				)}
				{image.copyright && (
					<caption className={`font-extralight text-sm mb-2 py-2`}>
						&copy; {image.copyright}
					</caption>
				)}
				<h1 className="w-full p-2 pb-4 bg-primary text-primary-foreground text-4xl font-bold text-center">{image.title}</h1>
				<h2 className="w-full p-2 bg-accent text-accent-foreground text-lg font-semibold text-center">{format(parseISO(image.date), 'MMMM dd, yyyy')}</h2>
				<div className="w-full p-4 flex flex-col justify-start items-center text-lg text-foreground">
					<p className="w-full max-w-4xl">{image.explanation}</p>
				</div>
			</div>
		</main>
	)
}
