"use client"
import { cn } from "@/lib/utils";
// import { Play } from "lucide-react";
import { useState } from 'react';
// import { Button } from "../ui/button";

export default function Video({
	title,
	url,
	className,
	ref,
	onLoad,
	...props
}: {
	title: string,
	url: string,
	className?: string,
	ref?: React.Ref<HTMLIFrameElement>,
	onLoad?: () => void
}) {
	const [hide, setHide] = useState(true);

	let ytThumbnail: string | undefined;
	let ytid: string | undefined;
	if (url.includes('youtube' || 'youtu.be')) {
		ytid = url.split('embed/')[1].split('?')[0];
		ytThumbnail = `https://i.ytimg.com/vi/${ytid}/hqdefault.jpg`;
	}

	return (
		<div
			className={cn(`w-full max-w-4xl h-auto aspect-video rounded-2xl flex items-center justify-center`, className)}
		>
			{/* // 	<div
		// 		className={cn(`w-full h-full items-center justify-center bg-cover bg-center bg-muted hover:bg-blend-overlay hover:bg-white hover:bg-opacity-10 hover:cursor-pointer`, hide ? 'flex' : 'hidden', className)}
		// 		style={{
		// 			backgroundImage: `url(${ytThumbnail || ''})`,
		// 		}}
		// 		onClick={() => setHide(false)}
		// 	>
		// 		<Button
		// 			variant="default"
		// 			className="z-10 aspect-video hover:opacity-20">
		// 			<Play className="w-8 h-auto" />
		// 		</Button>
		// 	</div> */}
			<iframe
				ref={ref}
				onLoad={onLoad}
				width={560}
				height={315}
				src={url}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className={cn(`w-full h-auto aspect-video`, className)}
				// hidden={hide}
				{...props}>
			</iframe>
		</div>
	)
}
