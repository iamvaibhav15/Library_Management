import express from "express";
const router = express.Router();
import registerUser from "../controller/user.controller.js";

router.route('/register').post(registerUser);

export default router;