import * as mundial from "../../data/mundiales.js";

export const getRandom = (req, res) => {
  const data = mundial.getRandom();
  res.json(data);
};