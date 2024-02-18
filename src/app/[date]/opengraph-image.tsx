import { format, parseISO } from "date-fns";
import { ImageResponse } from 'next/og';
import { getImage } from "../actions";

export const runtime = 'edge'

export const alt = 'Astronomy Picture of the Day'
export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { date: string } }) {
	const { date } = params;
	const image: APODImage = await getImage(date);

	return new ImageResponse(
		(
			<div tw="flex w-full h-full bg-neutral-900">
				<div tw="flex flex-col w-1/3 h-full justify-center items-center space-y-8">
					<span tw="ml-auto mr-8 mt-2 mb-4 text-5xl text-neutral-50 text-right font-bold">
						{image.title}
					</span>
					<span tw="ml-auto mr-8 mt-2 text-2xl text-neutral-200 text-right">
						{format(parseISO(image.date), 'MMMM dd, yyyy')}
					</span>
				</div>
				<div tw="flex w-2/3 h-full justify-center items-center">
					{/* eslint-disable-next-line */}
					<img
						src={
							image.media_type === 'video' ? image.thumbnail_url : image.url
						}
						width={800}
						height={630}
						alt={image.title}
					/>
				</div>
			</div>
		),
		{
			...size,
		}
	)
}
