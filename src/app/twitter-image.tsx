import { getImage } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ImageResponse } from 'next/og';

export const runtime = 'edge'

export const alt = 'Astronomy Picture of the Day'
export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

const inter = Inter({ subsets: ["latin"] });

export default async function Image() {
	const image: APODImage = await getImage();

	return new ImageResponse(
		(
			<div
				style={{
					fontFamily: inter + ', sans-serif',
					fontSize: 48,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{image.media_type === 'image' && (
					<img src={image.url} alt={image.title} />
				)}
				{image.media_type === 'video' && (
					<img src={image.thumbnail_url} alt={image.title} />
				)}
			</div>
		),
		{
			...size,
		}
	)
}