"use client";

import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hello, World!",
    date: "2025-03-10",
    excerpt: "Welcome to my blog!!!!",
    tags: ["Whatsup"],
    slug: "hello-world",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary/5">

        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-primary mb-4">
            My Writings
          </h2>
          <div className="ascii-art text-muted mb-4">
            {`
⋆˙⟡🪶─ .✦📜⊹₊ ݁.
            `}
          </div>
          <p className="font-mono text-muted">
            (￣▽￣)ノ blog blog blog
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {blogPosts.length === 1 ? (
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              key={blogPosts[0].id}
              className="p-4 sm:p-6 bg-background md:max-w-md w-full mx-auto md:col-span-2 transition-transform hover:scale-[1.01] clickable"
            >
              <div className="mb-2 font-mono text-muted text-xs sm:text-sm">
                {blogPosts[0].date}
              </div>
              <h3 className="text-lg sm:text-xl font-mono text-primary mb-2 sm:mb-4">
                {blogPosts[0].title}
              </h3>
              <p className="font-mono text-sm sm:text-base mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {blogPosts[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-mono border border-muted text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ) : (
            blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="p-4 sm:p-6 bg-background transition-transform hover:scale-[1.01] clickable"
              >
                <div className="mb-2 font-mono text-muted text-xs sm:text-sm">
                  {post.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  <h3 className="text-lg sm:text-xl font-mono text-primary mb-2 sm:mb-4">
                    {post.title}
                  </h3>
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-mono border border-muted text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-sm sm:text-base mb-4">
                  {post.excerpt}
                </p>

              </Link>
            ))
          )}
        </div>

        {/* <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 font-mono text-primary border border-primary hover:bg-primary hover:text-background transition-colors"
          >
            View all posts
          </a>
        </div> */}

    </section>
  );
}
