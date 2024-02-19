/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'apod.nasa.gov' },
			{ hostname: '**.nasa.gov' },
			{ hostname: 'api.nasa.gov' },
			{ hostname: 'youtube.com' },
			{ hostname: 'img.youtube.com' },
			{ hostname: 'i.ytimg.com' },
			{
				protocol: 'http',
				hostname: 'localhost'
			}
		]
	}
}

export default nextConfig
