import * as mundial from "../../data/mundiales.js";

export const getAll = (req, res) => {
  const isFull = req.query.include === "full";
  const data = mundial.getAll(isFull);
  res.json(data);
};