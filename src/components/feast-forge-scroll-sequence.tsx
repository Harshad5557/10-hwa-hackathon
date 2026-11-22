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
  { at: 0.25, text: "Every component has a purpose." },
  { at: 0.5, text: "3 layers, one integrated system." },
  { at: 0.75, text: "Precision begins with thoughtful design." },
  { at: 1.0, text: "Fully revealed." },
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
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
            // Draw first frame as soon as it's available
            drawFrameRef.current?.(0);
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

    // Load first frame immediately, then rest in batches with concurrency limit
    const loadAll = async () => {
      // First frame first
      await loadImage(0);

      // Load rest in batches of 20 with small delays
      const batchSize = 20;
      for (let i = 1; i < FRAME_COUNT; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, FRAME_COUNT); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
        // Small delay between batches to avoid blocking
        await new Promise((r) => setTimeout(r, 50));
      }
    };

    loadAll();
    imagesRef.current = images;
  }, []);

  const drawFrameRef = useRef<((frameIndex: number) => void) | null>(null);

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

    // High quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Cover fit with center crop - keeps product large and sharp
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

  useEffect(() => {
    drawFrameRef.current = drawFrame;
  }, [drawFrame]);

  // Scroll-driven frame selection
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollHeight));

      setProgress(p);

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
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

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

        {/* Chapter text overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p
              key={activeChapter.text}
              className="text-2xl md:text-4xl font-bold text-white/90 tracking-tight animate-fade-in"
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
              }}
            >
              {activeChapter.text}
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
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
