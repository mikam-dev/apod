export const navLinks: NavLink[] = [
	{
		name: `Today's APOD`,
		link: `/${new Date().toISOString().split('T')[0]}`,
		order: 1
	},
	{
		name: `Home`,
		link: `/`,
		order: 2
	},
]
export default navLinks
