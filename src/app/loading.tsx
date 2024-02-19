import { LoadingIcon } from "@/components/ui/icons";

export default function Loading() {
	return (

		<>
			<LoadingIcon />
			<p className="text-2xl p-2 mt-2 text-center animate-pulse">Loading...</p>
		</>
	)
}