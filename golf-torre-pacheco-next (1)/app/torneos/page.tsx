import SectionHeading from "@/components/SectionHeading";

const events = [
  {date:"17 OCT", title:"Torneo Restaurante Ramón", type:"Stableford · 18 hoyos"},
  {date:"02 NOV", title:"Open Torre Pacheco", type:"Pitch & Putt"},
  {date:"16 NOV", title:"Liga Club", type:"Competición social"},
  {date:"30 NOV", title:"Torneo de Navidad", type:"Club · Inscripción previa"},
];

export default function Torneos() {
  return (
    <main>
      <section className="page-hero image-tournament">
        <div className="page-hero-inner"><span className="eyebrow">Competición</span><h1>El calendario<br /><em>se juega aquí.</em></h1></div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Agenda" title="Próximos torneos" text="Consulta las próximas pruebas y encuentra tu siguiente reto." />
        <div className="event-list">
          {events.map((e) => <article className="event-card" key={e.title}><span className="event-date">{e.date}</span><div><h3>{e.title}</h3><p>{e.type}</p></div><span>↗</span></article>)}
        </div>
      </section>
    </main>
  );
}