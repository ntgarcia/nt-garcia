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
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="p-6 bg-background rounded-lg border border-black/20 transition-all duration-200 ease-in-out clickable flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {post.title}
              </h3>
              <div className="mb-3 text-muted text-sm">
                {post.date}
              </div>
              <p className="text-base text-text mb-4 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-xs rounded border border-muted text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
