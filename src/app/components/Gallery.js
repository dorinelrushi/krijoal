'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const photos = [
  { file: 'SaveClip.App_727558340_18333770761264316_4849071921286298594_n.jpg', label: 'Moto Service — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_728195738_18334267198264316_4858666175820986687_n.jpg', label: 'Cole Haan — Koleksion', category: 'T-Shirt' },
  { file: 'SaveClip.App_728369700_18334060510264316_2352452613473784086_n.jpg', label: 'Lume Nails — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_728861532_18334297669264316_8726769291339165685_n.jpg', label: 'Boyka — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_729558287_18333681130264316_1875986356458718779_n.jpg', label: 'Ke Dashi — Uniformë', category: 'Uniforma' },
  { file: 'SaveClip.App_730015586_18333959026264316_3827307358614972562_n.jpg', label: 'Uniformë Pune', category: 'Uniforma' },
  { file: 'SaveClip.App_730222865_18334244800264316_466741774494941888_n.jpg', label: 'Omega — Polo T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_730907242_18334351696264316_6990099927235239761_n.jpg', label: 'Cleaning Bee — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_731022735_18334100017264316_3203915547333831388_n.jpg', label: 'Green Park — Polo', category: 'Uniforma' },
  { file: 'SaveClip.App_731033007_18334456138264316_4307993460441398775_n.jpg', label: 'Lavazho — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_733309613_18334442044264316_7996620145371860406_n.jpg', label: 'Trust Me — T-Shirt', category: 'T-Shirt' },
  { file: 'SaveClip.App_735718508_18334514974264316_8576502278039321928_n.jpg', label: 'Buké e Zemrës — T-Shirt', category: 'T-Shirt' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null
  const touchStartX = useRef(null);
  const mobileSliderRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  // Mobile touch swipe for lightbox
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setLightbox((i) => (i + 1) % photos.length);
      else setLightbox((i) => (i - 1 + photos.length) % photos.length);
    }
    touchStartX.current = null;
  };

  // Mobile grid swipe
  const gridTouchStart = useRef(null);
  const gridTouchEnd = (e) => {
    if (gridTouchStart.current === null) return;
    const diff = gridTouchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) setMobileIndex((i) => Math.min(i + 1, photos.length - 1));
    else if (diff < -50) setMobileIndex((i) => Math.max(i - 1, 0));
    gridTouchStart.current = null;
  };

  return (
    <section className="gallery-section section-padding" id="galeria">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Punët Tona</span>
          <h2 className="section-title">
            GALERIA <span>E</span><br />PUNIMEVE
          </h2>
          <p className="gallery-subtext">Kliko mbi foto për ta parë në madhësi të plotë</p>
        </div>
      </div>

      {/* ── Desktop grid ── */}
      <div className="gallery-desktop-grid">
        {photos.map((photo, i) => (
          <button
            className="gallery-item"
            key={i}
            id={`gallery-item-${i + 1}`}
            onClick={() => setLightbox(i)}
            aria-label={`Shiko ${photo.label}`}
          >
            <Image
              src={`/${photo.file}`}
              alt={photo.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-tag">{photo.category}</span>
              <span className="gallery-overlay-text">{photo.label}</span>
              <span className="gallery-zoom-icon">🔍</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Mobile horizontal slider ── */}
      <div
        className="gallery-mobile-slider"
        onTouchStart={(e) => { gridTouchStart.current = e.touches[0].clientX; }}
        onTouchEnd={gridTouchEnd}
      >
        <div
          className="gallery-mobile-track"
          ref={mobileSliderRef}
          style={{ transform: `translateX(calc(-${mobileIndex * 85}vw - ${mobileIndex * 12}px))` }}
        >
          {photos.map((photo, i) => (
            <button
              className="gallery-mobile-slide"
              key={i}
              onClick={() => setLightbox(i)}
              aria-label={`Shiko ${photo.label}`}
            >
              <Image
                src={`/${photo.file}`}
                alt={photo.label}
                fill
                sizes="85vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <span className="gallery-overlay-tag">{photo.category}</span>
                <span className="gallery-overlay-text">{photo.label}</span>
              </div>
            </button>
          ))}
        </div>
        {/* Mobile dots */}
        <div className="gallery-mobile-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`gallery-mobile-dot${i === mobileIndex ? ' active' : ''}`}
              onClick={() => setMobileIndex(i)}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Pamje e zmadhuar"
        >
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Mbyll">
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={() => setLightbox((i) => (i - 1 + photos.length) % photos.length)}
            aria-label="Mëparshëm"
          >
            ‹
          </button>

          <div className="lightbox-img-wrap">
            <Image
              src={`/${photos[lightbox].file}`}
              alt={photos[lightbox].label}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={() => setLightbox((i) => (i + 1) % photos.length)}
            aria-label="Tjetër"
          >
            ›
          </button>

          <div className="lightbox-caption">
            <span className="lightbox-tag">{photos[lightbox].category}</span>
            <span>{photos[lightbox].label}</span>
            <span className="lightbox-counter">{lightbox + 1} / {photos.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}
