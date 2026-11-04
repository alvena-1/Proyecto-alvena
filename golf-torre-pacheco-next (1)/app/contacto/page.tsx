export default function Contacto() {
  return (
    <main>
      <section className="page-hero image-club">
        <div className="page-hero-inner"><span className="eyebrow">Contacto</span><h1>Nos vemos<br /><em>en el campo.</em></h1></div>
      </section>
      <section className="section">
        <div className="contact-grid">
          <div><span className="eyebrow">Dónde estamos</span><h2>Calle Gregory Peter, 1<br />30700 Torre-Pacheco, Murcia</h2><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Gregory+Peter+1+Torre-Pacheco+Murcia" target="_blank" rel="noreferrer">Abrir en Google Maps →</a></div>
          <div><span className="eyebrow">Caddy Master</span><a href="tel:+34968585111">968 585 111</a><a href="tel:+34685636483">685 636 483</a><a href="mailto:cadygolftp@gmail.com">cadygolftp@gmail.com</a></div>
          <div><span className="eyebrow">Horario</span><p>Lunes a viernes<br />08:00–18:30</p><p>Sábados<br />08:00–18:00</p><p>Domingos<br />08:00–14:00</p></div>
        </div>
      </section>
    </main>
  );
}