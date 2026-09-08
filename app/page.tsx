import Header from "./components/Header";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="max-w-[1000px] mx-auto px-6 md:px-10 pt-24 pb-16">
        <Header />
        <Works />
      </main>
    </div>
  );
}
