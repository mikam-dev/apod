import { ImageResponse } from 'next/og';

// export const runtime = 'edge'

export const alt = 'Astronomy Picture of the Day'
export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

export default async function Image() {

	return new ImageResponse(
		(
			<div style={{
				fontFamily: 'Inter',
				fontSize: 48,
				fontWeight: 'bold',
				background: '#171717',
				color: '#fafafa',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
			}}>
				<div style={{
					width: '460px',
					height: '100%',
					padding: '50px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'right'
				}}>
					<span>Astronomy Picture of the Day</span>
				</div>
				<div style={{
					width: '740px',
					height: '100%',
					padding: '50px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					{/* eslint-disable-next-line */}
					<img
						src={"https://apod.mikam.dev/rocket.svg"}
						width={500}
						height={500}
						alt="Astronomy Picture of the Day"
					/>
				</div>
			</div>
		),
		{
			...size,
		}
	)
}