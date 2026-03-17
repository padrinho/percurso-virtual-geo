import React, { useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  if (!videoUrl) return null;

  // Get poster from wixstatic video URL pattern
  const videoId = videoUrl.match(/video\/([^/]+)\//)?.[1];
  const poster = videoId
    ? `https://static.wixstatic.com/media/${videoId}f000.jpg/v1/fill/w_960,h_540,al_c,q_80,enc_auto/${videoId}f000.jpg`
    : null;

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video mb-10">
      {playing ? (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {poster && (
            <img src={poster} alt="Video thumbnail" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={() => setPlaying(true)}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
            >
              <Play className="w-7 h-7 text-white ml-1" fill="white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}