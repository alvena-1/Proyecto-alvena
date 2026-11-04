const bookingUrl = "https://torrepacheco.golfmanager.com/consumer/ebookings";

export default function Reservar() {
  return (
    <main>
      <section className="booking-page">
        <div className="booking-copy">
          <span className="eyebrow">Reservas online</span>
          <h1>Reserva tu<br /><em>próxima partida.</em></h1>
          <p>Selecciona fecha y disponibilidad en el sistema de reservas del club.</p>
          <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">Abrir reservas ↗</a>
          <div className="booking-note">
            <strong>Próxima evolución</strong>
            <p>Esta página está preparada para integrar una experiencia de reserva más profunda con Golfmanager cuando el club confirme las opciones de API/widget y la activación de pagos online.</p>
          </div>
        </div>
        <div className="booking-panel">
          <span className="eyebrow">Green Fee</span>
          <strong>18 hoyos</strong>
          <div className="fake-calendar">
            <span>HOY</span><b>Selecciona fecha</b>
            <div className="fake-slots"><i>09:00</i><i>09:20</i><i>09:40</i><i>10:00</i><i>10:20</i><i>10:40</i></div>
          </div>
          <small>La disponibilidad real se consulta en Golfmanager.</small>
        </div>
      </section>
    </main>
  );
}