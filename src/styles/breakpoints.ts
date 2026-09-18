// Mirror of the breakpoint tokens in tokens.css, for JS (matchMedia, <picture> sizes).
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const mq = (bp: Breakpoint) => `(min-width: ${breakpoints[bp]}px)`;
