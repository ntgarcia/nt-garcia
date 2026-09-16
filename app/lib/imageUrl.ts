/**
 * Source images are full-resolution exports (often several thousand px wide).
 * Route them through Next's image optimizer so the browser downloads a
 * copy sized for how small they're actually displayed. `width` must be one
 * of Next's default deviceSizes: 640, 750, 828, 1080, 1200, 1920, 2048, 3840.
 */
export function optimizedSrc(src: string, width: number, quality = 75): string {
  // Animated GIFs are served unresized by Next's optimizer anyway, so skip
  // the round-trip and link straight to the original file.
  if (src.toLowerCase().endsWith(".gif")) return src;

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality),
  });
  return `/_next/image?${params.toString()}`;
}
