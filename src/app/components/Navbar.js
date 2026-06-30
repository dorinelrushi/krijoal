'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#sherbime', label: 'Shërbimet' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#procesi', label: 'Procesi' },
    { href: '#testimoniale', label: 'Klientët' },
    { href: '#kontakt', label: 'Kontakt', cta: true },
  ];

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <a href="#" className="logo">KRIJO<span>AL</span></a>

            <ul className="nav-links">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className={l.cta ? 'nav-cta' : ''}>{l.label}</a>
                </li>
              ))}
            </ul>

            {/* Single toggle button — shows ☰ when closed, ✕ when open */}
            <button
              className={`hamburger${menuOpen ? ' is-open' : ''} text-[white] border-[red]`}
              aria-label={menuOpen ? 'Mbyll menynë' : 'Hap menynë'}
              aria-expanded={menuOpen}
              id="hamburger-btn"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                /* Close / X icon */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                /* Bars / hamburger icon */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="ffffff" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
