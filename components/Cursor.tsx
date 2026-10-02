'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
    };

    const animateCursor = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.addEventListener('mousemove', onMove);

    const interactables = document.querySelectorAll(
      'a,button,.service-card,.depo-card,.fleet-card,.client-pill,.pillar-item'
    );
    const onEnter = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = '20px';
      cursorRef.current.style.height = '20px';
      cursorRef.current.style.background = 'var(--gold-light)';
      ringRef.current.style.width = '60px';
      ringRef.current.style.height = '60px';
    };
    const onLeave = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = '12px';
      cursorRef.current.style.height = '12px';
      cursorRef.current.style.background = 'var(--gold)';
      ringRef.current.style.width = '40px';
      ringRef.current.style.height = '40px';
    };
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
