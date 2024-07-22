import Image from "next/image";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto px-12 py-4">
        <Introduction />
      </div>
    </main>
  );
}
