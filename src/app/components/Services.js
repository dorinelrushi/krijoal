'use client';

const services = [
  {
    icon: '👕',
    name: 'T-SHIRT',
    desc: 'T-shirt të personalizuara me printim cilësor të lartë. Zgjidhni ngjyrën, modelin dhe dizajnin tuaj të preferuar.',
    num: '01',
  },
  {
    icon: '🧥',
    name: 'HOODIE',
    desc: 'Hoodie të ngrohtë dhe komfortabël me logo ose dizajn plotësisht personal. Perfekte për çdo stinë.',
    num: '02',
  },
  {
    icon: '🧤',
    name: 'SWEATSHIRT',
    desc: 'Sweatshirt modern me cilësi premium. Ideal për stil casual ose për grupet dhe ekipet tuaja.',
    num: '03',
  },
  {
    icon: '👔',
    name: 'UNIFORMA PUNE',
    desc: 'Uniforma profesionale për bizneset tuaja. Identiteti i markës suaj mbi çdo veshje pune.',
    num: '04',
  },
  {
    icon: '🎨',
    name: 'DIZAJN PERSONAL',
    desc: 'Vish imagjinatën tënde! Sjell idenë tënde dhe ne e bëjmë realitet me printim të saktë dhe të qëndrueshëm.',
    num: '05',
  },
  {
    icon: '🌏',
    name: 'TRANSPORT',
    desc: 'Dërgim kudo në Shqipëri dhe rajon. Kostoja e transportit mbulohet nga klienti. Dërgojmë shpejt!',
    num: '06',
  },
];

export default function Services() {
  return (
    <section className="services-section section-padding" id="sherbime">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Çfarë Ofrojmë</span>
          <h2 className="section-title">
            SHËRBIMET<br /><span>TONA</span>
          </h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i} id={`service-${i + 1}`}>
            <span className="service-number">{s.num}</span>
            <span className="service-icon">{s.icon}</span>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
