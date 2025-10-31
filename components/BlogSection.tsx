import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { BlogCard } from "./blog-card";

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

export const SectionHeader = () => {
  return (
    <div className="flex flex-col w-[300px] items-center">
      <div className="rounded-full bg-foreground/70 justify-center w-fit py-2.5 px-8 flex uppercase">
        <span className="text-background font-pp-neuebit text-2xl leading-[16px]">Blogs</span>
      </div>
      <div className="font-black font-sans text-4xl">Our Latest</div>
    </div>
  );
};

const BlogSection = () => {
  const allPages = blogSource.getPages() as BlogPage[];
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });
  const latestBlogs = sortedBlogs.slice(0, 4);

  const firstRow = latestBlogs.slice(0, 2);
  const secondRow = latestBlogs.slice(2, 4);

  return (
    <section className="container min-h-screen gap-2.5 flex justify-start py-80 items-center flex-col">
      <SectionHeader />
      <div className="flex-col md:flex gap-2.5">
        {firstRow.map((blog) => {
          const blogDate = new Date(blog.data.date);
          const formattedDate = formatDate(blogDate);
          return (
            <BlogCard
              key={blog.url}
              url={blog.url}
              title={blog.data.title}
              description={blog.data.description}
              date={formattedDate}
              thumbnail={blog.data.thumbnail}
              showRightBorder={firstRow.length < 2}
            />
          );
        })}
      </div>
      <div className="flex-col md:flex gap-2.5">
        {secondRow.map((blog) => {
          const blogDate = new Date(blog.data.date);
          const formattedDate = formatDate(blogDate);
          return (
            <BlogCard
              key={blog.url}
              url={blog.url}
              title={blog.data.title}
              description={blog.data.description}
              date={formattedDate}
              thumbnail={blog.data.thumbnail}
              showRightBorder={secondRow.length < 2}
            />
          );
        })}
      </div>

      <Button asChild variant={"shiny"} className="px-8 rounded-4xl font-geist" size="lg">
        <Link href="/blog">See More</Link>
      </Button>
    </section>
  );
};

export default BlogSection;