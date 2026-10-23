import React from "react";

import Image from "next/image";

const SocialImageContainer = ({ image }: { image: string }) => {
  return (
    <div
      className={`w-fit overflow-hidden rounded-3xl border-2 border-neutral-400/90 dark:border-white/20`}
    >
      <Image
        src={image}
        alt="social image"
        width={300}
        height={300}
        loading="eager"
        className="rounded-2xl"
      />
    </div>
  );
};

export default SocialImageContainer;
