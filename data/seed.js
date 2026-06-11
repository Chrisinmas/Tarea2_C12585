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

const mundiales = [
  {
    nombre: "Copa Mundial Uruguay 1930",
    anio: 1930,
    sede: "Uruguay",
    campeon: "Uruguay",
    subcampeon: "Argentina",
    goleador: "Guillermo Stabile",
    equipos: 13,
    imagen: "uruguay-1930.jpg",
    slug: "uruguay-1930",
    resumen: "El primer Mundial de la historia, organizado en Uruguay.",
    descripcion: "Uruguay gano el primer campeonato del mundo en el Estadio Centenario ante Argentina."
  },
  {
    nombre: "Copa Mundial Suecia 1958",
    anio: 1958,
    sede: "Suecia",
    campeon: "Brasil",
    subcampeon: "Suecia",
    goleador: "Just Fontaine",
    equipos: 16,
    imagen: "brasil-1958.jpg",
    slug: "brasil-1958",
    resumen: "Brasil conquista su primer titulo mundial con un joven Pele.",
    descripcion: "Pele, con 17 anos, deslumbro al mundo y ayudo a Brasil a ganar su primera Copa del Mundo en Suecia."
  },
  {
    nombre: "Copa Mundial Mexico 1986",
    anio: 1986,
    sede: "Mexico",
    campeon: "Argentina",
    subcampeon: "Alemania Occidental",
    goleador: "Gary Lineker",
    equipos: 24,
    imagen: "mexico-1986.jpg",
    slug: "mexico-1986",
    resumen: "El Mundial de Maradona y la mano de Dios.",
    descripcion: "Diego Maradona lidero a Argentina a la gloria con actuaciones legendarias, incluyendo el gol del siglo contra Inglaterra."
  },
  {
    nombre: "Copa Mundial Francia 1998",
    anio: 1998,
    sede: "Francia",
    campeon: "Francia",
    subcampeon: "Brasil",
    goleador: "Davor Suker",
    equipos: 32,
    imagen: "francia-1998.jpg",
    slug: "francia-1998",
    resumen: "Francia gana su primer Mundial como local.",
    descripcion: "Zinedine Zidane marco dos goles de cabeza en la final y Francia derroto a Brasil 3-0 en el Stade de France."
  },
  {
    nombre: "Copa Mundial Sudafrica 2010",
    anio: 2010,
    sede: "Sudafrica",
    campeon: "España",
    subcampeon: "Holanda",
    goleador: "Thomas Muller",
    equipos: 32,
    imagen: "sudafrica-2010.jpg",
    slug: "sudafrica-2010",
    resumen: "España gana su primer Mundial en el primer torneo africano.",
    descripcion: "El primer Mundial celebrado en Africa. España triunfo con su tiki-taka y Andres Iniesta marco el gol de la final en la prorroga."
  },
  {
    nombre: "Copa Mundial Brasil 2014",
    anio: 2014,
    sede: "Brasil",
    campeon: "Alemania",
    subcampeon: "Argentina",
    goleador: "James Rodriguez",
    equipos: 32,
    imagen: "brasil-2014.jpg",
    slug: "brasil-2014",
    resumen: "Alemania aplasta a Brasil 7-1 en semifinales y se corona campeon.",
    descripcion: "El Mineirazo quedo en la historia. Mario Gotze marco en prorroga la final ante Argentina."
  },
  {
    nombre: "Copa Mundial Qatar 2022",
    anio: 2022,
    sede: "Qatar",
    campeon: "Argentina",
    subcampeon: "Francia",
    goleador: "Kylian Mbappe",
    equipos: 32,
    imagen: "qatar-2022.jpg",
    slug: "qatar-2022",
    resumen: "Argentina campeon tras una final epica ante Francia.",
    descripcion: "Primer Mundial en Medio Oriente. Argentina gano en penales su tercer titulo tras una final inolvidable ante Francia."
  }
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO mundiales
    (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES
    (@nombre, @anio, @sede, @campeon, @subcampeon, @goleador, @equipos, @imagen, @slug, @resumen, @descripcion)
`);

const insertMany = db.transaction((items) => {
  for (const item of items) insert.run(item);
});

insertMany(mundiales);
console.log("BD poblada con", mundiales.length, "mundiales.");