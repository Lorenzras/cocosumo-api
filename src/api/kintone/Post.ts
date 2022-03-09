import { RequestHandler } from "express";

export const saveQuestionnaire : RequestHandler = (req, res) => {

  res.status(200).send({name: "lorenz ras"})
};
