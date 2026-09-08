import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="flex flex-col justify-center px-4 md:px-8 pt-20 pb-24">
        <Header />
        <Works />
        <Footer />
      </main>
    </div>
  );
}
