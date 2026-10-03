import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ─── Image optimization (Vercel handles this natively) ───────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    // Domains for next/image if using external URLs (add as needed)
    // domains: [],
  },

  // ─── Compiler optimizations ───────────────────────────────────────────────
  compiler: {
    // Strip console.log in production (keep error/warn)
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  // ─── Package import optimization (better tree-shaking) ───────────────────
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },

  // ─── HTTP Cache Headers (Vercel respects these) ───────────────────────────
  async headers() {
    return [
      {
        // Public images, videos, fonts — cache 7 days
        source: '/:path*.(jpg|jpeg|png|webp|avif|svg|mp4|woff2|woff|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // All pages — no cache on HTML, always fetch fresh
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://jenetix.id https://*.jenetix.id",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
