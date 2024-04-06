import express from "express";
import { addUser, deleteUser, getProduto, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

router.get("/produto", getProduto)


export default router