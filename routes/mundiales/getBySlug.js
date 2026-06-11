import * as mundial from "../../data/mundiales.js";

const notFound = (res, msg) => res.status(404).json({ error: msg });

export const getBySlug = (req, res) => {
  const data = mundial.getBySlug(req.params.slug);
  if (!data) return notFound(res, "Mundial no encontrado");
  res.json(data);
};