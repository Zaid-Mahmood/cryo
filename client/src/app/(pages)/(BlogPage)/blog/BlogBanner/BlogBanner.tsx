"use client"
import Image from "next/image";
import bannerImg from "@/assets/blog/banner.png";
import leftVectorImg from "@/assets/blog/vector-img.png";
import searchIcon from "@/assets/blog/search-icon.png";
import sidImg from "@/assets/blog/sideimg.png";
import cryoIcon from "@/assets/blog/cryo-icon.png";
import rightArrow from "@/assets/services/right-arrow.png";
import BlogCards from "./BlogCards/BlogCards";
import { useState } from "react";
const BlogBanner = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const categories = ["All"];

  return (
    <section>
      <div className="relative w-full h-[430px] sm:h-[400px]  overflow-hidden z-0">
        <Image
          src={bannerImg}
          alt="blog-banner-img"
          fill
          priority
          className="object-cover"
        />
        <Image
          src={leftVectorImg}
          alt="left-vector"
          className="absolute left-0 top-0 h-full w-auto object-cover"
        />
        {/* Content */}
        <div className="relative top-[40%] -translate-y-[40%]  flex  flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-[30px] sm:text-6xl leading-[1.3] font-bold text-[#2C2C2C]">
            Insights for Better <br /> Recovery
          </h1>

          {/* Search Box */}
          <div className="mt-11 flex w-full max-w-[270px] sm:max-w-[500px] items-center rounded-full border border-[#E5E5E5] bg-white px-3 shadow-sm">
            <input
              type="text"
              placeholder="Search recovery insights, treatments or wellness tips"
              className="flex-1 bg-transparent text-[8px] sm:text-base text-[#888888] outline-none placeholder:text-[#A0A0A0] p-2"
            />
            <button className="flex items-center justify-center rounded-full bg-[#007AD8] text-white p-1">
              <Image className="w-[18px] h-[18px]" src={searchIcon} alt="search-icon" />
            </button>
          </div>

          {/* Category Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-1 pb-11">
            {categories.map((item, index) => (
              <button
                key={item}
                className={`rounded-full px-5 py-2 text-base font-medium transition cursor-pointer
                ${index === 0
                    ? "bg-[#007AD8] text-white"
                    : "bg-white text-[#4A4A4A] border border-[#DDEAF5]"
                  }
              `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 px-5 md:px-16 overflow-hidden gap-x-11">
        <Image
          src={sidImg}
          alt="side-img"
          className="h-auto object-contain"
        />
        <p className="text-[#2680D9] md:hidden py-3  text-center">Modality Deep Dive</p>
            <div>
        <h4 className="font-heading text-3xl font-medium text-center md:text-left">What Actually Happens When You Step Into the Cold</h4>
        <p className="text-base font-body text-[#888888]  text-center md:text-left">Two to three minutes at subzero temperatures. The science behind why it works, who it’s for, what to expect, and what the research actually shows.</p>
        <p className="hidden md:text-[#2680D9]">Modality Deep Dive</p>
        <div className="flex items-center gap-2 py-6 md:pt-8 md:pb-14 justify-center md:justify-between">
          <Image src={cryoIcon} alt="cryo-icon" />
          <div className="md:flex-1">
            <h2 className="text-base font-medium">Cryo SubZero</h2>
            <p className="text-sm font-body text-[var(--text-description)]">03 April 2026 • 4 min read</p>
          </div>
        </div>
        <button
          className="cursor-pointer text-white bg-[var(--btn-bg-black)] w-full md:w-[160px]  px-5 py-4  flex items-center justify-center rounded-xl gap-2"
        >
          <p> Read More</p>
          <Image src={rightArrow} alt="right arrow" width={14} height={14} />
        </button>
        </div>
      </div>
      <BlogCards selectedTab={selectedTab} />
    </section>
  );
};

export default BlogBanner;