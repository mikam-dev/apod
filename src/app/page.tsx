import APOD from "@/components/content/APOD";
import ImageGrid from "@/components/content/ImageGrid";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between bg-background min-h-[100vh] h-fit pb-8">
      <APOD />
      <ImageGrid />
    </main>
  );
}
