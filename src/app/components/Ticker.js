'use client';

export default function Ticker() {
  const items = [
    'Made in Albania 🇦🇱',
    'T-Shirt • Hoodie • Sweatshirt',
    'Uniforma Pune 💯',
    'Dizajn i Personalizuar',
    'Cilësi Premium',
    'Porosit Tani 📦',
    'Made in Albania 🇦🇱',
    'T-Shirt • Hoodie • Sweatshirt',
    'Uniforma Pune 💯',
    'Dizajn i Personalizuar',
    'Cilësi Premium',
    'Porosit Tani 📦',
  ];

  return (
    <div className="ticker-section" id="ticker">
      <div className="ticker-track" aria-hidden="true">
        {items.map((item, i) => (
          <div className="ticker-item" key={i}>
            <div className="ticker-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
