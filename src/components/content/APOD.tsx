"use client"
import { getImage } from "@/app/actions";
import { format, parseISO } from "date-fns";
// import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Section from '../layout/Section';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { DatePicker } from '../ui/date-picker';
import { Skeleton } from '../ui/skeleton';

export default function APOD({ defaultImage }: { defaultImage: APODImage }) {
	const [isLoading, setIsLoading] = useState(true);
	const [image, setImage] = useState<APODImage>(defaultImage);
	const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

	useEffect(() => {
		setIsLoading(true);
		getImage(date.toString()).then((image) => {
			setImage(image);
		})
	}, [date])

	return (
		<>
			<span className="w-full min-h-fit p-4 flex flex-col items-center justify-center bg-gradient-to-b from-card to-background sm:pt-6 md:pt-8 xl:pt-12">
				<h2 className="font-extrabold text-3xl text-center p-2 mb-2 bg-gradient-to-b from-muted-foreground to-foreground inline-block text-transparent bg-clip-text sm:text-4xl md:text-5xl lg:text-6xl">Astronomy Picture of the Day
				</h2>

				<DatePicker onDateChange={(date: string) => {
					setDate(date);
					console.log(date);
				}}
				/>
			</span>
			<Section rx>
				<div className="w-full h-auto flex flex-col items-center justify-start md:p-4 md:w-[50%] md:max-w-2xl">
					{isLoading && <Skeleton className="w-full max-w-xl min-h-[35vh] mb-2 rounded-none md:rounded-2xl md:h-[75vh]" />}
					{image.media_type === 'video' && (
						<iframe
							onLoad={() => setIsLoading(false)}
							width={560}
							height={315}
							src={image.url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className={`w-full max-w-xl mb-2 md:rounded-2xl ${isLoading && 'hidden'}`}></iframe>
					)}
					{image.media_type === 'image' && (
						/* eslint-disable-next-line */
						<img
							onLoad={() => setIsLoading(false)}
							src={image.url}
							alt={image.title}
							width={800}
							height={450}
							className={`w-full max-w-xl h-auto mb-2 md:rounded-2xl ${isLoading && 'hidden'}`}
						/>
						// <Image
						// 	onLoad={() => setIsLoading(false)}
						// 	src={image.url}
						// 	alt={image.title}
						// 	width={800}
						// 	height={450}
						// 	className={`w-full max-w-xl h-auto mb-2 md:rounded-2xl ${isLoading && 'hidden'}`}
						// />
					)}
					{image.copyright && (
						<caption className={`p-2 font-extralight text-sm ${isLoading && 'hidden'}`}>
							&copy; {image.copyright}
						</caption>
					)}
				</div>

				<div className="w-full h-auto flex flex-col items-center justify-start pb-4 md:p-4 md:w-[50%] md:max-w-2xl">
					{isLoading ? <Skeleton className="w-full max-w-xl min-h-[35vh] rounded-2xl mx-4 md:mx-0 md:h-[75vh]" /> : (
						<Card className="border-none rounded-2xl mx-4 md:mx-0">
							<CardHeader>
								<CardTitle className={`text-center sm:text-3xl md:text-start md:text-4xl lg:text-5xl`}>{image.title}</CardTitle>
								<CardDescription className="self-center md:self-start">
									{image.date && !isNaN(Date.parse(image.date)) ? format(parseISO(image.date), 'MMMM dd, yyyy') : 'Invalid date'}
								</CardDescription>
							</CardHeader>
							<CardContent>{image.explanation}</CardContent>
							<CardFooter className="w-full flex justify-center items-center md:justify-start">
								<Link href={`/${image.date}`}>
									<Button variant="default">View page</Button>
								</Link>
							</CardFooter>
						</Card>
					)}
				</div>
			</Section >
		</>
	)
}
