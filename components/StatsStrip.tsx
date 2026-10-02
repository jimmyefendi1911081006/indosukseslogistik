'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function StatsStrip() {
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    numbersRef.current.forEach((el, i) => {
      if (!el) return;
      const target = stats[i].target;
      ScrollTrigger.create({
        trigger: '#stats-strip',
        start: 'top 80%',
        onEnter: () => {
          gsap.to(
            { val: 0 },
            {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                if (el)
                  el.textContent = Math.round(
                    (this as any).targets()[0].val
                  ).toLocaleString('id');
              },
            }
          );
        },
      });
    });
  }, []);

  return (
    <section id="stats-strip">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item" key={s.label}>
            <span
              className="stat-number"
              ref={(el) => { numbersRef.current[i] = el; }}
            >
              0
            </span>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
