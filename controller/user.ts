import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: "getUsuarios",
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getUsuario",
    id,
  });
};

export const postUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postUsuario",
    body,
  });
};

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "putUsuario",
    body,
    id,
  });
};

export const deletetUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsuario",
    id,
  });
};
