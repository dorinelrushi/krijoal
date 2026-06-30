'use client';

const stats = [
  { num: '500+', label: 'Klientë të Kënaqur' },
  { num: '3K+', label: 'Copë të Prodhuara' },
  { num: '5★', label: 'Vlerësim Mesatar' },
  { num: '48h', label: 'Kohë e Prodhimit' },
];

export default function Stats() {
  return (
    <section className="stats-section" id="statistika">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i} id={`stat-${i + 1}`}>
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
