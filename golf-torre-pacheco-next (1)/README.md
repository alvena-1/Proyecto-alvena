# Golf Torre Pacheco — Next.js

Primera propuesta de rediseño moderno para el Club de Golf Torre Pacheco.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Integración de reservas

La ruta `/reservar` apunta actualmente al portal existente de Golfmanager.

Antes de producción hay que confirmar con el club:
- módulo/licencia de reservas de Golfmanager
- opciones de widget/iframe o API disponibles
- activación de pagos online
- pasarela de pago (por ejemplo Redsys/Stripe si están disponibles para su cuenta)
- dominio y hosting definitivos

## CMS

La estructura está preparada para sustituir los datos estáticos por un CMS headless (por ejemplo WordPress, Strapi, Sanity o similar) sin cambiar la capa visual.

## Imágenes

La demo usa imágenes remotas de Unsplash únicamente como placeholders de diseño. Para la web definitiva conviene usar fotografías propias/licenciadas del club.
