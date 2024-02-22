import { Loader2 } from "lucide-react";

export default function Loading() {
	return (

		<>
			<Loader2 size={64} className="animate-spin" />
			<p className="text-2xl p-2 mt-2 text-center animate-pulse">Loading...</p>
		</>
	)
}