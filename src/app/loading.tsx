import { LoadingIcon } from "@/components/ui/icons";

export default function Loading() {
	return (

		<main className="flex flex-col items-center justify-center min-h-[100vh] h-fit pb-8 bg-gradient-to-b from-background to-muted md:bg-gradient-to-r">
			<LoadingIcon />
			<p className="text-2xl p-2 mt-2 text-center animate-pulse">Loading...</p>
		</main>
	)
}