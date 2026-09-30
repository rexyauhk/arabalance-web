"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

const videos = [
  { title: "中文影片", language: "中文", src: "/videos/中文影片.mp4", poster: "/videos/chinese-poster.jpg" },
  { title: "馬來文影片", language: "Bahasa Melayu", src: "/videos/馬來文影片.mp4", poster: "/videos/malay-poster.jpg" },
];

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const player = useRef<HTMLVideoElement>(null);

  function start() {
    const element = player.current;
    if (!element) return;
    element.src = video.src;
    setStarted(true);
    element.load();
    void element.play().catch(() => {
      // Native controls remain available if autoplay is blocked.
    });
    element.focus();
  }

  return (
    <article className="mx-auto w-full max-w-[320px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-[#1A504F]/5 shadow-lg">
        <video
          ref={player}
          poster={video.poster}
          preload="none"
          controls={started}
          playsInline
          aria-label={video.title}
          tabIndex={started ? 0 : -1}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
        {!started && (
          <button
            type="button"
            onClick={start}
            aria-label={`播放${video.title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#1A504F]"
          >
            <span className="absolute left-4 top-4 rounded-full bg-[#1A504F] px-4 py-2 text-sm font-medium text-white">{video.language}</span>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[#1A504F] shadow-lg">
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <h3 className="mt-5 text-center text-xl font-semibold text-[#1A504F]">{video.title}</h3>
      {failed ? (
        <p role="alert" className="mt-2 text-center text-sm text-gray-600">影片暫時無法播放，請<a href={video.src} className="underline">直接開啟影片</a>。</p>
      ) : <p className="mt-2 text-center text-sm text-gray-500">{started ? "使用播放器控制播放或全螢幕" : "點擊播放"}</p>}
    </article>
  );
}

export function VideoShowcase() {
  return (
    <section aria-labelledby="video-heading" className="relative bg-white px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 id="video-heading" className="text-center text-3xl font-bold text-[#1A504F] sm:text-4xl">認識 AraBalance</h2>
        <p className="mt-3 text-center text-gray-500">選擇語言，觀看產品介紹</p>
        <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          {videos.map((video) => <VideoCard key={video.src} video={video} />)}
        </div>
      </div>
    </section>
  );
}
