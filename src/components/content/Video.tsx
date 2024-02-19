import { cn } from "@/lib/utils"

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
	return (
		<iframe
			ref={ref}
			onLoad={onLoad}
			width={560}
			height={315}
			src={url}
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			className={cn(`w-full max-w-4xl h-auto aspect-video rounded-2xl`, className)}
			{...props}>
		</iframe>
	)
}
