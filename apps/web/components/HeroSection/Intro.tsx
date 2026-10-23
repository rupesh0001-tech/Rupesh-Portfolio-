"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function Intro({
  name,
  roles,
  bio,
}: {
  name: string;
  roles: string[];
  bio: string;
}) {
  const safeRoles = useMemo(
    () => (roles.length > 0 ? roles : ["Full-Stack Developer"]),
    [roles]
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = safeRoles[currentRoleIndex] ?? safeRoles[0]!;
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % safeRoles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, safeRoles]);

  return (
    <div>
      <h1 className="pt-8 text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl">
        <span className="block text-neutral-900 dark:text-white">
          Hi, I&apos;m {name}{" "}
          <span className="text-neutral-400 dark:text-neutral-500">—</span>
        </span>
        <span className="block max-w-full text-neutral-400 dark:text-neutral-500">
          A {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      <p className="space-y-6 px-1 py-2 pt-5 text-lg leading-8 text-gray-400 sm:leading-relaxed">
        {bio}
      </p>
    </div>
  );
}
