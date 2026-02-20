"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

const Intro = () => {
  const roles = [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Designer",
    "Software Developer",
    "DevOps Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <div>
      <h1 className="pt-8 text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl">
        <span className="block text-neutral-900 dark:text-white">
          Hi, I&apos;m Rupesh{" "}
          <span className="text-neutral-400 dark:text-neutral-500">—</span>
        </span>
        <span className="block max-w-full text-neutral-400 dark:text-neutral-500">
          A {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      <p className="space-y-6 px-1 py-2 pt-5 text-lg leading-8 text-gray-400 sm:leading-relaxed">
        Full-Stack Developer building scalable, high-performance applications
        with strong development and system design fundamentals.
        {/* <span className="mx-1 my-1 inline-flex items-center gap-2 rounded-md border-2 border-dashed border-black/40 bg-black/10 px-2 py-1 text-sm font-bold text-black dark:border-white/45 dark:bg-white/15 dark:text-white">
          <svg viewBox="0 0 128 128" className="inline-flex size-4 shrink-0">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
            <path
              fill="#007acc"
              d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
            ></path>
          </svg>
          TypeScript
        </span>
        ,{" "}
        <span className="mx-1 my-1 inline-flex items-center gap-2 rounded-md border-2 border-dashed border-black/40 bg-black/10 px-2 py-1 text-sm font-bold text-black dark:border-white/45 dark:bg-white/15 dark:text-white">
          <span className="inline-flex size-4 shrink-0">
            <svg viewBox="0 0 128 128">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
          </span>
          React
        </span>
        ,{" "}
        <span className="mx-1 my-1 inline-flex items-center gap-2 rounded-md border-2 border-dashed border-black/40 bg-black/10 px-2 py-1 text-sm font-bold text-black dark:border-white/45 dark:bg-white/15 dark:text-white">
          <span className="inline-flex size-4 shrink-0">
            <svg viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="64"></circle>
              <path
                fill="url(#a)"
                d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
              ></path>
              <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
              <defs>
                <linearGradient
                  id="a"
                  x1="109"
                  x2="144.5"
                  y1="116.5"
                  y2="160.5"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="121"
                  x2="120.799"
                  y1="54"
                  y2="106.875"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          Next.js
        </span>
        ,{" "}
        <span className="mx-1 my-1 inline-flex items-center gap-2 rounded-md border-2 border-dashed border-black/40 bg-black/10 px-2 py-1 text-sm font-bold text-black dark:border-white/45 dark:bg-white/15 dark:text-white">
          <Image
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
            alt="Node.js"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          Node.js
        </span>
        , and{" "}
        <span className="mx-1 my-1 inline-flex items-center gap-1 rounded-md border-2 border-dashed border-black/40 bg-black/10 py-1 pr-2 pl-1 text-sm font-bold text-black dark:border-white/45 dark:bg-white/15 dark:text-white">
          <Image
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="MongoDB"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          MongoDB
        </span>
        , with a strong emphasis on clean UI,{" "}
        <span className="font-medium text-black dark:text-white">
          Performance
        </span>
        , and{" "}
        <span className="font-medium text-black dark:text-white">
          User Experience
        </span> */}
      </p>
    </div>
  );
};

export default Intro;
