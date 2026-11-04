import SectionHeading from "@/components/SectionHeading";

export default function Club() {
  return (
    <main>
      <section className="page-hero image-club">
        <div className="page-hero-inner"><span className="eyebrow">El club</span><h1>Una historia que<br /><em>sigue creciendo.</em></h1></div>
      </section>
      <section className="section">
        <div className="two-col">
          <SectionHeading eyebrow="Desde 1987" title="Golf como deporte, comunidad y punto de encuentro." />
          <div>
            <p className="lead">El Club de Golf de Torre Pacheco nació el 12 de noviembre de 1987 con el objetivo de promocionar el golf y hacerlo accesible a la comunidad.</p>
            <p>Desde entonces, el club ha desarrollado una importante cantera de jugadores y una actividad deportiva que combina formación, competición y vida social.</p>
          </div>
        </div>
      </section>
      <section className="section sand">
        <SectionHeading eyebrow="Nuestra propuesta" title="Ven a jugar. Quédate por la comunidad." />
        <div className="values-grid">
          <div><span>01</span><h3>Accesible</h3><p>Un campo cercano para iniciarte o seguir mejorando.</p></div>
          <div><span>02</span><h3>Familiar</h3><p>Escuela y actividades para diferentes edades y niveles.</p></div>
          <div><span>03</span><h3>Competitivo</h3><p>Torneos y pruebas durante toda la temporada.</p></div>
        </div>
      </section>
    </main>
  );
}