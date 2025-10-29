import React from "react";
import { Button } from "./ui/button";

export const BlogCard = () => {
  return (
    <div className="w-[339px] flex flex-col rounded-[29.35px] aspect-square py-[26px] px-[28px] border border-muted">
      <div className="w-[292px] h-[200px] rounded-[29.35px] bg-muted border border-muted border-b-0"></div>
      <div className="flex flex-col gap-2 w-full">
        <span className="text-lg text-foreground">Lorem</span>
        <span className="text-sm text-foreground/60">
          Lorem ipsum dolor. Lorem ipsum dolor Lorem ipsum dolor Lorem 
        </span>
      </div>
    </div>
  );
};

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
  return (
    <section className="container min-h-screen gap-2.5 flex justify-start py-80 items-center flex-col">
      <SectionHeader />
      <div className="flex gap-2.5">
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex gap-2.5">
        <BlogCard />
        <BlogCard />
      </div>

      <Button variant={"shiny"} className="px-8 rounded-4xl font-pp-mondwest" size="lg">
        See More
      </Button>
    </section>
  );
};

export default BlogSection;
