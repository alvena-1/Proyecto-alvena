import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const tournaments = [
  ["17", "OCT", "Torneo Restaurante Ramón", "Stableford · Salidas a tiro"],
  ["02", "NOV", "Open Torre Pacheco", "Pitch & Putt · 18 hoyos"],
  ["16", "NOV", "Liga Club", "Competición social"],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">Golf · Torre Pacheco · Murcia</span>
          <h1>Golf que se vive.<br /><em>Golf que se comparte.</em></h1>
          <p>
            Un campo cercano, una comunidad abierta y una experiencia de golf
            diferente en el corazón de Torre Pacheco.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/reservar">Reservar Green Fee <span>↗</span></Link>
            <Link className="button button-ghost" href="/campo">Conocer el campo</Link>
          </div>
        </div>
        <div className="hero-note">
          <span>9</span>
          <small>hoyos</small>
        </div>
      </section>

      <section className="booking-strip">
        <div>
          <span className="eyebrow">Tu próxima partida</span>
          <strong>Reserva tu Green Fee online</strong>
        </div>
        <Link className="button button-dark" href="/reservar">Ver disponibilidad →</Link>
      </section>

      <section className="section intro">
        <SectionHeading
          eyebrow="El campo"
          title="Un campo diferente, a pocos minutos de casa."
          text="El Campo de Golf Municipal Alfonso Legaz cuenta con 9 hoyos en 2,5 hectáreas, campo de prácticas, zona de approach y putting green."
        />
        <div className="feature-grid">
          <div className="feature-image image-course">
            <span>Pitch &amp; Putt</span>
          </div>
          <div className="feature-copy">
            <div className="number">01</div>
            <h3>Diseñado para disfrutar</h3>
            <p>
              Tanto si estás empezando como si quieres perfeccionar tu juego,
              encontrarás un recorrido accesible y una comunidad que hace que
              volver sea fácil.
            </p>
            <Link className="text-link" href="/campo">Descubrir el campo →</Link>
          </div>
          <div className="feature-copy dark-card">
            <div className="number">02</div>
            <h3>Golf también de noche</h3>
            <p>
              Torre Pacheco destaca por su recorrido iluminado: una experiencia
              poco habitual en el arco mediterráneo.
            </p>
            <Link className="text-link light-link" href="/campo#noche">Ver la experiencia →</Link>
          </div>
          <div className="feature-image image-night">
            <span>Golf nocturno</span>
          </div>
        </div>
      </section>

      <section className="section sand">
        <SectionHeading
          eyebrow="Mucho más que un campo"
          title="Todo lo que necesitas para jugar, aprender y quedarte un rato más."
          text="Una propuesta pensada para jugadores, familias, principiantes y socios."
        />
        <div className="service-grid">
          <Link href="/escuela" className="service-card">
            <span className="service-icon">↗</span>
            <span className="eyebrow">01 · Escuela</span>
            <h3>Aprende a jugar</h3>
            <p>Clases para adultos, jóvenes y jugadores de todos los niveles.</p>
          </Link>
          <Link href="/torneos" className="service-card">
            <span className="service-icon">↗</span>
            <span className="eyebrow">02 · Competición</span>
            <h3>Juega torneos</h3>
            <p>Calendario, pruebas, resultados y vida competitiva del club.</p>
          </Link>
          <Link href="/restaurante" className="service-card">
            <span className="service-icon">↗</span>
            <span className="eyebrow">03 · Hoyo10</span>
            <h3>Quédate a comer</h3>
            <p>Restaurante, terraza y el plan perfecto después de jugar.</p>
          </Link>
        </div>
      </section>

      <section className="section tournaments">
        <div className="split-heading">
          <SectionHeading
            eyebrow="Agenda"
            title="Próximos torneos"
            text="La competición también es una forma de encontrarnos."
          />
          <Link className="text-link" href="/torneos">Ver todos los torneos →</Link>
        </div>
        <div className="tournament-list">
          {tournaments.map(([day, month, name, meta]) => (
            <article className="tournament-row" key={name}>
              <div className="date-box"><strong>{day}</strong><span>{month}</span></div>
              <div><h3>{name}</h3><p>{meta}</p></div>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Empieza aquí</span>
          <h2>Tu próxima partida está<br />más cerca de lo que crees.</h2>
        </div>
        <Link className="button button-light" href="/reservar">Reservar ahora ↗</Link>
      </section>
    </main>
  );
}