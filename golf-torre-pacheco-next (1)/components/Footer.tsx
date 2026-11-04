import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Golf Torre Pacheco</div>
          <p>
            Campo municipal Alfonso Legaz · Torre-Pacheco, Murcia.
            Una forma cercana, accesible y diferente de vivir el golf.
          </p>
        </div>
        <div>
          <h4>Explora</h4>
          <Link href="/campo">El campo</Link>
          <Link href="/escuela">Escuela</Link>
          <Link href="/torneos">Torneos</Link>
          <Link href="/tarifas">Tarifas</Link>
        </div>
        <div>
          <h4>Club</h4>
          <Link href="/club">Historia y club</Link>
          <Link href="/restaurante">Restaurante Hoyo10</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>C. Gregory Peter, 1<br />30700 Torre-Pacheco, Murcia</p>
          <a href="tel:+34968585111">968 585 111</a>
          <a href="mailto:cadygolftp@gmail.com">cadygolftp@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Golf Torre Pacheco</span>
        <span>Privacidad · Aviso legal · Cookies</span>
      </div>
    </footer>
  );
}