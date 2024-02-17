import { getImage } from "@/lib/utils";
import { ImageResponse } from 'next/og';

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
			<div
				style={{
					background: 'black',
					color: 'white',
					fontFamily: 'Inter',
					fontSize: 48,
					fontWeight: 'bold',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
				}}>
				<div
					style={{
						width: '400px',
						height: '100%',
						padding: '48px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'right'
					}}>{image.title}</div>
				<div
					style={{
						width: '800px',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					{/* eslint-disable-next-line */}
					<img src={
						image.media_type === 'video' ? image.thumbnail_url : image.url
					} width={800} height={630} alt={image.title} />
				</div>
			</div>
		),
		{
			...size,
		}
	)
}
