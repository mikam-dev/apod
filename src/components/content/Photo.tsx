// import Image from 'next/image';
import { cn } from "@/lib/utils"

export default function Photo({
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
	ref?: React.Ref<HTMLImageElement>
	onLoad?: () => void
}) {
	return (
		<>
			{/* eslint-disable-next-line */}
			<img
				ref={ref}
				onLoad={onLoad}
				src={url}
				alt={title}
				width={800}
				height={450}
				loading="lazy"
				className={cn(`w-full max-w-4xl h-auto rounded-2xl animate-in`, className)}
				{...props}
			/>
			{/* <Image
				ref={ref}
				onLoad={onLoad}
				src={url}
				alt={title}
				width={800}
				height={450}
				loading="lazy"
				className={cn(`w-full max-w-4xl h-auto rounded-2xl animate-in`, className)}
				{...props}
			/> */}
		</>
	)
}
