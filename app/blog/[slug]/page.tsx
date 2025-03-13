"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import ReactMarkdown from "react-markdown";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hello, World!",
    date: "2025-03-10",
    excerpt: "Welcome to my blog!!!!",
    content: `
  # Hello
  ## World
    `,
    tags: ["Whatsup"],
    slug: "hello-world",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="font-mono text-muted hover:underline mb-8 inline-block clickable"
          >
            ← Back to blog
          </Link>

          <div className="mb-2 font-mono text-muted text-sm">
            {post.date}
          </div>

          <h1 className="text-4xl font-mono text-primary mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-mono border border-muted text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="font-mono space-y-4 botanical-border pt-8">
            <p>{post.excerpt}</p>

            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl mt-14 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl mt-10 mb-4">
                    {children}
                  </h2>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="mb-14 w-full"
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}
