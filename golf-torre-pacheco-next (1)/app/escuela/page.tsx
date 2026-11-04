import SectionHeading from "@/components/SectionHeading";

export default function Escuela() {
  return (
    <main>
      <section className="page-hero image-school">
        <div className="page-hero-inner"><span className="eyebrow">Escuela de golf</span><h1>Aprende.<br /><em>Mejora. Disfruta.</em></h1></div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Para todos los niveles" title="El golf se aprende mejor cuando también te lo pasas bien." text="Programas para niños, jóvenes y adultos, desde iniciación hasta perfeccionamiento." />
        <div className="school-grid">
          <article><span className="eyebrow">01 · Juvenil</span><h3>De 5 a 17 años</h3><p>Niveles de iniciación, perfeccionamiento y alto rendimiento, adaptados a cada alumno.</p><a className="text-link" href="mailto:cadygolftp@gmail.com">Solicitar información →</a></article>
          <article><span className="eyebrow">02 · Adultos</span><h3>Empieza o perfecciona</h3><p>Clases privadas, cursos de iniciación, grupos y bonos por horas.</p><a className="text-link" href="mailto:cadygolftp@gmail.com">Solicitar información →</a></article>
          <article><span className="eyebrow">03 · Golf adaptado</span><h3>Golf para todos</h3><p>Una escuela abierta que busca acercar el deporte a más personas.</p><a className="text-link" href="mailto:cadygolftp@gmail.com">Contactar →</a></article>
        </div>
      </section>
    </main>
  );
}