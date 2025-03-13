import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Header />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
