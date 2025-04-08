import Navbar from "../components/Navbar";
import Blog from "../components/Blog";

export default function BlogPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Blog />
          </div>
        </div>
      </main>
    </div>
  );
}
