"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.6 });
  const dotX = useSpring(x, { damping: 40, stiffness: 600, mass: 0.25 });
  const dotY = useSpring(y, { damping: 40, stiffness: 600, mass: 0.25 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!e.target?.closest?.(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.9 : 1, rotate: 360 }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3, ease: "easeOut" },
          }}
          className="h-8 w-8 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #FF9933 0deg 120deg, #FFFFFF 120deg 240deg, #138808 240deg 360deg)",
            opacity: 0.8,
            boxShadow:
              "0 0 16px 2px rgba(255,153,51,0.35), 0 0 16px 2px rgba(19,136,8,0.35)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          opacity: hovering ? 0 : 0.9,
        }}
      />
    </>
  );
};

export default CustomCursor;
