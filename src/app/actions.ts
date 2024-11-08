import { format } from 'date-fns'

const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`

export const getImage = async (date?: string) => {
	if (!date) {
		date = format(new Date(), 'yyyy-MM-dd')
	}

	try {
		const image = await fetch(`${baseUrl}&date=${date}`, {
			method: 'GET',
			next: { revalidate: 600 }
		}).then(image => image.json())

		return image
	} catch (error) {
		console.error(error)
	}
}

export const getRandomImages = async () => {
	try {
		const images = await fetch(`${baseUrl}&count=18`, {
			method: 'GET',
			next: { revalidate: 600 }
		}).then(images => images.json())

		return images
	} catch (error) {
		console.error(error)
	}
}

export const getRangeOfImages = async (startDate?: string, endDate?: string) => {
	if (!startDate || !endDate) {
		const yesterday = new Date()

		yesterday.setDate(yesterday.getDate() - 1)

		const twelveDaysAgo = new Date(yesterday)

		twelveDaysAgo.setDate(twelveDaysAgo.getDate() - 11)

		startDate = format(twelveDaysAgo, 'yyyy-MM-dd')
		endDate = format(yesterday, 'yyyy-MM-dd')
	}

	try {
		const images = await fetch(`${baseUrl}&start_date=${startDate}&end_date=${endDate}`, {
			method: 'GET',
			next: { revalidate: 600 }
		}).then(images => images.json())

		return images
	} catch (error) {
		console.error(error)
	}
}
