"use client";

import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { useState, useRef, useEffect } from "react";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-video-id");
            if (id) setActiveVideoId(id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible = active
      }
    );

    document.querySelectorAll("[data-video-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (videos.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-gray-500">No videos found</p>
      </div>
    );
  }

  return (
    <div
      className="
        flex-1
        overflow-y-auto
        snap-y snap-mandatory
        flex flex-col items-center
        gap-12
      "
    >
      {videos.map((video) => (
        <div
          key={String(video._id)}
          data-video-id={String(video._id)}
          className="snap-start flex justify-center"
        >
          <VideoComponent
            video={video}
            isActive={activeVideoId === String(video._id)}
            onVideoReady={(el) => {
              videoRefs.current.set(String(video._id), el);
            }}
          />
        </div>
      ))}
    </div>
  );
}
