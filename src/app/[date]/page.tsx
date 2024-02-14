import Section from '@/components/layout/Section';
import { getImage } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

export default async function APODPage({ params }: { params: { date: string } }) {
	const { date } = params;
	const image: APODImage = await getImage(date);

	return (
		<Section>
			<div className="w-full h-auto flex flex-col items-center justify-center space-y-4">
				<h1 className="text-4xl font-bold">{image.title}</h1>
				<h2 className="text-2xl font-semibold">{format(parseISO(image.date), 'MMMM dd, yyyy')}</h2>
				<Image src={image.url} alt={image.title} width={600} height={400} className="w-full h-auto rounded-lg" />
				<p className="w-full max-w-2xl text-lg">{image.explanation}</p>
			</div>
		</Section>
	)
}
