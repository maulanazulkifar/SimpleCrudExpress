import express from "express";
import {getUser, getUserById, createUser, updateUser, deleteUser} from "../controller/UserController.js";

const router = express.Router();

router.get('/api/users', getUser);
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);
router.patch('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

export default router;