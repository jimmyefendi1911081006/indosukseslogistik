'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    // Force scroll to top on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Use setTimeout to bypass Next.js and GSAP race conditions
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // Generic reveals (Entrance & Exit on scroll)
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // Stagger service hexagon nodes (Entrance & Exit)
    const hexNodes = gsap.utils.toArray<HTMLElement>('.hex-service-node');
    if (hexNodes.length) {
      gsap.fromTo(
        hexNodes,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.hex-ecosystem-wrapper',
            start: 'top 85%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Center Core Node Animation
    const hexCore = gsap.utils.toArray<HTMLElement>('.hex-core-node');
    if (hexCore.length) {
      gsap.fromTo(
        hexCore,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.7)',
          scrollTrigger: {
            trigger: '.hex-ecosystem-wrapper',
            start: 'top 85%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // SVG Connecting Lines Animation
    const ecoLines = gsap.utils.toArray<SVGLineElement>('.eco-line');
    if (ecoLines.length) {
      gsap.fromTo(
        ecoLines,
        { strokeDasharray: 400, strokeDashoffset: 400, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hex-ecosystem-wrapper',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Depo section wrapper (Entrance & Exit)
    const depoWrapper = gsap.utils.toArray<HTMLElement>('.depo-content-wrapper');
    if (depoWrapper.length) {
      gsap.fromTo(
        depoWrapper,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#depo',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Fleet cards (Entrance & Exit)
    const fleetCards = gsap.utils.toArray<HTMLElement>('.fleet-card');
    if (fleetCards.length) {
      gsap.fromTo(
        fleetCards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#fleet',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Cold cards (Entrance & Exit)
    const coldCards = gsap.utils.toArray<HTMLElement>('.cold-card');
    if (coldCards.length) {
      gsap.fromTo(
        coldCards,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#cold-storage',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Client logo cards (Entrance & Exit)
    const logoCards = gsap.utils.toArray<HTMLElement>('.logo-card');
    if (logoCards.length) {
      gsap.fromTo(
        logoCards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#clients',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Hexagon grid 3D on scroll
    const hexGrid = gsap.utils.toArray<HTMLElement>('.hexagon-grid');
    if (hexGrid.length) {
      gsap.to(hexGrid, {
        rotateX: 0,
        rotateY: 0,
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });
    }

    // Contact title (Entrance & Exit)
    const contactTitle = gsap.utils.toArray<HTMLElement>('#contact .section-title');
    if (contactTitle.length) {
      gsap.fromTo(
        contactTitle,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // Pillar items stagger (Entrance & Exit)
    const pillarItems = gsap.utils.toArray<HTMLElement>('.pillar-item');
    if (pillarItems.length) {
      gsap.fromTo(
        pillarItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-pillars',
            start: 'top 85%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
