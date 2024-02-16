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
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div style={{
					background: 'black',
					color: 'white',
					width: '400px',
					height: '100%',
					padding: '36px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'right'
				}}>Astronomy Picture of the Day</div>
				<div style={{
					width: '800px',
					height: '100%',
					padding: '36px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<img src={"https://apod.mikam.dev/rocket.svg"} width={600} height={600} />
				</div>
			</div>
		),
		{
			...size,
		}
	)
}