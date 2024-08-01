"use client";
import { ReactLenis } from 'lenis/react'

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
