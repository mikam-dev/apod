"use client"
import Image from 'next/image';

export default function Error() {
	return (
		<main className="flex flex-col items-center justify-start pt-12 bg-muted min-h-[100vh] h-fit">
			<Image
				src="/location_search_re_ttoj.svg"
				alt="404 Not Found"
				width={400}
				height={400}
				priority
				className="w-full max-w-lg h-auto"
			/>
			<p className="text-2xl p-2 mt-2 text-center">We searched the universe, but couldn&apos;t find a photo.</p>
		</main>
	)
}
