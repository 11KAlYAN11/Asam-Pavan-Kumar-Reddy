"use client";

import { useEffect, useRef } from "react";

const MAX_POINTS = 28;
const FADE_STEP = 0.03;
const TAIL_COLOR = [163, 230, 53]; // lime-400
const HEAD_COLOR = [217, 70, 239]; // fuchsia-500
const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

const lerpChannel = (from, to, t) => Math.round(from + (to - from) * t);

const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const points = [];
    const mouse = { x: -100, y: -100, active: false, hovering: false };
    let rafId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouse.hovering = !!e.target?.closest?.(INTERACTIVE_SELECTOR);
    };
    const handleLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", resize);

    const draw = () => {
      if (mouse.active) {
        points.push({ x: mouse.x, y: mouse.y, life: 1 });
        if (points.length > MAX_POINTS) points.shift();
      }

      for (let i = points.length - 1; i >= 0; i--) {
        points[i].life -= FADE_STEP;
        if (points[i].life <= 0) points.splice(i, 1);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseWidth = mouse.hovering ? 5.5 : 3.5;

      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const t = i / points.length;
        const alpha = Math.max(0, Math.min(1, p1.life)) * 0.55;
        if (alpha <= 0) continue;

        const r = lerpChannel(TAIL_COLOR[0], HEAD_COLOR[0], t);
        const g = lerpChannel(TAIL_COLOR[1], HEAD_COLOR[1], t);
        const b = lerpChannel(TAIL_COLOR[2], HEAD_COLOR[2], t);

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = Math.max(0.6, baseWidth * t * p1.life);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.stroke();
      }

      if (mouse.active && points.length) {
        const head = points[points.length - 1];
        ctx.beginPath();
        ctx.arc(head.x, head.y, mouse.hovering ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${HEAD_COLOR[0]}, ${HEAD_COLOR[1]}, ${HEAD_COLOR[2]}, 0.85)`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
};

export default CustomCursor;
