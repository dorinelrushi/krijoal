'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from('.hero-eyebrow', {
        opacity: 0, x: -40, duration: 0.8, ease: 'power3.out',
      })
        .from('.hero-title-word', {
          opacity: 0, y: 120, skewY: 8,
          duration: 1.1, ease: 'power4.out', stagger: 0.14,
        }, '-=0.4')
        .from('.hero-sub', {
          opacity: 0, y: 30, duration: 0.9, ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-actions', {
          opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
        }, '-=0.4')
        .from('.hero-scroll', {
          opacity: 0, duration: 0.5,
        }, '-=0.2')
        .from('.hero-stats', {
          opacity: 0, y: 20, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        }, '-=0.5');

      // Ambient glow pulse
      gsap.to(glowRef.current, {
        scale: 1.35, opacity: 0.8, duration: 4,
        ease: 'sine.inOut', yoyo: true, repeat: -1,
      });

      // Subtle photo parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Mouse parallax
      const handleMouse = (e) => {
        const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
        const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(glowRef.current, {
          x: xPct * 70, y: yPct * 50, duration: 1.8, ease: 'power1.out',
        });
        gsap.to('.hero-flag', {
          x: xPct * -25, y: yPct * -15, duration: 2.2, ease: 'power1.out',
        });
      };
      window.addEventListener('mousemove', handleMouse);
      return () => window.removeEventListener('mousemove', handleMouse);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Photo background with dark overlay */}
      <div className="hero-photo-bg" ref={bgRef}>
        <Image
          src="/SaveClip.App_727558340_18333770761264316_4849071921286298594_n.jpg"
          alt="KrijoAL — T-Shirt Printim"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
      <div className="hero-photo-overlay" />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Animated glow */}
      <div className="hero-glow" ref={glowRef} />

      {/* Albanian flag watermark */}
      <div className="hero-flag">🇦🇱</div>

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Made in Albania · Prej 2020</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">
            <span className="hero-title-word">VISH</span>{' '}
          </span>
          <span className="hero-title-line">
            <span className="hero-title-word" style={{ WebkitTextStroke: '2px var(--red)', color: 'transparent' }}>
              IMAGJINATËN
            </span>
          </span>
          <span className="hero-title-line">
            <span className="hero-title-word">TËNDE</span>
          </span>
        </h1>

        <p className="hero-sub">
          Dizajni yt, cilësia jonë. T-shirt, hoodie, sweatshirt dhe uniforma
          pune me printim të personalizuar — kudo në Shqipëri. 🤍
        </p>

        <div className="hero-actions">
          <a href="#kontakt" className="btn-primary" id="hero-cta">
            Porosit Tani
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#galeria" className="btn-outline" id="hero-gallery">
            Shiko Punët Tona
          </a>
        </div>

        {/* Mini stats in hero */}
        <div className="hero-stats-row">
          {[
            { num: '500+', label: 'Klientë' },
            { num: '3K+', label: 'Copë' },
            { num: '48h', label: 'Prodhim' },
          ].map((s, i) => (
            <div className="hero-stats" key={i}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hero-scroll"
        onClick={() => document.getElementById('ticker')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="scroll-line" />
        <span>Shpalo</span>
      </div>
    </section>
  );
}
