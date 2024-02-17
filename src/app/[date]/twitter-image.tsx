import { ImageResponse } from 'next/og';
import { format, parseISO } from "date-fns";
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
			<div style={{
				background: '#0f172a',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
			}}>
				<div style={{
					width: '460px',
					height: '100%',
					padding: '48px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
					justifyContent: 'space-around'
				}}>
					<div style={{
						width: '100%',
						fontSize: 48,
						fontWeight: 'bold',
						color: '#f8fafc',
						textAlign: 'right'
					}}>
						{image.title}
					</div>
					<div style={{
						width: '100%',
						fontSize: 36,
						fontWeight: 'normal',
						color: '#e2e8f0',
						textAlign: 'right'
					}}>
						{format(parseISO(image.date), 'MMMM dd, yyyy')}
					</div>
				</div>
				<div style={{
					width: '740px',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					{/* eslint-disable-next-line */}
					<img
						src={
							image.media_type === 'video' ? image.thumbnail_url : image.url
						}
						width={740}
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