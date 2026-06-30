'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate text — never animate the image frame itself
      // (clip-path on image frame hides it when ScrollTrigger misfires on mobile)
      gsap.from('.about-text .section-label', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.7, ease: 'power3.out',
      });

      gsap.from('.about-text .section-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.1,
      });

      gsap.from('.about-text p', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0, y: 20, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.2,
      });

      gsap.from('.about-flags', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        opacity: 0, y: 16, duration: 0.6, ease: 'power3.out', delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section section-padding" id="rreth" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual">
            <div className="about-image-frame">
              <Image
                src="/SaveClip.App_730015586_18333959026264316_3827307358614972562_n.jpg"
                alt="KrijoAL — Uniformë Pune Premium"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="about-badge">
              <span className="about-badge-number">5+</span>
              <span className="about-badge-text">Vite Eksperiencë</span>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            <span className="section-label">Rreth Nesh</span>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              PRODHIM<br /><span>SHQIPTAR</span><br />100%
            </h2>
            <p>
              KrijoAL është pasioni ynë — një brand shqiptar që sjell mundësinë për
              të veshur dizajnin tënd personal. Çdo copë rrobë është e kurdisur me
              kujdes dhe dashamirësi, direkt nga Shqipëria.
            </p>
            <p>
              Ne ofrojmë printim të cilësisë së lartë mbi T-shirt, hoodie, sweatshirt
              dhe uniforma pune. Nuk është thjesht veshje — është identiteti yt.
            </p>

            <div className="about-flags">
              <span>🇦🇱</span>
              <p>Prodhuar me krenari në Shqipëri</p>
            </div>

            <a href="https://www.instagram.com/krijo_al/" target='_blank' className="btn-primary" id="about-cta">
              Na Kontakto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
