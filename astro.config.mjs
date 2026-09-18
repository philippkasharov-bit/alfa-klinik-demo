import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // build.format 'file' keeps legacy-style URLs (/skidki.html) for easy redirects from *.htm
    format: 'file',
    // Page CSS is ~30–110 KB (≈6–18 KB gzipped) and was split into up to 6 render-blocking
    // requests. Inlining removes every CSS round-trip before first paint.
    inlineStylesheets: 'always',
  },
});
