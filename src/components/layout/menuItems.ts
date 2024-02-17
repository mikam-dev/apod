import { format } from "date-fns";

export const navLinks: NavLink[] = [
	{
		name: `Today's APOD`,
		link: `/${format(new Date(), 'yyyy-MM-dd')}`,
		order: 1
	},
	{
		name: `Home`,
		link: `/`,
		order: 2
	},
]
export default navLinks
