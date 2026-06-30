'use client';
import { useState } from 'react';

const testimonials = [
  {
    text: '"KrijoAL bëri diçka magjike me idenë time! T-shirtat ishin saktësisht si i kisha imagjinuar. Cilësia e printimit mbeti e gjallë"',
    name: 'Argjent Hoxha',
    role: 'Klient i Rregullt',
    initial: 'A',
    stars: 5,
  },
  {
    text: '"Porosita uniforma pune për të gjithë stafin e restorantit tim. Rezultati ishte jashtë çdo pritshmërie — profesionalizëm i vërtetë. Stafi im tani duket si skuadër e vërtetë!"',
    name: 'Blerina Shehu',
    role: 'Pronare Restoranti',
    initial: 'B',
    stars: 5,
  },
  {
    text: '"Hoodies që porositëm për ekipin tonë të futbollit ishin perfekte. Ngjyrat e ndezura, materiali cilësor dhe dërgesa e shpejtë. Faleminderit KrijoAL — do të porositim sërish!"',
    name: 'Dritero Kelmendi',
    role: 'Trajner Futbolli',
    initial: 'D',
    stars: 5,
  },
  {
    text: '"Surprizova miqtë me t-shirt me dizajnin tonë të grupit. Reagimi ishte fantastik! Procesi ishte shumë i thjeshtë — dërgova idenë dhe ata e bënë realitet brenda pak ditësh."',
    name: 'Olta Marku',
    role: 'Klient i Kënaqur',
    initial: 'O',
    stars: 5,
  },
  {
    text: '"Kam provuar shumë kompani printimi por KrijoAL është padyshim i pari. Çmimi i drejtë, cilësi e lartë dhe komunikim shumë i mirë gjatë gjithë procesit. Faleminderit!"',
    name: 'Genti Leka',
    role: 'Sipërmarrës',
    initial: 'G',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="testimonials-section section-padding" id="testimoniale">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label" style={{ margin: '0 auto 16px', display: 'flex', justifyContent: 'center' }}>
            Ata Që Na Besojnë
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            KLIENTËT <span>TANË</span>
          </h2>
        </div>

        <div className="testi-single-wrap">
          {/* Stars */}
          <div className="testi-stars">
            {'★'.repeat(t.stars)}
          </div>

          {/* Quote text */}
          <p className="testi-text">{t.text}</p>

          {/* Author */}
          <div className="testi-author">
            <div className="testi-avatar">{t.initial}</div>
            <div className="testi-author-info">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="testi-controls">
            <button className="testi-btn" onClick={prev} aria-label="Mëparshëm" id="testi-prev">
              ←
            </button>

            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testi-dot-${i + 1}`}
                  className={`testi-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimoniali ${i + 1}`}
                />
              ))}
            </div>

            <button className="testi-btn" onClick={next} aria-label="Tjetër" id="testi-next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
