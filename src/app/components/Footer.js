export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="logo" style={{ fontSize: '1.5rem' }}>
            KRIJO<span style={{ color: 'var(--red)' }}>AL</span>
          </a>

          <p className="footer-copy">
            © {new Date().getFullYear()} KrijoAL · Të gjitha të drejtat e rezervuara
          </p>

          <ul className="footer-links">
            <li><a href="#sherbime">Shërbimet</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>

          <span className="footer-flag">🇦🇱</span>
        </div>
      </div>
    </footer>
  );
}
