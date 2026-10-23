"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Generate tags dynamically from posts
  const tags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [selectedTag, posts]);

  return (
    <>
      {/* Popular Tags Section */}
      <div className="mb-12">
        <h2 className="mb-6 text-xl font-bold">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {/* All Tag */}
          <button
            onClick={() => setSelectedTag(null)}
            className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
              selectedTag === null
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            }`}
          >
            All ({posts.length})
          </button>

          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => setSelectedTag(tag.name)}
              className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                selectedTag === tag.name
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              }`}
            >
              {tag.name} ({tag.count})
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="mb-16">
        <h2 className="mb-8 flex items-end gap-2 text-xl font-bold">
          {selectedTag ? `Posts tagged "${selectedTag}"` : "Latest Posts"}{" "}
          <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500">
            ({filteredPosts.length} post
            {filteredPosts.length !== 1 ? "s" : ""})
          </span>
        </h2>

        {filteredPosts.length === 0 ? (
          <p className="py-12 text-center text-neutral-400 dark:text-neutral-500">
            No posts found with this tag.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.id}
                className="group block space-y-3"
              >
                {/* Image Card */}
                <div className="aspect-video overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg leading-tight font-bold text-neutral-900 decoration-2 underline-offset-4 group-hover:underline dark:text-neutral-100">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
