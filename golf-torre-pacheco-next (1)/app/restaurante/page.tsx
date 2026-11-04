import SectionHeading from "@/components/SectionHeading";

export default function Restaurante() {
  return (
    <main>
      <section className="page-hero image-food">
        <div className="page-hero-inner"><span className="eyebrow">Hoyo10</span><h1>El hoyo que<br /><em>siempre apetece.</em></h1></div>
      </section>
      <section className="section">
        <div className="two-col">
          <SectionHeading eyebrow="Restaurante Hoyo10" title="Un buen final para una buena partida." />
          <div>
            <p className="lead">Un espacio para comer, tomar algo y alargar el día en el club.</p>
            <p>Horario: de 8:00 a 22:00, de lunes a domingo. Consulta la carta y contacta directamente para reservas.</p>
            <div className="button-row"><a className="button button-dark" href="mailto:cadygolftp@gmail.com">Contactar</a><a className="button button-outline" href="/contacto">Cómo llegar</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}