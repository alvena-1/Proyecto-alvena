import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function Campo() {
  return (
    <main>
      <section className="page-hero image-course">
        <div className="page-hero-inner">
          <span className="eyebrow">El campo</span>
          <h1>9 hoyos.<br /><em>Muchas formas de jugar.</em></h1>
        </div>
      </section>
      <section className="section">
        <div className="stats">
          <div><strong>9</strong><span>Hoyos</span></div>
          <div><strong>54</strong><span>Par</span></div>
          <div><strong>2,5</strong><span>Hectáreas</span></div>
          <div><strong>1</strong><span>Experiencia nocturna</span></div>
        </div>
        <div className="two-col">
          <SectionHeading eyebrow="Alfonso Legaz" title="Un recorrido municipal pensado para acercar el golf a todos." />
          <div>
            <p className="lead">El Campo de Golf Municipal Alfonso Legaz cuenta con 9 hoyos, campo de prácticas, zona de approach y putting green.</p>
            <p>Además, el club dispone de tienda y alquiler de material, escuela de adultos y escuela juvenil. Es un espacio para aprender, entrenar, competir y compartir.</p>
            <Link className="button button-dark" href="/reservar">Reservar Green Fee</Link>
          </div>
        </div>
      </section>
      <section className="night-section" id="noche">
        <div>
          <span className="eyebrow">Una experiencia distinta</span>
          <h2>Golf bajo las luces.</h2>
          <p>El club destaca por permitir jugar de noche en su recorrido iluminado, una de las características más singulares de su propuesta.</p>
        </div>
      </section>
    </main>
  );
}