"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()

	return (
		<>
			<Button
				variant="outline"
				size="icon"
				className="px-4 py-2 md:ml-2"
				onClick={() => {
					setTheme(theme === 'light' ? 'dark' : 'light')
				}}
			>
				<Moon className="absolute text-foreground h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-accent-foreground" />
				<Sun className="absolute text-foreground h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-accent-foreground" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		</>
	)
}
