import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
	return (
		<footer className='w-full min-h-16 h-fit px-4 bg-background shadow text-foreground flex items-center justify-center'>
			<div className="w-full max-w-7xl p-2 flex flex-col-reverse md:flex-row justify-between items-center">
				<div className="flex w-fit p-2 justify-evenly items-center">

				</div>
				<div className="flex w-full flex-1 p-2 justify-evenly items-center">
					<span className="font-mono">&copy; mikam.dev {new Date().getFullYear()}</span>
				</div>
				<div className="flex w-fit p-2 justify-around items-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground">
					<Link href={`https://github.com/mikam-dev/next-clean`} target="_blank">
						<Github className='w-6 h-6' />
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer

