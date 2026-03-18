import React from "react";

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\s]+)/);
  return match ? match[1] : null;
}

export default function VideoPlayer({ videoUrl }) {
  if (!videoUrl) return null;

  const youtubeId = getYouTubeId(videoUrl);

  if (youtubeId) {
    return (
      <div className="relative rounded-2xl overflow-hidden bg-black aspect-video mb-10">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video mb-10">
      <video src={videoUrl} controls className="w-full h-full object-cover" />
    </div>
  );
}