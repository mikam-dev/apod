"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
	return (
		<main className="flex flex-col items-center justify-start pt-12 bg-muted min-h-[100vh] h-fit space-y-2">
			<div className="p-2">
				<Link href="/2021-10-28">
					<Button variant="ghost" className="text-muted-foreground h-fit text-4xl sm:text-5xl md:text-6xl">404</Button>
				</Link>
				<span className="text-4xl sm:text-5xl md:text-6xl">Not Found</span>
			</div>
			<Image
				src="/location_search_re_ttoj.svg"
				alt="404 Not Found"
				width={400}
				height={400}
				priority
				className="w-full p-2 h-auto max-w-sm sm:max-w-md md:max-w-lg"
			/>
			<div className="p-2">
				<Link href={`/`}>
					<Button variant="default">Go Home</Button>
				</Link>
			</div>
		</main>
	)
}
