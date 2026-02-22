"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/ThemeProvider";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav
      style={{ backdropFilter: "blur(7px)" }}
      className="sticky top-0 z-100 flex items-center justify-between px-8 py-3 backdrop-blur-[7px] sm:px-[52px] md:mx-auto md:max-w-[1170px] md:justify-around md:px-0"
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white bg-sky-200 transition-all duration-200 hover:scale-[0.9] dark:bg-amber-300"
        >
          <Image src="/Logo.png" alt="Logo" width={60} height={60} />
        </Link>
        <div className="font-md font-sm mt-8 flex gap-4 self-end text-[16px]">
          <Link className="hover:underline" href="/#work">
            Work
          </Link>
          <Link className="hover:underline" href="/#projects">
            Projects
          </Link>
        </div>
      </div>
      {/* <div className="flex items-center justify-between gap-3">
        <Link
          className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/rupesh248000"
          aria-label="X (Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="h-5 w-5"
          >
            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
          </svg>
        </Link>
        <Link
          className="transition-colors hover:text-neutral-700 dark:hover:text-neutral-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rupeshjagtap"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="h-5 w-5"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg>
        </Link>
      </div> */}
      <div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded-lg bg-neutral-100 p-3 text-neutral-500 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none sm:p-[10px] dark:bg-[#1e1e21] dark:text-white/80 dark:shadow-[0_4px_0_0_#0a0a0a] dark:hover:shadow-[0_2px_0_0_#0a0a0a] dark:active:shadow-none"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
