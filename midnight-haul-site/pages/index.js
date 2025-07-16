import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto text-center py-12">
        <img src="/logo.png" alt="Midnight Haul Co." className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold tracking-tight">Midnight Haul Co.</h1>
        <p className="mt-4 text-lg text-gray-300">Rolling under moonlight, mile after mile.</p>
        <a href="/join">
          <Button className="mt-8 text-lg px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600">
            Join the Fleet
          </Button>
        </a>
      </div>
    </main>
  );
}