import Database from "better-sqlite3";
import { cwd } from "node:process";

const db = new Database(`${cwd()}/data/mundiales.db`);

db.exec(`
  CREATE TABLE IF NOT EXISTS mundiales (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT NOT NULL,
    anio        INTEGER NOT NULL,
    sede        TEXT NOT NULL,
    campeon     TEXT NOT NULL,
    subcampeon  TEXT NOT NULL,
    goleador    TEXT NOT NULL,
    equipos     INTEGER NOT NULL,
    imagen      TEXT NOT NULL,
    slug        TEXT NOT NULL UNIQUE,
    resumen     TEXT NOT NULL,
    descripcion TEXT NOT NULL
  )
`);

export const getAll = (full = false) => {
  if (full) {
    return db.prepare("SELECT * FROM mundiales ORDER BY anio ASC").all();
  }
  return db.prepare("SELECT slug, nombre, anio, sede, campeon FROM mundiales ORDER BY anio ASC").all();
};

export const getBySlug = (slug) => {
  return db.prepare("SELECT * FROM mundiales WHERE slug = ?").get(slug);
};

export const getByCampeon = (pais) => {
  return db.prepare("SELECT slug, nombre, anio FROM mundiales WHERE campeon = ? ORDER BY anio ASC").all(pais);
};

export const getRandom = () => {
  return db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1").get();
};

export const search = (text) => {
  const term = `%${text}%`;
  return db.prepare(`
    SELECT * FROM mundiales
    WHERE nombre      LIKE ?
       OR sede        LIKE ?
       OR campeon     LIKE ?
       OR subcampeon  LIKE ?
       OR goleador    LIKE ?
       OR resumen     LIKE ?
       OR descripcion LIKE ?
    ORDER BY anio ASC
  `).all(term, term, term, term, term, term, term);
};