# APOD Viewer

A Next.js app that highlights NASA's **Astronomy Picture of the Day**. Browse the current feature, explore random selections, or dive into specific dates with image and video support. The UI is built with Tailwind CSS and Radix UI components, with client-side theming and dynamic data fetching from NASA's public API.

Live production build: https://mikam-dev--apod.vercel.app/

## Features
- Display the current Astronomy Picture of the Day with metadata, copyright, and media support for images or videos.
- Search any date via a date picker and deep link to a dedicated detail page.
- Explore a grid of random APOD entries to quickly browse past highlights.
- Responsive layout with loading skeletons for a smooth experience.

## Tech Stack
- **Framework:** Next.js 14 with the App Router
- **Styling:** Tailwind CSS, Radix UI, and shadcn/ui components
- **Utilities:** date-fns for date handling, NASA APOD REST API for data

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file with your NASA API key:
   ```bash
   NEXT_PUBLIC_NASA_API_KEY=<your_api_key>
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts
- `npm run dev` – start the development server
- `npm run build` – create an optimized production build
- `npm start` – run the production build locally
- `npm run lint` – run ESLint checks

## Deployment
The app is configured for deployment on Vercel; the production build is available at https://mikam-dev--apod.vercel.app/.
