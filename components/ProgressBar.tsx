'use client';
import { useEffect } from 'react';

export default function ProgressBar() {
  useEffect(() => {
    const prog = document.getElementById('progress');
    const nav = document.getElementById('navbar');
    const onScroll = () => {
      if (prog) {
        const pct =
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100;
        prog.style.width = pct + '%';
      }
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="progress" />;
}
