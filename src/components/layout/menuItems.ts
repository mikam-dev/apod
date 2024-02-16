export const navLinks: NavLink[] = [
	{
		name: `Home`,
		link: `/`,
		order: 1
	},
	{
		name: `Today's APOD`,
		link: `/${new Date().toISOString().split('T')[0]}`,
		order: 2
	},
]
export default navLinks
