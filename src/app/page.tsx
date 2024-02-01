import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="flex bg-background min-h-[100svh] pt-[8svh] pb-8 flex-col items-center justify-between">
      <Hero>
        <h1 className="text-6xl font-bold">Clean.js</h1>
        <p className="text-2xl">This is a Next.js + Tailwind CSS starter template.</p>
      </Hero>
    </main>
  );
}
