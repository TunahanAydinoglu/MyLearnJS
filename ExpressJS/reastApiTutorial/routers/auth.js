const express = require("express");
const { register, getUser,login } = require("../controllers/auth");
const { getAccessToRoutes } = require("../middlewares/authorization/auth");

// api/auth
const router = express.Router();

router.post("/register", register);
router.get("/profile", getAccessToRoutes, getUser);
router.post("/login",login);

module.exports = router;
