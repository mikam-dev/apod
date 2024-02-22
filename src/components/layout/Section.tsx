import React from 'react'

import { cn } from "@/lib/utils"

export function Section({
	className,
	children,
	rx = false,
	ry = false,
}: {
	className?: string
	children: React.ReactNode
	rx?: boolean
	ry?: boolean
}) {

	return (
		<section className={`flex items-start justify-center w-full min-h-[92vh] bg-gradient-to-b from-background to-muted m-0`}>
			<div className={cn(`flex ${rx ? 'md:flex-row-reverse' : 'md:flex-row'} ${ry ? 'flex-col-reverse' : 'flex-col'} items-start justify-evenly w-full max-w-6xl m-0 space-y-2 md:space-y-0`, className)}>
				{children}
			</div>
		</section>
	)
}

export default Section
