import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const prices = [
  ["Socio", "7 €"], ["No socio", "22 €"], ["Residente Torre Pacheco", "18 €"], ["Correspondencia", "18 €"], ["Junior", "12 €"], ["Junior socio", "0 €"],
];

export default function Tarifas() {
  return (
    <main>
      <section className="page-hero image-course">
        <div className="page-hero-inner"><span className="eyebrow">Tarifas</span><h1>Juega más.<br /><em>Paga lo justo.</em></h1></div>
      </section>
      <section className="section">
        <div className="two-col">
          <SectionHeading eyebrow="Green Fee · 18 hoyos" title="Una tarifa sencilla y accesible." text="Precios publicados por el club. Conviene confirmar horarios y posibles cambios antes de desplazarte." />
          <div className="price-table">
            {prices.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}
          </div>
        </div>
        <div className="pricing-extra">
          <div><span className="eyebrow">Bonos</span><strong>10 rondas desde 60 €</strong></div>
          <div><span className="eyebrow">Alquiler</span><strong>Bolsa con palos · 10 €</strong></div>
          <div><span className="eyebrow">Prácticas</span><strong>No socios · 6 €</strong></div>
        </div>
        <div className="center-cta"><Link className="button button-dark" href="/reservar">Reservar Green Fee →</Link></div>
      </section>
    </main>
  );
}