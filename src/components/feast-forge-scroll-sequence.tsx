"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface ScrollSequenceProps {
  className?: string;
}

const CHAPTERS = [
  { at: 0.0, text: "Feast Forge Smart Feeder Maze" },
  { at: 0.2, text: "Every component has a purpose." },
  { at: 0.45, text: "3 layers, one integrated system." },
  { at: 0.7, text: "Precision begins with thoughtful design." },
  { at: 0.95, text: "Fully revealed." },
];

export function FeastForgeScrollSequence({ className }: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [progress, setProgress] = useState(0);
  const [outroOpacity, setOutroOpacity] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Load video metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setIsReady(true);
      // Seek to first frame
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Scroll-driven video playback
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      const video = videoRef.current;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollHeight));

      setProgress(p);

      // Outro fade: last 5% of scroll
      setOutroOpacity(p > 0.95 ? (p - 0.95) / 0.05 : 0);

      // Seek video to corresponding time
      if (video.duration && isFinite(video.duration)) {
        const targetTime = p * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.05) {
          video.currentTime = targetTime;
        }
      }

      let chapter = CHAPTERS[0];
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        if (p >= CHAPTERS[i].at) {
          chapter = CHAPTERS[i];
          break;
        }
      }
      setActiveChapter(chapter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reducedMotion, isReady]);

  // Reduced motion: show first frame
  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`} style={{ height: "500vh" }}>
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-bg">
        {/* Subtle radial gradient background */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,${0.03 + progress * 0.05}), transparent 70%)`,
          }}
        />

        {/* Video element - starts with first frame */}
        <video
          ref={videoRef}
          src="/Product_parts_exploding_into_view.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain"
          style={{ display: "block" }}
        />

        {/* Outro fade overlay */}
        {outroOpacity > 0 && (
          <div
            className="absolute inset-0 bg-dark-bg pointer-events-none"
            style={{ opacity: outroOpacity }}
          />
        )}

        {/* Loading indicator */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
              <p className="text-muted text-sm">Loading animation...</p>
            </div>
          </div>
        )}

        {/* Chapter text - minimal, positioned at bottom */}
        <div
          className="absolute inset-0 pointer-events-none flex items-end justify-center pb-20 md:pb-28"
          style={{ opacity: 1 - outroOpacity }}
        >
          <div className="max-w-xl mx-auto px-6 text-center">
            <p
              key={activeChapter.text}
              className="text-xl md:text-3xl font-bold text-white/80 tracking-tight animate-fade-in"
              style={{
                textShadow: "0 2px 24px rgba(0,0,0,0.9)",
              }}
            >
              {activeChapter.text}
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
          style={{ opacity: 1 - outroOpacity }}
        >
          <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-100"
              style={{
                width: `${isReady ? progress * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
