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
		<section className={`flex items-center justify-center w-full min-h-[92vh] bg-gradient-to-b from-background to-muted m-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16`}>
			<div className={cn(`flex ${rx ? 'md:flex-row-reverse' : 'md:flex-row'} ${ry ? 'flex-col-reverse' : 'flex-col'} items-start justify-between w-full max-w-6xl m-0 space-y-4 md:space-x-4 md:space-y-0`, className)}>
				{children}
			</div>
		</section>
	)
}

export default Section
