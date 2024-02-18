"use client"
import { getImage } from "@/app/actions";
import { format, parseISO } from "date-fns";
import Image from 'next/image';
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
			<span className="w-full min-h-fit pt-4 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-card to-background sm:pt-6 md:pt-8 xl:pt-12">
				<h2 className="font-extrabold text-3xl text-center p-2 mb-2 bg-gradient-to-b from-muted-foreground to-foreground inline-block text-transparent bg-clip-text sm:text-4xl md:text-5xl lg:text-6xl">Astronomy Picture of the Day
				</h2>

				<DatePicker onDateChange={(date: string) => {
					setDate(date);
					console.log(date);
				}}
				/>
			</span>
			<Section rx>
				<div className="w-full h-auto p-4 flex flex-col items-center justify-start md:w-[50%] md:max-w-2xl">
					{isLoading && <Skeleton className="w-full max-w-xl min-h-[315px] mb-2 rounded-3xl md:h-[75vh]" />}
					{image.media_type === 'video' && (
						<iframe
							onLoad={() => setIsLoading(false)}
							width={560}
							height={315}
							src={image.url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className={`w-full max-w-xl mb-2 rounded-xl ${isLoading && 'hidden'}`}></iframe>
					)}
					{image.media_type === 'image' && (
						<img
							onLoad={() => setIsLoading(false)}
							src={image.url}
							alt="Astronomy picture of the day"
							width={800}
							height={450}
							priority
							className={`w-full max-w-xl h-auto mb-2 rounded-3xl ${isLoading && 'hidden'}`}
						/>
					)}
					{image.copyright && (
						<caption className={`p-2 font-extralight text-sm ${isLoading && 'hidden'}`}>
							&copy; {image.copyright}
						</caption>
					)}
				</div>

				<div className="w-full h-auto p-4 flex flex-col items-center justify-start md:w-[50%] md:max-w-2xl">
					{isLoading ? <Skeleton className="w-full max-w-xl min-h-[315px] mb-2 rounded-3xl md:h-[75vh]" /> : (
						<Card className="border-none rounded-3xl">
							<CardHeader>
								<CardTitle className={`text-center sm:text-3xl md:text-start md:text-4xl lg:text-5xl`}>{image.title}</CardTitle>
								<CardDescription className="self-center md:self-start">
									{image.date && !isNaN(Date.parse(image.date)) ? format(parseISO(image.date), 'MMMM dd, yyyy') : 'Invalid date'}
								</CardDescription>
							</CardHeader>
							<CardContent>{image.explanation}</CardContent>
							<CardFooter className="w-full space-x-2 flex justify-center items-center md:justify-start">
								{(image.media_type === 'image') && (
									<Link href={image.hdurl || image.url}>
										<Button variant="outline">View Image</Button>
									</Link>
								)}
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
