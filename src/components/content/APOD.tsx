"use client"
import { getImage } from "@/app/actions";
import { format, parseISO } from "date-fns";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Section from '../layout/Section';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { DatePicker } from '../ui/date-picker';
import { Skeleton } from '../ui/skeleton';
import Photo from "./Photo";
import Video from "./Video";

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
			<span className="w-full min-h-fit p-4 flex flex-col items-center justify-center bg-gradient-to-b from-card to-background sm:pt-6 lg:pt-8">
				<h1 className="font-extrabold text-3xl text-center p-2 mb-2 bg-gradient-to-b from-muted-foreground to-foreground inline-block text-transparent bg-clip-text sm:text-4xl md:text-5xl lg:text-6xl">Astronomy Picture of the Day
				</h1>

				<DatePicker onDateChange={(date: string) => {
					setDate(date);
					console.log(date);
				}}
				/>
			</span>
			<Section rx>
				<div className="w-full h-auto flex flex-col items-center justify-start pt-4 lg:p-4 lg:w-[50%] lg:max-w-2xl">
					{isLoading && <Skeleton className="w-full h-[40vh] mb-2 rounded-none lg:max-w-xl lg:mb-0 lg:rounded-2xl lg:h-[75vh]" />}
					{image.media_type === 'video' && (
						<Video
							onLoad={() => setIsLoading(false)}
							title={image.title}
							url={image.url}
							className={`max-w-5xl mb-2 rounded-none lg:mb-0 lg:rounded-2xl ${isLoading && 'hidden'}`}
						/>
					)}
					{image.media_type === 'image' && (
						<Photo
							onLoad={() => setIsLoading(false)}
							title={image.title}
							url={image.url}
							className={`max-w-5xl mb-2 rounded-none lg:mb-0 lg:rounded-2xl ${isLoading && 'hidden'}`}
						/>
					)}
					{image.copyright && (
						<caption className={`p-2 font-extralight text-sm ${isLoading && 'hidden'}`}>
							&copy; {image.copyright}
						</caption>
					)}
				</div>

				<div className="w-full h-auto flex flex-col items-center justify-start p-4 pt-0 lg:pt-4 lg:w-[50%] lg:max-w-2xl">
					{isLoading ? <Skeleton className="w-full h-[50vh] mb-2 rounded-2xl bg-card mx-4 lg:max-w-xl lg:mb-0 lg:bg-muted lg:mx-0 lg:h-[75vh]" /> : (
						<Card className="border-none rounded-2xl">
							<CardHeader>
								<CardTitle className={`text-center sm:text-3xl lg:text-start md:text-4xl lg:text-5xl`}>{image.title}</CardTitle>
								<CardDescription className="self-center lg:self-start">
									{image.date && !isNaN(Date.parse(image.date)) ? format(parseISO(image.date), 'MMMM dd, yyyy') : 'Invalid date'}
								</CardDescription>
							</CardHeader>
							<CardContent>{image.explanation}</CardContent>
							<CardFooter className="w-full flex justify-center items-center lg:justify-start">
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
