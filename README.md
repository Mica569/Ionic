# miAppTabs – Ionic Angular (Tabs + Noticias, Clima, Deportes, Cuenta)

Aplicación móvil/web hecha con Ionic + Angular usando componentes standalone. Presenta tres pestañas principales (Home, Clima, Deportes) y una pestaña opcional de Cuenta con registro/ingreso local.

## Características
- Home (Noticias)
  - Lista simple de noticias con navegación a detalle.
- Clima
  - Mapa de Paraguay con capas y marcadores (Leaflet cargado dinámicamente).
  - Lista de ciudades/temperaturas a modo de ejemplo.
- Deportes
  - Grid de tarjetas con imágenes de portada; alturas unificadas por fila.
  - Detalle con imagen de cabecera reducida y texto más legible (título y cuerpo con mejor tipografía/espaciado).
  - Contenido de noticias y nuevas entradas de ejemplo con imágenes en `src/assets/news/`.
- Cuenta (opcional)
  - Registro/inicio de sesión local (sin backend) usando `localStorage` y hash SHA‑256.
  - No protege el contenido; el uso de la app es posible sin registrarse.

## Tecnologías
- Ionic Angular (standalone components)
- Angular Router con carga perezosa
- Leaflet (carga dinámica en Clima)

## Requisitos
- Node.js 18+
- Ionic CLI (recomendado): `npm i -g @ionic/cli`

## Ejecución
```
npm install
ionic serve
```
La app se sirve en desarrollo; las rutas se resuelven por el router de Angular.

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

## Añadir/editar noticias deportivas
- Lista de tarjetas: editar el arreglo `articulos` en `src/app/tab3/tab3.page.ts`.
- Contenido del detalle: editar `src/app/tab3/articulo-detalle.page.ts`.
- Imágenes: colocar en `src/assets/news/` y referenciar (ej.: `assets/news/superclasico.jpg`).

## Notas sobre autenticación
- Implementación de ejemplo 100% local (sin backend): no usar en producción.
- El servicio se encuentra en `src/app/auth/auth.service.ts`.
- Para proteger rutas reales, agregar guards o integrar un backend/tokens.

## Convenciones de commit
Se usa estilo tipo Conventional Commits (feat, fix, docs, style, refactor, test, chore, perf).

## Licencia
Ver `LICENSE` en la raíz del repositorio.

