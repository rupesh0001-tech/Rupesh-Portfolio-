import Image from "next/image";
import Link from "next/link";

import { Play } from "lucide-react";

const SongActivity = async () => {
  const songData = await fetch(
    "https://portfolio-3-backend.vercel.app/api/spotify/playback",
    { cache: "no-store" }
  ).then((res) => res.json());
  return (
    <div
      className={`col-span-2 mt-10 mb-5 flex items-center justify-between gap-4 rounded-xl border p-4 transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src={songData?.albumArt}
            alt={songData?.name}
            width={50}
            height={50}
            quality={50}
            className="h-12 w-12 rounded-lg object-cover shadow"
          />
        </div>
        <div className="flex flex-col">
          <span
            className={`flex items-center gap-1 text-xs font-semibold text-neutral-500 uppercase`}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="Spotify"
              width={20}
              height={20}
              className={`h-3 w-3 text-neutral-600 ${
                songData?.isPlaying ? "animate-pulse" : ""
              }`}
            />
            {songData?.isPlaying ? "Now Playing" : "Last Played"}
          </span>
          <span className={`flex flex-col text-sm font-bold`}>
            {songData?.name}
            <span className="text-xs text-neutral-500">
              {" "}
              by: {songData?.artists}
            </span>
          </span>
        </div>
      </div>
      <Link href={songData?.url}>
        <Play size={18} className="text-neutral-600" />
      </Link>
    </div>
  );
};

export default SongActivity;
