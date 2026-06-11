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

### GET /
![GET /](capturas/get-root.png)

### GET /mundiales
![GET /mundiales 1](capturas/get-mundiales1.png)
![GET /mundiales 2](capturas/get-mundiales2.png)

### GET /mundiales?include=full
![GET /mundiales full 1](capturas/get-mundiales-full-1.png)
![GET /mundiales full 2](capturas/get-mundiales-full-2.png)
![GET /mundiales full 3](capturas/get-mundiales-full-3.png)

### GET /mundial/:slug
![GET /mundial/qatar-2022](capturas/get-mundial-slug.png)

### GET /mundial/:slug — 404
![GET /mundial/inexistente](capturas/get-mundial-404.png)

### GET /campeon/:pais
![GET /campeon/Argentina](capturas/get-campeon.png)

### GET /random
![GET /random](capturas/get-random.png)

### GET /search/:text
![GET /search/final 1](capturas/get-search-1.png)
![GET /search/final 2](capturas/get-search-2.png)

### GET /search/:text — 400
![GET /search/ab](capturas/get-search-400.png)

### GET /imagenes/:archivo
![Imagen qatar-2022](capturas/get-imagen.png)