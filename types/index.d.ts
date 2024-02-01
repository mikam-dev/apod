type NavLink = {
	name: string,
	link: string,
	order: number
}

type APODImage = {
	title: string,
	date: string,
	url: string,
	hdurl?: string,
	media_type: "image" | "video",
	explanation: string,
	thumbnail_url?: string,
	copyright?: string,
	service_version: string,
}
