import Image from "next/image";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-28 mx-auto px-12 py-4">
        <Introduction />
      </div>
    </main>
  );
}
