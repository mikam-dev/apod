import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImage = async (date?: string) => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  if (!date) {
    const today = new Date();
    date = today.toISOString().split('T')[0];
  }

  try {
    const image = await fetch(`${baseUrl}&date=${date}`, {
      method: 'GET',
      next: { revalidate: 600 }
    }).then((image) => image.json());

    return image;
  } catch (error) {
    console.error(error);
  }
}

export const getRandomImages = async () => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  try {
    const images = await fetch(`${baseUrl}&count=18`, {
      method: 'GET',
      next: { revalidate: 600 }
    }).then((images) => images.json());

    return images;
  } catch (error) {
    console.error(error);
  }
}

export const getRangeOfImages = async (startDate?: string, endDate?: string) => {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;

  if (!startDate || !endDate) {
    const yesterday = new Date();

    yesterday.setDate(yesterday.getDate() - 1);

    const twelveDaysAgo = new Date(yesterday);

    twelveDaysAgo.setDate(twelveDaysAgo.getDate() - 11);

    startDate = twelveDaysAgo.toISOString().split('T')[0];
    endDate = yesterday.toISOString().split('T')[0];
  }

  try {
    const images = await fetch(`${baseUrl}&start_date=${startDate}&end_date=${endDate}`, {
      method: 'GET',
      next: { revalidate: 600 }
    }).then((images) => images.json());

    return images;
  } catch (error) {
    console.error(error);
  }
}
