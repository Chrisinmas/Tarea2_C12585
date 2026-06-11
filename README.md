# API Copa Mundial FIFA 🏆

API REST construida con Node.js, Express, SQLite (better-sqlite3) y Zod.

## Requisitos
- Node.js 18+

## Instalación y ejecución

```bash
npm install
npm run seed
npm run dev
```

## Rutas disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | / | Información del API |
| GET | /mundiales | Lista resumida |
| GET | /mundiales?include=full | Lista completa |
| GET | /mundial/:slug | Detalle de una edición |
| GET | /campeon/:pais | Mundiales ganados por un país |
| GET | /random | Edición aleatoria |
| GET | /search/:text | Búsqueda por texto (mín. 3 caracteres) |
| GET | /imagenes/:archivo | Imagen de una edición |

## Pruebas con xh

![GET /](capturas/get-root.png)
![GET /mundiales](capturas/get-mundiales.png)
![GET /mundial/qatar-2022](capturas/get-mundial-slug.png)
![GET /mundial/inexistente](capturas/get-mundial-404.png)
![GET /campeon/Argentina](capturas/get-campeon.png)
![GET /random](capturas/get-random.png)
![GET /search/final](capturas/get-search.png)
![GET /search/ab](capturas/get-search-400.png)