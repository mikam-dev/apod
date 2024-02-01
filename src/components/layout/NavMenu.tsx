"use client"
import Link from "next/link"
import * as React from "react"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import navLinks from "./menuItems"

export function NavMenu() {

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Menu</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-full gap-3 p-4">
							{navLinks.map((link: NavLink) => (
								<ListItem
									key={link.order}
									title={link.name}
									href={link.link}
								>
									{link.name}
								</ListItem>
							))}
							<Link href={"/contact"}>
								<Button className="bg-primary max-h-12 mx-2 px-4 py-2 rounded-md">Contact</Button>
							</Link>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"

export default NavMenu
