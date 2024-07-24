// import express from "express";
// import { Login, Register } from "../controllers/user.js";

// const router = express.Router();

// router.route("/register").post(Register);
// router.route("/login").post(Login);

// //route.route("/login").post(login);
// export default router;

import express from "express";
import { Login,Register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);

export default router;
