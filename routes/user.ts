import { Router } from "express";
import {
  getUser,
  getUsers,
  postUser,
  putUser,
  deletetUser,
} from "../controller/user";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.get("/:id", deletetUser);

export default router;
