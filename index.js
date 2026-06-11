import express from "express";
import { cwd } from "node:process";

import { getAll }       from "./routes/mundiales/getAll.js";
import { getBySlug }    from "./routes/mundiales/getBySlug.js";
import { getByCampeon } from "./routes/mundiales/getByCampeon.js";
import { getRandom }    from "./routes/mundiales/getRandom.js";
import { search }       from "./routes/mundiales/search.js";

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.use("/imagenes", express.static(`${cwd()}/public/images`));

app.get("/", (req, res) => {
  res.json({
    nombre: "API Copa Mundial FIFA",
    version: "1.0.0",
    autor: "Christopher - C12585",
    rutas: [
      "GET /mundiales",
      "GET /mundiales?include=full",
      "GET /mundial/:slug",
      "GET /campeon/:pais",
      "GET /random",
      "GET /search/:text",
      "GET /imagenes/:archivo"
    ]
  });
});

app.get("/mundiales",      getAll);
app.get("/mundial/:slug",  getBySlug);
app.get("/campeon/:pais",  getByCampeon);
app.get("/random",         getRandom);
app.get("/search/:text",   search);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});