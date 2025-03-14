import Navbar from "../components/Navbar";
import Blog from "../components/Blog";

export default function BlogPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-mono text-primary mb-8">
              /blog
            </h1>
            <Blog />
          </div>
        </div>
      </main>
    </div>
  );
}
