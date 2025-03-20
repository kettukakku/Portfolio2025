"use client";

import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  href: string;
  title: string;
  date: string;
  tags: string[];
}

function BlogCard({ href, title, date, tags }: BlogCardProps) {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col gap-4 bg-[var(--color-background-alt)] bg-opacity-50 p-4 group-hover:bg-opacity-75 transition-all h-[300px] w-[250px]">
        <div className="aspect-video bg-gray-200">
          {/* Image placeholder */}
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[var(--color-primary)] text-[var(--color-background-alt)] text-xs font-bold px-3 py-[0.5] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
          <p className="text-sm text-[var(--color-text-faded)]">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allPosts = [
    {
      href: "/bookpost",
      title: "Lorem Ipsum Dolor Something",
      date: "January 15, 2024",
      tags: ["Horror", "Book Review"],
    },
    {
      href: "/bookpost",
      title: "Lorem Ipsum",
      date: "January 10, 2024",
      tags: ["Sci-Fi", "Book Review"],
    },
    {
      href: "/bookpost",
      title: "Lorem Ipsum",
      date: "January 5, 2024",
      tags: ["Thriller", "Book Review"],
    },
    {
      href: "/bookpost",
      title: "Lorem Ipsum",
      date: "January 1, 2024",
      tags: ["Fiction", "Book Review"],
    },
  ];

  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags)));
  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <div className="p-8 mx-auto">
      <div className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === null
              ? "bg-[var(--color-primary)] text-[var(--color-background-alt)]"
              : "bg-[var(--color-background-alt)] text-[var(--color-primary)]"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag
                ? "bg-[var(--color-primary)] text-[var(--color-background-alt)]"
                : "bg-[var(--color-background-alt)] text-[var(--color-primary)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={index}
            href={post.href}
            title={post.title}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}
