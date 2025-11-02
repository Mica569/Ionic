# Noticias – Ionic/Angular

Aplicación móvil/web hecha con Ionic + Angular usando componentes standalone. Presenta tres pestañas principales (Home, Clima, Deportes) y una pestaña opcional de Cuenta con registro/ingreso local.

## Características
- Home (Noticias)
  - Lista de noticias con navegación a detalle.
- Clima
  - Mapa de Paraguay con capas y marcadores (Leaflet cargado dinámicamente).
  - Lista de ciudades/temperaturas a modo de ejemplo.
- Deportes
  - Grid de tarjetas con imágenes de portada.
  - Detalle con imagen de cabecera.
  - Contenido de noticias.
- Cuenta (opcional)
  - Registro/inicio de sesión local.
  - No protege el contenido; el uso de la app es posible sin registrarse.

## Tecnologías
- Ionic Angular (standalone components)
- Angular Router con carga perezosa
- Leaflet (carga dinámica en Clima)

## Requisitos
- Node.js 18+
- Ionic CLI (recomendado): `npm i -g @ionic/cli`

## Rutas principales
- `/tabs/home` — Inicio (noticias)
- `/tabs/home/noticia/:id` — Detalle de noticia
- `/tabs/clima` — Clima + mapa
- `/tabs/deportes` — Tarjetas de deportes
- `/tabs/deportes/articulo/:id` — Detalle deportivo
- `/tabs/cuenta` — Pestaña de cuenta (opcional)
- `/tabs/cuenta/login` — Iniciar sesión
- `/tabs/cuenta/registrar` — Crear cuenta

## Estructura relevante
- Pestañas: `src/app/tabs/`
- Home: `src/app/tab1/`
- Clima: `src/app/tab2/` (incluye mapa Leaflet)
- Deportes (lista): `src/app/tab3/tab3.page.ts`
- Deportes (detalle): `src/app/tab3/articulo-detalle.page.ts`
- Estilos deportes (tarjetas): `src/app/tab3/tab3.page.scss`
- Estilos detalle deportivo: `src/app/tab3/articulo-detalle.page.scss`
- Cuenta (auth local): `src/app/auth/`
- Rutas raíz: `src/app/app.routes.ts`, `src/app/tabs/tabs.routes.ts`


