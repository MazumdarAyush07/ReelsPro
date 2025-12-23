"use client";

import { IKVideo } from "imagekitio-react";
import Link from "next/link";
import { IVideo } from "@/models/Video";

export default function VideoComponent({ video }: { video: IVideo }) {
  function getImageKitPath(url: string) {
    const pathname = new URL(url).pathname;
    // Remove the first path segment (the ImageKit endpoint id)
    return pathname.replace(/^\/[^/]+/, "");
  }

  const videoPath = getImageKitPath(video.videoUrl);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="p-4">
        <Link href={`/videos/${video._id}`} className="block group">
          <div
            className="relative w-full overflow-hidden rounded-xl bg-black"
            style={{ aspectRatio: "9 / 16" }}
          >
            <IKVideo
              path={videoPath}
              transformation={[{ height: "1920", width: "1080" }]}
              controls={video.controls}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {video.title}
        </h2>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}
