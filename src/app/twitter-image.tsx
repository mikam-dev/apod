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
			<div tw="flex w-full h-full bg-neutral-900">
				<div tw="flex flex-col w-1/3 h-full justify-center items-center space-y-8">
					<span tw="ml-auto mr-8 mt-2 mb-4 text-5xl text-neutral-50 text-right font-bold">
						{"Astronomy Picture of the Day"}
					</span>
				</div>
				<div tw="flex w-2/3 h-full justify-center items-center">
					{/* eslint-disable-next-line */}
					<img
						src={"https://apod.mikam.dev/location_search_re_ttoj.svg"}
						width={600}
						height={600}
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