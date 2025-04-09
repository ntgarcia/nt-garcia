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
  readingTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hello, World!",
    date: "2025-03-10",
    excerpt: "",
    content: `
  # Hello World
  Welcome to my blog!!!!
    `,
    tags: ["Whatsup"],
    slug: "hello-world",
    readingTime: "5 minutes",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-muted hover:underline mb-8 inline-block clickable">
              ← Back to Blog
            </Link>
            
            <div className="mb-2 text-muted text-sm">
              {post.date} • {post.readingTime}
            </div>
            <h1 className="text-4xl text-black mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-xs border border-muted text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-4">
              {/* <p>{post.excerpt}</p> */}

              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl mt-14 mb-6 text-black">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl mt-10 mb-4 text-black">
                      {children}
                    </h2>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="mb-14 w-full rounded-sm ring-1 ring-inset ring-black/10"
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
