import { ImageResponse } from 'next/og';

export const runtime = 'edge'

export const alt = 'Astronomy Picture of the Day'
export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

export default async function Image() {

	return new ImageResponse(
		(
			<div
				style={{
					fontFamily: 'Inter',
					fontSize: 48,
					background: 'black',
					color: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div style={{
					width: '400px',
					height: '100%',
					padding: '48px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'right'
				}}>Astronomy Picture of the Day</div>
				<div style={{
					width: '800px',
					height: '100%',
					padding: '48px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					{/* eslint-disable-next-line */}
					<img src={"https://apod.mikam.dev/rocket.svg"} width={540} height={540} alt="Astronomy Picture of the Day" />
				</div>
			</div>
		),
		{
			...size,
		}
	)
}