import express from "express";

import { getUser, createUser, getUsers, updateUsers, deleteUsers } from "../controller/user.js";

const router = express.Router();

router.get("/users", getUser);//for getting all users

router.post("/user", createUser);//for cerating new user

router.get("/users/:id", getUsers);//for getting users based on id

router.delete("/users/:id", deleteUsers);//for deleting users based on id

router.put("/users/:id", updateUsers);//for updating users 

export default router;