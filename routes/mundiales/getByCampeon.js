import * as mundial from "../../data/mundiales.js";

const notFound = (res, msg) => res.status(404).json({ error: msg });

export const getByCampeon = (req, res) => {
  const data = mundial.getByCampeon(req.params.pais);
  if (!data.length) return notFound(res, `No se encontraron mundiales ganados por ${req.params.pais}`);
  res.json(data);
};