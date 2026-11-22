"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

const FRAME_COUNT = 238;
const FRAME_PATH = (i: number) =>
  `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [progress, setProgress] = useState(0);
  const [introOpacity, setIntroOpacity] = useState(1);
  const [outroOpacity, setOutroOpacity] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preload images with proper decoding - moved after drawFrame definition
  // This will be called via a separate effect below

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const width = Math.round(rect.width * dpr);
    const height = Math.round(rect.height * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      drawH = height;
      drawW = height * imgAspect;
      drawX = (width - drawW) / 2;
      drawY = 0;
    } else {
      drawW = width;
      drawH = width / imgAspect;
      drawX = 0;
      drawY = (height - drawH) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Preload images with proper decoding
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = FRAME_PATH(index);
        img.onload = async () => {
          try {
            await img.decode();
          } catch {
            // decode not supported or failed, continue
          }
          images[index] = img;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === 1) {
            drawFrame(0);
          }
          if (loaded === FRAME_COUNT) {
            setIsReady(true);
          }
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setLoadedCount(loaded);
          resolve();
        };
        images[index] = img;
      });
    };

    const loadAll = async () => {
      await loadImage(0);
      const batchSize = 20;
      for (let i = 1; i < FRAME_COUNT; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, FRAME_COUNT); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
        await new Promise((r) => setTimeout(r, 50));
      }
    };

    loadAll();
    imagesRef.current = images;
  }, [drawFrame]);

  // Scroll-driven frame selection with smooth transitions
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollHeight));

      setProgress(p);

      // Intro fade: first 5% of scroll
      setIntroOpacity(p < 0.05 ? 1 - p / 0.05 : 0);
      // Outro fade: last 5% of scroll
      setOutroOpacity(p > 0.95 ? (p - 0.95) / 0.05 : 0);

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(p * (FRAME_COUNT - 1))
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame, reducedMotion]);

  // Draw first frame on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      drawFrame(0);
    }, 50);
    return () => clearTimeout(timer);
  }, [drawFrame]);

  // Reduced motion: show static assembled frame
  useEffect(() => {
    if (reducedMotion) {
      drawFrame(0);
    }
  }, [reducedMotion, drawFrame]);

  // Draw on resize
  useEffect(() => {
    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`} style={{ height: "500vh" }}>
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-bg">
        {/* Subtle radial gradient background that shifts with progress */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,${0.03 + progress * 0.05}), transparent 70%)`,
          }}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* Intro fade overlay - fades out as animation begins */}
        {introOpacity > 0 && (
          <div
            className="absolute inset-0 bg-dark-bg pointer-events-none"
            style={{ opacity: introOpacity }}
          />
        )}

        {/* Outro fade overlay - fades in at the end */}
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
              <p className="text-muted text-sm">
                Loading sequence... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
              </p>
              <p className="text-muted/50 text-xs mt-2">
                {loadedCount} / {FRAME_COUNT} frames
              </p>
            </div>
          </div>
        )}

        {/* Chapter text - minimal, positioned at bottom to avoid covering product */}
        <div
          className="absolute inset-0 pointer-events-none flex items-end justify-center pb-20 md:pb-28"
          style={{ opacity: 1 - introOpacity - outroOpacity }}
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
          style={{ opacity: 1 - introOpacity - outroOpacity }}
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
