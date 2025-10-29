import BlogSection from "@/components/BlogSection";
import React from "react";

const images = [
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/7NZGPaGfMh.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/tSU4Vdx4KB.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/H6H2seZB2T.png",
];

const Page = () => {
  return (
    <div className="mx-auto flex w-[619px] pt-50 flex-col items-center bg-background gap-[30px]">
      {/* Image Gallery */}
      <div className="flex ">
      {images.map((src, index) => (
        <div
          key={index}
          className="h-[87.834px] w-[87.834px] overflow-hidden bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      </div>
      

      {/* Content Section */}
      <div className="flex flex-col items-center gap-3 self-stretch">
        {/* Heading */}
        <h1 className="w-full text-center text-[48px] leading-[58.091px]">
          <span className="font-sans font-medium tracking-[-0.48px] text-foreground">
            A modern
          </span>{" "}
          <span className=" font-pp-mondwest text-[58px] leading-[69.6px]">
            animation library
          </span>
          <br />
          <span className="font-sans font-medium tracking-[-0.48px] text-foreground">
            for JavaScript and React
          </span>
        </h1>

        {/* Description */}
        <p className="flex h-[57px] w-[430px] items-center justify-center text-center font-sans text-base leading-[19.359px] tracking-[-0.32px] text-muted-foreground">
          Motion makes animation simple, fun, and limitless. Go beyond the
          browser with super smooth springs, layout animations, timelines and
          much, much more.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex w-[396px] items-center gap-1.5">
        {/* NPM Install Command */}
        <div className="flex h-[37px] w-[291px] items-center gap-1.5 overflow-hidden rounded-[10.35px] border border-muted bg-background px-2.5 py-1">
          <span className="grow whitespace-nowrap font-['CommitMono'] text-sm leading-[21px] tracking-[-0.28px] text-foreground">
            npm install motion
          </span>
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-28/k7QVYO2N21.png"
            alt="Copy"
            className="h-[18px] w-[18px]"
          />
        </div>

        {/* Quick Start Button */}
        <button className="flex w-[99px] items-center justify-center gap-0.5 overflow-hidden rounded-[10.353px] bg-muted px-2.5 py-2">
          <span className="whitespace-nowrap font-sans text-[14.651161193847656px] font-medium leading-[21px] tracking-[-0.29px] text-foreground">
            Quick start
          </span>
        </button>
      </div>
      <BlogSection/>
    </div>
  );
};

export default Page;
