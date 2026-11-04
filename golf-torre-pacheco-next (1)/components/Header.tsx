import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/">
          <span className="brand-mark">TP</span>
          <span>
            <strong>Golf</strong>
            <small>Torre Pacheco</small>
          </span>
        </Link>

        <nav className="nav">
          <Link href="/campo">El campo</Link>
          <Link href="/club">El club</Link>
          <Link href="/escuela">Escuela</Link>
          <Link href="/torneos">Torneos</Link>
          <Link href="/restaurante">Hoyo10</Link>
          <Link href="/tarifas">Tarifas</Link>
        </nav>

        <Link className="nav-cta" href="/reservar">
          Reservar
        </Link>
      </div>
    </header>
  );
}