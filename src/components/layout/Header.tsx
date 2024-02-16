import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from '../providers/mode-toggle'
// import { Button } from '../ui/button'
import NavMenu from './NavMenu'
import navLinks from './menuItems'

export function Header() {

	return (
		<header className='w-full min-h-[8svh] h-fit max-h-[100px] py-1 px-4 bg-background shadow text-foreground flex items-center justify-center'>
			<div className="w-full max-w-7xl mx-2 flex justify-between items-center">

				<div className="flex p-1 mr-6 justify-around items-center">
					<div>
						<Link href={"/"}>
							<Image src={"/rocket.svg"} alt="logo" width={96} height={96} className='h-auto min-w-8 w-8' />
						</Link>
					</div>
				</div>

				<div className="flex w-full mx-4 justify-end items-center">
					<ul className="mx-2 hidden md:flex md:justify-evenly md:items-center">
						{navLinks.map((link: NavLink) => (
							<li key={link.order} className="text-foreground hover:text-accent px-2 mx-1">
								<Link href={link.link}>{link.name}</Link>
							</li>))}
					</ul>
					<div className="mx-2 flex items-center md:hidden">
						<NavMenu />
					</div>
				</div>

				<ModeToggle />

				{/* <div className="hidden ml-2 justify-around items-center md:flex">
					<Link href={"https://mikam.dev/contact"}>
						<Button className="bg-primary max-h-12 mx-2 px-4 py-2 rounded-md">Contact</Button>
					</Link>
				</div> */}

			</div>
		</header>
	)
}

export default Header
