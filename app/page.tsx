import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Header />
        <Works />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
