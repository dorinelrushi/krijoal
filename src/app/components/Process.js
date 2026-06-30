'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    icon: '💡',
    title: 'IDETË TUAJA',
    desc: 'Na trego dizajnin apo idenë tënde. Çdo gjë fillon me imagjinatën tënde.',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'DIZAJNIMI',
    desc: 'Ekipi ynë e sjell idenë tënde në jetë me dizajn profesional dhe preciz.',
  },
  {
    num: '03',
    icon: '🖨️',
    title: 'PRINTIMI',
    desc: 'Printim me teknologji moderne për rezultat të qëndrueshëm dhe me ngjyra të ndezura.',
  },
  {
    num: '04',
    icon: '📦',
    title: 'DËRGESA',
    desc: 'Produkti arrin deri tek dera juaj. Transport i sigurt kudo në Shqipëri.',
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      });

      gsap.from('.process-step', {
        scrollTrigger: { trigger: '.process-steps', start: 'top 80%' },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Animated line draw on scroll
      gsap.from('.process-steps::before', {
        scrollTrigger: { trigger: '.process-steps', start: 'top 70%' },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.inOut',
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section section-padding" id="procesi" ref={sectionRef}>
      <div className="container">
        <div className="process-header">
          <span className="section-label" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>
            Si Funksionon
          </span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            PROCESI <span>YNË</span>
          </h2>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div className="process-step" key={i} id={`step-${i + 1}`}>
              <div className="step-number">
                {step.num}
                <span className="step-icon">{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
